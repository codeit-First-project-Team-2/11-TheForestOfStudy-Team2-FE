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
  className,
  hasError,
  autoComplete,
  ...rest
}) => {
  let defaultAutoComplete;
  if (autoComplete !== undefined) {
    defaultAutoComplete = autoComplete;
  } else if (type === 'password') {
    defaultAutoComplete = 'new-password';
  } else if (type === 'email') {
    defaultAutoComplete = 'email';
  } else {
    defaultAutoComplete = 'off';
  }

  return (
    <input
      id={id}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      disabled={disabled}
      className={clsx(
        styles.textField,
        fullWidth && styles.fullWidth,
        hasError && styles.error,
        className,
      )}
      autoComplete={defaultAutoComplete}
      {...rest}
    />
  );
};
