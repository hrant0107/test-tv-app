import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar/Navbar";

export const Layout = () => {
  return (
    <div>
      <aside>
        <Navbar />
      </aside>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

Layout.displayName = "Layout";
