import React from "react";
import styles from "./menuLink.module.css";
import { useLocation, Link } from "react-router-dom";

export default function MenuLink({ children, to }) {
  const Location = useLocation();
  return (
    <Link
      className={`
          ${styles.link}
          ${Location.pathname === to ? styles.linkDestacado : ""}
               `}
      to={to}
    >
      {children}
    </Link>
  );
}
