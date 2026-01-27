import { useEffect, useMemo, useState } from 'react';
import styles from './StudyHeader.module.css';

const pad2 = (value) => String(value).padStart(2, '0');

const formatKoreanDateTime = (date) => {
  const year = date.getFullYear();
  const month = pad2(date.getMonth() + 1);
  const day = pad2(date.getDate());

  const hours = date.getHours();
  const minutes = pad2(date.getMinutes());

  const isPm = hours >= 12;
  const hour12 = hours % 12 === 0 ? 12 : hours % 12;
  const meridiem = isPm ? '오후' : '오전';

  return `${year}-${month}-${day} ${meridiem} ${hour12}:${minutes}`;
};

export const StudyHeader = ({ title, onFocusClick, onHomeClick }) => {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setNow(new Date());
    }, 60_000);

    return () => {
      window.clearInterval(intervalId);
    };
  }, []);

  const timeText = useMemo(() => formatKoreanDateTime(now), [now]);

  const handleFocusClick = () => {
    if (onFocusClick) {
      onFocusClick();
      return;
    }
    console.log('[StudyHeader] focus click');
  };

  const handleHomeClick = () => {
    if (onHomeClick) {
      onHomeClick();
      return;
    }
    console.log('[StudyHeader] home click');
  };

  return (
    <section className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <div className={styles.title}>{title}</div>

          <div className={styles.meta}>
            <span className={styles.label}>현재 시간</span>
            <span className={styles.time}>{timeText}</span>
          </div>
        </div>

        <div className={styles.right}>
          <button
            type="button"
            className={styles.buttonPrimary}
            onClick={handleFocusClick}
          >
            오늘의 집중
          </button>
          <button
            type="button"
            className={styles.buttonGhost}
            onClick={handleHomeClick}
          >
            홈
          </button>
        </div>
      </div>
    </section>
  );
};
