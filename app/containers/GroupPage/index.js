import React, { Component, PropTypes } from 'react';
import styled, { keyframes } from 'styled-components';
import Graph from '../../components/Graph';
import ChannelCard from '../../components/ChannelCard';

const Icon = require('./cover.png');

export default class GroupPage extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {}

  render() {
    return (
      <div background="white">
        <Screen>
          <Flex>
            <CoverPadding>
              <Cover src={Icon} alt="b" />
            </CoverPadding>
            <Text>{this.props.members.substring(1)}</Text>
            <Members>Members</Members>
            <Pad>
              <Graph />
            </Pad>
          </Flex>
          <ChannelPadding>
            <ChannelCard />
          </ChannelPadding>
        </Screen>
      </div>
    );
  }
}

const hover = keyframes`
from {
  transform: translateY(0px);
}
65% {
  transform: translateY(12px);
}
to {
  transform: translateY(0px);
}
  `;

const Cover = styled.img`
  transition: transform 0.8s;
  border-radius: 4px;
  width: 240px;
  height: auto;
  position: absolute;
  animation: ${hover} 3s ease-in-out infinite;
  `;

const Flex = styled.div`
  height: 100%;
  width: 30%;
  flex-direction: column;
  justify-content: center;
  display: flex;
  background: transparent;
  padding: 20px;
  flex: 1;
  margin: 0 40px;
`;

const Screen = styled.div`
    display: flex;
    flex-direction: row;
    background: transparent;
    `;

const CoverPadding = styled.div`
  width: 100%;
  height: 325px;
  background: transparent;
  display: flex;
  justify-content: center;
`;

const Text = styled.p`
  font-weight: 400;
  font-size: 24px;
  text-align: center;
  color: #212121;
  margin: 15px 0 0 0;

  >small {
    font-size: 12px;
    color: #ADADAD;
    text-transform: uppercase;
  }
`;

const Members = styled.h1`
  font-size: 12px;
  color: #ADADAD;
  text-transform: uppercase;
  text-align: center;
  font-weight: 400;
  margin-top: -6px;
`;

const ChannelPadding = styled.div`
  width: 80%;
  `;

const Pad = styled.div`
    justify-content: center;
    display: flex;
  `;

GroupPage.propTypes = {
  members: PropTypes.string.isRequired,
};
