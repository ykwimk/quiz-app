import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import useResult from '../../hooks/useResult';

function Result() {
  const { time, correctAnswerLength, incorrectAnswerLength } = useResult();
  console.log(time);
  return (
    <ResultLayout>
      <div>
        퀴즈를 마칠 떄까지 소요된 시간:{' '}
        {moment().hour(0).minute(0).second(time).format('HH : mm : ss')}
      </div>
      <div>정답 개수: {correctAnswerLength}개</div>
      <div>오답 개수: {incorrectAnswerLength}개</div>
    </ResultLayout>
  );
}

export default Result;

const ResultLayout = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
