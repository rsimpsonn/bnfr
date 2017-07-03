import React, { Component } from 'react';
import styled from 'styled-components';

import { Scrollbars } from 'react-custom-scrollbars';
import ChannelMessage from './ChannelMessage';

export default class ChannelFeed extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [
        'Dribbble Meetups come in all sizes and varieties. A small grassroots Dribbble Meetup can help build the design community in your area. By hosting a small meetup, you can get to know other designers, talk shop, share resources, or even find a mentor or mentee. Many of our Dribbble Teams host Dribbble Meetups regularly. In addition to building community and gaining valuable face time, hosting a Dribbble Meetup at your office is a great way for local designers to learn about your company and what you do. Getting designers together in your area can also be a great way to find and hire new talent.',
        'Yo wazzup',
        'Hi kids, do you like violence? Wanna see me stick nine inch nails through each one of my eyelids?',
        'Hey',
        'Hey',
        'Hey',
      ],
    };
  }

  render() {
    const feed = this.state.messages.map((msg) =>
      <div>
        <ChannelMessage message={msg} />
      </div>
    );
    return (
      <Scrollbars style={{ height: 350 }}>
        {feed}
      </Scrollbars>
    );
  }
}
