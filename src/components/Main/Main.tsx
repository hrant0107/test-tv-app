import { useCallback, useEffect, useMemo, useState } from "react";

import { FeaturedMovie } from "@src/types/movie";
import FeaturedVideo from "./FeaturedVideo/FeaturedVideo";

import data from "../../data/data.json";
import { TrendingCarousel } from "./TrendingCarousel/TrendingCarousel";
import {
  getSessionStorageId,
  setSessionStorageId,
} from "@src/utils/sessionStorage";

import styles from "./Main.module.scss";

export const Main = () => {
  const findMovieById = useMemo(() => {
    return data.TendingNow.find(
      (movie) => movie.Id === getSessionStorageId("lastMovieId")
    );
  }, []);

  const [featuredMovie, setFeaturedMovie] = useState<FeaturedMovie>(
    findMovieById || data.Featured
  );

  const [trendingMovies, setTrendingMovies] = useState<FeaturedMovie[]>([]);

  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  useEffect(() => {
    const lastMovieId = sessionStorage.getItem("lastMovieId");

    const sortedMovies = data.TendingNow.sort((a, b) => {
      if (a.Id === lastMovieId) return -1;
      if (b.Id === lastMovieId) return 1;
      return new Date(b.Date).getTime() - new Date(a.Date).getTime();
    });

    setTrendingMovies(sortedMovies.slice(0, 50));
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
