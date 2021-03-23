import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Calendar from "@ericz1803/react-google-calendar";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Sponsors from './Sponsors';









import './Join.css';
import { Center } from 'devextreme-react/map';



export default class Join extends Component {
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

    let styles = {
      container: {
        margin: "5%",
        fontFamily: 'Inter'
      },
      row: {
        margin: "0",
        display: "flex",
        justifyContent: "space-evenly"
      },
      col: {
        width: "20%",
        margin: "2.3% 0",
        backgroundColor: "#9CE2D3",
        padding: "2.5%",
        paddingBottom: "5%",
        borderRadius: ".5em",
      },
      link: {
        textDecoration: 'underline'
      }

    };



    return (

      <div style={styles.container}>
        <h1>Get Involved</h1>



        <div style={styles.row}>
          <div style={styles.col}>
            <h2>Students</h2>
            <p>Join Our Listserve</p>
          </div>
          <div style={styles.col}>
            <h2>Corporate</h2>
            <p>Interested in hosting an event with us? Contact us at <a href="mailto:wicc@cornell.edu">wicc@cornell.edu</a></p>
            <center>
              <Button onClick={this.handleShow}

                style={{ backgroundColor: '#f2d2ce', width: '90%' }}>Current Sponsors</Button>

            </center>

          </div>
          <div style={styles.col}>
            <Link to="/membership" style={styles.link}><h2>Active Membership</h2>
            </Link>
            <p>Learn how to become a WICC Active Member</p>
          </div>
        </div>
        <div style={styles.row}>
          <div style={styles.col}>
            <h2 >Alumni</h2>
            <p>Join our alumni network to stay involved with WICC!</p>
            <center>
              <Button href='https://docs.google.com/forms/d/e/1FAIpQLSe_QtYzpq9knpmjDAj0bV3MwcsBtOy8IX7XhOHoroq0801sNw/viewform'

                style={{ backgroundColor: '#f2d2ce', width: '50%' }}>Join</Button>

            </center>

          </div>
          <div style={styles.col}>
            <Link to="/prospective" style={styles.link}><h2>Prospective Students</h2>
            </Link>
            <p>Learn more about CIS at Cornell!</p>
          </div>
          <div style={styles.col}>
            <Link to="/mentorship" style={styles.link}><h2>Mentorship</h2>
            </Link>
            <p>Learn how to become a mentor or a mentee</p>
          </div>
        </div>

        <Modal show={this.state.show} onHide={this.handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter"
          centered contentClassName="custom-modal-style">
          <Modal.Header closeButton>
          </Modal.Header>
          <Modal.Body>
            <center>
              <Sponsors />
            </center>
          </Modal.Body>
        </Modal>


      </div >
    );
  }
}


