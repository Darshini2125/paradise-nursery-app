import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProductList from "./ProductList";
import CartItem from "./CartItem";
import "./App.css";

function LandingPage() {
  return (
    <div className="landing-page">
      <div className="overlay">
        <h1>Paradise Nursery</h1>

        <h2>Bring Nature Into Your Home</h2>

        <p>
          Welcome to Paradise Nursery! We offer a beautiful collection of
          indoor and outdoor plants that make your home greener, healthier,
          and more peaceful.
        </p>

        <Link to="/products">
          <button className="start-btn">Get Started</button>
        </Link>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
      </Routes>
    </Router>
  );
}

export default App;
