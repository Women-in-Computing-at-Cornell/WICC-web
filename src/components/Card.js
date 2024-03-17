import React from 'react';
import './Card.css';

function Card(props) {
  return (
    <div className="card" style={{ backgroundColor: 'white' }}>
      <img src={props.imageUrl} alt="Event" className="image" />
      <div className="info">
        <h3 className="title">{props.title}</h3>
        <p className="description">{props.description}</p>
      </div>
    </div>
  );
}

export default Card;

