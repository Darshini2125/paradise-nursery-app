import React from "react";

const CartItem = ({ cartItems = [], updateQuantity, removeItem }) => {
  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div style={{ padding: "30px", maxWidth: "1000px", margin: "0 auto" }}>
      <h1 style={{ textAlign: "center", color: "#2e7d32" }}>
        🛒 Shopping Cart
      </h1>

      <h3>Total Items: {totalItems}</h3>
      <h3>Total Cost: ₹{totalAmount}</h3>

      {cartItems.length === 0 ? (
        <h2>Your cart is empty.</h2>
      ) : (
        cartItems.map((item) => (
          <div
            key={item.id}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "15px",
              marginBottom: "20px",
              background: "#fff",
            }}
          >
            <img
              src={item.image}
              alt={item.name}
              style={{
                width: "120px",
                height: "120px",
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />

            <div style={{ flex: 1 }}>
              <h2>{item.name}</h2>
              <p>Price: ₹{item.price}</p>
              <p>Quantity: {item.quantity}</p>

              <button
                onClick={() =>
                  updateQuantity(item.id, item.quantity - 1)
                }
                style={{
                  marginRight: "10px",
                  padding: "8px 15px",
                  cursor: "pointer",
                }}
              >
                -
              </button>

              <button
                onClick={() =>
                  updateQuantity(item.id, item.quantity + 1)
                }
                style={{
                  marginRight: "10px",
                  padding: "8px 15px",
                  cursor: "pointer",
                }}
              >
                +
              </button>

              <button
                onClick={() => removeItem(item.id)}
                style={{
                  background: "red",
                  color: "#fff",
                  border: "none",
                  padding: "8px 15px",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Remove
              </button>
            </div>
          </div>
        ))
      )}

      <div style={{ marginTop: "30px", textAlign: "center" }}>
        <button
          style={{
            padding: "12px 25px",
            marginRight: "15px",
            background: "#2e7d32",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Continue Shopping
        </button>

        <button
          style={{
            padding: "12px 25px",
            background: "#1976d2",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartItem;
