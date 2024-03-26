import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
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
import lunchbunch1 from "../../images/programs-pictures/lunchbunch/lunchbunch1.jpg";
import lunchbunch2 from "../../images/programs-pictures/lunchbunch/lunchbunch2.jpg";
import lunchbunch3 from "../../images/programs-pictures/lunchbunch/lunchbunch3.jpg";
import lunch1  from "../../images/programs-pictures/lunchbunch/lunch1.png";
import QuestionsCard from "./QuestionsCard.js";
import Image from "react-bootstrap/Image";
import medal from "../../images/medal.jpg";
import "./programPages.css";
export default class Lunch extends Component {
  render() {
    let directors = academic.members.filter(
      (record) => record.position === "Faculty Relations Co-Director"
    );
    function importAll(r) {
      let images = {};
      r.keys().map((item, index) => {
        images[item.replace("./", "")] = r(item);
      });
      return images;
    }
    const boardHeadshots = importAll(
      require.context("../../images/headshots/board", false, /\.jpg/)
    );
    return (
      <div>
        <div className = "lunch-container">
        
          {/* <Row style={{ paddingBottom: "1%" }}> */}
          <h1 className="lunch-title">Lunch Bunch</h1>
          <Row>

            <Col>
              
              <p className="lunch-description">
                WICC’s weekly Lunch Bunch program is an exceptional opportunity
                for underclassmen women and minorities to make new friends and
                network within the computing community while learning from CIS
                professors and WICC alumni in a casual, conversational setting.
                Over free catered lunch, members talk about various disciplines
                in technology with professors, including David Gries, Jon
                Kleinberg, Eva Tardos, and Walker White.
              </p>
              <br />
              {/* <h4 style={{ paddingTop: "5%" }}>Times</h4>
              <div class="sub">
                <p>Mondays, 12:10PM-1:10PM EST</p>
                <p>Tuesdays, 1:25PM-2:15PM EST</p>
                <p>Fridays, 12:20PM-1:10PM EST</p>
              </div> */}
              {/* <h5 style={{ paddingTop: "25%" }}>
                Applications are closed for this semester.
              </h5> */}
            </Col>
            <Col className = "lunch-img-col">
              <Image className = "lunch-image" src = {lunch1}></Image>
            </Col>
          </Row>
            {/* <Col>
              <center>
                <Image
                  src={lunchbunch2}
                  style={{ width: "70%", height: "auto", paddingBottom: "2%" }}
                ></Image>
                <Image
                  src={lunchbunch3}
                  style={{ width: "70%", height: "auto", paddingBottom: "0%" }}
                ></Image>
                 <h5>Applications now open!</h5>
                <p class='sub'>Due Wednesday, Feb. 27th 11:59PM</p>
                <Button href='https://forms.gle/vZeTVhGveoqZ8AWs9'>Apply</Button> 
              </center>
            </Col> */}
          {/* </Row> */}
        </div>
        <br />
        
        <Col className = "testimonial-col">
          <Row>
            <h3 className = "testimonial-title">What Alumni Have Said</h3>
          </Row>
          <Row className = "testimonial-row">
            <Card className = "testimonial-card">
            <h4 className = "testimonial-person">Candice ’22</h4>
            <p className = "testimonial-quote"> "The program was a unique and enriching opportunity to connect
                with faculty. I’ve learned a great deal about different journeys
                in tech and feel more inspired to forge my own path."</p>
            </Card>
            <Card className = "testimonial-card">
            <h4 className = "testimonial-person">Emory ’24</h4>
            <p className = "testimonial-quote"> "I loved Lunch Bunch! I found a community of hardworking and
                inspiring women, and got to learn about the journey of many
                successful professors and the cool projects that they’re working
                on."</p>
            </Card>
            <Card className = "testimonial-card">
            <h4 className = "testimonial-person">Shreya ’24</h4>
            <p className = "testimonial-quote">"Lunch Bunch was an incredible opportunity for me to directly
                hear from professors in Cornell Computing, and take away
                valuable lessons from their varied experiences, journeys and
                advice!"</p>
            </Card>
          </Row>
        </Col>

        {/* <Container>
          <Row style={{ paddingBottom: "1%" }}>
            <div class="vertLine"></div>
            <Col style={{ paddingRight: "5%", paddingLeft: "0%" }}>
              <p>
                "The program was a unique and enriching opportunity to connect
                with faculty. I’ve learned a great deal about different journeys
                in tech and feel more inspired to forge my own path."
              </p>
              <p class="sub">~ Candice ’22</p>
            </Col>
            <div class="vertLine"></div>
            <Col style={{ paddingRight: "5%", paddingLeft: "0%" }}>
              <p>
                "I loved Lunch Bunch! I found a community of hardworking and
                inspiring women, and got to learn about the journey of many
                successful professors and the cool projects that they’re working
                on."
              </p>
              <p class="sub">~ Emory ’24</p>
            </Col>
            <div class="vertLine"></div>
            <Col style={{ paddingRight: "5%", paddingLeft: "0%" }}>
              <p>
                "Lunch Bunch was an incredible opportunity for me to directly
                hear from professors in Cornell Computing, and take away
                valuable lessons from their varied experiences, journeys and
                advice!"
              </p>
              <p class="sub">~ Shreya ’24</p>
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
                <QuestionsCard
                  name={directors[1].name}
                  title={directors[1].title}
                  img={boardHeadshots[directors[1].netId + ".jpg"]}
                  netId={directors[1].netId}
                />
              </Col>
            </Row>
          </Container>
        </center>
      </div>
    );
  }
}