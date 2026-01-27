
import clsx from "clsx";
import styles from "./Button.module.css";

export const Button = ({ 
  children,
  variant = "primary",
  size = "md", 
  className = "",
  ...props 
}) => {
  const buttonClassName = clsx(
    styles.button,
    styles[variant],
    styles[size],
    className
  );

  return (
    <button className={buttonClassName} {...props}>
      {children}
    </button>
  );
};