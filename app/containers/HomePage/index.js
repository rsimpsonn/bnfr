import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import Typing from 'react-typing-animation';

import Hero from '../../components/Hero';
import GroupCard from '../../components/GroupCard';
import Announcement from '../../components/Announcement';

const Space = require('../../../images/space.svg');

export default class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      popoverOpen: false,
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen,
    });
  }

  render() {
    return (
      <div>
        <Hero>
          <Rockets src={Space} alt="rockets" />
          <div>
            <HeadingFormat>
              <Title>Hey Charlotte</Title>
              <Line />
              <Typing cursor={null} speed={25}>
                <Messages>Here are your messages.</Messages>
              </Typing>
            </HeadingFormat>
          </div>
          <Flex>
            <Announcement message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rhoncus, nibh vel convallis feugiat, libero nunc egestas nulla, fermentum ultricies ipsum lacus et velit. Nam sagittis ex vel ante." />
            <Announcement message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rhoncus, nibh vel convallis feugiat, libero nunc egestas nulla, fermentum ultricies ipsum lacus et velit. Nam sagittis ex vel ante." />
            <Announcement message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rhoncus, nibh vel convallis feugiat, libero nunc egestas nulla, fermentum ultricies ipsum lacus et velit. Nam sagittis ex vel ante." />
          </Flex>
        </Hero>
        <Groups>Active on Campus Now</Groups>
        <Flex>
          <GroupCard />
          <GroupCard />
          <GroupCard />
        </Flex>
        <Groups>For You</Groups>
        <Flex>
          <GroupCard />
          <GroupCard />
          <GroupCard />
        </Flex>
      </div>
    );
  }
}

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Rockets = styled.img`
  user-select: none;
  position: absolute;
  bottom: -234px;
  right: -120px;
  pointer-events: none;
  animation: ${rotate360} 80s linear infinite;
`;

const Flex = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
`;

const Groups = styled.h2`
  font-weight: 400;
  font-size: 22px;
  margin: 20px 40px 0px;
  text-align: left;
  `;

const Title = styled.h3`
  margin: 0px 5px;
  text-align: left;
  font-size: 28px;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-weight: 300;
  `;

const Messages = styled.h3`
  margin: 5px 3px 50px;
  `;

const Line = styled.hr`
    width: 25px;
    height: 1px;
    border: 1px solid #fff;
    border-wdith: 0;
    color: #fff;
    background-color: #fff;
    text-align: left;
    margin-left: 5px;
    margin-top: 4px;
    margin-bottom: 0px;
    `;

const HeadingFormat = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-flow: column wrap;
  `;
