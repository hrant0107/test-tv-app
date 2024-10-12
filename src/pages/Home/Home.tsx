import { useCallback, useMemo, useState } from "react";
import {
  getSessionStorageId,
  setSessionStorageId,
} from "@src/utils/sessionStorage";

import { FeaturedMovie } from "@src/types/movie";
import { FeaturedVideo } from "@src/components/FeaturedVideo/FeaturedVideo";
import { TrendingCarousel } from "@src/components/TrendingCarousel/TrendingCarousel";

import data from "../../data/data.json";

import styles from "./Home.module.scss";

export const Home = () => {
  const findMovieById = useMemo(() => {
    return data.TendingNow.find(
      (movie) => movie.Id === getSessionStorageId("lastMovieId")
    );
  }, []);

  const [featuredMovie, setFeaturedMovie] = useState<FeaturedMovie>(
    findMovieById || data.Featured
  );
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const trendingMovies = useMemo(() => {
    const lastMovieId = sessionStorage.getItem("lastMovieId");

    const sortedMovies = data.TendingNow.sort((a, b) => {
      if (a.Id === lastMovieId) return -1;
      if (b.Id === lastMovieId) return 1;
      return new Date(b.Date).getTime() - new Date(a.Date).getTime();
    });

    return sortedMovies.slice(0, 50);
  }, []);

  const handleMovieClick = useCallback((movie: FeaturedMovie) => {
    setFeaturedMovie(movie);
    setSessionStorageId("lastMovieId", movie.Id);
    setIsPlaying(false);

    setTimeout(() => {
      setIsPlaying(true);
    }, 2000);
  }, []);

  return (
    <div className={styles.main}>
      <FeaturedVideo movie={featuredMovie} isPlaying={isPlaying} />

      <TrendingCarousel
        movies={trendingMovies}
        onMovieClick={handleMovieClick}
      />
    </div>
  );
};
