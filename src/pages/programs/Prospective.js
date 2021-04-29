import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { boardData } from '../boardData';
import QuestionsCard from "./QuestionsCard.js";






import Image from 'react-bootstrap/Image'

import medal from "../../images/medal.jpg";


import './programPages.css';


export default class Prospective extends Component {
  render() {
    let directors = boardData.filter(record => record.title === "Underclassmen Outreach Co-Director")


    function importAll(r) {
      let images = {};
      r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
      return images;
    }

    const boardHeadshots = importAll(require.context('../../images/headshots/board', false, /\.jpg/));


    return (
      <div class='page'>
        <h1>Prospective Students</h1>

        <Container>
          <Row style={{ paddingBottom: "4%" }}>
            <Col xs lg="6" style={{ paddingRight: "5%", paddingLeft: "0%" }}>
              <p style={{ paddingRight: '5%', paddingTop: '2%' }}>We're excited that you are interested in Cornell and would love to give you the opportunity to hear more about the CIS programs here. If you wish to meet with a board member of our organization to learn more about the university, computing at Cornell, or clubs like WICC, please fill out the form below!
              </p>
              <p>We’d like to note that the WICC community and this opportunity is open to everyone regardless of their prospective major, gender or application status at Cornell.</p>
              <br />
              <Button href='https://docs.google.com/forms/d/e/1FAIpQLSejb77Tscmk15kGtMnMEt5_ms9zaXmMB5PPiLw382ZAd6rI_Q/viewform'>Meet with us!</Button>


            </Col>
            <Col >
              <h3>Requirements</h3>
              <p style={{ paddingRight: '5%', paddingTop: '2%' }}>WICC is dedicated towards fostering an inclusive space for individuals of all identities to feel empowered to speak on issues in the CIS community, both on- and off-campus. We hold monthly discussions encompassing topics such as diversity in tech, the definition of success, and more. It is our goal to have a greater number of voices heard and to have a greater breadth of women and allies voicing their opinions at the table.</p>

            </Col>
          </Row>
        </Container>
        <Container>
          <h3>Resources</h3>

          <Row style={{ paddingBottom: "1%" }}>

            <Col style={{ paddingRight: "5%" }} >
              <ul style={{
                textDecoration: 'underline', fontSize: '90%'
              }}>
                <li>
                  <a href='https://www.cs.cornell.edu/undergrad/csmajor'>Information about the Computer Science (CS) Major</a>
                </li>
                <li>
                  <a href='https://www.cs.cornell.edu/undergrad/csminor'>Information about the CS Minor</a>

                </li>
                <li>
                  <a href='https://infosci.cornell.edu/undergraduate/info-sci-majors'>Information about the Information Science (IS) Major</a>

                </li>
                <li>
                  <a href='https://infosci.cornell.edu/undergraduate/undergraduate-minor-info-sci'>Information about the IS Minor</a>
                </li>
                <li>
                  <a href='https://www.cs.cornell.edu/undergrad/firstcscourse'>Choosing Your First Computing Course</a>
                </li>
                <li>
                  <a href='https://cis.cornell.edu/students/clubs-organizations'>CIS Clubs & Organizations</a>
                </li>
                <li>
                  <a href='https://150.cornell.edu/glorioustoview/'>Reflections of Cornell: Glorious to View</a>
                </li>



              </ul>
            </Col>
            <Col style={{ paddingRight: "5%", paddingLeft: "0%", }}>

            </Col>
          </Row>
        </Container>

        <center>
          <h5 style={{ paddingTop: '5%' }}>Questions?</h5>
          <Container style={{ paddingRight: "10%" }}>
            <Row style={{ paddingBottom: "1%" }}>
              <Col >
                <QuestionsCard name={directors[0].name} title={directors[0].title} img={(boardHeadshots[directors[0].netId + '.jpg'])} netId={directors[0].netId} />

              </Col>
              <Col >
                <QuestionsCard name={directors[1].name} title={directors[1].title} img={(boardHeadshots[directors[1].netId + '.jpg'])} netId={directors[1].netId} />

              </Col>


            </Row>
          </Container>



        </center>
      </div>
    );
  }
}
