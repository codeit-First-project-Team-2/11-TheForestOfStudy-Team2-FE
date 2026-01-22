import clsx from "clsx"; 
import styles from './Input.module.css';

export const Input = ({
  value = "",
  onchange = () => {},
  placeholder = "",
  className = "",
  hasError = false,
  ...props
}) => {
  const inputClassName = clsx(
    styles.input,
    hasError && styles.error,
    className
  );

  return (
    <input
      className={inputClassName}
      value={value}
      onchange={onchange}
      placeholder={placeholder}
      {...props} 
    />
  );
};