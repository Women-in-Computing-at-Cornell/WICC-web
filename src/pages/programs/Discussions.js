import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { boardData } from '../boardData';
import discussion from "../../images/programs-pictures/discussions.jpg";
import ReactGoogleSlides from "react-google-slides";
import QuestionsCard from "./QuestionsCard.js";







import Image from 'react-bootstrap/Image'

import medal from "../../images/medal.jpg";


import './programPages.css';


export default class Discussions extends Component {
  render() {
    let discDirectors = boardData.filter(record => record.title === "Community Discussions Co-Director")


    function importAll(r) {
      let images = {};
      r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
      return images;
    }

    const boardHeadshots = importAll(require.context('../../images/headshots/board', false, /\.jpg/));


    return (
      <div class='page'>
        <h1>Community Discussions</h1>

        <Container>
          <Row style={{ paddingBottom: "5%" }}>
            <Col xs lg="6" style={{ paddingRight: "10%", paddingLeft: "0%" }}>
              <p style={{ paddingRight: '5%', paddingTop: '2%' }}>WICC is dedicated towards fostering an inclusive space for individuals of all identities to feel empowered to speak on issues in the CIS community, both on- and off-campus. We hold monthly discussions encompassing topics such as diversity in tech, the definition of success, and more. It is our goal to have a greater number of voices heard and to have a greater breadth of women and allies voicing their opinions at the table.</p>


            </Col>
            <Col >
              <Image src={discussion} style={{ width: "80%", height: 'auto' }}></Image>

            </Col>
          </Row>
        </Container>
        <h4>Last Community Discussion: </h4>
        <br />
        <h5>March 2021</h5>
        <ReactGoogleSlides
          width={640}
          height={480}
          slidesLink="https://docs.google.com/presentation/d/1Ir1ZjeHnfYbw8pXkKqRfAbz9wNrHA8E6QqTnWgDt6DY/edit?usp=sharing"
          showControls
        />

        <center>
          <h5 style={{ paddingTop: '10%' }}>Questions?</h5>
          <Container>
            <Row style={{ paddingBottom: "1%" }}>
              <Col >
                {/* <Image src={(boardHeadshots[discDirectors[0].netId + '.jpg'])} roundedCircle style={{ width: "25%", height: 'auto' }}></Image>
                <br /><br />

                <div class='boardText'>
                  <p >{discDirectors[0].name}, {discDirectors[0].title}</p>
                  <a href={"mailto:" + discDirectors[0].netId + "@cornell.edu"} class="emailLink">
                    {discDirectors[0].netId}@cornell.edu
                  </a>

                </div> */}
                <QuestionsCard name={discDirectors[0].name} title={discDirectors[0].title} img={(boardHeadshots[discDirectors[0].netId + '.jpg'])} netId={discDirectors[0].netId} />


              </Col>
              <Col >
                <QuestionsCard name={discDirectors[1].name} title={discDirectors[1].title} img={(boardHeadshots[discDirectors[1].netId + '.jpg'])} netId={discDirectors[1].netId} />

              </Col>
            </Row>
          </Container>



        </center>
      </div>
    );
  }
}
