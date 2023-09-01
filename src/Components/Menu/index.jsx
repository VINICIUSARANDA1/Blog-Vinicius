import React from "react";
import styles from "./menu.module.css";
import MenuLink from "../MenuLink";


export default function Menu() {

  return (
    <header>
      <nav className={styles.navegacao}>
      <MenuLink to='/' className={styles.link}>
        Inicio
      </MenuLink>
      <MenuLink to='/sobremim' className={styles.link}>
        Sobre 
      </MenuLink>
      </nav>
    </header>
    
  );
}
