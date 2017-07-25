import React, { PropTypes } from 'react';
import styled from 'styled-components';

const Prof = require('../../images/profile.jpg');

const ChannelMessage = (props) =>
  <Box>
    <UpFlex>
      <Profile src={Prof} />
      <div>
        <Message><b>Ryan Simpson</b><small>8:29 PM</small></Message>
        <M>{props.message}</M>
      </div>
    </UpFlex>
    <div />
  </Box>;

const Flex = styled.div`
  display: flex;
  flex-direction: column;

`;
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

const UpFlex = styled.div`
  display: flex;
  flex-direction: row;
`;

const M = styled.p`
font-size: 14px;
margin: 0 0 0;
float: right;
width: 94%;
font-weight: 300;
  `;

const Profile = styled.img`
  background: #DCDCDC;
  border-radius: 6px;
  width: 40px;
  height: 40px;
  margin: 0 0 0 4px;
  `;

const Box = styled.div`
  margin: 0px 10px 20px;
  overflow: hidden;
  `;

ChannelMessage.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ChannelMessage;
