import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import useTimer from '../../../hooks/useTimer';

function Timer() {
  const { time } = useTimer();
  return (
    <TimerLayout>
      경과 시간:{' '}
      {moment().hour(0).minute(0).second(time).format('HH : mm : ss')}
    </TimerLayout>
  );
}

export default Timer;

const TimerLayout = styled.span`
  font-size: 18px;
  font-weight: 500;
  text-align: center;
`;
