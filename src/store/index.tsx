import React, { createContext, useCallback, useContext, useState } from 'react';
import { QuizStepType } from '../types';

export const QuizContext = createContext({} as any);

export const useQuizContext = () => {
  return useContext(QuizContext);
};

interface StorePropsType {
  children: React.ReactElement;
}

function Store({ children }: StorePropsType) {
  const [quizStep, setQuizStep] = useState<QuizStepType>('HOME');
  const [quizData, setQuizData] = useState([]);
  const [quizIndex, setQuizIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string>('');
  const [selectedAnswersArray, setSelectedAnswersArray] = useState<string[]>(
    [],
  );
  const [time, setTime] = useState(0);
  const [answerLength, setAnswerLength] = useState<boolean[]>([]);

  const handleClickNext = useCallback(() => {
    const { results } = quizData as any;
    const array = selectedAnswersArray;
    const aaArray = answerLength;
    array.push(selectedAnswer);
    aaArray.push(selectedAnswer === results[quizIndex].correct_answer);
    setSelectedAnswersArray(array as any);
    setSelectedAnswer('');
    setAnswerLength(aaArray);

    if (results.length - 1 > quizIndex) {
      setQuizIndex(quizIndex + 1);
    } else {
      setQuizStep('RESULT');
    }
  }, [quizIndex, selectedAnswersArray, selectedAnswer, quizData, answerLength]);

  return (
    <QuizContext.Provider
      value={{
        quizStep,
        quizData,
        quizIndex,
        selectedAnswer,
        setQuizStep,
        setQuizData,
        setQuizIndex,
        setSelectedAnswer,
        handleClickNext,
        setTime,
        time,
        answerLength,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}

export default Store;
