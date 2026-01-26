import { INITIAL_SECONDS } from '../constants/index.js';
import { useStudyTimer } from '../hooks/useStudyTimer.js';
import styles from './focusTimer.module.css';
import startImage from '../assets/focusTimerImages/start_image.svg';
import pauseImage from '../assets/focusTimerImages/pause_image.svg';
import resetImage from '../assets/focusTimerImages/reset_image.svg';
import stopImage from '../assets/focusTimerImages/stop_image.svg';
import timerTagImage from '../assets/focusTimerImages/timerTag_image.svg';

export function FocusTimer() {
  const { seconds, status, isOvertime, start, pause, reset } = useStudyTimer();

  const formatTime = (time) => {
    const abs = Math.abs(time);
    const m = String(Math.floor(abs / 60)).padStart(2, '0');
    const s = String(abs % 60).padStart(2, '0');

    return time < 0 ? `-${m}:${s}` : `${m}:${s}`;
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

  return (
    <section className={styles.timerContainer}>
      <h2 className={styles.timerTitle}>오늘의 집중</h2>
      <div className={styles.timerWrapper}>
        {status !== 'initial' && (
          <div className={styles.timerTag}>
            <img src={timerTagImage} alt="timerTag" />
            {formatTime(INITIAL_SECONDS)}
          </div>
        )}
        <p className={`${styles.timerContent} ${getTimerColorClass()}`}>
          {formatTime(seconds)}
        </p>
        <div className={styles.timerButtons}>
          {status !== 'initial' && !isOvertime && (
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
              className={styles.startStopButton}
              onClick={start}
              disabled={status === 'running'}
            >
              <img src={startImage} alt="start" />
              <span>start!</span>
            </button>
          ) : (
            <button
              className={styles.startStopButton}
              onClick={reset}
            >
              <img src={stopImage} alt="stop" />
              <span>stop!</span>
            </button>
          )}

          {status !== 'initial' && !isOvertime && (
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
