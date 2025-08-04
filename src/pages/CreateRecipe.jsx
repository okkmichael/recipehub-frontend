import React, { useState } from "react";
import axios from "axios";

const CreateRecipe = () => {
  const [formData, setFormData] = useState({ title: "", description: "" });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    try {
      await axios.post("/api/recipes", formData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setFormData({ title: "", description: "" });
      alert("Recipe created!");
    } catch (error) {
      console.error("Create recipe error:", error.message);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Create Recipe</h1>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
        <input
          type="text"
          name="title"
          placeholder="Recipe Title"
          value={formData.title}
          onChange={handleChange}
          className="w-full p-2 border"
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          className="w-full p-2 border"
          required
        />
        <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded">Submit</button>
      </form>
    </div>
  );
};

export default CreateRecipe;
