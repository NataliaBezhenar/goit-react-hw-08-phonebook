import React from "react";
import { NavLink } from "react-router-dom";
import s from "./AuthNav.module.css";

export default function AuthNav() {
  return (
    <div>
      <NavLink
        to="/register"
        className={(navData) => (navData.isActive ? s.activeLink : s.link)}
      >
        Register
      </NavLink>
      <NavLink
        to="/login"
        className={(navData) => (navData.isActive ? s.activeLink : s.link)}
      >
        Login
      </NavLink>
    </div>
  );
}
