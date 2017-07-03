import React from 'react';
import styled from 'styled-components';

const CalendarIcon = (props) => <Icon><Month>JAN</Month><Day>13</Day></Icon>;

const Icon = styled.div`
  border-radius: 10px;
  border-top: solid #FF7070 12px;
  background: white;
  box-shadow: 0px 5px 26px #DCDCDC;
  display: flex;
  justify-content: center;
  width: 40px;
  height: 40px;
  flex-direction: column;
  float: left;
  margin: 0 20px;
  `;

const Month = styled.h1`
  font-size: 8px;
  text-align: center;
  margin-top: -11px;
  font-weight: 300;
`;

const Day = styled.p`
  margin: 0;
  transform: translateY(-4px);
  text-align: center;
  `;

export default CalendarIcon;
