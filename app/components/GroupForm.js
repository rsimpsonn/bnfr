import React from 'react';
import styled from 'styled-components';

const GroupForm = (props) =>
  <form>
    <Flex>
      <Title placeholder="Your Group's Name" />
      <Sub placeholder="Short Description" />
      <label htmlFor="check">
        Will your group be private?
        <Title name="check" type="checkbox" />
      </label>
    </Flex>
  </form>;

export default GroupForm;

const Flex = styled.div`
  flex-direction: column;

    `;

const Title = styled.input`
  font-size: 50px;
  color: #fff;
  margin: 50px 50px 0px;

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
  margin: 20px 50px 80px;
  width: 50%;
  resize: none;
  height: 80px;
  &:focus {
    outline: 0;
  }
  `;

const Private = styled.p`
  color: white;
  margin: 0px 50px;
  font-size: 14px;
`;
