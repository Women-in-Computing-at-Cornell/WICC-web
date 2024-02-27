import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import {
  presidents,
  operations,
  corporate,
  academic,
  brand,
  outreach,
  community,
  advisors,
} from "../boardData";
import QuestionsCard from "./QuestionsCard.js";

import Image from "react-bootstrap/Image";

import medal from "../../images/medal.jpg";

import "./programPages.css";

export default class Membership extends Component {
  render() {
    let sec = operations.members.find(
      (record) => record.position === "Secretary"
    );

    function importAll(r) {
      let images = {};
      r.keys().forEach((item) => {
        images[item.replace("./", "")] = r(item);
      });
      return images;
    }

    const boardHeadshots = importAll(
      require.context("../../images/headshots/board", false, /\.jpg/)
    );

    return (
      <div class="page">
        <h1>Active Membership</h1>
        <p style={{ paddingRight: "5%", paddingTop: "2%" }}>
          WICC Active Membership aims to provide anyone in our community with a
          more personalised WICC experience. The guidelines and requirements for
          becoming a WICC Active Member are created to help dedicated members
          get the most out of the available opportunities. We would especially
          like to thank the members who have completed the requirements below
          with rewards delineated in the “Perks” section. We look forward to
          your time with us!
        </p>
        <p style={{ fontSize: "100%", color: "#8A8A8A" }}>
          We’d like to note that the WICC community is open to everyone
          regardless of their major or gender or membership status. We still
          welcome you to join us as a general body member at WICC events even if
          you can’t commit to being an active member.
        </p>
        <br />

        <Container>
          <Row style={{ paddingBottom: "1%" }}>
            <Col xs lg="3" style={{ paddingRight: "0%", paddingLeft: "0%" }}>
              <h3>Perks</h3>
              <div class="sub">
                <p>
                  As soon as you complete the requirements, you will be named an
                  Active Member. Enjoy the perks hereafter till the end of the
                  next semester.
                </p>
                <ul>
                  <li>Get access to the Active Member Slack</li>
                  <li>Get access to the Alumni directory</li>
                  <li>
                    Receive invitations to corporate events at the company’s
                    request
                  </li>
                  <li>
                    Be invited to a member-only social event at the end of the
                    semester
                  </li>
                  <li>Be able to take part in the active member initiative </li>
                </ul>
                <center>
                  <Image
                    src={medal}
                    height="50%"
                    width="50%"
                    style={{ marginTop: "3%" }}
                  />
                </center>
              </div>
            </Col>
            <Col
              xs
              lg="6"
              style={{
                paddingLeft: "40px",
                paddingRight: "40px",
              }}
            >
              <h3>Requirements</h3>
              <div class="sub">
                <ul>
                  <li>
                    Have a positive and supportive outlook on all forms of
                    diversity
                  </li>
                  <li>
                    Develop a growth mindset in being an open, aware and helpful
                    individual
                  </li>
                  <li>
                    Represent WICC values in-person and online, knowing that
                    what you say/post reflects both yourself and the
                    organization
                  </li>
                  <li>
                    <strong>Uphold the WICC mission statement:</strong> Women in
                    Computing at Cornell strives to make computing inclusive for
                    all. We aim to foster a supportive community of women* and
                    allies equipped with the resources needed to recognize and
                    overcome challenges. By creating opportunities for technical
                    and leadership growth, we work to ensure that people of all
                    identities are able to discover and pursue their interests
                    and talents in order to positively impact the future of
                    tech.
                    <ul>*All gender identities are welcome and supported!</ul>
                  </li>
                  <li>
                    Actively attend and engage at WICC events/programs
                    throughout the semester. You must fulfill any one of the
                    following to be considered an Active Member:
                    <ul>
                      <li>
                        Be part of the{" "}
                        <span style={{ fontWeight: "bold" }}>
                          Lunch Bunch, Mentorship Circles, Cornell Girls Who
                          Code, Technical Committee, Photo & Video Committee,
                          Cracking Your Career
                        </span>{" "}
                        or{" "}
                        <span style={{ fontWeight: "bold" }}>
                          Corporate Committee
                        </span>
                      </li>
                      <li>
                        Attend{" "}
                        <span style={{ fontWeight: "bold" }}>four events</span>{" "}
                        of any type during the semester
                      </li>
                      {/* (Note: Maximum 2 Corporate Events would be counted towards this total) */}
                    </ul>
                  </li>
                </ul>
              </div>
              <br />
            </Col>
            <Col xs lg="3">
              {" "}
              <h3>Tracking and Progress</h3>
              <p class="sub">
                {" "}
                Once you sign in at any event using the event attendance form,
                we will track your attendance at events and see if the above
                requirements are fulfilled. Be sure to sign-in when you attend
                an event! We will inform you of the type of event you are
                attending (Corporate Event or Non-Corporate Event). We will also
                keep you updated with your progress monthly and give you an
                opportunity to fill out a feedback form. Do let us know about
                your experience!
              </p>
              <h3>Validity of Active Membership</h3>
              <p class="sub">
                {" "}
                As soon as you complete the above requirements, you will be
                named an Active Member. Enjoy the perks hereafter till the end
                of the next semester.
                <br />
                <br />
                Example: If you sign-up in Fall 2023 and complete the
                requirements, then you will receive the perks for the rest of
                the semester and in Spring 2023.
              </p>
            </Col>
            <p>For more updated detail please have a look at: </p>
            <Button
              href="https://docs.google.com/document/d/1wSNiZxuY52rtOco0Vnq7-XGKzADbNxZoukmnFOX3BkI/edit"
              style={{
                backgroundColor: "white",
                width: "100%",
                margin: "10px",
              }}
            >
              Active Member Guidelines and Requirements Fall 2023
            </Button>
          </Row>
        </Container>
        <h3 style={{ marginBottom: "3%" }}>FAQ</h3>
        <p class="head">
          What happens if you sign-up mid-way through a semester?
        </p>
        <p class="sub">
          We welcome you to sign-up anytime during a semester. When you sign-up,
          we add in all the events you attended since the start of that
          semester. As mentioned before, you must complete the requirements
          before you become an Active Member.
        </p>
        <br />
        <p class="head">Is it mandatory to attend G-Body discussions?</p>
        <p class="sub">
          We highly encourage our members to attend our G-Body discussions but
          it is not required. Our G-Body discussions are held monthly.
        </p>
        <br />
        <p class="head">How can you keep up with our upcoming events?</p>
        <p class="sub">For updates on our events, you can:</p>
        <ul class="sub">
          <li>
            Subscribe to our listserv by sending an email titled ’join’ to
            wicc-l-request@cornell.edu "{" "}
            <Button
              href="mailto:wicc-l-request@cornell.edu?subject=Join"
              style={{
                backgroundColor: "white",
                width: "50%",
                margin: "10px",
                fontWeight: "bold",
              }}
            >
              Join ListServe
            </Button>
          </li>
          <li>
            Check our{" "}
            <Link to="/calendar">
              {" "}
              <strong> Calendar </strong>
            </Link>
          </li>
          <li>
            Follow us on{" "}
            <a href="https://www.facebook.com/CornellWomenInComputing/">
              <strong>Facebook</strong>
            </a>{" "}
            and{" "}
            <a href="https://www.instagram.com/wiccornell/">
              <strong>Instagram</strong>
            </a>
          </li>
        </ul>
        <p class="sub">
          We will keep you updated with all the required information and
          progress! Meanwhile, enjoy your experience with WICC and we look
          forward to interacting with you!
        </p>

        <center>
          <h5 style={{ paddingTop: "10%" }}>Questions?</h5>
          <QuestionsCard
            name={sec.name}
            title={sec.title}
            img={boardHeadshots[sec.netId + ".jpg"]}
            netId={sec.netId}
          />
        </center>
      </div>
    );
  }
}
