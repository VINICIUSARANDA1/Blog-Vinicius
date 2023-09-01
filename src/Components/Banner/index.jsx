import React from "react";
import styles from "./banner.module.css";
import Imagem from "assets/anime.jpg"

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.apresentacao}>
        <h1 className={styles.titulo}>Bem Vindo, ao Blog ;)</h1>
        <p className={styles.paragrafo}> Sou Programador Front-End.....</p>
      </div>
      <div className={styles.imagens}>
        <img
        className={styles.minhaFoto} 
        src={Imagem} alt="" />

      </div>
    </div>
  );
}
