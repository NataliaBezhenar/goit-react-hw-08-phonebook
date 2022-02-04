import React from "react";
import { NavLink } from "react-router-dom";

const styles = {
  link: {
    display: "inline-block",
    textDecoration: "none",
    padding: 12,
    fontWeight: 700,
    color: "#2A363B",
  },
  activeLink: {
    color: "#E84A5F",
  },
};

export default function AuthNav() {
  return (
    <div>
      <NavLink
        to="/register"
        className={(navData) =>
          navData.isActive ? styles.activeLink : styles.link
        }
      >
        Registration
      </NavLink>
      <NavLink
        to="/login"
        className={(navData) =>
          navData.isActive ? styles.activeLink : styles.link
        }
      >
        Login
      </NavLink>
    </div>
  );
}
