import React from "react";
import { assets } from "../assets/assets"; // Ensure assets.js exports an object
import "./Navbar.css"; // Import the CSS file

const Navbar = ({setToken}) => {
  return (
    <div className="navbar">
      {/* Logo with reduced size */}
      <img src={assets.logo} alt="Logo" />

      {/* Styled Logout Button */}
      <button onClick={()=>setToken('')}>Logout</button>
    </div>
  );
};

export default Navbar;
