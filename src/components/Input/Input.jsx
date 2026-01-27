import clsx from 'clsx';
import styles from './Input.module.css';

export const Input = ({
  value = '',
  onChange = () => {},
  placeholder = '',
  className = '',
  ariaLabel,
  variant = 'default',
  size = 'md',
  hasError = false,
  ...props
}) => {
  const inputClassName = clsx(
    styles.input,
    styles[size],
    styles[variant],
    hasError && styles.error,
    className,
  );

  return (
    <input
      className={inputClassName}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      aria-label={ariaLabel}
      {...props}
    />
  );
};