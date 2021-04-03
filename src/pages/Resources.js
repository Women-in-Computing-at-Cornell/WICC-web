import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import ReactGoogleSlides from "react-google-slides";
import Nav from 'react-bootstrap/Nav';
import './resources.css';





export default class Resources extends Component {
  render() {


    return (
      <div class='container'>
        <h1 style={{ paddingBottom: "2%" }}>Resources</h1>
        <h5 style={{ paddingBottom: "3%" }}>Curated list of resources we hope will help you pursue a
        career in technology</h5>
        <Container>
          <Row>
            <Col>

              <Nav defaultActiveKey="/home" style={{ backgroundColor: "rgba(156, 226, 211, 0.69)", width: "55%" }}>
                <h4 style={{ color: "black", padding: "6%", }}>Interest</h4>
                <div class='linkResource'>
                  <Nav.Link style={{ color: "#636363" }} href="/home">Consulting</Nav.Link>
                  <Nav.Link style={{ color: "#636363" }} eventKey="link-1">Data Science and Engineering</Nav.Link>
                  <Nav.Link style={{ color: "#636363" }} eventKey="link-2">Engineering</Nav.Link>
                  <Nav.Link style={{ color: "#636363" }} eventKey="link-2">Entrepreneurship</Nav.Link>
                  <Nav.Link style={{ color: "#636363" }} eventKey="link-2">Inspirational Women</Nav.Link>
                  <Nav.Link style={{ color: "#636363" }} eventKey="link-2">Product Design</Nav.Link>
                  <Nav.Link style={{ color: "#636363" }} eventKey="link-2">Research</Nav.Link>
                </div>
                <h4 style={{ color: "black", padding: "6%", }}>Workshops</h4>
                <div class='linkResource'>
                  <Nav.Link style={{ color: "#636363" }} href="/home">Personal Brand Workshops</Nav.Link>
                  <Nav.Link style={{ color: "#636363" }} eventKey="link-1">Git Workshop</Nav.Link>
                  <Nav.Link style={{ color: "#636363" }} eventKey="link-2">Intro to Web Dev & Online Portfolios</Nav.Link>
                  <Nav.Link style={{ color: "#636363" }} eventKey="link-2">Career Fair</Nav.Link>
                  <Nav.Link style={{ color: "#636363" }} eventKey="link-2"> Open Source</Nav.Link>
                  <Nav.Link style={{ color: "#636363" }} eventKey="link-2">CornellAppDev Product Design</Nav.Link>
                  <Nav.Link style={{ color: "#636363" }} eventKey="link-2">Intro to Career Fair and Soft Skills</Nav.Link>
                  <Nav.Link style={{ color: "#636363" }} eventKey="link-2">Technical Interviews: Crash Course</Nav.Link>
                  <Nav.Link style={{ color: "#636363" }} eventKey="link-2">Resume Workshops</Nav.Link>
                </div>
              </Nav>

            </Col>
            <Col >
              <h4 style={{ paddingBottom: "2%" }}>Most Popular</h4>
              <a href='https://www.amazon.com/Cracking-Coding-Interview-Programming-Questions/dp/0984782850/ref=pd_lpo_sbs_14_t_0?_encoding=UTF8&psc=1&refRID=JTBDC1H9DC9ADBR5BX3R'>
                <p style={{ color: "#636363" }}>Cracking the Coding Interview by Gayle Laakmann McDowell</p>
              </a>
              <a href='https://www.amazon.com/Cracking-PM-Interview-Product-Technology/dp/0984782818/ref=sr_1_1?s=books&ie=UTF8&qid=1511762977&sr=1-1&keywords=cracking+the+pm+interview'>
                <p style={{ color: "#636363" }}>Cracking the PM Interview by Gayle Laakmann McDowell and Jackie Bavaro</p>
              </a>
              <a href='https://www.hackerrank.com/'>
                <p style={{ color: "#636363" }}>Hackerrank Coding Practice</p>

              </a>
              <a href='https://ghc.anitab.org/'>
                <p style={{ color: "#636363" }}>Grace Hopper Conference</p>
              </a>
              <a href='https://github.com/Ladies-Storm-Hackathons/GHC-Scholarships' class="tab1">
                <p style={{ color: "#636363" }}>&emsp;&emsp; - Scholarships</p>
              </a>
            </Col>
          </Row>

        </Container>

      </div>
    );
  }
}
