import React from "react";
import { NavLink } from "react-router-dom";
import "./Orders.css";

const Navbar = ({ text }) => {
  return (
    <div className="orders">
      <div className="orders__header">
        <NavLink to="/">
          <h3>Home</h3>
        </NavLink>
        <NavLink to="/cart" activeClassName="orders--active">
          <h3>Cart</h3>
        </NavLink>
        <NavLink to="/orders" activeClassName="orders--active">
          <h3>Orders</h3>
        </NavLink>
      </div>
      <div className="orders__body">
        <h2>{text}</h2>
      </div>
    </div>
  );
};

export default Navbar;
