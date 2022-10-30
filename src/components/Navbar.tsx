import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../pages/authentication/auth";
type NavbarProps = {
  isActive: boolean;
};
const Navbar = () => {
  const navLinkStyles = ({ isActive }: NavbarProps) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "none" : "underline",
    };
  };

  const auth = useAuth();
  return (
    <nav className="primary-nav">
      <NavLink style={navLinkStyles} to="/">
        Home
      </NavLink>
      <NavLink style={navLinkStyles} target="" to="/about">
        About
      </NavLink>
      <NavLink style={navLinkStyles} to="/products">
        Products
      </NavLink>
      <NavLink style={navLinkStyles} to="/users">
        Users
      </NavLink>
      <NavLink style={navLinkStyles} to="/profile">
        Profile
      </NavLink>
      {!auth.user && (
        <NavLink style={navLinkStyles} to="/login">
          Login
        </NavLink>
      )}
    </nav>
  );
};

export default Navbar;
