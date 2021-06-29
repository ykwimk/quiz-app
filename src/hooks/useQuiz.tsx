import React, { useCallback, useEffect } from 'react';
import _ from 'lodash';
import { useQuizContext } from '../store';

function useQuiz() {
  const {
    quizData,
    quizIndex,
    selectedAnswer,
    setQuizData,
    setSelectedAnswer,
    handleClickNext,
    quizAnswers,
    setQuizAnswers,
  } = useQuizContext();

  const initData = useCallback(() => {
    const API = `https://opentdb.com/api.php?amount=8&category=27&difficulty=easy&type=multiple`;
    fetch(API)
      .then((response) => response.json())
      .then((data) => {
        const { results } = data;
        const resultsArray = results.map((item: any) => {
          const { incorrect_answers, correct_answer } = item;
          return _.shuffle([].concat(...incorrect_answers, correct_answer));
        });

        setQuizData(data);
        setQuizAnswers(resultsArray);
      })
      .catch((error) => console.log(error));
  }, [setQuizData, setQuizAnswers]);

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
    quizAnswers,
  };
}

export default useQuiz;
