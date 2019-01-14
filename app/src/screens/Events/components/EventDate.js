import React from 'react';

import './event.css';

export const EventDate = ({ date }) => (
  <div className="event__date">
    {date}
  </div>
);

// EventDate.propTypes = {
//   date: string.isRequired,
// };