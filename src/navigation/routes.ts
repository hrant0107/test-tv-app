import { ComponentType } from "react";

import { Layout } from "../components/Layout/Layout";
import { HOME_PATH, SEARCH, GENRES, MOVIES, TV_SHOWS, WATCH_LATER} from "./paths";
import { Home } from "@src/pages/Home/Home";
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
        { path: SEARCH, Component: Home },
        { path: GENRES, Component: Home },
        { path: MOVIES, Component: Home },
        { path: TV_SHOWS, Component: Home },
        { path: WATCH_LATER, Component: Home },

      ]
    }
  ];

 export interface NavbarRoute {
    path: string;
    iconPath: string;
    title: string;
  }
  
  export const navbarRoutes: NavbarRoute[] = [
    { path: SEARCH, iconPath: '/assets/icons/ICON-Search.png', title: 'Search' },
    { path: HOME_PATH, iconPath: '/assets/icons/Group46.png', title: 'Home' },
    { path: TV_SHOWS, iconPath: '/assets/icons/Group56.png', title: 'TV Shows' },
    { path: MOVIES, iconPath: '/assets/icons/Group54.png', title: 'Movies' },
    { path: GENRES, iconPath: '/assets/icons/Group53.png', title: 'Genres'},
    { path: WATCH_LATER, iconPath: '/assets/icons/Group47.png', title: 'Watch Later' }

  ];