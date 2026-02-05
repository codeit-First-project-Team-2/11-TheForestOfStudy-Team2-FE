import { useTimerAction } from './useTimerAction.hook';
import { settlePointsApi } from '../../apis/focusTimerService.js';
import { INITIAL_SECONDS } from '../../constants/time.js';
import styles from '../../components/focusTimer.module.css';
import { showToast } from '../../utils/toast.util.js';

export const useFocusTimer = (studyId, onSettle) => {
  const {
    seconds,
    status,
    isOvertime,
    start,
    pause: pauseTimer,
    reset,
  } = useTimerAction();

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

  const handlePause = async () => {
    pauseTimer();
    showToast.error('집중이 중단되었습니다.');
  };

  const handleStop = async () => {
    pauseTimer();

    // 정산 성공시 테스트
    // if (onSettle) {
    //   onSettle(145, 100);
    // }

    try {
      const focusedSeconds = INITIAL_SECONDS - seconds;
      const actualMinutes = Math.floor(focusedSeconds / 60);

      const data = await settlePointsApi(studyId, actualMinutes);

      if (onSettle) {
        onSettle(data.totalPoint, data.earnedPoint || 0);
      }
    } catch (error) {
      console.log(error);
      showToast.error('포인트 정산에 실패했습니다.');
    } finally {
      reset();
    }
  };

  return {
    seconds,
    status,
    isOvertime,
    start,
    pause: handlePause,
    reset,
    formatTime,
    getTimerColorClass,
    isNormalRunning,
    handleStop,
  };
};
