import React, { Component } from 'react';
import styled from 'styled-components';

const b = require('../../../images/b.svg');
const profile = require('../../../images/profile.svg');

export default class Nav extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    print('hey');
  }

  render() {
    return (
      <Bar>
        <Icon src={profile} alt="profi" />
      </Bar>
    );
  }
}

const Bar = styled.div`
  width: 100%;
  height: 120px;
  background: transparent url(${b}) no-repeat 3%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  `;

const Icon = styled.img`
  height: 40px;
  width: auto;
  margin: 5%;
  cursor: pointer;
`;
