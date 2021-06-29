import React, { createContext, useCallback, useContext, useState } from 'react';
import { ApiResponseType, QuizStepType } from '../types';

export const QuizContext = createContext({} as any);

export const useQuizContext = () => {
  return useContext(QuizContext);
};

interface StorePropsType {
  children: React.ReactElement;
}

function Store({ children }: StorePropsType) {
  const [quizStep, setQuizStep] = useState<QuizStepType>('HOME');
  const [quizData, setQuizData] = useState<ApiResponseType>();
  const [quizAnswers, setQuizAnswers] = useState<string[]>([]);
  const [quizIndex, setQuizIndex] = useState<number>(0);
  const [time, setTime] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string>('');
  const [selectedAnswersArray, setSelectedAnswersArray] = useState<string[]>(
    [],
  );
  const [answerChecks, setAnswerChecks] = useState<boolean[]>([]);

  const handleChange = useCallback(
    (e) => {
      const { value } = e.target;
      setSelectedAnswer(value);
    },
    [setSelectedAnswer],
  );

  const handleClickNext = useCallback(() => {
    const { results } = quizData as ApiResponseType;
    const array = selectedAnswersArray;
    const answerChecksArray = answerChecks;

    array.push(selectedAnswer);
    answerChecksArray.push(
      selectedAnswer === results[quizIndex].correct_answer,
    );

    setSelectedAnswersArray(array as string[]);
    setSelectedAnswer('');
    setAnswerChecks(answerChecksArray);

    if (results.length - 1 > quizIndex) {
      setQuizIndex(quizIndex + 1);
    } else {
      setQuizStep('RESULT');
    }
  }, [quizIndex, selectedAnswersArray, selectedAnswer, quizData, answerChecks]);

  return (
    <QuizContext.Provider
      value={{
        quizStep,
        quizData,
        quizIndex,
        selectedAnswer,
        answerChecks,
        time,
        quizAnswers,
        setQuizStep,
        setQuizData,
        setQuizIndex,
        setSelectedAnswer,
        setTime,
        setQuizAnswers,
        handleChange,
        handleClickNext,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}

export default Store;
