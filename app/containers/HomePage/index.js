import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import Nav from '../Nav';

const Icon = require('./cover.png');

export default class HomePage extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    print('hey');
  }
  render() {
    return (
      <div>
        <Nav />
        <Flex>
          <CoverPadding>
            <Cover src={Icon} alt="b" />
          </CoverPadding>
        </Flex>
      </div>
    );
  }
}

const hover = keyframes`
from {
  transform: translateY(0px);
}
65% {
  transform: translateY(-12px);
}
to {
  transform: translateY(0px);
}
  `;

const Cover = styled.img`
  transition: transform 0.8s;
  border-radius: 4px;
  width: 280px;
  height: auto;
  position: absolute;
  animation: ${hover} 4s ease-in-out infinite;
  `;

const Flex = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: white;
  position: relative;
`;

const CoverPadding = styled.div`
  height: 60%;
  width: 100%;
  display: flex;
  justify-content: center;
  `;
