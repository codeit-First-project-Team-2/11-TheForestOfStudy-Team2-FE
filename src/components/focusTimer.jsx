import { INITIAL_SECONDS } from '../constants/time.js';
import { useStudyTimer } from '../hooks/todayFocus/useStudyTimer.hook.js';
import clsx from 'clsx';
import styles from './focusTimer.module.css';
import startImage from '../assets/focusTimerImages/start_image.svg';
import pauseImage from '../assets/focusTimerImages/pause_image.svg';
import resetImage from '../assets/focusTimerImages/reset_image.svg';
import stopImage from '../assets/focusTimerImages/stop_image.svg';
import timerTagImage from '../assets/focusTimerImages/timerTag_image.svg';

export function FocusTimer() {
  const { seconds, status, isOvertime, start, pause, reset } = useStudyTimer();

  const formatTime = (leftTime) => {
    const abs = Math.abs(leftTime);
    const minutes = String(Math.floor(abs / 60)).padStart(2, '0');
    const seconds = String(abs % 60).padStart(2, '0');

    return leftTime < 0 ? `-${minutes}:${seconds}` : `${minutes}:${seconds}`;
  };

  const getTimerColorClass = () => {
    if (isOvertime) {
      return styles.timerGrey;
    }
    if (seconds <= 10) {
      return styles.timerRed;
    }
    return styles.timerBlack;
  };

  const isNormalRunning = status !== 'initial' && !isOvertime;

  return (
    <section className={styles.timerContainer}>
      <div className={styles.timerInfo}>
        <h2 className={styles.timerTitle}>오늘의 집중</h2>
        <div
          className={`${styles.timerTag} ${status === 'initial' ? styles.hiddenTag : ''}`}
        >
          <img src={timerTagImage} alt="timerTag" />
          {formatTime(INITIAL_SECONDS)}
        </div>
      </div>
      <div className={styles.timerWrapper}>
        <p className={clsx(styles.timerContent, getTimerColorClass())}>
          {formatTime(seconds)}
        </p>
        <div className={styles.timerButtons}>
          {isNormalRunning && (
            <button
              className={styles.pauseButton}
              onClick={pause}
              disabled={status === 'paused'}
            >
              <img src={pauseImage} alt="pause" />
            </button>
          )}
          {!isOvertime ? (
            <button
              className={clsx(styles.stopButton, styles.startButton)}
              onClick={start}
              disabled={status === 'running'}
            >
              <img src={startImage} alt="start" />
              <span>start!</span>
            </button>
          ) : (
            <button className={styles.stopButton} onClick={reset}>
              <img src={stopImage} alt="stop" />
              <span>stop!</span>
            </button>
          )}

          {isNormalRunning && (
            <button
              className={styles.resetButton}
              onClick={reset}
              disabled={status === 'running'}
            >
              <img src={resetImage} alt="reset" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
