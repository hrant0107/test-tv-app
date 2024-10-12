import React, { useState } from "react";
import classNames from "classnames";

import { navbarRoutes } from "@src/navigation/routes";
import Avatar from "@src/components/Avatar/Avatar";
import NavItem from "./NavItem/NavItem";

import styles from "./Navbar.module.scss";
import AssideSettings from "@src/components/AssideSettings/AssideSettings";

type NavbarProps = {};

export const Navbar: React.FC<NavbarProps> = ({}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onMouseOver = () => {
    setIsOpen(true);
  };

  const onMouseLeave = () => {
    setIsOpen(false);
  };

  const navbarClassName = classNames(styles.navBar, {
    [styles.navBar_open]: isOpen,
  });

  return (
    <nav className={navbarClassName}>
      <div
        className={styles.navContent}
        onMouseOver={onMouseOver}
        onMouseLeave={onMouseLeave}
      >
        {isOpen && <Avatar />}

        <ul className={styles.list}>
          {navbarRoutes.map((route) => (
            <NavItem key={route.path} route={route} isOpen={isOpen} />
          ))}
        </ul>
        {isOpen && <AssideSettings />}
      </div>
    </nav>
  );
};
