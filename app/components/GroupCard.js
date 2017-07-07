import React, { Component } from 'react';
import styled from 'styled-components';
import JoinButton from './JoinButton';

const cover = require('../../images/cover.jpg');

export default class GroupCard extends Component {
  constructor(props) {
    super(props);

    this.joinGroup = this.joinGroup.bind(this);
  }

  joinGroup() {
    // TODO
  }

  render() {
    return (
      <Card>
        <Cover src={cover} alt="cover" />
        <Text>Publications</Text>
        <Under>We make the yearbook and newspaper.</Under>
        <JoinButton />
      </Card>
    );
  }
}

const Card = styled.div`
  width: 180px;
  height: 350px;
  box-shadow: 0px 5px 26px #DCDCDC;
  background: white;
  display: flex;
  flex-direction: column;
  margin: 25px 0px 25px 45px;
  border-radius: 15px;
  overflow: hidden;
  `;

const Cover = styled.img`
  height: auto;
  width: 180px;
`;

const Text = styled.p`
  font-size: 14px;
  margin: 12px 8px 0px;
  line-height: 15px;
`;

const Under = styled.p`
  font-size: 12px;
  margin: 4px 6px 4px 8px;
  line-height: 15px;
  color: #BDBDBD;
  font-weight: 300;
  `;
