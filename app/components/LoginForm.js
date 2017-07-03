import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';

const Bon = require('../../images/bonfire.svg');

export default class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: 'ryan@bonfr.com',
      password: 'bonfire',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    window
      .http({
        method: 'post',
        url: 'bon-lara/public/api/login/',
        data: {
          username: this.state.username,
          password: this.state.password,
        },
      })
      .then((res) => {
        this.props.onLogin(res.data);
      })
      .catch(
        (/* err */) => {
          // TODO: handle this
        }
      );
  }

  render() {
    return (
      <Flex>
        <Fire src={Bon} alt="bonfire" />
        <form onSubmit={this.handleSubmit}>
          <p>Username</p>
          <Input
            type="text"
            name="username"
            placeholder="Username"
            onChange={this.handleChange}
          />
          <p>Password</p>
          <Input
            type="password"
            name="password"
            placeholder="Password"
            onChange={this.handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      </Flex>
    );
  }
}

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  box-shadow: 0px 5px 26px #DCDCDC;
  padding: 10px;

  &:focus {
    outline: 0;
  }
  `;

const Fire = styled.img`
  width: 40%;
  margin: 60px 0px 40px;
  `;

LoginForm.propTypes = {
  onLogin: PropTypes.func.isRequired,
};
