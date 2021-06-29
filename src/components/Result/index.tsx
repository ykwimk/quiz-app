import React from 'react';
import styled from 'styled-components';
import { Box } from '@material-ui/core';
import useResult from '../../hooks/useResult';

function Result() {
  const { correctAnswerLength, incorrectAnswerLength } = useResult();
  return (
    <ResultBox>
      <ResultContent>
        <ResultText textType="correct">
          정답 개수: {correctAnswerLength}개
        </ResultText>
        <ResultText textType="incorrect">
          오답 개수: {incorrectAnswerLength}개
        </ResultText>
      </ResultContent>
    </ResultBox>
  );
}

export default Result;

const ResultBox = styled(Box)`
  height: 100%;
`;

const ResultContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ResultText = styled.div<{ textType: string }>`
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 15px;
  color: ${(props) =>
    props.textType === 'correct' ? '#1976d2' : 'rgb(220, 0, 78)'};
`;
