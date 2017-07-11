import React, { Component } from 'react';
import styled from 'styled-components';
import DropzoneComponent from 'react-dropzone-component';

export default class GroupForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      accepted: undefined,
    };
  }

  render() {
    const compConfig = {
      iconFiletypes: ['.jpg', '.png'],
      showFiletypeIcon: true,
      postUrl: '/uploadHandler',
    };

    const eventHandlers = {
      drop: (file) => this.setState({ accepted: file }),
    };

    return (
      <form>
        <Flex>
          <Title placeholder="Your Group's Name" />
          <Sub placeholder="Short Description" />
          <label htmlFor="check">
            <SubmitText>Will your group be private?</SubmitText>
            <Title name="check" type="checkbox" />
          </label>
          <DropzoneComponent
            config={compConfig}
            eventHandlers={eventHandlers}
          />
          {typeof this.state.accepted !== 'undefined' &&
            <img src={this.state.accepted} />}
          <Submit onClick={null}>
            <SubmitText>Create your group</SubmitText>
          </Submit>
        </Flex>
      </form>
    );
  }
}

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px;

    `;

const Title = styled.input`
  font-size: 50px;
  color: #fff;

  &:focus {
    outline: 0;
  }
  `;

const Sub = styled.textarea`
  border-radius: 5px;
  border: solid 2px;
  padding: 10px;
  font-size: 14px;
  color: #fff;
  margin: 20px 0;
  width: 500px;
  resize: none;
  height: 80px;
  &:focus {
    outline: 0;
  }
  `;

const CoverPhoto = styled.input`
    border-radius: 14px;
    margin: 10px 0;

    &:focus {
      outline: 0;
    }
    `;

const Submit = styled.button`
          margin: 20px 0px 0px;
          display: flex;
          justify-content: flex-start;
          align-items: flex-start;
          color: #fff;

          &:focus {
            outline: 0;
          }

          &:active {
            transform: scale(0.96);
          }
            `;

const SubmitText = styled.p`
          font-weight: 300;
          `;

const fileLabel = styled.label`
  font-weight: 300;
  color: white;
  background-color: black;
  display: inline-block;
  `;

const file = styled.input`
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
  `;
