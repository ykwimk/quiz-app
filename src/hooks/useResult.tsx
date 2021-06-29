import React, { useMemo } from 'react';
import _ from 'lodash';
import { useQuizContext } from '../store';

function useResult() {
  const { time, answerChecks, handleClickReset } = useQuizContext();

  const correctAnswerLength = useMemo(() => {
    return _.filter(answerChecks, (o) => o).length;
  }, [answerChecks]);

  const incorrectAnswerLength = useMemo(() => {
    return _.filter(answerChecks, (o) => !o).length;
  }, [answerChecks]);

  return {
    time,
    correctAnswerLength,
    incorrectAnswerLength,
    handleClickReset,
  };
}

export default useResult;
