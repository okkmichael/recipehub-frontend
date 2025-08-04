// src/pages/Ingredients.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";

const Ingredients = () => {
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    const fetchIngredients = async () => {
      try {
        const res = await axios.get("https://www.themealdb.com/api/json/v1/1/list.php?i=list");
        setIngredients(res.data.meals);
      } catch (error) {
        console.error("Error fetching ingredients:", error);
      }
    };
    fetchIngredients();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Ingredients List</h2>
      <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {Array.isArray(ingredients) ? (
          ingredients.map((ingredient) => (
            <li key={ingredient.idIngredient} className="border p-4 rounded shadow">
              <h3 className="font-semibold">{ingredient.strIngredient}</h3>
              <p className="text-sm text-gray-600">{ingredient.strDescription?.slice(0, 100)}...</p>
            </li>
          ))
        ) : null}
      </ul>
    </div>
  );
};

export default Ingredients;