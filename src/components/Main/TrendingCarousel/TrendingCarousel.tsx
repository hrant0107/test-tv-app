import React from "react";
import { FeaturedMovie } from "@src/types/movie";

import styles from "./TrendingCarousel.module.scss";
import { Movie } from "./Movie/Movie";

interface TrendingCarouselProps {
  movies: FeaturedMovie[];
  onMovieClick: (movie: any) => void;
}

export const TrendingCarousel: React.FC<TrendingCarouselProps> = ({
  movies,
  onMovieClick,
}) => {
  return (
    <div className={styles.container}>
      <h2 className={`${styles.title} unnamed-character-style-3`}>
        Trending Now
      </h2>
      <div className={styles.carousel}>
        {movies.map((movie) => (
          <Movie
            key={movie.Id}
            img={movie.CoverImage}
            title={movie.Title}
            onClick={() => onMovieClick(movie)}
          />
        ))}
      </div>
    </div>
  );
};
