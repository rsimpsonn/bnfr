import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';

const But = require('../../images/send.svg');

export default class ChannelMessenger extends Component {
  constructor(props) {
    super(props);

    this.submit = this.submit.bind(this);
  }

  submit() {
    this.props.submit();
    this.input.value = '';
  }

  render() {
    return (
      <MessageBox>
        <Message
          name="message"
          type="submit"
          placeholder="Anything to say?"
          ref={(c) => (this.input = c)}
          onChange={this.props.change}
          onSubmit={this.submit}
        />
        <Send src={But} alt="send" onClick={this.submit} />
      </MessageBox>
    );
  }
}

const MessageBox = styled.div`
  border-radius: 8px;
  height: 36px;
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
  font-size: 14px;
  font-weight: 300;

  &:focus {
    outline: 0;
  }
  `;

const Send = styled.img`
  float: right;
  cursor: pointer;
  &:active {
    transform: scale(0.96);
  }
  `;

ChannelMessenger.propTypes = {
  submit: PropTypes.func.isRequired,
  change: PropTypes.func.isRequired,
};
