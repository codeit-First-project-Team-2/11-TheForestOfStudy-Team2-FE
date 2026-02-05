import clsx from 'clsx';
import styles from './TextField.module.css';

export const TextField = ({
  value = '',
  onChange = () => {},
  placeholder = '',
  disabled = false,
  fullWidth = false,
  type = 'text',
  name,
  id,
  ariaLabel,
  className,
  hasError,
  ...rest
}) => {
  return (
    <input
      id={id}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      disabled={disabled}
      aria-label={ariaLabel}
      className={clsx(
        styles.textField,
        fullWidth && styles.fullWidth,
        hasError && styles.error,
        className,
      )}

      {...rest}
    />
  );
};
