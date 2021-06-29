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

  const AnswerOx = selectedAnswer === correct_answer ? 'O' : 'X';

  const quizAnswersArray = quizAnswers[quizIndex];

  return (
    <QuizBox component="div">
      {/* <Timer /> */}
      <QuizCategory>Category: {category}</QuizCategory>
      <QuizTitle>
        <span>{`${quizIndex + 1}. `}</span>
        {question}{' '}
        {selectedAnswer !== '' && (
          <TitleOx
            selectedAnswer={selectedAnswer}
            correctAnswer={correct_answer}
          >{`${AnswerOx}`}</TitleOx>
        )}
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
              quizAnswersArray.map((value: any, index: any) => {
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
  transform: translate(-50%, -50%);
`;

const QuizBox = styled(Box)`
  height: 100%;
`;

const QuizCategory = styled.div`
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

const TitleOx = styled.span<{ selectedAnswer: string; correctAnswer: string }>`
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
