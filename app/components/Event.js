import React from 'react';
import styled from 'styled-components';

import CalendarIcon from './CalendarIcon';

const Event = (props) =>
  <Pad>
    <CalendarIcon />
    <Desc>3 PM<red>Meeting today! Bring your shit! We ballin!</red></Desc>
  </Pad>;

const Desc = styled.p`
  font-size: 12px;
  margin: 0;

  >red {
    color: #ADADAD;
    margin: 0 6px 0 6px;
  }
  `;

const Pad = styled.div`
  margin: 0 0 10px;
  `;

export default Event;
