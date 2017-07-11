import React from 'react';
import styled from 'styled-components';

const GroupSettingsForm = (props) =>
  <div>
    <Title>Your Group</Title>
    <Input placeholder="Name" />
    <Desc placeholder="Description" />
    <Submit><SubmitText>Submit</SubmitText></Submit>
  </div>;

const Title = styled.h3`
    margin: 0px 5px 5px;
    text-align: left;
    font-size: 28px;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    font-weight: 400;
    color: #212121;
    `;

const Desc = styled.textarea`
    border-radius: 8px;
    padding: 8px;
    border: solid #F2F2F2 2px;
    margin: 5px;
    resize: none;

    &:focus {
      outline: 0;
    }
    `;

const Submit = styled.button`
    margin: 6px 0px 0px;
    border-radius: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #55DEEA;
    padding: 8px 14px 8px 14px;

    &:focus {
      outline: 0;
    }

    &:active {
      transform: scale(0.96);
    }
      `;

const SubmitText = styled.p`
    margin: 0;
    color: #fff;
    font-size: 12px;
    `;

const Input = styled.input`
      border-radius: 8px;
      padding: 8px;
      border: solid #F2F2F2 2px;
      margin: 5px;

      &:focus {
        outline: 0;
      }
      `;

export default GroupSettingsForm;
