import React, { Component } from 'react';
import styled from 'styled-components';

import Interest from './Interest';
import AddInterest from './AddInterest';

export default class Profile extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Flex>
          <Pic />
          <Title><strong>Ryan Simpson</strong></Title>
        </Flex>
        <Title>Interests</Title>
        <InterestFlex>
          <Interest interest="coding" />
          <Interest interest="art" />
          <Interest interest="lacrosse" />
        </InterestFlex>
        <AddInterest />
        <Logout><LogoutText>Log Out</LogoutText></Logout>
      </div>
    );
  }
}

const Pic = styled.img`
  border-radius: 50%;
  width: 60px;
  height: 60px;
  background: #DCDCDC;
  margin: 10px;
`;

const Logout = styled.button`
margin: 20px 0px 0px;
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
  margin: 10px 5px;
  font-size: 12px;
  text-align: center;
  >strong {
    font-size: 14px;
    font-weight: 400;
  }
  `;

const InterestFlex = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

const Flex = styled.div`
  display: flex;
  margin: 10px 5px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
