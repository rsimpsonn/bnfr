import React, { Component } from 'react';
import styled from 'styled-components';

import Interest from './Interest';

export default class Profile extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Pic />
        <Title>Ryan</Title>
        <Title>Simpson</Title>
        <br />
        <Title>Interests</Title>
        <InterestFlex>
          <Interest interest="coding" />
          <Interest interest="art" />
          <Interest interest="lacrosse" />
        </InterestFlex>
        <Logout><LogoutText>Log Out</LogoutText></Logout>
      </div>
    );
  }
}

const Pic = styled.img`
  border-radius: 50%;
  width: 45px;
  height: 45px;
  background: #DCDCDC;
  float: right;
`;

const Logout = styled.button`
margin: 10px 0px;
border-radius: 14px;
display: flex;
justify-content: center;
align-items: center;
background: #FF8E8E;
padding: 11px 14px 10px 14px;

&:focus {
  outline: 0;
}

&:active {
  transform: scale(0.96);
}
  `;

const LogoutText = styled.p`
margin: -6px 0px;
font-size: 12px;
font-weight: 400;
color: #7B2020;
`;

const Title = styled.p`
  margin: 5px;
  font-size: 12px;
  `;

const InterestFlex = styled.div`
  display: flex;
  flex-flow: row wrap;
`;
