import React from 'react';
import styled from 'styled-components';
import { useQuizContext } from '../../store';

function Home() {
  const { setQuizStep } = useQuizContext();

  return (
    <HomeLayout>
      <HomeTitle>Simple Quiz App! 📝</HomeTitle>
      <HomeButton type="button" onClick={() => setQuizStep('QUIZ')}>
        Start
      </HomeButton>
    </HomeLayout>
  );
}

export default Home;

const HomeLayout = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const HomeTitle = styled.h1`
  text-align: center;
  margin-bottom: 80px;
  font-size: 42px;
`;

const HomeButton = styled.button`
  display: block;
  width: 250px;
  line-height: 50px;
  margin: 0 auto;
  text-align: center;
  background: #000;
  color: #fff;
  cursor: pointer;
  border-radius: 5px;
  font-size: 20px;
`;
