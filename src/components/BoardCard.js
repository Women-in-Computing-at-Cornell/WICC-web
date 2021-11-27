import React from 'react'
import Card from 'react-bootstrap/Card'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Image from 'react-bootstrap/Image'
import './boardcard.css'

class BoardCard extends React.Component {
  constructor(props, context) {
    super(props, context)

    this.handleShow = this.handleShow.bind(this)
    this.handleClose = this.handleClose.bind(this)

    this.state = {
      show: false,
    }
  }
  handleClose() {
    this.setState({ show: false })
  }

  handleShow() {
    this.setState({ show: true })
  }

  render() {
    const { title, text, img, netId, bio, year, major } = this.props
    return (
      <div>
        <Card
          style={{ width: '15rem', height: '80%', border: 'none' }}
          onClick={this.handleShow}
        >
          <Card.Body>
            {img != undefined && (
              <Card.Img variant="top" src={img} class="boardImg" />
            )}
            <br />
            <br />
            {/* <Image src={img} alt="Card image cap" roundedCircle /> */}
            <center>
              <Card.Title>{title}</Card.Title>
              <Card.Text>{text}</Card.Text>
              {netId != undefined && (
                <a
                  href={'mailto:' + this.props.netId + '@cornell.edu'}
                  class="emailLink"
                >
                  {/* <Image src={Email} />  */}
                  {netId}@cornell.edu
                </a>
              )}
            </center>
          </Card.Body>
        </Card>

        <Modal
          show={this.state.show}
          onHide={this.handleClose}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          contentClassName="custom-modal-style"
        >
          <Modal.Header closeButton>
            {/* <Modal.Title>{title}</Modal.Title> */}
          </Modal.Header>
          <Modal.Body>
            <Container>
              <Row>
                <Col>
                  <Image
                    src={img}
                    rounded
                    style={{ width: '100%', height: 'auto' }}
                  />
                  <br />
                  <br />
                  <center>
                    <h5>{title}</h5>
                    <h6>{major}</h6>
                    <h6>{year}</h6>
                    <a
                      href={'mailto:' + this.props.netId + '@cornell.edu'}
                      class="emailLink"
                    >
                      {netId}@cornell.edu
                    </a>
                  </center>
                </Col>
                <Col xs={9}>
                  <p style={{ marginRight: '5%' }}>
                    <h4 style={{ color: '#9CE2D3', fontWeight: 'bold' }}> {text}</h4>
                    {bio}
                  </p>
                </Col>
              </Row>
            </Container>
          </Modal.Body>
        </Modal>
      </div>
    )
  }
}

export default BoardCard
