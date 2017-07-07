import React, { Component, PropTypes } from 'react';
import styled, { keyframes } from 'styled-components';
import { Scrollbars } from 'react-custom-scrollbars';

import Event from '../../components/Event';
import ChannelCard from '../../components/ChannelCard';
import LeadersPanel from '../../components/LeadersPanel';
import BotSettings from '../BotSettings';

const Icon = require('../../../images/cover.jpg');

export default class GroupPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      leading: true,
      botOpen: false,
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      botOpen: !this.state.botOpen,
    });
  }

  render() {
    return (
      <div>
        {this.state.botOpen === false &&
          <Screen>
            <Flex>
              <CoverPadding>
                <Cover src={Icon} alt="b" />
              </CoverPadding>
              <Text>50</Text>
              <Members>Members</Members>
              <Scrollbars
                style={{ height: 60, scrollTop: 'scrollHeight' }}
                autoHide
              >
                <Event />
                <Event />
                <Event />
              </Scrollbars>
            </Flex>
            <ChannelPadding>
              <ChannelCard />
            </ChannelPadding>
          </Screen>}
        {this.state.botOpen === true &&
          <BotSettings group={this.props.members.substring(1)} />}
        <Pad>
          <LeadersPanel bot={this.toggle} />
        </Pad>
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
  border-radius: 8px;
  width: 240px;
  height: auto;
  position: absolute;
  animation: ${hover} 3s ease-in-out 3;
  `;

const Flex = styled.div`
  height: 100%;
  max-width: 30%;
  flex-direction: column;
  justify-content: center;
  display: flex;
  background: transparent;
  padding: 0 20px 20px;
  margin: 0 40px;
  min-width: 20%;
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
  margin-bottom: 20px;
`;

const ChannelPadding = styled.div`
  width: 80%;
  `;

const Pad = styled.div`
    flex-direction: row;
    display: flex;
    justify-content: center;
    padding: 20px;
  `;

GroupPage.propTypes = {
  members: PropTypes.string.isRequired,
};
