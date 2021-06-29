import React, { useCallback, useEffect } from 'react';
import _ from 'lodash';
import { useQuizContext } from '../store';
import { ResultsDataType } from '../types';

function useQuiz() {
  const {
    quizData,
    quizIndex,
    quizAnswers,
    selectedAnswer,
    setSelectedAnswer,
    setQuizAnswers,
    setQuizData,
    handleChange,
    handleClickNext,
  } = useQuizContext();

  const fetchData = useCallback(() => {
    const API = `https://opentdb.com/api.php?amount=3&category=27&difficulty=easy&type=multiple`;
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
    if (_.isEmpty(quizData)) fetchData();
  }, [quizData, fetchData]);

  return {
    quizData,
    quizIndex,
    selectedAnswer,
    setSelectedAnswer,
    handleChange,
    handleClickNext,
    quizAnswers,
  };
}

export default useQuiz;
