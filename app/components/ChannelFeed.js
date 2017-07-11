import React, { Component } from 'react';
import styled from 'styled-components';

import { Scrollbars } from 'react-custom-scrollbars';
import ChannelMessage from './ChannelMessage';
import ChannelMessenger from './ChannelMessenger';

export default class ChannelFeed extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [
        'Dribbble Meetups come in all sizes and varieties. A small grassroots Dribbble Meetup can help build the design community in your area. By hosting a small meetup, you can get to know other designers, talk shop, share resources, or even find a mentor or mentee. Many of our Dribbble Teams host Dribbble Meetups regularly. In addition to building community and gaining valuable face time, hosting a Dribbble Meetup at your office is a great way for local designers to learn about your company and what you do. Getting designers together in your area can also be a great way to find and hire new talent.',
        'Yo wazzup',
        'Hey',
        'Hey',
        'Hey',
      ],
      message: '',
    };

    this.addMessage = this.addMessage.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  addMessage() {
    const messagesCopy = this.state.messages;
    messagesCopy.push(this.state.message);
    this.setState({
      messages: messagesCopy,
      message: '',
    });
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;

    this.setState({
      message: value,
    });
  }

  render() {
    const feed = this.state.messages.map((msg) =>
      <ChannelMessage message={msg} />
    );

    return (
      <div>
        <Scrollbars style={{ height: 355 }}>
          {feed}
        </Scrollbars>
        <ChannelMessenger change={this.handleChange} submit={this.addMessage} />
      </div>
    );
  }
}

const Div = styled.div`
  overflow-y: scroll;
  height: 355px;
  `;
