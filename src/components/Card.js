import React from 'react';
import Card from 'react-bootstrap/Card';

class Card extends React.Component() {
  render() {
    const { title, text, img } = this.props;
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{title}}</Card.Title>
          <Card.Text>{text}</Card.Text>
          <Card.Img variant="bottom" src={img} />
        </Card.Body>
      </Card>
    );
  }
}

export default Card;
