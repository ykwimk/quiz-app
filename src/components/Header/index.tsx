import React from 'react';
import _ from 'lodash';
import styled from 'styled-components';
import { AppBar } from '@material-ui/core';
import { useQuizContext } from '../../store';
import Timer from '../Timer';

function Header() {
  const { quizStep, quizData } = useQuizContext();

  return (
    <HeaderBar color="default" position="absolute">
      <HeaderContent>
        <span>Simple Quiz App! 📝</span>
        {quizStep !== 'HOME' && !_.isEmpty(quizData) && <Timer />}
      </HeaderContent>
    </HeaderBar>
  );
}

export default Header;

const HeaderBar = styled(AppBar)`
  padding: 20px;
  font-size: 21px;
  font-weight: bold;
  background: #fff !important;
  box-shadow: none !important;
  border-bottom: 1px solid rgba(0, 0, 0, 20%);
`;

const HeaderContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;
