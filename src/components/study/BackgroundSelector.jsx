import clsx from 'clsx';

import { ALLOWED_BACKGROUND_PATHS } from '@/constants/background';

import styles from './BackgroundSelector.module.css';

const BackgroundSelector = ({ value, onChange }) => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.label}>배경을 선택해주세요</p>

      <div className={styles.list}>
        {ALLOWED_BACKGROUND_PATHS.map((path) => (
          <button
            key={path}
            type="button"
            className={clsx(
              styles.item,
              value === path && styles.selected
            )}
            onClick={() => onChange(path)}
          >
            <img
              src={path}
              alt="background option"
              className={styles.image}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default BackgroundSelector;
