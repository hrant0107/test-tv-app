import React from "react";

import { NavbarRoute } from "@src/navigation/routes";
import { Link } from "@src/components/Link/Link";

import styles from "./NavItem.module.scss";
import classNames from "classnames";

type NavItemProps = {
  route: NavbarRoute;
  isOpen: boolean;
};

const NavItem: React.FC<NavItemProps> = ({ route, isOpen }) => {
  const navItemClassname = classNames(styles.navItem, {
    [styles.navItem_open]: isOpen,
  });

  return (
    <li>
      <Link to={route.path} className={navItemClassname}>
        <img src={route.iconPath} alt="Nav Icon" />
        <span className={`${styles.navItem__text} unnamed-character-style-2`}>
          {route.title}
        </span>
      </Link>
    </li>
  );
};

export default NavItem;
