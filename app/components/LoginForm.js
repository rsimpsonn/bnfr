import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Bon = require('../../images/bonfire.svg');

export default class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: undefined,
      password: undefined,
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

    axios
      .post('http://52.66.73.127/bonfire/bon-lara/public/api/login', {
        username: this.state.username,
        password: this.state.password,
      })
      .then((res, err) => {
        if (!err) {
          this.props.onLogin(res.data);
        }
      })
      .catch((err) => {});
  }

  render() {
    return (
      <div>
        <Flex>
          <Fire src={Bon} alt="bonfire" />
          <form onSubmit={this.handleSubmit}>
            <Flex>
              <Input
                type="text"
                name="username"
                placeholder="Username"
                onChange={this.handleChange}
              />
              <Input
                type="password"
                name="password"
                placeholder="Password"
                onChange={this.handleChange}
              />
              <Login type="submit" onClick={this.props.login}>Login</Login>
            </Flex>
          </form>
          <Login onClick={this.props.signUp} style={{ margin: 0 }}>
            <p>
              <small style={{ color: '#DCDCDC' }}>
                Or Sign Up
              </small>
            </p>
          </Login>
        </Flex>
      </div>
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
  padding: 10px;
  border-radius: 14px;
  border: solid #F2F2F2 2px;
  margin: 10px;
  text-align: center;

  &:focus {
    outline: 0;
  }
  `;

const Login = styled.button`
  margin: 10px 0 0;
  cursor: pointer;

   &:focus {
     outline: 0;
   }

   &:active {
     transform: scale(0.96);
   }
   `;

const Fire = styled.img`
  width: 300px;
  margin: 100px 0px 40px;
  `;

LoginForm.propTypes = {
  onLogin: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  signUp: PropTypes.func.isRequired,
};
