import React, { Component } from 'react';
import Header from '../Header';
import Nav from '../Nav';

export default class App extends Component {
  static propTypes = {
    children: React.PropTypes.node,
  };

  render() {
    return (
      <div>
        <Header />
        <div className="content">
          {this.props.children}
        </div>
        <Nav />
      </div>
    );
  }
}
