import React from "react";
import styles from "./Button.module.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className = "",
  ...props
}) => {
  return (
    <button
      className={`${styles.globalButton} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
