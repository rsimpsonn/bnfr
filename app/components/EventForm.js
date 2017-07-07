import React from 'react';
import styled from 'styled-components';

const EventForm = (props) =>
  <div>
    <input placeholder="Event Name" />
    <input placeholder="Event Date" />
    <input placeholder="Event Time" />
    <textarea placeholder="Event Description" />
  </div>;

export default EventForm;
