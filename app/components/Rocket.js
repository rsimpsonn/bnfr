import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

const rocket = require('../../images/rocket.svg');

function Rocket() {
  return <Animated src={rocket} alt="r" />;
}

function RandomDeg() {
  return Math.random() * 360 + 1;
}

function RandomTranslation() {
  return Math.random() * 30 - 15;
}

const Animated = styled.img`
  animate = ${fly} 2s infinite;
  `;

const fly = keyframes`
  from {
    transform: rotate(0deg) translate(0px, 0px);
  }
  to {
    transform: rotate(2deg) translate(2px, 2px);
  }
`;
