import React, { Component } from 'react';
import styled from 'styled-components';

export default class TodoCard extends Component {
  constructor(props) {
    super(props);

    this.addTodo = this.addTodo.bind(this);
  }

  addTodo() {}

  render() {
    return (
      <Card>
        <p>Add a todo </p>
      </Card>
    );
  }
}

const Card = styled.div`
  background: white;
  display: flex;
  flex-direction: column;
  margin: 25px 0px 25px 45px;
  border-radius: 15px;
  overflow: hidden;
  padding: 15px 35px;
`;
