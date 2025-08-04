import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const EditRecipe = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [form, setForm] = useState({ title: "", instructions: "", category: "" });
  const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:5000/api";
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRecipe = async () => {
      const token = localStorage.getItem("token");
      const res = await axios.get(`${apiUrl}/recipes/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setRecipe(res.data);
      setForm({
        title: res.data.title,
        instructions: res.data.instructions,
        category: res.data.category,
      });
    };
    fetchRecipe();
  }, [id, apiUrl]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    await axios.put(`${apiUrl}/recipes/${id}`, form, {
      headers: { Authorization: `Bearer ${token}` },
    });
    navigate("/profile");
  };

  if (!recipe) return <div>Loading...</div>;

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Recipe</h2>
      <input
        name="title"
        value={form.title}
        onChange={handleChange}
        placeholder="Title"
        required
      />
      <textarea
        name="instructions"
        value={form.instructions}
        onChange={handleChange}
        placeholder="Instructions"
        required
      />
      <input
        name="category"
        value={form.category}
        onChange={handleChange}
        placeholder="Category"
        required
      />
      <button type="submit">Save Changes</button>
    </form>
  );
};

export default EditRecipe;
