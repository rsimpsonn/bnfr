import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import Typing from 'react-typing-animation';
import $ from 'jquery';
import Cookies from 'js-cookie';

import Hero from '../../components/Hero';
import GroupCard from '../../components/GroupCard';
import Announcement from '../../components/Announcement';

const Space = require('../../../images/space.svg');

export default class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      popoverOpen: false,
      user: JSON.parse(Cookies.get('token')),
    };

    this.toggle = this.toggle.bind(this);
    this.groupcards = this.groupcards.bind(this);
  }

  componentDidMount() {
    console.log(this.state.user.userToken);
    $.ajax({
      url: 'http://52.66.73.127/bonfire/bon-lara/public/api/groups',
      method: 'GET',
      dataType: 'JSON',
      headers: {
        Authorization: `Bearer ${this.state.user.userToken}`,
      },
    }).then((data) => {
      this.setState({
        groups: data[0],
      });
    });
  }

  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen,
    });
  }

  groupcards() {
    return this.state.groups.data
      .slice(0, 5)
      .map((singleGroup) => <GroupCard group={singleGroup} />);
  }

  foryou() {
    return this.state.groups.data
      .slice(5, 10)
      .map((singleGroup) => <GroupCard group={singleGroup} />);
  }

  allgroups() {
    return this.state.groups.data.map((singleGroup) =>
      <GroupCard group={singleGroup} />
    );
  }

  render() {
    return (
      <div style={{ overflow: 'hidden' }}>
        <Hero>
          <Rockets src={Space} alt="rockets" />
          <div>
            <HeadingFormat>
              <Title>
                Hey{' '}
                {this.state.user.name.substring(
                  0,
                  this.state.user.name.indexOf(' ')
                )}
              </Title>
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
        <Groups>
          Active on Campus{' '}
          <a href="/start"><Start> Start a group</Start></a>
        </Groups>
        <Flex>
          {this.state.groups && this.groupcards()}
        </Flex>
        <Groups>For You</Groups>
        <Flex>
          {this.state.groups && this.foryou()}
        </Flex>
        <Groups>All Groups</Groups>
        <Flex>
          {this.state.groups && this.allgroups()}
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

const Cards = styled.div`
  overflow-x: scroll;
  flex-direction: row;
  display: flex;
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

const Start = styled.p`
  font-size: 18px;
  font-weight: 300;
  color: #BDBDBD;
  margin: 0px 10px;
  display: inline;
  `;
