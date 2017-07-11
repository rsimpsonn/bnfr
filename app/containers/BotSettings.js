import React, { Component, PropTypes } from 'react';
import styled, { keyframes } from 'styled-components';
import Typing from 'react-typing-animation';

import Bot from '../components/Bot';
import NewsCard from '../components/NewsCard';

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
          <Div>
            <h3>{this.capitalize(this.props.group)} Bot</h3>
            <Typing cursor={null} speed={20}>
              <Title>
                I found a bunch of things relating to {this.props.group}!
              </Title>
            </Typing>
            <NewsCard />
          </Div>
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

const Title = styled.h3`
    margin: -20px 5px 20px;
    text-align: left;
    font-size: 28px;
    font-size: 14px;
    letter-spacing: 0.5px;
    font-weight: 300;
    `;
