import clsx from 'clsx';
import styles from './Button.module.css';

const VALID_VARIANTS = ['primary', 'secondary'];
const VALID_SIZES = ['sm', 'md', 'lg'];

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  type = 'button',
  disabled = false,
  fullWidth = false,
  className,
  ...props
}) => {
  const safeVariant = VALID_VARIANTS.includes(variant) ? variant : 'primary';

  const safeSize = VALID_SIZES.includes(size) ? size : 'md';

  return (
    <button
      type={type}
      disabled={disabled}
      className={clsx(
        styles.button,
        styles[safeVariant],
        styles[safeSize],
        fullWidth && styles.fullWidth,
        disabled && styles.disabled,
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};
