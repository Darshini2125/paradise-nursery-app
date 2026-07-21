import React from "react";
import { useDispatch } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
  removeItem,
} from "../redux/CartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="cart-item">
      <img
        src={item.image}
        alt={item.name}
        className="cart-image"
      />

      <div className="cart-details">
        <h3>{item.name}</h3>

        <p>Price: ₹{item.price}</p>

        <p>Quantity: {item.quantity}</p>

        <p>Total: ₹{item.price * item.quantity}</p>

        <div className="cart-buttons">
          <button
            onClick={() => dispatch(decrementQuantity(item.id))}
          >
            -
          </button>

          <button
            onClick={() => dispatch(incrementQuantity(item.id))}
          >
            +
          </button>

          <button
            onClick={() => dispatch(removeItem(item.id))}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
