import React, { PropTypes } from 'react';
import styled from 'styled-components';

const ChannelMessage = (props) =>
  <Box>
    <Profile />
    <Message><b>Ryan Simpson</b><small>8:29 PM</small></Message>
    <M>{props.message}</M>
  </Box>;

const Message = styled.p`
  font-size: 12px;
  margin: 0;
  float: right;
  width: 94%;

  >b {
    font-size: 14px;
  }

  >small {
    display: inline;
    color: #ADADAD;
    margin: 0 0 0 10px;
    font-size: 12px;
  }
  `;

const M = styled.p`
font-size: 14px;
margin: -10px 0 0;
float: right;
width: 94%;
font-weight: 300;
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
