import React, { Component, PropTypes } from 'react';
import styled, { keyframes } from 'styled-components';
import { Scrollbars } from 'react-custom-scrollbars';
import $ from 'jquery';
import Cookies from 'js-cookie';
import * as Vibrant from 'node-vibrant';

import GroupEvents from '../../components/GroupEvents';
import ChannelCard from '../../components/ChannelCard';
import LeadersPanel from '../../components/LeadersPanel';
import BotSettings from '../BotSettings';

import Image from '../../../images/lacrosse.jpg';

export default class GroupPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      leading: true,
      botOpen: false,
      user: JSON.parse(Cookies.get('token')),
    };

    this.toggle = this.toggle.bind(this);
    this.memberCount = this.memberCount.bind(this);
    this.findGroupById = this.findGroupById.bind(this);
    this.isLeader = this.isLeader.bind(this);
    this.getColors = this.getColors.bind(this);
  }

  toggle() {
    this.setState({
      botOpen: !this.state.botOpen,
    });
  }

  memberCount() {
    if (this.state.group.group_members === undefined) {
      return 1;
    }
    const membercount = this.state.group.group_members.length + 1;
    return membercount;
  }

  findGroupById(id) {
    $.ajax({
      url: 'http://52.66.73.127/bonfire/bon-lara/public/api/groups',
      method: 'GET',
      dataType: 'JSON',
      headers: {
        Authorization: `Bearer ${this.state.user.userToken}`,
      },
    }).then((data) => {
      const groups = data[0].data;
      for (let i = 0; i < groups.length; i++) {
        if (groups[i].groupId === id) {
          this.setState({
            group: groups[i],
          });
        }
      }
    });
  }

  isLeader() {
    if (this.state.group.group_members === undefined) {
      return true;
    }

    for (let i = 0; i < this.state.group.group_members.length; i++) {
      if (this.state.group.group_members[i].userId === this.state.user.userId) {
        if (this.state.group.group_members[i].isLeader === 1) {
          return true;
        }
      }
    }
    return false;
  }

  getColors() {
    const vibrant = new Vibrant(Image);
    let rgb = [];
    const swatches = vibrant.getPalette((err, palette) => {
      rgb = palette.Vibrant.getHex();
      console.log(rgb);
    });
  }

  render() {
    this.findGroupById(Number(this.props.id.substring(1)));
    return (
      <div>
        {this.state.group &&
          <div>
            {this.state.botOpen === false &&
              <Screen>
                <Flex color={this.getColors()}>
                  <CoverPadding>
                    <Cover src={this.state.group.groupImage} alt="b" />
                  </CoverPadding>
                  <MainText>{this.state.group.groupName}</MainText>
                  <Text>{this.memberCount()}</Text>
                  <Members>Members</Members>
                  <GroupEvents
                    id={this.state.group.groupId}
                    creatorId={this.state.group.groupCreator.userId}
                  />
                </Flex>
                <ChannelPadding>
                  <ChannelCard groupId={this.state.group.groupId} />
                </ChannelPadding>
              </Screen>}
            {this.state.botOpen === true &&
              <BotSettings group={this.state.group.groupName} />}
            <Pad>
              <LeadersPanel group={this.state.group} bot={this.toggle} />
            </Pad>
          </div>}
      </div>
    );
  }
}

const hover = keyframes`
from {
  transform: translateY(0px);
}
65% {
  transform: translateY(12px);
}
to {
  transform: translateY(0px);
}
  `;

const Cover = styled.img`
  transition: transform 0.8s;
  border-radius: 8px;
  width: 150px;
  height: auto;
  position: absolute;
  animation: ${hover} 3s ease-in-out 3;
  `;

const Flex = styled.div`
  height: 100%;
  width: 30%;
  flex-direction: column;
  justify-content: center;
  display: flex;
  padding: 0 20px 20px;
  margin: 0 40px;

  ${(props) => `
      background: #84b44c`}
`;

const Screen = styled.div`
    display: flex;
    flex-direction: row;
    `;

const CoverPadding = styled.div`
  width: 100%;
  height: 325px;
  background: transparent;
  display: flex;
  justify-content: center;
`;

const Text = styled.p`
  font-weight: 400;
  font-size: 24px;
  text-align: center;
  color: #212121;
  margin: 15px 0 0 0;

  >small {
    font-size: 12px;
    color: #ADADAD;
    text-transform: uppercase;
  }
`;

const Members = styled.h1`
  font-size: 12px;
  color: #ADADAD;
  text-transform: uppercase;
  text-align: center;
  font-weight: 400;
  margin-top: -6px;
  margin-bottom: 20px;
`;

const ChannelPadding = styled.div`
  width: 80%;
  `;

const Pad = styled.div`
    flex-direction: row;
    display: flex;
    justify-content: center;
    padding: 20px;
  `;

const MainText = styled.h2`
  margin: 5px 0;
`;

GroupPage.propTypes = {
  id: PropTypes.string.isRequired,
};
