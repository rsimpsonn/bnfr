import React, { Component } from 'react';
import styled from 'styled-components';

import Nav from '../Nav';

const bonfire = require('../../../images/bonfire.svg');
const profile = require('../../../images/profile.svg');

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    print('heyffaa');
  }

  render() {
    return (
      <Bar>
        <Nav />
        <Icon src={profile} alt="profi" />
      </Bar>
    );
  }
}

const Bar = styled.div`
  width: 100%;
  height: 80px;
  background: transparent url(${bonfire}) no-repeat 3%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  `;

const Icon = styled.img`
  height: 40px;
  width: auto;
  margin: 3%;
  cursor: pointer;
`;
