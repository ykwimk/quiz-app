import React from 'react';
import { Paper } from '@material-ui/core';
import styled from 'styled-components';
import { useQuizContext } from '../../../store';
import { QuizStepType } from '../../../types';
import Header from '../Header';
import Home from '../../Home';
import Quiz from '../../Quiz';
import Result from '../../Result';

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
    <WrapperContainer id="container" elevation={2}>
      <Header />
      <WrapperContent>
        {renderComponent(quizStep as QuizStepType)}
      </WrapperContent>
    </WrapperContainer>
  );
}

export default Wrapper;

const WrapperContainer = styled(Paper)`
  width: 70%;
  height: 75%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const WrapperContent = styled.div`
  height: 100%;
  padding: 65px 20px 20px;
`;
