import axios from "axios";

const BASE_URL = "https://www.themealdb.com/api/json/v1/1";

export const fetchMealsByName = async (name) => {
  try {
    const res = await axios.get(`${BASE_URL}/search.php?s=${name}`);
    return res.data.meals;
  } catch (err) {
    console.error("Error fetching meals by name:", err);
    return [];
  }
};

export const fetchRandomMeal = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/random.php`);
    return res.data.meals[0];
  } catch (err) {
    console.error("Error fetching random meal:", err);
    return null;
  }
};
