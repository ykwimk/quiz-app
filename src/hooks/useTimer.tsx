import React, { useEffect } from 'react';
import { useQuizContext } from '../store';

function useTimer() {
  const { time, setTime } = useQuizContext();

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(time + 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [time, setTime]);

  return {
    time,
  };
}

export default useTimer;
