import React, { useMemo } from 'react';
import _ from 'lodash';
import { useQuizContext } from '../store';

function useResult() {
  const { time, answerLength } = useQuizContext();

  const correctAnswerLength = useMemo(() => {
    return _.filter(answerLength, (o) => o === true).length;
  }, [answerLength]);

  const incorrectAnswerLength = useMemo(() => {
    return _.filter(answerLength, (o) => o === false).length;
  }, [answerLength]);

  return {
    time,
    correctAnswerLength,
    incorrectAnswerLength,
  };
}

export default useResult;
