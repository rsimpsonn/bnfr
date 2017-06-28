import React, { PropTypes } from 'react';
import styled from 'styled-components';

const Fire = require('../../images/cover.png');

const Announcement = (props) =>
  <Banner>
    <Profile src={Fire} alt="profile" />
    <Message>{props.message}</Message>
  </Banner>;

const Profile = styled.img`
  border-radius: 50%;
  width: 60px;
  height: 60px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
  background: #fff;
  flex: 0 0 60px;
  `;

const Message = styled.p`
  color: white;
  margin: 20px;
  max-width: 55%;
  font-weight: 300;
  `;

const Banner = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  `;

Announcement.defaultTypes = {
  src: Fire,
};

Announcement.propTypes = {
  src: PropTypes.string,
  message: PropTypes.string.isRequired,
};

export default Announcement;
