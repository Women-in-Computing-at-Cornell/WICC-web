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
import leftPic from "../../images/programs-pictures/left-pic.png";
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
        <div class = "page">
        <Container>
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
                <div class = "soft-title">Software Engineering<br/><br/></div>
                <div class = "soft-expl">
                The SWE section of CYC will focus on finding jobs and internships, 
                preparing your resume, getting experience, and tackling interviews 
                and interview preparation. 
                </div>
            </div>
        </div>
        </Container>
        
        <center class = "questions">
          <h5 style={{ color: "black", fontSize: "36px", fontFamily: "Mulish", fontWeight: "700", lineHeight: "54px", wordWrap: "break-word" }}>Questions?</h5>
          <div style = {{ color: "#212529", fontSize: "18px", fontFamily: "Mulish", fontWeight: "400", lineHeight: "27px", wordWrap: "break-word"}}>Reach out to the following WICC members for clarification regarding Cracking Your Career (CYC).</div>
          <Container style={{ paddingRight: "10%", flexDirection: "row" }}>
            <Row style={{ paddingBottom: "1%", flexDirection: "row" }}>
              <div class = "row">
                <QuestionsCard
                    name={directors[0].name}
                    title={directors[0].title}
                    img={boardHeadshots[directors[0].netId + ".jpg"]}
                    netId={directors[0].netId}
                  />
                  <QuestionsCard
                      name={directors[1].name}
                      title={directors[1].title}
                      img={boardHeadshots[directors[1].netId + ".jpg"]}
                      netId={directors[1].netId}
                    />
              </div>
            </Row>
          </Container>
        </center>
        <Container>
          {/* <div class = "event-container">
            <h5 class = "event-timeline-title">Event Timeline</h5>
            <div class = "timeline">
                <div class = "left-timeline">
                  <Image class = "left-timeline-pic"
                        src={leftPic}
                  ></Image>
                  <div style={{width: "100%", height: "100%", textAlign: "right", color: "#85E4D3", fontSize: "40px", 
                  fontFamily: "Mulish", fontWeight:"700", lineHeight: "60px"}} > Week 1 </div>
                  <br></br>
                  <div style={{color: "black", fontSize: "18px", fontFamily:"Mulish", fontWeight: "400", lineHeight: "27px"}}>
                    WICC presents a UX/UI Designer at Amazon</div>
                </div>
            </div>
          </div> */}
        </Container>
        </div>
      </div>
    );
  }
}
