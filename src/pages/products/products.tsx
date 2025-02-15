import { useState, useEffect } from "react";

const Place = () => {
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((json) => setCategories(json))
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  return (
    <div>
      <h1>Place</h1>
      <h2>Product Categories</h2>
      <ul>
        {categories.length > 0 ? (
          categories.map((category, index) => (
            <li key={index}>{category}</li>
          ))
        ) : (
          <p>Loading categories...</p>
        )}
      </ul>
    </div>
  );
};

export default Place;
