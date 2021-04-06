import React from 'react';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



import Image from 'react-bootstrap/Image';
import './programPages.css';



class QuestionsCard extends React.Component {


  render() {
    const { name, title, img, netId } = this.props;
    return (
      <div>
        <Card style={{ width: '15rem', height: '80%', border: "none" }} >
          <Card.Body>
            <Card.Img variant="top" src={img} class="questionsImg" />
            <br />
            {/* <br /> */}
            <center>
              <Card.Text>{name}, {title}</Card.Text>
              <Card.Text>
                <a href={"mailto:" + this.props.netId + "@cornell.edu"} class="emailLink">
                  {/* <Image src={Email} />  */}
                  {netId}@cornell.edu

                </a>
              </Card.Text>
            </center>
          </Card.Body>
        </Card>

      </div >
    );
  }
}

export default QuestionsCard;
