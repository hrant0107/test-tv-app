import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { routes } from "../navigation/routes";

const router = createBrowserRouter(routes);

export const App = () => {
  return <RouterProvider router={router} />;
};
