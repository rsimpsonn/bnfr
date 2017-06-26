import React, { Component } from 'react';
import styled from 'styled-components';

import Hero from '../../components/Hero';
import GroupCard from '../../components/GroupCard';

export default class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Hero>
          <p>Yo</p>
        </Hero>
        <Groups>Active on Campus Now</Groups>
        <Flex>
          <GroupCard />
          <GroupCard />
          <GroupCard />
        </Flex>
      </div>
    );
  }
}

const Flex = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

const Groups = styled.h2`
  font-weight: 400;
  margin: 20px 25px 0px;
  `;
