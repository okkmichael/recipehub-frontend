import React, { useEffect, useState } from "react";
import axios from "axios";

const YourRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [savedIds, setSavedIds] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      const token = localStorage.getItem("token");
      try {
        const res = await axios.get("/api/recipes/mine", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setRecipes(res.data);
      } catch (error) {
        console.error("Error fetching recipes:", error.message);
      }
    };

    const fetchSaved = async () => {
      const token = localStorage.getItem("token");
      try {
        const res = await axios.get("/api/recipes/saved", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setSavedIds(res.data.map((r) => r._id));
      } catch (error) {
        setSavedIds([]);
      }
    };

    fetchRecipes();
    fetchSaved();
  }, []);

  const handleSave = async (recipeId, currentlySaved) => {
    const token = localStorage.getItem("token");
    try {
      if (currentlySaved) {
        await axios.delete(`/api/recipes/unsave/${recipeId}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setSavedIds((prev) => prev.filter((id) => id !== recipeId));
      } else {
        await axios.post(
          `/api/recipes/save/${recipeId}`,
          {},
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setSavedIds((prev) => [...prev, recipeId]);
      }
    } catch (err) {
      alert("Failed to update saved recipes.");
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Your Recipes</h1>
      {recipes.length === 0 ? (
        <p>No recipes found. Add some!</p>
      ) : (
        <ul className="space-y-4">
          {Array.isArray(recipes)
            ? recipes.map((recipe) => {
                const isSaved = savedIds.includes(recipe._id);
                return (
                  <li key={recipe._id} className="p-4 bg-white shadow rounded">
                    <h2 className="text-xl font-semibold">{recipe.title}</h2>
                    <p>{recipe.description}</p>
                    <button
                      onClick={() => handleSave(recipe._id, isSaved)}
                      className={`px-4 py-2 rounded ${
                        isSaved
                          ? "bg-red-500 text-white"
                          : "bg-green-500 text-white"
                      }`}
                    >
                      {isSaved ? "Unsave" : "Save"}
                    </button>
                  </li>
                );
              })
            : null}
        </ul>
      )}
    </div>
  );
};

export default YourRecipes;
