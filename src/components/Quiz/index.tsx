import React from 'react';
import _ from 'lodash';
import {
  FormControl,
  Box,
  RadioGroup,
  Radio,
  FormControlLabel,
  Button,
} from '@material-ui/core';
import styled from 'styled-components';
import useQuiz from '../../hooks/useQuiz';

import CircularProgress from '@material-ui/core/CircularProgress';

function Quiz() {
  const {
    quizData,
    quizIndex,
    quizAnswers,
    selectedAnswer,
    handleChange,
    handleClickNext,
  } = useQuiz();

  if (_.isEmpty(quizData)) return <LoadingIcon />;

  const { category, question, correct_answer } = quizData.results[quizIndex];

  const quizAnswersArray = quizAnswers[quizIndex];

  return (
    <QuizBox component="div">
      <QuizCategory>
        <span>Category: {category}</span>
        {selectedAnswer !== '' && (
          <CheckAnswer
            selectedAnswer={selectedAnswer}
            correctAnswer={correct_answer}
          >{`${selectedAnswer === correct_answer ? 'O' : 'X'}`}</CheckAnswer>
        )}
      </QuizCategory>
      <QuizTitle>
        <span>{`${quizIndex + 1}. `}</span>
        {question}{' '}
      </QuizTitle>
      <FormWrapper>
        <FormControl component="fieldset">
          <RadioGroup
            aria-label={category}
            name={category}
            value={selectedAnswer}
            onChange={handleChange}
          >
            {quizAnswersArray &&
              quizAnswersArray.map((value: string, index: number) => {
                return (
                  <FormControlLabel
                    key={index}
                    value={value}
                    control={<Radio color="primary" />}
                    label={value}
                  />
                );
              })}
          </RadioGroup>
        </FormControl>
      </FormWrapper>
      {selectedAnswer !== '' && (
        <NextButton
          variant="contained"
          color="primary"
          onClick={handleClickNext}
        >
          다음 문항
        </NextButton>
      )}
    </QuizBox>
  );
}

export default Quiz;

const LoadingIcon = styled(CircularProgress)`
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -20px;
  margin-top: -20px;
`;

const QuizBox = styled(Box)`
  height: 100%;
`;

const QuizCategory = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  font-size: 21px;
  font-weight: 500;
  margin-bottom: 20px;
`;

const QuizTitle = styled.div`
  margin-bottom: 15px;
  font-size: 24px;
  font-weight: 500;
`;

const CheckAnswer = styled.span<{
  selectedAnswer: string;
  correctAnswer: string;
}>`
  font-size: 30px;
  font-weight: bold;
  color: ${(props) =>
    props.selectedAnswer === props.correctAnswer ? 'blue' : 'red'};
`;

const FormWrapper = styled.div``;

const NextButton = styled(Button)`
  position: absolute !important;
  left: 50%;
  margin-left: -100px !important;
  bottom: 30px;
  width: 200px;
  height: 50px;
`;
