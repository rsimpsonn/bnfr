import React, { Component } from 'react';
import styled from 'styled-components';

const home = require('../../../images/home.svg');

export default class Nav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      groups: ['Publications', 'Robotics', 'Football', 'Struck'],
    };
  }

  render() {
    const nodes = this.state.groups.map((group) =>
      <A href={`/${group}`.toLowerCase()}>
        <P key={group.toString()}>
          <Text>{group.substring(0, 1)}</Text>
        </P>
      </A>
    );
    return (
      <Nodes>
        <a href="/">
          <Home src={home} alt="Home" />
        </a>
        {nodes}
      </Nodes>
    );
  }
}

const Nodes = styled.div`
  height: 80px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-content: space-between;
  align-items: center;
  /position:fixed;
  /bottom:0;
`;

const P = styled.button`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background: #02A8F3;
  margin: 10px 10px 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: #FFC2FB;
  }

  &:focus {
    outline: 0;
  }

`;

const Text = styled.p`
  font-size: 15px;
  color: #fff;
  margin: 0;
  text-decoration: none;
  `;

const A = styled.a`
  text-decoration: none;
  `;

const Home = styled.img`
  margin: 10px;
  cursor: pointer;
  `;
