import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { boardData } from '../boardData';
import lunchbunchgroup from "../../images/programs-pictures/lunchbunchgroup.jpg";
import QuestionsCard from "./QuestionsCard.js";






import Image from 'react-bootstrap/Image'

import medal from "../../images/medal.jpg";


import './programPages.css';


export default class Lunch extends Component {
  render() {
    let directors = boardData.filter(record => record.title === "Faculty Relations Co-Director")


    function importAll(r) {
      let images = {};
      r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
      return images;
    }

    const boardHeadshots = importAll(require.context('../../images/headshots/board', false, /\.jpg/));


    return (
      <div class='page'>
        <h1>Lunch Bunch</h1>

        <Container>
          <Row style={{ paddingBottom: "1%" }}>
            <Col xs lg="6" style={{ paddingRight: "5%", paddingLeft: "0%" }}>
              <p style={{ paddingRight: '5%', paddingTop: '2%' }}>WICC’s weekly Lunch Bunch program is an exceptional opportunity for underclassmen women and minorities to make new friends and network within the computing community while learning from CIS professors and WICC alumni in a casual, conversational setting. Over free catered lunch, members talk about various disciplines in technology with professors, including David Gries, Jon Kleinberg, Eva Tardos, and Walker White.</p>
              <br />
              <h4>Times</h4>

              <div class='sub'>
                <p>Mondays, 11:15AM-12:05PM EST</p>
                <p>Wednesdays, 10:10AM-11:00AM EST</p>
                <p>Thursdays, 1:25PM-2:15PM EST</p>

              </div>


            </Col>
            <Col >
              <center>
                <Image src={lunchbunchgroup} style={{ width: "80%", height: 'auto', paddingBottom: "7%" }}></Image>

                <h5>Applications are closed for this semester.</h5>
                {/* <h5>Applications now open!</h5>
                <p class='sub'>Due Wednesday, Feb. 27th 11:59PM</p>
                <Button href='https://forms.gle/vZeTVhGveoqZ8AWs9'>Apply</Button> */}

              </center>
            </Col>
          </Row>
        </Container>
        <br />
        <h3>Testimonials</h3>

        <Container>
          <Row style={{ paddingBottom: "1%" }}>
            <div class='vertLine'>

            </div>

            <Col style={{ paddingRight: "5%", paddingLeft: "0%" }}>
              <p >
                "I learned about the different fields of CS and how they're used, which I previously had many misconceptions about. Lunch Bunch truly let me cement my decsision to major in CS, as through it I got an idea of the potential in the field.
              </p>
              <p class='sub'>- Karen Zhang '21</p>

            </Col>
            <div class='vertLine'>

            </div>
            <Col style={{ paddingRight: "5%", paddingLeft: "0%", }}>
              <p >
                “It's much less intimidating talking to them at Lunch Bunch compared to going up to them after a big lecture class. Not only do you learn about their field, but you also get to know more about them on a personal level such as their personality and interests outside of the classroom.”
              </p>
              <p class='sub'>- Aparna Calambur '21</p>
            </Col>
            <div class='vertLine'>

            </div>

            <Col style={{ paddingRight: "5%", paddingLeft: "0%", }}>
              <p >
                “Lunch bunch was such a great experience. I ate great food and met great people, and it was awesome to meet with professors in a closer setting!”
              </p>
              <p class='sub'>- Rachel Shim '20</p>
            </Col>
          </Row>
        </Container>
        <center>
          <h5 style={{ paddingTop: '5%' }}>Questions?</h5>
          <Container style={{ paddingRight: "10%" }}>
            <Row style={{ paddingBottom: "1%" }}>
              <Col >
                {/* <Image src={(boardHeadshots[directors[0].netId + '.jpg'])} roundedCircle style={{ width: "25%", height: 'auto' }}></Image>
                <br /><br />
                <div class='boardText'>
                  <p >{directors[0].name}, {directors[0].title}</p>
                  <a href={"mailto:" + directors[0].netId + "@cornell.edu"} class="emailLink">
                    {directors[0].netId}@cornell.edu
                  </a>

                </div> */}
                <QuestionsCard name={directors[0].name} title={directors[0].title} img={(boardHeadshots[directors[0].netId + '.jpg'])} netId={directors[0].netId} />


              </Col>
              <Col >
                {/* <Image src={(boardHeadshots[directors[1].netId + '.jpg'])} roundedCircle style={{ width: "25%", height: 'auto' }}></Image>
                <br /><br />
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
