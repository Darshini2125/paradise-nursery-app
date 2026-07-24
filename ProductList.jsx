import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "./redux/CartSlice";
import { Link } from "react-router-dom";

const plants = [
  // Indoor Plants
  {
    id: 1,
    name: "Snake Plant",
    price: 250,
    category: "Indoor Plants",
    image: "https://images.unsplash.com/photo-1545241047-6083a368458?w=500",
  },
  {
    id: 2,
    name: "Peace Lily",
    price: 300,
    category: "Indoor Plants",
    image: "https://images.unsplash.com/photo-1463320726281-696a485928c7?w=500",
  },

  // Succulents
  {
    id: 3,
    name: "Aloe Vera",
    price: 180,
    category: "Succulents",
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=500",
  },
  {
    id: 4,
    name: "Jade Plant",
    price: 220,
    category: "Succulents",
    image: "https://images.unsplash.com/photo-1483794344563-d27a8d18014e?w=500",
  },

  // Flowering Plants
  {
    id: 5,
    name: "Rose",
    price: 350,
    category: "Flowering Plants",
    image: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=500",
  },
  {
    id: 6,
    name: "Hibiscus",
    price: 280,
    category: "Flowering Plants",
    image: "https://images.unsplash.com/photo-1461354464878-ad92f492a5a0?w=500",
  },
];

function ProductList() {
  const dispatch = useDispatch();
  const [addedItems, setAddedItems] = useState([]);

  const handleAdd = (plant) => {
    dispatch(addItem(plant));
    setAddedItems([...addedItems, plant.id]);
  };

  const categories = [...new Set(plants.map((p) => p.category))];

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center" }}>Paradise Nursery</h1>

      <div style={{ textAlign: "right", marginBottom: "20px" }}>
        <Link to="/cart">
          <button>🛒 View Cart</button>
        </Link>
      </div>

      {categories.map((category) => (
        <div key={category}>
          <h2>{category}</h2>

          <div
            style={{
              display: "flex",
              gap: "20px",
              flexWrap: "wrap",
            }}
          >
            {plants
              .filter((plant) => plant.category === category)
              .map((plant) => (
                <div
                  key={plant.id}
                  style={{
                    width: "220px",
                    border: "1px solid #ccc",
                    borderRadius: "10px",
                    padding: "15px",
                    textAlign: "center",
                  }}
                >
                  <img
                    src={plant.image}
                    alt={plant.name}
                    style={{
                      width: "180px",
                      height: "180px",
                      objectFit: "cover",
                      borderRadius: "8px",
                    }}
                  />

                  <h3>{plant.name}</h3>

                  <p>₹{plant.price}</p>

                  <button
                    onClick={() => handleAdd(plant)}
                    disabled={addedItems.includes(plant.id)}
                  >
                    {addedItems.includes(plant.id)
                      ? "Added to Cart"
                      : "Add to Cart"}
                  </button>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
