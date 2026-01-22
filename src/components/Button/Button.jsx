
import clsx from "clsx";
import styles from "./Button.module.css";

export const Button = ({ 
  children,
  variant = "primary", 
  className = "",
  ...props 
}) => {
  const buttonClassName = clsx(
    styles.button,
    styles[variant],
    className
  );

  return (
    <button className={buttonClassName} {...props}>
      {children}
    </button>
  );
};