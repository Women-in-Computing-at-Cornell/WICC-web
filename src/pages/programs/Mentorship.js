import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { boardData } from '../boardData';
import mentorship1 from "../../images/programs-pictures/mentorship1.jpg";
import mentorship from "../../images/programs-pictures/mentorship.jpg";
import mentorship2 from "../../images/programs-pictures/mentorship2.jpg";
import mentorship3 from "../../images/programs-pictures/mentorship3.jpg";
import QuestionsCard from "./QuestionsCard.js";








import Image from 'react-bootstrap/Image'

import medal from "../../images/medal.jpg";


import './programPages.css';


export default class Mentorship extends Component {
  render() {
    let directors = boardData.filter(record => record.title === "Mentorship Co-Director")


    function importAll(r) {
      let images = {};
      r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
      return images;
    }

    const boardHeadshots = importAll(require.context('../../images/headshots/board', false, /\.jpg/));


    return (
      <div class='page'>
        <h1>Mentorship</h1>

        <Container>
          <Row style={{ paddingBottom: "1%" }}>
            <Col xs lg="6" style={{ paddingRight: "5%", paddingLeft: "0%" }}>
              <p style={{ paddingRight: '5%', paddingTop: '2%' }}>Our mentorship program strives to encourage and support students who are pursuing studies or future employment in computing by connecting them with more experienced upperclassmen. The role of the mentor is to empower their mentees and enhance their interests in computing. Mentors and mentees will be matched primarily based on academic and career interests.</p>


            </Col>
            <Col >
              <Image src={mentorship1} style={{ width: "90%", height: 'auto', paddingBottom: "7%" }}></Image>

            </Col>
          </Row>
        </Container>
        <Container>
          <h3>Mentors</h3>

          <Row style={{ paddingBottom: "1%" }}>

            <Col style={{ paddingRight: "5%" }}>
              <p >
                As a mentor you are expected to hold conversations with your mentees monthly, help your mentees establish meaningful connections, give advice on course selection, or otherwise. Any motivated undergraduates, graduate students, and grads majoring in or working CS or related technical fields can sign-up as a mentor.              </p>
              <Button href='https://forms.gle/vZeTVhGveoqZ8AWs9'>Sign Up</Button>

            </Col>
            <Col style={{ paddingRight: "5%", paddingLeft: "0%", }}>
              <h4>Requirements</h4>
              <ul>
                <li>
                  Undergraduates must be <span style={{ fontWeight: "bold" }}>sophomores, juniors</span>, or <span style={{ fontWeight: "bold" }}>seniors</span> at Cornell.

                </li>
                <li>
                  <span style={{ fontWeight: "bold" }}>Five meetings with your mentees:</span> mentorship groups will meet biweekly.

                </li>
                <li>
                  <span style={{ fontWeight: "bold" }}>Pre-Enroll Dinner:</span> share advice about what classes to take, open to anyone in computing majors!

                </li>
                <li>
                  <span style={{ fontWeight: "bold" }}>One general meeting</span>, which could include: outings with other mentor groups, WICC social events with both the mentors and mentees attending, or additional group meetings.

                </li>

              </ul>
            </Col>
          </Row>
        </Container>
        <Container>
          <h3>Mentees</h3>

          <Row style={{ paddingBottom: "1%" }}>

            <Col style={{ paddingRight: "5%" }}>
              <p >
                Mentees are matched with experienced upperclassmen or alumni mentors in groups of 2 mentors and 3-5 other mentees.
              </p>
              <Button href='https://forms.gle/vZeTVhGveoqZ8AWs9'>Sign Up</Button>

            </Col>
            <Col style={{ paddingRight: "5%", paddingLeft: "0%", }}>
              <h4>Requirements</h4>
              <ul>
                <li>
                  Undergraduates must be freshman or sophomores at Cornell.

                </li>
                <li>
                  Participate in  <span style={{ fontWeight: "bold" }}>five meetings</span> throughout the semester with the group.

                </li>
              </ul>
            </Col>
          </Row>
        </Container>
        <Container>

          <Row style={{ paddingBottom: "1%" }}>

            <Col style={{ paddingRight: "5%", paddingLeft: "5%", }}>
              <Image src={mentorship2} style={{ width: "80%", height: 'auto', paddingBottom: "7%" }}></Image>

            </Col>
            <Col style={{ paddingRight: "2%", paddingLeft: "0%", }}>
              <Image src={mentorship3} style={{ width: "80%", height: 'auto', paddingBottom: "7%" }}></Image>

            </Col>

          </Row>
        </Container>



        <center>
          <h5 style={{ paddingTop: '10%' }}>Questions?</h5>
          <Container>
            <Row style={{ paddingBottom: "1%" }}>
              <Col >
                <QuestionsCard name={directors[0].name} title={directors[0].title} img={(boardHeadshots[directors[0].netId + '.jpg'])} netId={directors[0].netId} />

              </Col>
              <Col >
                {/* <Image src={(boardHeadshots[directors[1].netId + '.jpg'])} roundedCircle style={{ width: "150px", height: '150px' }}></Image> */}
                {/* <Card.Img variant="top" src={(boardHeadshots[directors[1].netId + '.jpg'])} class="boardImg" /> */}

                {/* <br /><br />

                <div class='boardText'>
                  <p > {directors[1].name}, {directors[1].title}</p>
                  <a href={"mailto:" + directors[1].netId + "@cornell.edu"} class="emailLink">
                    {directors[1].netId}@cornell.edu
                  </a>
                </div> */}
                <QuestionsCard name={directors[1].name} title={directors[1].title} img={(boardHeadshots[directors[1].netId + '.jpg'])} netId={directors[1].netId} />

              </Col>
            </Row>
          </Container>



        </center>
      </div>
    );
  }
}
