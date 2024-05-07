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
import crackingyourcareer from "../../images/programs-pictures/crackingyourcareer.png";
// import lunchbunch1 from "../../images/programs-pictures/lunchbunch/lunchbunch1.jpg";
// import lunchbunch2 from "../../images/programs-pictures/lunchbunch/lunchbunch2.jpg";
// import lunchbunch3 from "../../images/programs-pictures/lunchbunch/lunchbunch3.jpg";
import QuestionsCard from "./QuestionsCard.js";
import Image from "react-bootstrap/Image";

// import medal from "../../images/medal.jpg";

import "./programPages.css";

export default class CrackingYourCareer extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    let directors = academic.members.filter(
      (record) => record.position === "Career Development Co-Director"
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
        <h1>Cracking Your Career</h1>

        <Container>
          <Row style={{ paddingBottom: "1%" }}>
            <Col xs lg="6" style={{ paddingRight: "5%", paddingLeft: "0%" }}>
              <p style={{ paddingRight: "5%", paddingTop: "2%" }}>
                Trying to find internships? Preparing for recruitment? Cracking
                Your Career (CYC) is for you! CYC is a 4-week program intended
                to expose students to career paths and recruitment preparation
                for Software Engineering (SWE) and Design. The SWE section of
                CYC will focus on finding jobs and internships, preparing your
                resume, getting experience, and tackling interviews and
                interview preparation. Design CYC will focus on product roles
                catering to User Experience (UX) design. CYC Design will focus
                on common stages: behaviorals, portfolio review and design
                challenges.{" "}
              </p>
              <br />
              {/* <h4 style={{ paddingTop: "5%" }} >Times</h4> */}

              {/* <div class='sub'>
                <p>Mondays, 11:15AM-12:05PM EST</p>
                <p>Wednesdays, 10:10AM-11:00AM EST</p>
                <p>Thursdays, 1:25PM-2:15PM EST</p>

              </div> */}

              {/* <h5 style={{ paddingTop: '25%' }}>Applications are closed for this semester.</h5> */}
            </Col>
            <Col>
              <center>
                <Image
                  src={crackingyourcareer}
                  style={{ width: "70%", height: "auto", paddingBottom: "2%" }}
                ></Image>
                <h5>Program Timeline</h5>
                <p class="sub">
                  Wednesdays Oct 4th - Oct 25th from 4:15 - 5:15pm
                </p>
              </center>
            </Col>
          </Row>
        </Container>
        <br />
        {/* <h3>Testimonials</h3> */}

        {/* <Container>
          <Row style={{ paddingBottom: "1%" }}>
            <div class='vertLine'>

            </div>

            <Col style={{ paddingRight: "5%", paddingLeft: "0%" }}>
              <p >
                "The program was a unique and enriching opportunity to connect with faculty. I’ve learned a great deal about different journeys in tech and feel more inspired to forge my own path."
              </p>
              <p class='sub'>~ Candice ’22</p>

            </Col>
            <div class='vertLine'>

            </div>
            <Col style={{ paddingRight: "5%", paddingLeft: "0%", }}>
              <p >
                "I loved Lunch Bunch! I found a community of hardworking and inspiring women, and got to learn about the journey of many successful professors and the cool projects that they’re working on."
              </p>
              <p class='sub'>~ Emory ’24</p>
            </Col>
            <div class='vertLine'>

            </div>

            <Col style={{ paddingRight: "5%", paddingLeft: "0%", }}>
              <p >
                "Lunch Bunch was an incredible opportunity for me to directly hear from professors in Cornell Computing, and take away valuable lessons from their varied experiences, journeys and advice!"
              </p>
              <p class='sub'>~ Shreya ’24</p>
            </Col>
          </Row>
        </Container> */}
        <center>
          <h5 style={{ paddingTop: "5%" }}>Questions?</h5>
          <Container style={{ paddingRight: "10%" }}>
            <Row style={{ paddingBottom: "1%" }}>
              <Col>
                {/* <Image src={(boardHeadshots[directors[0].netId + '.jpg'])} roundedCircle style={{ width: "25%", height: 'auto' }}></Image>
                <br /><br />
                <div class='boardText'>
                  <p >{directors[0].name}, {directors[0].title}</p>
                  <a href={"mailto:" + directors[0].netId + "@cornell.edu"} class="emailLink">
                    {directors[0].netId}@cornell.edu
                  </a>

                </div> */}
                <QuestionsCard
                  name={directors[0].name}
                  title={directors[0].title}
                  img={boardHeadshots[directors[0].netId + ".jpg"]}
                  netId={directors[0].netId}
                />
              </Col>
              <Col>
                {/* <Image src={(boardHeadshots[directors[1].netId + '.jpg'])} roundedCircle style={{ width: "25%", height: 'auto' }}></Image>
                <br /><br />
                <div class='boardText'>
                  <p > {directors[1].name}, {directors[1].title}</p>
                  <a href={"mailto:" + directors[1].netId + "@cornell.edu"} class="emailLink">
                    {directors[1].netId}@cornell.edu
                  </a>
                </div> */}
                {/* <QuestionsCard name={directors[1].name} title={directors[1].title} img={(boardHeadshots[directors[1].netId + '.jpg'])} netId={directors[0].netId} /> */}
              </Col>
            </Row>
          </Container>
        </center>
      </div>
    );
  }
}
