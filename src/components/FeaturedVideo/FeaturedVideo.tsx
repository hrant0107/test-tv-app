import React from "react";
import { FeaturedMovie } from "@src/types/movie";
import { FilmInformation } from "./FilmInformation/FilmInformation";

import styles from "./FeaturedVideo.module.scss";

interface FeaturedVideoProps {
  movie: FeaturedMovie;
  isPlaying: boolean;
}

export const FeaturedVideo: React.FC<FeaturedVideoProps> = ({
  movie,
  isPlaying,
}) => {
  return (
    <div className={`${styles.featuredVideo}`}>
      {!isPlaying && (
        <img
          className={styles.backgroundVideo}
          src={`assets/${movie.CoverImage}`}
          alt="background-image"
        />
      )}

      {isPlaying && movie.VideoUrl && (
        <video className={styles.backgroundVideo} autoPlay muted loop>
          <source src={movie.VideoUrl} />
        </video>
      )}

      <FilmInformation
        category={movie.Category}
        description={movie.Description}
        duration={+movie.Duration}
        mpaRating={movie.MpaRating}
        releaseYear={movie.ReleaseYear}
        title={movie.Title}
        titleImage={movie.TitleImage}
      />
    </div>
  );
};
