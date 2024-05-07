import React from 'react';
import './eventCard.css';

function EventCard(props) {
  return (
    <div className="event-card" style={{
      backgroundImage: `url(${props.imageUrl})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
      <div className="event-info">
        <h3 className="event-title">{props.title}</h3>
        <p className="event-description">{props.description}</p>
      </div>
    </div>
  );
}

export default EventCard