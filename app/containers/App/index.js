import React, { Component } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import Header from '../Header';
import LoginForm from '../../components/LoginForm';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: true,
    };

    // this.setupHttpClient = this.setupHttpClient.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }
  static propTypes = {
    children: React.PropTypes.node,
  };

  /* componentDidMount() {
    console.info(
      'Running application version 0.0.1',
      'background: #222; color: #57c7e8'
    );
    // Do things like:
    // - fetch optimizely experiments
    // - fetch the initial payload
    // - initialize global variables (like an http client)
    Promise.all([
      this.setupHttpClient(),
      // placeholder for adding async things here
      // and here too
    ]).then(() => {
      this.setState({
        initialized: true,
      });
    });
  }

  setupHttpClient() {
    // Expose the http client on the App instance
    // Other components can access it via `window.app.http`
    window.http = axios.create({
      baseURL: 'http://52.66.73.127/bonfire/',
    });

    window.http.interceptors.response.use(
      (response) => response,
      (error) => {
        // Show the login form if we get a 401 from backend
        if (error.response.status === 401) {
          this.setState({
            loggedIn: false,
          });

          Cookies.remove('token');
        }
        Promise.reject(error);
      }
    );
  }
*/
  handleLogin(res) {
    /*
    Cookies.set('token', res.token, { SameSite: 'strict' });
    window.http.defaults.headers.common.Authorization = `token ${res.token}`;
    window.ecs.defaults.headers.common.Authorization = `token ${res.token}`;
    */ this.setState(
      {
        loggedIn: true,
      }
    );
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
          <div>
            <LoginForm onLogin={this.handleLogin} />
          </div>}
      </div>
    );
  }
}
