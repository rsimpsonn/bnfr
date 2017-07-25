import React, { PropTypes } from 'react';
import styled from 'styled-components';

const Prof = require('../../images/profile.jpg');

const Announcement = (props) =>
  <Banner>
    <Profile src={Prof} alt="profile" />
    <Message>{props.message}</Message>
  </Banner>;

const Profile = styled.img`
  border-radius: 18px;
  width: 50px;
  height: 50px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
  background: #fff;
  flex: 0 0 50px;
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
  src: Prof,
};

Announcement.propTypes = {
  src: PropTypes.string,
  message: PropTypes.string.isRequired,
};

export default Announcement;
