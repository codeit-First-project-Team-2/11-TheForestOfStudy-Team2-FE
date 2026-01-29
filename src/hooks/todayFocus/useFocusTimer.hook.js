import { useTimerAction } from './useTimerAction.hook';
import { settlePointsApi } from '../../apis/focusTimer.api.js';
import { INITIAL_SECONDS } from '../../constants/time.js';
import styles from '../../components/focusTimer.module.css';

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
      //초기 설정한 초에서 지금의 초를 빼면 집중한 시간이 나온다.
      const focusedSeconds = INITIAL_SECONDS - seconds;
      const actualMinutes = Math.floor(focusedSeconds / 60);

      const data = await settlePointsApi(studyId, actualMinutes);

      if (onSettle) {
        onSettle(data.totalPoint, data.earedPoint || 0);
      }
    } catch (error) {
      console.log(error); // 나중에 토스트 추가 후 변경
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
