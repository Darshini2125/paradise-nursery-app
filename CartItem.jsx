import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "./redux/CartSlice";
import { Link } from "react-router-dom";

function CartItem() {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const increaseQuantity = (item) => {
    dispatch(
      updateQuantity({
        id: item.id,
        quantity: item.quantity + 1,
      })
    );
  };

  const decreaseQuantity = (item) => {
    if (item.quantity > 1) {
      dispatch(
        updateQuantity({
          id: item.id,
          quantity: item.quantity - 1,
        })
      );
    } else {
      dispatch(removeItem(item.id));
    }
  };

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1>Shopping Cart</h1>

      <h2>Total Cart Amount: ₹{totalAmount}</h2>

      {cartItems.length === 0 ? (
        <h3>Your cart is empty.</h3>
      ) : (
        cartItems.map((item) => (
          <div
            key={item.id}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              marginBottom: "20px",
              border: "1px solid #ddd",
              padding: "15px",
              borderRadius: "10px",
            }}
          >
            <img
              src={item.image}
              alt={item.name}
              width="120"
              height="120"
            />

            <div style={{ flex: 1 }}>
              <h3>{item.name}</h3>

              <p>Unit Price: ₹{item.price}</p>

              <p>Quantity: {item.quantity}</p>

              <p>
                Total Cost: ₹{item.price * item.quantity}
              </p>

              <button onClick={() => decreaseQuantity(item)}>
                −
              </button>

              <button
                onClick={() => increaseQuantity(item)}
                style={{ marginLeft: "10px" }}
              >
                +
              </button>

              <button
                onClick={() => dispatch(removeItem(item.id))}
                style={{ marginLeft: "10px" }}
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}

      <Link to="/products">
        <button>Continue Shopping</button>
      </Link>
    </div>
  );
}

export default CartItem;
