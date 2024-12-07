import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import Card from "../../components/Card.js"
import "./CrackingYourCareer.css";
import weekzero from "../../images/timeline.jpg"
import {academic} from "../boardData";
import QuestionsCard from "./QuestionsCard.js";
import "./programPages.css";
import heroimage from "../../images/programs-pictures/cyc/cyc-hero.png";
import amazonLogo from "../../images/sponsors/Amazon.jpg";
import avalaraLogo from "../../images/sponsors/Avalara.jpg";
import vanguardLogo from "../../images/sponsors/Vanguard.jpg";
import atlassianLogo from "../../images/sponsors/Atlassian.jpg";
import designimage from "../../images/programs-pictures/cyc/design-image.png";
import sweimage from "../../images/programs-pictures/cyc/swe-image.png";

const TimelineItem = ({ week, imageSrc, description, alternate, isLast }) => {
  return (
    <div>
    <div className={`timeline-item ${alternate ? "alternate" : ""}`}>
      {/* Image Section */}
      <div className={`timeline-image-wrapper ${alternate ? "right-image" : "left-image"}`}>
        {imageSrc && <img src={imageSrc} alt={`${week} logo`} className="timeline-image" />}
      </div>

      {/* Marker Section */}
      <div className="timeline-marker">
        <div className="timeline-circle"></div>
        {!isLast && <div className="timeline-line"></div>}
      </div>

      {/* Content Section */}
      <div className="timeline-content">
        <h3 className="week-label">{week}</h3>
        <p className="description">{description}</p>
      </div>
    </div>
    </div>
  );
};

const Timeline = () => {
  const events = [
    {
      week: "Week 0",
      imageSrc: weekzero,
      description: "STEMinist Movement x WICC Careers in STEM Panel",
    },
    {
      week: "Week 1",
      imageSrc: amazonLogo,
      description: "WICC presents a UX/UI Designer at Amazon",
    },
    {
      week: "Week 2",
      imageSrc: avalaraLogo,
      description: "WICC presents a Data Scientist and Ethical AI Advocate at Avalara",
    },
    {
      week: "Week 3",
      imageSrc: vanguardLogo,
      description: "Cornell Fintech Club x WICC x Cornell Blockchain present a Senior Fintech Strategist at Vanguard",
    },
    {
      week: "Week 5",
      imageSrc: atlassianLogo,
      description: "WICC presents a Product Manager at Atlassian (WICC’s Founder!)",
    },
  ];

  return (
    <div className="timeline">
      {events.map((event, index) => (
        <TimelineItem
          key={index}
          week={event.week}
          imageSrc={event.imageSrc}
          description={event.description}
          alternate={index % 2 !== 0} // Alternate layout for even/odd items
          isLast={index === events.length - 1} // Add logic to detect last item
        />
      ))}
    </div>
  );
};

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
      <div>
        {/* header */}
      <div className="hero">
        <div className="hero-text">
        <Link to="/programs">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  d="M15 18.5L9 12.5L15 6.5"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Back to Programs page
            </Link>
            <br/> <br/>
          <h1 style={{ marginBottom: "1.2rem", fontWeight: "900", fontSize: "3rem"}}> Cracking Your Career (CYC) </h1>
          <p>
          Looking for Internships? Preparing for Recruitment?
          <br/> <br/>
          Cracking Your Career (CYC) is the program for you! CYC is a 4-week program 
          intended to expose students to career paths and recruitment 
          preparation for Software Engineering (SWE) and Design. 
          </p>
        </div>
        <div className="hero-image">
          <img src={heroimage} style={{ width: "100%" }}></img>
        </div>
      </div>

      {/* page contents */}
      <div className="page">
      <div className="box1">
            <img src={designimage} alt="Outreach" className="image" />
            <div>
              <h1 className="card-title">Outreach ↗</h1>
              <p className="card-description">
              Be a part of making a difference and empowering others
              </p>
            </div>
          </div>
        {/* timeline */}
      <h1 style={{ marginBottom: "1.2rem", fontWeight: "900", fontSize: "2rem" }}>
        Event Timeline
      </h1>
      <Container>
        <Row>
          <Col>
            <Timeline />
          </Col>
        </Row>
      </Container>
        <br />
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
              <Row style={{paddingBottom:"1%"}}>
                <QuestionsCard
                 name={directors[1].name} 
                 title={directors[1].title} 
                 img={(boardHeadshots[directors[1].netId + '.jpg'])} 
                 netId={directors[0].netId} />
              </Row>
            </Row>
          </Container>
        </center>
      </div>
      </div>
    );
  }
}
