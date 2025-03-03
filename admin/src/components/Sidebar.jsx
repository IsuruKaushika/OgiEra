import React from 'react';
import { NavLink } from 'react-router-dom';
import { assets } from "../assets/assets";
import './Sidebar.css'; // Import CSS file

const Sidebar = () => {
  return (
    <div className="sidebar">
      <NavLink to="/add" className="sidebar-box">
        <img src={assets.add_icon} alt="Add Icon" className="sidebar-icon" />
        <p className="sidebar-text">Add Items</p>
      </NavLink>

      <NavLink to="/list" className="sidebar-box">
        <img src={assets.order_icon} alt="Add Icon" className="sidebar-icon" />
        <p className="sidebar-text">List Items</p>
      </NavLink>

      <NavLink to="/orders" className="sidebar-box">
        <img src={assets.order_icon} alt="Add Icon" className="sidebar-icon" />
        <p className="sidebar-text">Orders</p>
      </NavLink>


    </div>
  );
}

export default Sidebar;
