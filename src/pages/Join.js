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
      openFAQ: null,
    };
  }
  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  toggleFAQ(index) {
    this.setState({ openFAQ: this.state.openFAQ === index ? null : index });
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
        margin: "0%",
        fontFamily: "Inter",
        paddingBottom: "5%",
      },
      faqItem: {
        borderBottom: "1px solid #9CE2D3",
        padding: "10px",
        cursor: "pointer",
      },
      faqContent: {
        padding: "10px",
        display: "none",
      },
      faqContentOpen: {
        padding: "10px",
        display: "block",
      },
      timelineContainer: {
        display: "flex",
        gap: "20px",
        marginInline: "5%",
        paddingTop: "5%",
      },
      timelineBox: {
        flex: 1,
        border: "2px solid #9CE2D3",
        padding: "20px",
        borderRadius: "10px",
      },
    };

    const faqs = [
      {
        question: "What to expect if you were made an active member in Spring 2024?",
        answer: "As an active member, you will have access to exclusive events, mentorship opportunities, and leadership programs.",
      },
      {
        question: "What happens if you sign-up mid-way through a semester?",
        answer: "If you sign up mid-semester, you will still be able to participate in events but may need to complete extra steps to become an active member.",
      },
      {
        question: "Is it mandatory to attend G-Body discussions?",
        answer: "G-Body discussions are encouraged for community building but are not mandatory.",
      },
      {
        question: "How can you keep up with our upcoming events?",
        answer: "Stay updated through our email newsletters and social media channels.",
      },
    ];

    return (
      <div style={styles.container} className="joinContainer">
        <JoinUs />
        <br />

        <div className="page1">
          <h1
            style={{
              maxWidth: "100%",
              height: "auto",
              fontWeight: "bold",
              margin: "3% 4% 0 4%",
              fontSize: "56px",
            }}
            className="h"
          >
            Membership Opportunities
          </h1>
          <br />
          <div style={styles.timelineContainer}>
            <div style={styles.timelineBox}>
              <h3>Track Your Own Progress</h3><br />
              <p>Be sure to sign-in when you attend an event!. We will also keep you updated with your progress every month and give you an opportunity to fill out a feedback form. Do let us know about your experience!</p>
            </div>
            <div style={styles.timelineBox}>
              <h3>Validity of Active Membership</h3><br />
              <p>As soon as you complete the above requirements, you will be named an Active Member. Enjoy the perks hereafter till the end of the next semester.</p>
            </div>
          </div>
          <br />
          <div style={{ marginInline: "5%" }}>
            <h2 style={{ paddingTop: "5%", fontWeight: "bold", textAlign: "left", fontSize: "36px" }}>Frequently Asked Questions</h2>
            {faqs.map((faq, index) => (
              <div key={index} style={styles.faqItem} onClick={() => this.toggleFAQ(index)}>
                <p style={{ fontSize: "18px", fontWeight: "bold", display: "flex", justifyContent: "space-between" }}>
                  {faq.question}
                  <span>{this.state.openFAQ === index ? "▲" : "▼"}</span>
                </p>
                <div style={this.state.openFAQ === index ? styles.faqContentOpen : styles.faqContent}>{faq.answer}</div>
              </div>
            ))}
          </div>
          <br />
          <div style={{ marginInline: "5%" }}>
            <h2 style={{ paddingTop: "5%", fontWeight: "bold", textAlign: "left", fontSize: "36px" }}>More Questions?</h2>
            <br />
            <p style={{ textAlign: "left", fontSize: "18px" }}>
              Reach out to WICC via email @wicc.cornell.edu for clarification regarding Active Membership.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
