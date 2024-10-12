import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar/Navbar";

import styles from "./Layout.module.scss";

export const Layout = () => {
  return (
    <div className={styles.layout}>
      <aside>
        <Navbar />
      </aside>
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
};

Layout.displayName = "Layout";
