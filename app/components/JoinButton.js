import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

const Join = require('../../images/joinbutton.svg');
const Joined = require('../../images/joined.svg');

export default class JoinButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      joined: false,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.setState({
      joined: !this.state.joined,
    });
  }

  render() {
    return (
      <div>
        {this.state.joined === false &&
          <JoinHere onClick={this.handleChange} />}
        {this.state.joined === true &&
          <AlreadyJoined onClick={this.handleChange} />}
      </div>
    );
  }
}

const Flip = keyframes`
  from {
    transform: rotate(90deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const JoinHere = styled.button`
  width: 70px;
  height: 25px;
  background: transparent url(${Join}) no-repeat center;
  margin: 10px;
  border-radius: 4px;
  float: right;

  &:focus {
    outline: 0;
  }
  `;

const AlreadyJoined = styled.button`
  height: 25px;
  width: 25px;
  background: transparent url(${Joined}) no-repeat center;
  margin: 10px;
  border-radius: 50%;
  float: right;
  animation: ${Flip} 0.75s ease-out;

  &:focus {
    outline: 0;
  }
  `;
