import React from 'react';
import styled from 'styled-components';
import { Box } from '@material-ui/core';
import { useQuizContext } from '../../store';

function Home() {
  const { setQuizStep } = useQuizContext();

  return (
    <Box component="div">
      <HomeButton type="button" onClick={() => setQuizStep('QUIZ')}>
        Start
      </HomeButton>
    </Box>
  );
}

export default Home;

const HomeButton = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: block;
  width: 300px;
  line-height: 65px;
  margin: 0 auto;
  text-align: center;
  background: #000;
  color: #fff;
  cursor: pointer;
  border-radius: 5px;
  font-size: 21px;
`;
