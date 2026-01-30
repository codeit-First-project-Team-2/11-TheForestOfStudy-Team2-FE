import { useTimerAction } from './useTimerAction.hook';
import { settlePointsApi } from '../../apis/focusTimer.api.js';
import { INITIAL_SECONDS } from '../../constants/time.js';
import styles from '../../components/focusTimer.module.css';
// import { showToast } from '../../utils/toast.util.js';

export const useFocusTimer = (studyId, onSettle) => {
  const { seconds, status, isOvertime, start, pause, reset } = useTimerAction();

  //시간 포맷팅 로직
  const formatTime = (leftTime) => {
    const abs = Math.abs(leftTime);
    const minutes = String(Math.floor(abs / 60)).padStart(2, '0');
    const seconds = String(abs % 60).padStart(2, '0');
    return leftTime < 0 ? `-${minutes}:${seconds}` : `${minutes}:${seconds}`;
  };

  //타이머 색상 로직
  const getTimerColorClass = () => {
    if (isOvertime) {
      return styles.timerGrey;
    }
    if (seconds <= 10) {
      return styles.timerRed;
    }
    return styles.timerBlack;
  };

  //UI 조건 설정하는 변수
  const isNormalRunning = status !== 'initial' && !isOvertime;

  //정지버튼 누를 시 포인트 정산 로직
  const handleStop = async () => {
    pause();

    try {
      // showToast.error("집중이 중단되었습니다.")

      const focusedSeconds = INITIAL_SECONDS - seconds;
      const actualMinutes = Math.floor(focusedSeconds / 60);

      const data = await settlePointsApi(studyId, actualMinutes);

      if (onSettle) {
        onSettle(data.totalPoint, data.earedPoint || 0);
      }
    } catch (error) {
      console.log(error);
      // showToast.error("포인트 정산에 실패했습니다.");
    } finally {
      reset();
    }
  };

  return {
    seconds,
    status,
    isOvertime,
    start,
    pause,
    reset,
    formatTime,
    getTimerColorClass,
    isNormalRunning,
    handleStop,
  };
};
