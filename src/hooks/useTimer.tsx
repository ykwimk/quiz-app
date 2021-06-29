import React, { useEffect, useState } from 'react';
import { useQuizContext } from '../store';

function useTimer() {
  const { quizStep } = useQuizContext();
  const [time, setTime] = useState(0);

  useEffect(() => {
    if (quizStep !== 'QUIZ') return;

    const timer = setInterval(() => {
      setTime(time + 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [time, setTime, quizStep]);

  return { time };
}

export default useTimer;
