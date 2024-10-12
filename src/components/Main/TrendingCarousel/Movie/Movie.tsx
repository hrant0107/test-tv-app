import React from "react";
import styles from "./Movie.module.scss";
type MovieProps = {
  title: string;
  img: string;
  onClick: () => void;
};

export const Movie: React.FC<MovieProps> = ({ title, img, onClick }) => {
  return (
    <button className={styles.movie} onClick={onClick}>
      <img src={`assets/${img}`} alt={title} className="carousel-movie" />
    </button>
  );
};
