import clsx from 'clsx';

import { ALLOWED_BACKGROUND_PATHS } from '@/constants/background.constant.js';
import checkIcon from '@/assets/icons/ic_bg_selected.svg';

import styles from './BackgroundSelector.module.css';

const BackgroundSelector = ({ value, onChange }) => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.label}>배경을 선택해주세요</p>

      <div className={styles.list}>
        {ALLOWED_BACKGROUND_PATHS.map((path) => {
          const isSelected = value === path;

          return (
            <button
              key={path}
              type="button"
              className={clsx(styles.item, isSelected && styles.selected)}
              onClick={() => onChange(path)}
            >
              <img
                src={path}
                alt="background option"
                className={styles.image}
              />

              {isSelected && (
                <div className={styles.iconWrapper}>
                  <img src={checkIcon} alt="selected icon" />
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default BackgroundSelector;
