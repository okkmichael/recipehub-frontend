import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import CreateRecipe from "./pages/CreateRecipe";
import EditRecipe from "./pages/EditRecipe";
import YourRecipes from "./pages/YourRecipes";
import SavedRecipes from "./pages/SavedRecipes";
import PopularMeals from "./pages/PopularMeals";
import RandomMeal from "./pages/RandomMeal";
import MealDetail from "./pages/MealDetail";
import RecipeDetail from "./pages/RecipeDetail";
import NotFound from "./pages/NotFound";
import { useAuth } from "./context/AuthContext";

function App() {
  const { user } = useAuth();

  return (
    <>
      {user && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/create" element={<CreateRecipe />} />
        <Route path="/edit/:id" element={<EditRecipe />} />
        <Route path="/your-recipes" element={<YourRecipes />} />
        <Route path="/saved-recipes" element={<SavedRecipes />} />
        <Route path="/popular-meals" element={<PopularMeals />} />
        <Route path="/random-meal" element={<RandomMeal />} />
        <Route path="/meals/:id" element={<MealDetail />} />
        <Route path="/recipes/:id" element={<RecipeDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
