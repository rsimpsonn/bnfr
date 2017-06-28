import React, { PropTypes } from 'react';

import styled from 'styled-components';

const Hero = (props) =>
  <Fill {...props}>
    {props.children}
  </Fill>;

const Fill = styled.section`
  width: 100%;
  background: linear-gradient( to right top, #89FFE4, #02A8F3);
  display: flex;
  flex-direction: column;
  padding: 20px;
  overflow-y: scroll;
  overflow-x: hidden;
  position: relative;
  max-height: 284px;
  `;

Hero.defaultProps = {
  children: null,
};

Hero.propTypes = {
  children: PropTypes.node,
};

export default Hero;
