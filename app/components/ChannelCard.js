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
      channels: ['yearbook', 'thebolt', 'web', 'stuff'],
    };

    this.handleButtonChange = this.handleButtonChange.bind(this);
    this.handleChannelChange = this.handleChannelChange.bind(this);
  }

  handleButtonChange() {
    this.setState({ channelSelection: !this.state.channelSelection });
  }

  handleChannelChange(event) {
    const target = event.target;
    const name = target.id;
    const placeholder = this.state.channels[0];
    const copy = this.state.channels;
    const index = this.state.channels.indexOf(name);

    copy[0] = this.state.channels[index];
    copy[index] = placeholder;

    this.setState({
      channels: copy,
    });

    this.handleButtonChange();
  }

  render() {
    const hiddenChannels = [];
    for (let i = 1; i < this.state.channels.length; i++) {
      hiddenChannels.push(this.state.channels[i]);
    }
    const restOfChannels = hiddenChannels.map((channel) =>
      <Channel
        type="text"
        id={channel.toString()}
        onClick={this.handleChannelChange}
      >
        {channel}
      </Channel>
    );
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
            <Title>{this.state.channels[0]}</Title>
            <Pad>
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
            <Title>{this.state.channels[0]}</Title>
            {restOfChannels}
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
  padding: 0;
  border-top: solid;
  border-width: 50px;
  border-color: #55DEEA;
  transition: background 3s, border-color 2s;
  position: relative;

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
    font-weight: 400;
    `;

const Title = styled.h1`
        margin-left: 65px;
        margin-top: -65px;
        cursor: pointer;
        font-weight: 400;
        `;

const Pad = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px;
  flex-direction: column;
  `;

const Channel = styled.h1`
    margin: 20px 65px;
    font-weight: 400;
    cursor: pointer;
    `;
