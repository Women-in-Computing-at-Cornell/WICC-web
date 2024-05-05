import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./CYC.css";
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
import cyc1 from "../../images/programs-pictures/cyc1.png";
import cyc2 from "../../images/programs-pictures/cyc2.png";
// import lunchbunch1 from "../../images/programs-pictures/lunchbunch/lunchbunch1.jpg";
// import lunchbunch2 from "../../images/programs-pictures/lunchbunch/lunchbunch2.jpg";
// import lunchbunch3 from "../../images/programs-pictures/lunchbunch/lunchbunch3.jpg";
import QuestionsCard from "./QuestionsCard.js";
import Image from "react-bootstrap/Image";

// import medal from "../../images/medal.jpg";

import "./programPages.css";

export default class CrackingYourCareer extends Component {
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
      <div>
        {/* class="page" */}
        <section class="top-section-cyc">
          <div className="top-text-div-cyc">
            {/* add in back to programs component when it exists */}
            <h2 className="top-header-cyc">Cracking Your Career (CYC)</h2>
            <p className="top-text-cyc">
              Looking for Internships? Preparing for Recruitment?
              <br />
              <br />
              Cracking Your Career (CYC) is for you! CYC is a 4-week program
              intended to expose students to career paths and recruitment
              preparation for Software Engineering (SWE) and Design.
            </p>
          </div>
        </section>

        <Container>
<<<<<<< HEAD
          <div class = "design">
              <div class = "container">
                  <div class = "design-title">Design</div>
                  <div class = "design-expl">
                    Design CYC will focus on product roles catering to User Experience (UX) design. 
                    <br/><br/>
                    CYC Design will focus on common stages: behavioral, portfolio review and design challenges.
                  </div>
              </div>
              <Image class = "design-pic"
                    src={cyc1}
                  ></Image>
          </div>
       
          <div class = "software">
            <Image class = "soft-pic"
                        src={cyc2}
            ></Image>
              <div class = "container-soft"> 
                  <div class = "soft-title">Software Engineering</div>
                  <div class = "soft-expl">
                  The SWE section of CYC will focus on finding jobs and internships, 
                  preparing your resume, getting experience, and tackling interviews 
                  and interview preparation. 
                  </div>
              </div>
          </div>
       
=======
          <div class="design-container">
            <div class="design">
              <div class="container">
                <div class="design-title">Design</div>
                <div class="design-expl">
                  Design CYC will focus on product roles catering to User
                  Experience (UX) design.
                  <br />
                  <br />
                  CYC Design will focus on common stages: behavioral, portfolio
                  review and design challenges.
                </div>
              </div>
              <Image class="design-pic" src={cyc1}></Image>
            </div>
          </div>
>>>>>>> b11cd4228fb510503009c9b1541892643fa9bdce
        </Container>
        <center>
          <h5 style={{ paddingTop: "5%" }}>Questions?</h5>
          <Container style={{ paddingRight: "10%" }}>
            <Row style={{ paddingBottom: "1%" }}>
              <Col>
                <QuestionsCard
                  name={directors[0].name}
                  title={directors[0].title}
                  img={boardHeadshots[directors[0].netId + ".jpg"]}
                  netId={directors[0].netId}
                />
              </Col>
            </Row>
          </Container>
        </center>
      </div>
    );
  }
}
