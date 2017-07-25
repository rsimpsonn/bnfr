import React, { Component, PropTypes } from 'react';
import styled, { keyframes } from 'styled-components';
import EmojiConverter from 'emoji-js';

const emoji = new EmojiConverter();
emoji.addAliases({
  journalism: '1f4f0',
  engineering: '1f916',
  language: '1f30e',
  sailing: '26f5',
  comedy: '1f602',
  coding: '1f47e',
  running: '1f3c3',
  dance: '1f483',
  golf: '1f3cc',
  swim: '1f3ca',
  fitness: '1f3cb',
  cars: '1f3ce',
  rock: '1f918',
  writing: '270d',
  fashion: '1f457',
  ocean: '1f433',
  service: '1f33b',
  health: '1f349',
  lifestyle: '1f34d',
  architecture: '1f3d7',
  theater: '1f3ad',
  art: '1f3a8',
  tech: '1f680',
  lacrosse: '26a1',
  currentissues: '1f525',
  soccer: '26bd',
  baseball: '26be',
  basketball: '1f3c0',
  volleyball: '1f3d0',
  football: '1f3c8',
  tennis: '1f3b3',
  gaming: '1f3ae',
  speaking: '1f4e2',
  jazz: '1f3b7',
  music: '1f3b8',
  film: '1f3ac',
  photography: '1f4f7',
  research: '1f52c',
  business: '1f4a1',
  books: '1f4d6',
  investing: '1f4b8',
  politics: '1f1fa',
  outdoors: '1f6a3',
  math: '1f914',
  science: '1f4a5',
  travel: '2708',
  food: '1f363',
  sample: '1f363',
});

export default class Bubble extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: false,
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      selected: !this.state.selected,
    });
    this.props.add(this.props.int.interestId);
  }

  render() {
    return (
      <RandomMargins>
        {!this.state.selected &&
          <Button onClick={this.toggle}>
            <Text>{this.props.int.name}</Text>
          </Button>}
        {this.state.selected &&
          <Enlarged onClick={this.toggle} src={this.props.int.image}>
            <E>
              {emoji.replace_colons(`:${this.props.int.name.toLowerCase()}:`)}
            </E>
          </Enlarged>}
      </RandomMargins>
    );
  }
}

const RandomMargins = styled.div`
  margin: ${Math.random() * 40 + 10}px;
  `;

const hover = keyframes`
from {
  transform: translateY(0px);
}
65% {
  transform: translateY(6px);
}
to {
  transform: translateY(0px);
}
  `;

const Button = styled.button`
  background: #FF3372;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  animation: ${hover} 3s infinite ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;

  &:focus {
    outline: 0;
  }
`;

const Text = styled.p`
  color: #fff;
  size: 8px;
  margin: 0;
  font-weight: 300;

  >black {
    color: #212121;
  }
`;

const Enlarged = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100px;
  height: 100px;
  border-radius: 50%;

  animation: ${hover} 3s infinite ease-in-out;

  &:focus {
    outline: 0;
  }
`;

const E = styled.p`
  font-size: 120px;
  margin: 0;
`;

Bubble.propTypes = {
  int: PropTypes.object.isRequired,
  add: PropTypes.func.isRequired,
};
