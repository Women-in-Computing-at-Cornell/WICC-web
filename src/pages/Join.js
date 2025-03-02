import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Sponsors from "./Sponsors";
import axios from "axios";
import joinushero from "../images/joinushero.jpg";

import "./Join.css";

const JoinUs = () => {
  return (
    <div className="hero">
      <div className="ht hero-text">
        <h1
          style={{
            marginBottom: "1.2rem",
            fontWeight: "900",
            fontSize: "3rem",
          }}
        >
          Join Us
        </h1>
        <p>
          Join us in empowering and uplifting students in the tech community at
          Cornell. At WICC, we are committed to providing a supportive space for
          growth, collaboration, and leadership. Connect with like-minded
          individuals, gain mentorship, and make a lasting impact in the tech
          world.
        </p>
      </div>
      <div className="hero-image shorthero">
        <img src={joinushero} style={{ width: "100%" }} />
      </div>
    </div>
    //</div>
  );
};

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
        margin: "0%", // Changes the top margin for hero image
        fontFamily: "Inter",
        paddingBottom: "5%",
      },
      row: {
        display: "flex",
        flexWrap: "nowrap", // Prevents wrapping into multiple rows
        overflowX: "auto", // Enables horizontal scrolling if content overflows
        whiteSpace: "nowrap",
        gap: "50px", // Adds 50px gap between columns
        paddingBottom: "10px", // Prevents scrollbar from overlapping content
        margin: "0% 4%",
      },
      col: {
        minWidth: "320px", // Each column has a fixed minimum width
        maxWidth: "320px",
        flex: "0 0 auto", // Prevents columns from shrinking or growing
        backgroundColor: "#9CE2D3",
        padding: "30px",
        borderRadius: ".5em",
        textAlign: "center",
        wordWrap: "break-word", // Ensures text wraps inside the column
        overflowWrap: "break-word",
        whiteSpace: "normal", // Allows text to wrap instead of staying on one line
      },
      link: {
        textDecoration: "underline",
      },
      reqCol: {
        display: "flex",
        width: "363px",
        paddingRight: "50px",
        flexDirection: "column",
        alignItems: "flex-start",
        alignSelf: "stretch",
        borderRight: "4px solid var(--1, #9CE2D3)",
      },
    };

    return (
      <div style={styles.container} className="joinContainer">
        <JoinUs />
        <br />
        <h1
          style={{
            maxWidth: "100%",
            height: "auto",
            fontWeight: "bold",
            margin: "3% 4% 0 4%",
          }}
          className="h"
        >
          Get Involved
        </h1>
        <br />

        <div style={styles.row} className="scroll-container">
          <div style={styles.col}>
            <h2>Students</h2>
            <p>
              Join Our Listserve and Slack! Click on the link and press send to
              join for the Listserve!
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
              {/* <p></p> */}
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

        <section
          className="requirements"
          style={{
            display: "flex",
            padding: "50px 100px",
            flexDirection: "column",
            gap: "25px",
          }}
        >
          <h1>
            <b>Requirements</b>
          </h1>
          <p>
            Once you complete the requirements below, you will be named an
            Active Member
          </p>
          <div
            style={{
              display: "flex",
              padding: "20 px 0px",
              gap: "50px",
              alignSelf: "center",
             
            }}
          >
            <div style={styles.reqCol}>
              <h1 style={{ paddingBottom: "20px" }}>
                <b>01</b>
              </h1>
              <ul style={{ padding: "5px" }}>
                <li>
                  Have a <b>positive and supportive outlook</b> on all forms of
                  diversity.
                </li>
                <li>
                  Develop a <b>growth mindset</b> in being an open, aware, and
                  helpful individual.
                </li>
                <li>
                  <b>Represent WICC values</b> in-person and online, knowing
                  that what you say/post reflects both yourself and the
                  organization.
                </li>
              </ul>
            </div>
            <div style={styles.reqCol}>
              <h1 style={{ paddingBottom: "20px" }}>
                <b>02</b>
              </h1>
              <p>
                Uphold the <b>WICC mission statement</b>
              </p>
              <p>
                "Women in Computing at Cornell strives to make computing
                inclusive for all. We aim to foster a supportive community of
                women* and allies equipped with the resources needed to
                recognize and overcome challenges. By creating opportunities for
                technical and leadership growth, we work to ensure that people
                of all identities are able to discover and pursue their
                interests and talents in order to postiitvely impact the future
                of tech."
              </p>
              <p>*All gender identities are welcome and supported!</p>
            </div>
            <div style={styles.reqCol}>
              <h1 style={{ paddingBottom: "20px" }}>
                <b>03</b>
              </h1>
              <p>
                Actively attend and engage at WICC events/programs throughout
                the semester. You must fulfill any one of the following to be
                considered an Active Member:
              </p>

              <p>
                <strong>
                  1. Attend 80% (or at the discretion of the directors) of
                  either Lunch Bunch, Mentorship Circles, Cornell Girls Who
                  Code, Photo & Film Committee, Cracking Your Career or
                  Technical Committee.
                </strong>
              </p>
              <p>OR</p>
              <p>
                <b> 2. Attend 3 Events of any type during the semester.</b>
              </p>
              <p>
                <b>The First Step:</b>
                <br />
                Join our ListServe to recieve updates of event information by
                sending an empty email titled "JOIN WICC" with your Cornell
                email address to
                <br />
                <b style={{ textDecoration: "underline" }}>
                  wicc-l-request@cornell.edu
                </b>
              </p>
              <button
                style={{
                  borderRadius: " 30px",
                  background: " #9CE2D3",
                  border: "0px", 
                  padding: "5px"
  
                }}
              >
                Send the Auto Join Email
              </button>
            </div>
          </div>
          <p>
            For more detailed information, please check the {" "}
            <a href="" target="_blank" style={{ textDecoration: "underline", fontWeight:"800"}}>
               Active Member Guidelines and Requirements
            </a>
          </p>
        </section>
      </div>
    );
  }
}
