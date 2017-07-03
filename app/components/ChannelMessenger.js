import React, { Component } from 'react';
import styled from 'styled-components';

export default class ChannelMessenger extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sent: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.send = this.send.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  send() {
    this.setState({
      sent: true,
      message: '',
    });
  }

  render() {
    return (
      <MessageBox>
        <Message
          name="message"
          type="submit"
          placeholder="Anything to say?"
          onSubmit={this.send}
          onChange={this.handleChange}
        />
      </MessageBox>
    );
  }
}

const MessageBox = styled.div`
  border-radius: 8px;
  height: 34px;
  width: 95%;
  border: solid 2px #F2F2F2;
  background-color: transprent;
  padding: 5px 8px;
  display: flex;
  align-content: center;
  bottom: 10px;
  position: absolute;
  `;

const Message = styled.textarea`
  width: 100%;
  resize: none;
  font-size: 12px;

  &:focus {
    outline: 0;
  }
  `;
