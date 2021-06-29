import React, { useCallback, useEffect } from 'react';
import { useQuizContext } from '../store';

function useQuiz() {
  const {
    quizData,
    quizIndex,
    selectedAnswer,
    setQuizData,
    setSelectedAnswer,
    handleClickNext,
  } = useQuizContext();

  const initData = useCallback(() => {
    const API = `https://opentdb.com/api.php?amount=8&category=27&difficulty=easy&type=multiple`;
    fetch(API)
      .then((response) => response.json())
      .then((data) => setQuizData(data))
      .catch((error) => console.log(error));
  }, [setQuizData]);

  const handleChange = useCallback(
    (e) => {
      const { value } = e.target;
      setSelectedAnswer(value);
    },
    [setSelectedAnswer],
  );

  useEffect(() => {
    initData();
  }, [initData]);

  return {
    quizData,
    quizIndex,
    selectedAnswer,
    initData,
    setSelectedAnswer,
    handleChange,
    handleClickNext,
  };
}

export default useQuiz;
