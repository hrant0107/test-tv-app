import { RouterProvider, createHashRouter } from "react-router-dom";
import { routes } from "../navigation/routes";

const router = createHashRouter(routes);

export const App = () => {
  return <RouterProvider router={router} />;
};
