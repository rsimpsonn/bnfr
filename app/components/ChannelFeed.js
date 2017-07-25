import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';
import $ from 'jquery';
import Cookies from 'js-cookie';

import { Scrollbars } from 'react-custom-scrollbars';
import ChannelMessage from './ChannelMessage';
import ChannelMessenger from './ChannelMessenger';

export default class ChannelFeed extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: JSON.parse(Cookies.get('token')),
      message: '',
      id: this.props.id,
    };

    this.addMessage = this.addMessage.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.messages = this.messages.bind(this);
  }

  componentDidMount() {
    $.ajax({
      url:
        'http://52.66.73.127/bonfire/bon-lara/public/api/get-all-channel-feeds',
      method: 'POST',
      dataType: 'JSON',
      data: {
        channel_id: this.state.id,
      },
      headers: {
        Authorization: `Bearer ${this.state.user.userToken}`,
      },
    }).then((data) => this.setState({ messages: data[0].data }));
    this.scroll.scrollToBottom();
  }

  componentDidUpdate() {
    this.scroll.scrollToBottom();
  }

  addMessage() {
    $.ajax({
      url: 'http://52.66.73.127/bonfire/bon-lara/public/api/create-new-feed',
      method: 'POST',
      dataType: 'JSON',
      data: {
        description: this.state.message,
        group_id: this.props.groupId,
        channel_id: this.state.id,
      },
      headers: {
        Authorization: `Bearer ${this.state.user.userToken}`,
      },
    }).then((data) => console.log(data));
  }

  messages() {
    console.log(this.state.messages);
    return this.state.messages.map((msg) =>
      <ChannelMessage message={msg.description} />
    );
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;

    this.setState({
      message: value,
    });
  }

  render() {
    return (
      <div>
        <Scrollbars style={{ height: 425 }} ref={(c) => (this.scroll = c)}>
          {this.state.messages && this.messages()}
        </Scrollbars>
        <ChannelMessenger change={this.handleChange} submit={this.addMessage} />
      </div>
    );
  }
}

ChannelFeed.propTypes = {
  id: PropTypes.number.isRequired,
  groupId: PropTypes.number.isRequired,
};
