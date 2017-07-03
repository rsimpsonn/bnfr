import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

import ChannelMessenger from './ChannelMessenger';
import ChannelFeed from './ChannelFeed';

const Corner = require('../../images/corner.svg');

export default class ChannelCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      channelSelection: false,
      currentChannel: 'yearbook',
    };

    this.handleButtonChange = this.handleButtonChange.bind(this);
  }

  handleButtonChange() {
    this.setState({ channelSelection: !this.state.channelSelection });
  }

  render() {
    return (
      <div>
        {this.state.channelSelection === false &&
          <Channels>
            <DropdownButton
              src={Corner}
              alt="A"
              onClick={this.handleButtonChange}
            />
            <Tag>#</Tag>
            <Title>{this.state.currentChannel}</Title>
            <Pad>
              <ChannelMessenger />
              <ChannelFeed />
            </Pad>
          </Channels>}
        {this.state.channelSelection &&
          <Channels kind="open">
            <DropdownButton
              src={Corner}
              alt="A"
              onClick={this.handleButtonChange}
            />
            <Tag>#</Tag>
            <Title>yearbook</Title>
            <Channel>thebolt</Channel>
            <Channel>web</Channel>
          </Channels>}
      </div>
    );
  }
}

const fadeIn = keyframes`
  from {
    border-color: #55DEEA;
    background: #fff;
  }
  to {
    border-color: transparent;
    background: #02A8F3;
  }
  `;

const DropdownButton = styled.img`
    margin-top: -75px;
    cursor: pointer;
    `;

const Channels = styled.div`
  min-height: 480px;
  max-height: 480px;
  min-width: 600px;
  box-shadow: 0px 5px 26px #DCDCDC;
  background: white;
  width: 94%;
  border-radius: 15px;
  margin: 2% 8% 0 0;
  padding: 0;
  border-top: solid;
  border-width: 50px;
  border-color: #55DEEA;
  transition: background 3s, border-color 2s;
  position: relative;
  z-index: 1;

  ${(props) => {
    if (props.kind === 'open') {
      return `
        background: #02A8F3;
        border-color: transparent;
        animation: ${fadeIn} 0.3s ease-out;
      `;
    }
    return null;
  }};
  `;

const Tag = styled.h1`
    margin-left: 15px;
    margin-top: -70px;
    `;

const Title = styled.h1`
        margin-left: 65px;
        margin-top: -65px;
        cursor: pointer;
        `;

const Pad = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px;
  flex-direction: column;
  `;

const Channel = styled.h1`
    margin: 40px 65px;
    cursor: pointer;
    `;
