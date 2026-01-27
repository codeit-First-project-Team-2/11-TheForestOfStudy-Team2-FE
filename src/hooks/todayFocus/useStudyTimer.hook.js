import { useState, useEffect, useCallback } from 'react';
import { INITIAL_SECONDS } from '../../constants/time.js';

export const useStudyTimer = () => {
  const [seconds, setSeconds] = useState(INITIAL_SECONDS);
  const [status, setStatus] = useState('initial');
  const [isOvertime, setIsOvertime] = useState(false);

  useEffect(() => {
    if (status !== 'running') return; // 'runnig'일 때만 동작

    const interval = setInterval(() => {
      setSeconds((prev) => {
        const nextValue = prev - 1;
        if (nextValue < 0 && !isOvertime) {
          setIsOvertime(true);
        }
        return nextValue;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [status, isOvertime]);

  const start = useCallback(() => {
    setStatus('running');
  }, []);
  const pause = useCallback(() => {
    setStatus('paused');
  }, []);
  const reset = useCallback(() => {
    setStatus('initial');
    setSeconds(INITIAL_SECONDS);
    setIsOvertime(false);
  }, []);

  return { seconds, status, isOvertime, start, pause, reset };
};
