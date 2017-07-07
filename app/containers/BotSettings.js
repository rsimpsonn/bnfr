import React, { Component, PropTypes } from 'react';
import styled, { keyframes } from 'styled-components';

import Bot from '../components/Bot';
import TodoCard from '../components/TodoCard';

export default class BotSettings extends Component {
  constructor(props) {
    super(props);

    this.capitalize = this.capitalize.bind(this);
  }

  capitalize(word) {
    return word.substring(0, 1).toUpperCase() + word.substring(1);
  }

  render() {
    return (
      <Background>
        <Flex>
          <Div>
            <Bot group={this.props.group} />
          </Div>
          <div>
            <h3>{this.capitalize(this.props.group)} Bot</h3>
            <TodoCard />
          </div>
        </Flex>
      </Background>
    );
  }
}

BotSettings.propTypes = {
  group: PropTypes.string.isRequired,
};

const Fade = keyframes`
  from {
    opacity: 0.35;
  }
  to {
    opacity: 1;
  }
  `;

const Background = styled.div`
  background: linear-gradient( to right top, #89FFE4, #02A8F3);
  display: flex;
  justify-content: center;
  flex-direction: column;
  /animation: ${Fade} 0.6s ease-in;
`;

const Flex = styled.div`
  display: flex;
  flex-direction: row;
  `;

const Div = styled.div`
  width: 45%;
  min-width: 420px;
  `;
