// components/FeaturedVideo.tsx
import React from "react";
import styles from "./FeaturedVideo.module.scss";
import { FeaturedMovie } from "@src/types/movie";
import { formatTime } from "@src/utils/formatTime";

interface FeaturedVideoProps {
  movie: FeaturedMovie;
  isPlaying: boolean;
}

const FeaturedVideo: React.FC<FeaturedVideoProps> = ({ movie, isPlaying }) => {
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
      <div className={styles.videoContent}>
        <h3 className={`unnamed-character-style-6 ${styles.title}`}>
          {movie.Title}
        </h3>
        <div className={styles.coverImage}>
          <img
            className="cover-image"
            src={`assets/${movie.TitleImage}`}
            alt={movie.Category}
          />
        </div>

        <div className={styles.videoInfo}>
          <div className={styles.metaInfo}>
            <span className="unnamed-character-style-7">
              {movie.ReleaseYear}
            </span>
            <span className="unnamed-character-style-7">{movie.MpaRating}</span>
            <span className="unnamed-character-style-7">
              {formatTime(+movie.Duration)}
            </span>
          </div>
          <p className={styles.description}>{movie.Description}</p>
        </div>
        <div className={styles.actions}>
          <button className={styles.play}>Play</button>
          <button className={styles.info}>More Info</button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedVideo;
