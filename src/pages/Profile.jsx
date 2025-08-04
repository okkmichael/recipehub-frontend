import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthContext";

const Profile = () => {
  const { user: authUser } = useAuth();
  const [user, setUser] = useState(null);
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        if (authUser && authUser._id) {
          const recipesRes = await axios.get(
            `/api/recipes/user/${authUser._id}`
          );
          setRecipes(Array.isArray(recipesRes.data) ? recipesRes.data : []);
        } else {
          setRecipes([]);
        }
      } catch (err) {
        console.error("Failed to fetch user profile:", err);
        setRecipes([]);
      }
    };

    if (authUser && authUser._id) {
      fetchUserProfile();
    }
  }, [authUser]);

  if (!user) return <div>Loading profile...</div>;

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 flex flex-col items-center">
      <div className="bg-white rounded-xl shadow p-8 w-full max-w-lg mb-8">
        <h2 className="text-2xl font-bold text-green-700 mb-2">
          {user.username}'s Profile
        </h2>
        <p className="mb-2">Email: {user.email}</p>
      </div>
      <div className="bg-white rounded-xl shadow p-8 w-full max-w-lg">
        <h3 className="text-xl font-semibold mb-4">
          Recipes by {user.username}
        </h3>
        <ul>
          {(Array.isArray(recipes) ? recipes : []).map((recipe) => (
            <li key={recipe._id}>{recipe.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Profile;
