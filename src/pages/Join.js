import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Calendar from "@ericz1803/react-google-calendar";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Sponsors from "./Sponsors";
import axios from "axios";

import "./Join.css";
import { Center } from "devextreme-react/map";

const API_PATH = "http://localhost/WICC-WEB/src/action.php";

export default class Join extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
      fname: "",
      lname: "",
      email: "",
      message: "",
      mailSent: false,
      error: null,
    };
  }
  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    axios({
      method: "post",
      url: "../action.php",
      headers: { "content-type": "application/json" },
      data: this.state,
    })
      .then((result) => {
        this.setState({
          mailSent: result.data.sent,
        });
      })
      .catch((error) => this.setState({ error: error.message }));
  };

  render() {
    let styles = {
      container: {
        margin: "5%",
        fontFamily: "Inter",
      },
      row: {
        margin: "0",
        display: "flex",
        justifyContent: "space-evenly",
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
        textDecoration: "underline",
      },
    };

    return (
      <div style={styles.container}>
        <h1 style={{ fontWeight: "bold" }}>Get Involved</h1>

        <div style={styles.row}>
          <div style={styles.col}>
            <h2>Students</h2>
            <p>
              Join Our Listserve and Slack! Click on the link and press send to
              join for the Listserve!{" "}
            </p>
            <center>
              <Button
                href="mailto:wicc-l-request@cornell.edu?subject=Join"
                style={{
                  backgroundColor: "white",
                  width: "100%",
                  marginTop: "10%",
                  fontWeight: "bold",
                }}
              >
                ListServe
              </Button>
              <p></p>
              <Button
                href="https://join.slack.com/t/wiccgbodymember/shared_invite/zt-1t2uwgfld-dPVydWuvlnK4N2om4UIIcg"
                style={{
                  backgroundColor: "white",
                  width: "100%",
                  marginTop: "10%",
                  fontWeight: "bold",
                }}
              >
                G-Body Slack
              </Button>
            </center>
          </div>
          <div style={styles.col}>
            <h2>Corporate</h2>
            <p>
              Interested in hosting an event with us? Contact us at{" "}
              <a href="mailto:wicc@cornell.edu">wicc@cornell.edu</a>
            </p>
            <center>
              <p> </p>
              <Button
                href="https://drive.google.com/file/d/1s_okJqDYmfD5-3jEPCPKvbtP_TYruXXD/view?usp=sharing"
                style={{
                  backgroundColor: "white",
                  width: "100%",
                  marginTop: "10%",
                  fontWeight: "bold",
                }}
              >
                Current Sponsors
              </Button>
            </center>
          </div>
          <div style={styles.col}>
            <Link to="/membership" style={styles.link}>
              <h2>Active Membership</h2>
            </Link>
            <p>Learn how to become a WICC Active Member</p>
          </div>
        </div>
        <div style={styles.row}>
          <div style={styles.col}>
            <h2>Alumni</h2>
            <p>Join our alumni network to stay involved with WICC!</p>
            <center>
              <Button
                href="https://docs.google.com/forms/d/e/1FAIpQLSe_QtYzpq9knpmjDAj0bV3MwcsBtOy8IX7XhOHoroq0801sNw/viewform"
                style={{
                  backgroundColor: "white",
                  width: "100%",
                  fontWeight: "bold",
                }}
              >
                Join
              </Button>
            </center>
          </div>
          {/* <div style={styles.col}>
            <Link to="/prospective" style={styles.link}><h2>Prospective Students</h2>
            </Link>
            <p>Learn more about CIS at Cornell!</p>
          </div> */}
          {/* <div style={styles.col}>
            <Link to="/mentorship" style={styles.link}><h2>Mentorship</h2>
            </Link>
            <p>Learn how to become a mentor or a mentee</p>
          </div> */}
        </div>

        <Modal
          show={this.state.show}
          onHide={this.handleClose}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          contentClassName="custom-modal-style"
        >
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <center>
              <Sponsors />
            </center>
          </Modal.Body>
        </Modal>

        {/* <form action="#" >
          <label>First Name</label>
          <input type="text" id="fname" name="firstname" placeholder="Your name.."
            value={this.state.fname}
            onChange={e => this.setState({ fname: e.target.value })}
          />
          <label>Last Name</label>
          <input type=" text" id="lname" name="lastname" placeholder="Your last name.."
            value={this.state.lname}
            onChange={e => this.setState({ lname: e.target.value })}
          />


          <label>Email</label>
          <input type="email" id="email" name="email" placeholder="Your email"
            value={this.state.email}
            onChange={e => this.setState({ email: e.target.value })}
          />


          <label>Message</label>
          <textarea id="message" name="message" placeholder="Write something.."
            onChange={e => this.setState({ message: e.target.value })}
            value={this.state.message}
          ></textarea>
          <input type="submit" onClick={e => this.handleFormSubmit(e)} value="Submit" />
          <div>
            {this.state.mailSent &&
              <div>Thank you for contcting us.</div>
            }
          </div>

        </form > */}
      </div>
    );
  }
}
