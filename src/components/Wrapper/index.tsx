import React from 'react';
import styled from 'styled-components';
import { useQuizContext } from '../../store';
import { QuizStepType } from '../../types';
import Home from '../Home';
import Quiz from '../Quiz';
import Result from '../Result';

function Wrapper() {
  const { quizStep } = useQuizContext();

  const renderComponent = (quizStep: QuizStepType) => {
    switch (quizStep) {
      case 'HOME': {
        return <Home />;
      }
      case 'QUIZ': {
        return <Quiz />;
      }
      case 'RESULT': {
        return <Result />;
      }
      default:
        break;
    }
  };

  return (
    <WrapperLayout>{renderComponent(quizStep as QuizStepType)}</WrapperLayout>
  );
}

export default Wrapper;

const WrapperLayout = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  padding: 30px 15px;
  box-sizing: border-box;
`;
