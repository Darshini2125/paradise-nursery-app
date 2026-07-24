import React from "react";

const plants = [
  {
    id: 1,
    name: "Snake Plant",
    category: "Indoor Plants",
    price: 399,
    image:
      "https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 2,
    name: "Peace Lily",
    category: "Indoor Plants",
    price: 499,
    image:
      "https://images.unsplash.com/photo-1463320726281-696a485928c7?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 3,
    name: "Aloe Vera",
    category: "Medicinal Plants",
    price: 299,
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 4,
    name: "Tulsi",
    category: "Medicinal Plants",
    price: 199,
    image:
      "https://images.unsplash.com/photo-1512428813834-c702c7702b78?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 5,
    name: "Rose",
    category: "Flowering Plants",
    price: 349,
    image:
      "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 6,
    name: "Jasmine",
    category: "Flowering Plants",
    price: 279,
    image:
      "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=500&q=80",
  },
];

const ProductList = () => {
  const addToCart = (plant) => {
    alert(`${plant.name} added to cart!`);
  };

  const categories = [...new Set(plants.map((plant) => plant.category))];

  return (
    <div style={{ padding: "30px", background: "#f4fff4" }}>
      <h1 style={{ textAlign: "center", color: "#2e7d32" }}>
        🌿 Paradise Nursery
      </h1>

      {categories.map((category) => (
        <div key={category} style={{ marginBottom: "40px" }}>
          <h2 style={{ color: "#388e3c" }}>{category}</h2>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "20px",
            }}
          >
            {plants
              .filter((plant) => plant.category === category)
              .map((plant) => (
                <div
                  key={plant.id}
                  style={{
                    width: "250px",
                    border: "1px solid #ddd",
                    borderRadius: "10px",
                    padding: "15px",
                    background: "#fff",
                    textAlign: "center",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                  }}
                >
                  <img
                    src={plant.image}
                    alt={plant.name}
                    style={{
                      width: "100%",
                      height: "180px",
                      objectFit: "cover",
                      borderRadius: "8px",
                    }}
                  />

                  <h3>{plant.name}</h3>

                  <p>
                    <strong>Price:</strong> ₹{plant.price}
                  </p>

                  <button
                    onClick={() => addToCart(plant)}
                    style={{
                      background: "#2e7d32",
                      color: "#fff",
                      border: "none",
                      padding: "10px 20px",
                      borderRadius: "5px",
                      cursor: "pointer",
                    }}
                  >
                    Add to Cart
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
