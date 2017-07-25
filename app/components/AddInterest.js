import React, { Component, PropTypes } from 'react';
import styled, { keyframes } from 'styled-components';
import $ from 'jquery';
import Cookies from 'js-cookie';

import Button from '../../images/addinterest.svg';

export default class AddInterest extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      user: JSON.parse(Cookies.get('token')),
    };

    this.toggle = this.toggle.bind(this);
    this.submit = this.submit.bind(this);
  }

  toggle() {
    this.setState({
      open: !this.state.open,
    });
  }

  submit() {
    $.ajax({
      url:
        'http://52.66.73.127/bonfire/bon-lara/public/api/user-interest/add-interest',
      method: 'POST',
      dataType: 'JSON',
      headers: {
        Authorization: `Bearer ${this.state.user.userToken}`,
      },
      data: {
        interest_id: 1,
      },
    }).then((data) => console.log(data));

    this.props.refresh();
  }

  render() {
    return (
      <div>
        {this.state.open === false &&
          <CircleButton onClick={this.toggle} src={Button} alt="add" />}
        {this.state.open &&
          <div>
            <Bub>
              #<Interest placeholder="new interest" />
            </Bub>
            <button onClick={this.submit}>sub</button>{' '}
          </div>}
      </div>
    );
  }
}

const Enlarge = keyframes`
from {
  transform: scale(0.9);
}
to {
  transform: scale(1)
}
`;

const CircleButton = styled.img`
  border-radius: 50%;
  width: 25px;
  height: 25px;
  margin: 3px 0px;

  &:focus {
    outline: 0;
  }
`;

const Bub = styled.div`
  border-radius: 14px;
  height: 20px;
  width: 140px;
  padding: 14px 15px;
  margin: 3px 0px;
  background: #C3E5FF;
  display: flex;
  align-items: center;
  font-size: 12px;
  color: #2E485D;
  /animation: ${Enlarge} 0.15s ease-out;
  `;

const Interest = styled.input`
  font-size: 12px;
  font-weight: 400;
  font-family: Montserrat, sans-serif;
  color: #2E485D;
  margin: 5px 0px;
  size: cover;
  autocomplete: on;
  &:focus {
    outline: 0;
  }
  `;

AddInterest.propTypes = {
  refresh: PropTypes.func.isRequired,
};
