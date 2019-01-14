import React from 'react';
import { EventDate } from './EventDate';

import './event.css';

export const Event = ({ startDate, title, background }) => (
  <div className="col-xs-12 col-sm-4">
    <EventDate date={startDate}></EventDate>
    <div>
      <img src={background} className="event__img" height={150}></img>
      <h5 className="event__title">{title}</h5>
    </div>
  </div>
);

// Event.propTypes = {
// startDate: string.isRequired,
// title: string.isRequired,
// background: string.isRequired,
// };