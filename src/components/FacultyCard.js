import React from 'react';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



import Image from 'react-bootstrap/Image';
import './boardcard.css';



class FacultyCard extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
    };
  }
  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }


  render() {
    const { name, text, img, netId, bio, year, major } = this.props;
    return (
      <div>
        <Card style={{ width: '15rem', height: '80%', border: "none" }} >
          <Card.Body>
            {img != undefined &&
              <Card.Img variant="top" src={img} alt="Card image cap" class="boardImg" />
            }
            <br />
            <br />
            {/* <Image src={img} alt="Card image cap" roundedCircle /> */}
            <center>
              <Card.Title>{name}</Card.Title>
              <Card.Text>{text}</Card.Text>
            </center>
          </Card.Body>
        </Card>



      </div >
    );
  }
}

export default FacultyCard;
