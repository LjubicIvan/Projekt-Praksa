import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      
    <Link to="/" className="link">Home</Link>

      

      <div className="nav-links">
        <Link to="/login" className="link">Login</Link>
        <Link to="/register" className="link">Register</Link>
      </div>
    </div>
  );
}
