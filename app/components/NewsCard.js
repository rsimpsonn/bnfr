import React, { Component } from 'react';
import styled from 'styled-components';

export default class NewsCard extends Component {
  constructor(props) {
    super(props);

    this.addTodo = this.addTodo.bind(this);
  }

  addTodo() {}

  render() {
    return (
      <Card>
        <Title>Click to send in your channels </Title>
      </Card>
    );
  }
}

const Card = styled.div`
  background: white;
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  overflow: hidden;
  padding: 20px;
  max-height: 80%;
  overflow-y: scroll;
`;

const Title = styled.h3`
  margin: 0px 5px;
  text-align: left;
  font-size: 28px;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-weight: 300;
  color: #212121;
  `;
