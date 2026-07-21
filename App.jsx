import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="landing-page">
        <nav className="navbar">
          <h2 className="logo">🌿 Paradise Nursery</h2>

          <ul className="nav-links">
            <li>Home</li>
            <li>Plants</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>

        <div className="landing-content">
          <h1>Paradise Nursery</h1>

          <h2>Bring Nature Into Your Home</h2>

          <p>
            Discover a wide collection of beautiful indoor and outdoor plants
            that add freshness, beauty, and positive energy to your living
            space. Shop healthy plants at affordable prices with fast delivery.
          </p>

          <Link to="/products">
            <button className="get-started-btn">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default App;
