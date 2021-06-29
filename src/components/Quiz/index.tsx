import React from 'react';
import _ from 'lodash';
import styled from 'styled-components';
import Input from '../Input';
import useQuiz from '../../hooks/useQuiz';
import Timer from '../Timer';

function Quiz() {
  const { quizData, quizIndex, selectedAnswer, handleChange, handleClickNext } =
    useQuiz();

  if (_.isEmpty(quizData)) return <QuizLayout>loading...</QuizLayout>;

  const { category, question, incorrect_answers, correct_answer } =
    quizData.results[quizIndex];

  const answers = [].concat(...incorrect_answers, correct_answer);

  const AnswerOx = selectedAnswer === correct_answer ? 'O' : 'X';

  return (
    <QuizLayout>
      <QuizContent>
        <Timer />
        <QuizCategory>Category: {category}</QuizCategory>
        <QuizTitle>
          <QuizNumber>{`${quizIndex + 1}. `}</QuizNumber>
          {question}{' '}
          {selectedAnswer !== '' && (
            <TitleOx
              selectedAnswer={selectedAnswer}
              correctAnswer={correct_answer}
            >{`${AnswerOx}`}</TitleOx>
          )}
        </QuizTitle>
        <AnswerList>
          {answers &&
            answers.map((value, index) => (
              <AnswerListItem key={index}>
                <Input
                  type="radio"
                  name={category}
                  value={value}
                  checked={selectedAnswer === value}
                  handleChange={handleChange}
                />
              </AnswerListItem>
            ))}
        </AnswerList>
        {selectedAnswer !== '' && (
          <button type="button" onClick={handleClickNext}>
            다음 문항
          </button>
        )}
      </QuizContent>
    </QuizLayout>
  );
}

export default Quiz;

const QuizLayout = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const QuizContent = styled.div``;

const QuizCategory = styled.h2``;

const QuizTitle = styled.div`
  font-size: 24px;
`;

const QuizNumber = styled.span``;

const TitleOx = styled.span<{ selectedAnswer: string; correctAnswer: string }>`
  font-weight: bold;
  color: ${(props) =>
    props.selectedAnswer === props.correctAnswer ? 'blue' : 'red'};
`;

const AnswerList = styled.ul`
  font-size: 24px;
  list-style: none;
  padding-left: 10px;
`;

const AnswerListItem = styled.li`
  margin-bottom: 20px;
`;
