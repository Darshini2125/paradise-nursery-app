import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/cartSlice";
import { Link } from "react-router-dom";

const plants = [
  {
    id: 1,
    name: "Snake Plant",
    price: 250,
    category: "Indoor Plants",
    image: "https://images.unsplash.com/photo-1545241047-6083a3684587?w=400",
    description: "Air purifying indoor plant."
  },
  {
    id: 2,
    name: "Peace Lily",
    price: 350,
    category: "Indoor Plants",
    image: "https://images.unsplash.com/photo-1463320726281-696a485928c7?w=400",
    description: "Beautiful flowering indoor plant."
  },
  {
    id: 3,
    name: "Aloe Vera",
    price: 180,
    category: "Medicinal Plants",
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=400",
    description: "Medicinal succulent plant."
  },
  {
    id: 4,
    name: "Tulsi",
    price: 120,
    category: "Medicinal Plants",
    image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=400",
    description: "Holy basil with medicinal benefits."
  },
  {
    id: 5,
    name: "Rose",
    price: 220,
    category: "Flowering Plants",
    image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=400",
    description: "Beautiful flowering rose plant."
  },
  {
    id: 6,
    name: "Jasmine",
    price: 200,
    category: "Flowering Plants",
    image: "https://images.unsplash.com/photo-1468327768560-75b778cbb551?w=400",
    description: "Fragrant jasmine plant."
  }
];

const ProductList = () => {
  const dispatch = useDispatch();
  const [addedItems, setAddedItems] = useState({});

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedItems((prev) => ({
      ...prev,
      [plant.id]: true
    }));
  };

  const categories = [...new Set(plants.map((plant) => plant.category))];

  return (
    <div style={{ padding: "20px" }}>
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "30px"
        }}
      >
        <h1>Paradise Nursery</h1>

        <Link
          to="/cart"
          style={{
            textDecoration: "none",
            background: "green",
            color: "white",
            padding: "10px 20px",
            borderRadius: "8px"
          }}
        >
          🛒 Cart
        </Link>
      </header>

      {categories.map((category) => (
        <div key={category}>
          <h2
            style={{
              marginTop: "30px",
              color: "#2e7d32"
            }}
          >
            {category}
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
              gap: "20px"
            }}
          >
            {plants
              .filter((plant) => plant.category === category)
              .map((plant) => (
                <div
                  key={plant.id}
                  style={{
                    border: "1px solid #ddd",
                    borderRadius: "10px",
                    padding: "15px",
                    textAlign: "center",
                    boxShadow: "0 3px 8px rgba(0,0,0,0.1)"
                  }}
                >
                  <img
                    src={plant.image}
                    alt={plant.name}
                    style={{
                      width: "100%",
                      height: "220px",
                      objectFit: "cover",
                      borderRadius: "8px"
                    }}
                  />

                  <h3>{plant.name}</h3>

                  <p>{plant.description}</p>

                  <h4>₹{plant.price}</h4>

                  <button
                    onClick={() => handleAddToCart(plant)}
                    disabled={addedItems[plant.id]}
                    style={{
                      padding: "10px 20px",
                      border: "none",
                      borderRadius: "5px",
                      background: addedItems[plant.id]
                        ? "gray"
                        : "#4CAF50",
                      color: "white",
                      cursor: addedItems[plant.id]
                        ? "not-allowed"
                        : "pointer"
                    }}
                  >
                    {addedItems[plant.id]
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
};

export default ProductList;
