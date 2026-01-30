import clsx from 'clsx';
import styles from './PageHeader.module.css';

import { UI_SIZES, DEFAULT_UI_SIZE } from '@/constants';

export const PageHeader = ({
  title,
  totalPoint,
  currentTime,
  size = UI_SIZES.MD,
  className,
  onFocusClick,
  onHomeClick,
}) => {
  const safeSize = styles[size] ? size : DEFAULT_UI_SIZE;

  return (
    <section className={clsx(styles[safeSize], className)}>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.title}>{title}</div>

          <div className={styles.status}>
            {/* 시간 또는 포인트 */}
            {currentTime && <span>{currentTime}</span>}
            {totalPoint !== undefined && <span>{totalPoint}P</span>}
          </div>
        </div>

        <div className={styles.right}>
          <button
            type="button"
            className={styles.buttonPrimary}
            onClick={onFocusClick}
          >
            오늘의 집중
          </button>

          <button
            type="button"
            className={styles.buttonSecondary}
            onClick={onHomeClick}
          >
            홈
          </button>
        </div>
      </div>
    </section>
  );
};
