import { ComponentType } from "react";

import { Layout } from "../components/Layout/Layout";
import { HOME_PATH, SEARCH, GENRES, MOVIES, TV_SHOWS, WATCH_LATER} from "./paths";
import { Home } from "@src/pages/Home/Home";
import Search from "@src/pages/Search/Search";
import Genres from "@src/pages/Genres/Genres";
import Movies from "@src/pages/Movies/Movies";
import TvShows from "@src/pages/TVShows/TvShows";
import WatchLater from "@src/pages/WatchLater/WatchLater";
// import { Home } from "@src/pages/Home/Home.tsx";

interface Route {
    path: string;
    Component: ComponentType;
    title?: string;
    icon?: JSX.Element;
    children?: Route[];
  }
  
  export const routes: Route[] = [
    {
      path: '/',
      Component: Layout,
      children: [
        { path: HOME_PATH, Component: Home },
        { path: SEARCH, Component: Search },
        { path: GENRES, Component: Genres },
        { path: MOVIES, Component: Movies },
        { path: TV_SHOWS, Component: TvShows },
        { path: WATCH_LATER, Component: WatchLater },

      ]
    }
  ];

 export interface NavbarRoute {
    path: string;
    iconPath: string;
    title: string;
  }
  
  export const navbarRoutes: NavbarRoute[] = [
    { path: SEARCH, iconPath: 'assets/ICON-Search.png', title: 'Search' },
    { path: HOME_PATH, iconPath: 'assets/Group46.png', title: 'Home' },
    { path: TV_SHOWS, iconPath: 'assets/Group56.png', title: 'TV Shows' },
    { path: MOVIES, iconPath: 'assets/Group54.png', title: 'Movies' },
    { path: GENRES, iconPath: 'assets/Group53.png', title: 'Genres'},
    { path: WATCH_LATER, iconPath: 'assets/Group47.png', title: 'Watch Later' }

  ];