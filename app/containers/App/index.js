import React, { Component } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import Header from '../Header';
import LoginForm from '../../components/LoginForm';
import SignUp from '../../containers/SignUp';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: false,
    };

    // this.setupHttpClient = this.setupHttpClient.bind(this);
    this.toggle = this.toggle.bind(this);
    this.toggleSignUp = this.toggleSignUp.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }
  static propTypes = {
    children: React.PropTypes.node,
  };

  toggle() {
    this.setState({
      loggedIn: true,
    });
  }

  toggleSignUp() {
    this.setState({
      signedUp: !this.state.signedUp,
    });
  }

  handleLogin(res) {
    Cookies.set('token', res, { SameSite: 'strict' });
    this.setState({
      loggedIn: true,
    });
  }

  render() {
    return (
      <div>
        {this.state.loggedIn &&
          <div>
            <Header />
            <div className="content">
              {this.props.children}
            </div>
          </div>}
        {!this.state.loggedIn &&
          <LoginForm
            onLogin={this.handleLogin}
            signUp={this.toggleSignUp}
            login={null}
          />}
      </div>
    );
  }
}
