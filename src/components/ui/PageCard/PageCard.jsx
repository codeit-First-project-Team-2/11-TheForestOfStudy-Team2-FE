import clsx from 'clsx';
import styles from './PageCard.module.css';

import { UI_SIZES, DEFAULT_UI_SIZE } from '@/constants';

export const PageCard = ({
  children,
  size = UI_SIZES.MD,
  className,
}) => {
  const safeSize = styles[size]
    ? size
    : DEFAULT_UI_SIZE;

  return (
    <main
      className={clsx(
        styles.container,
        styles[safeSize],
        className,
      )}
    >
      {children}
    </main>
  );
};