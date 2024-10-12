import { NavLink, type LinkProps } from "react-router-dom";

export const Link: React.FC<LinkProps> = ({ className, to, ...rest }) => {
  return <NavLink {...rest} to={to} className={`${className} link`} end />;
};

Link.displayName = "Link";
