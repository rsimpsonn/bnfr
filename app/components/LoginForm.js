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

    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(event) {
    /* event.preventDefault();

    window
      .http({
        method: 'post',
        url: 'http://52.66.73.127/bonfire/bon-lara/public/api/login/',
        data: {
          username: this.state.username,
          password: this.state.password,
        },
      })
      .then((res) => {
        this.props.onLogin(res.data);
      })
      .catch(() => {}); */
  }

  render() {
    return (
      <Flex>
        <Fire src={Bon} alt="bonfire" />
        <form>
          <p>Username</p>
          <Input type="text" name="username" placeholder="Username" />
          <p>Password</p>
          <Input type="text" name="password" placeholder="Password" />
          <button onClick={this.handleLogin}>Submit</button>
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
