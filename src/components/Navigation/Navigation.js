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

const Navigation = () => (
  <nav>
    <NavLink
      to="/"
      className={(navData) =>
        navData.isActive ? styles.activeLink : styles.link
      }
    >
      Home
    </NavLink>

    <NavLink
      to="/contacts"
      className={(navData) =>
        navData.isActive ? styles.activeLink : styles.link
      }
    >
      Contacts
    </NavLink>
  </nav>
);

export default Navigation;
