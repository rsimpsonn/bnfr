import React, { PropTypes } from 'react';
import styled from 'styled-components';

const ChannelMessage = (props) =>
  <Box>
    <Profile />
    <Message><strong>Ryan Simpson</strong><small>8:29 PM</small></Message>
    <Message>{props.message}</Message>
  </Box>;

const Message = styled.p`
  font-size: 12px;
  margin: 0;
  float: right;
  width: 94%;

  >strong {
    font-size: 14px;
  }

  >small {
    display: inline;
    color: #DCDCDC;
    margin: 0 0 0 10px;
    font-size: 12px;
    font-weight: 300;
  }
  `;

const Profile = styled.img`
  background: #DCDCDC;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  `;

const Box = styled.div`
  margin: 0px 10px 20px;
  overflow: hidden;
  `;

ChannelMessage.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ChannelMessage;
