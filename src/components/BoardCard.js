import React from 'react';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



import Image from 'react-bootstrap/Image';
import './boardcard.css';



class BoardCard extends React.Component {
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
    const { title, text, img, netId, bio } = this.props;
    return (
      <div>
        <Card style={{ width: '15rem', border: "none" }} onClick={this.handleShow}>
          <Card.Body>
            <Card.Img variant="top" src={img} alt="Card image cap" class="boardImg" />
            <br />
            <br />
            {/* <Image src={img} alt="Card image cap" roundedCircle /> */}
            <center>
              <Card.Title>{title}</Card.Title>
              <Card.Text>{text}</Card.Text>
              <a href={"mailto:" + this.props.netId + "@cornell.edu"} class="emailLink">
                {/* <Image src={Email} />  */}
                {netId}@cornell.edu

              </a>
            </center>
          </Card.Body>
        </Card>



        <Modal show={this.state.show} onHide={this.handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter"
          centered contentClassName="custom-modal-style">
          <Modal.Header closeButton>
            <center><Modal.Title>{title}</Modal.Title></center>

          </Modal.Header>
          <Modal.Body>
            <Container>
              <Row >
                <Col>
                  <Image src={img} alt="Card image cap" rounded style={{ width: "100%", height: 'auto' }} />
                  <br /><br />
                  <h6>{text}</h6>
                  <a href={"mailto:" + this.props.netId + "@cornell.edu"} class="emailLink">
                    {netId}@cornell.edu
                  </a>
                </Col>
                <Col xs={9}>

                  <p style={{ marginRight: "5%" }}>
                    {bio}
                  </p>


                </Col>
              </Row>
            </Container>
          </Modal.Body>
        </Modal>
      </div >
    );
  }
}

export default BoardCard;
