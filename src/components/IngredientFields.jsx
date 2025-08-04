import { useState } from "react";

function IngredientFields({ ingredients, setIngredients }) {
  const handleChange = (index, field, value) => {
    const updated = [...ingredients];
    updated[index][field] = value;
    setIngredients(updated);
  };

  const handleAdd = () => {
    setIngredients([...ingredients, { name: "", quantity: "" }]);
  };

  const handleRemove = (index) => {
    const updated = [...ingredients];
    updated.splice(index, 1);
    setIngredients(updated);
  };

  return (
    <div>
      <h3 className="text-lg font-medium mt-4 mb-2">Ingredients</h3>
      {ingredients.map((ingredient, index) => (
        <div key={index} className="flex gap-2 mb-2">
          <input
            type="text"
            placeholder="Name"
            value={ingredient.name}
            onChange={(e) => handleChange(index, "name", e.target.value)}
            className="border p-2 w-1/2"
          />
          <input
            type="text"
            placeholder="Quantity"
            value={ingredient.quantity}
            onChange={(e) => handleChange(index, "quantity", e.target.value)}
            className="border p-2 w-1/3"
          />
          <button
            type="button"
            onClick={() => handleRemove(index)}
            className="text-red-500"
          >
            ✕
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={handleAdd}
        className="text-blue-500 underline mt-2"
      >
        + Add Ingredient
      </button>
    </div>
  );
}

export default IngredientFields;
