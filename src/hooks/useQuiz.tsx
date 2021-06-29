import React, { useCallback, useEffect } from 'react';
import _ from 'lodash';
import { ResultsDataType } from '../types';
import { useQuizContext } from '../store';

function useQuiz() {
  const {
    quizData,
    quizIndex,
    quizAnswers,
    selectedAnswer,
    setQuizData,
    setSelectedAnswer,
    setQuizAnswers,
    handleChange,
    handleClickNext,
  } = useQuizContext();

  const initData = useCallback(() => {
    const API = `https://opentdb.com/api.php?amount=8&category=27&difficulty=easy&type=multiple`;
    fetch(API)
      .then((response) => response.json())
      .then((data) => {
        const { response_code } = data;
        if (response_code === 0) {
          const { results } = data;
          const resultsArray = results.map((item: ResultsDataType) => {
            const { incorrect_answers, correct_answer } = item;
            return _.shuffle(
              ([] as string[]).concat(...incorrect_answers, correct_answer),
            );
          });

          setQuizData(data);
          setQuizAnswers(resultsArray);
        } else {
          alert('API Error!');
        }
      })
      .catch((error) => alert(error));
  }, [setQuizData, setQuizAnswers]);

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
