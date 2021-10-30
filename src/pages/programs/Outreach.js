import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { boardData } from '../boardData';
import ReactGoogleSlides from "react-google-slides";
import outreach from "../../images/outreach/outreach.jpg";
import outreach1 from "../../images/outreach/outreach1.jpg";

import outreach2 from "../../images/outreach/outreach2.jpg";
import QuestionsCard from "./QuestionsCard.js";







import Image from 'react-bootstrap/Image'

import medal from "../../images/medal.jpg";


import './programPages.css';


export default class Outreach extends Component {
  render() {
    let directors = boardData.filter(record => record.title === "Outreach Co-Director")
    let vp = boardData.filter(record => record.title === "Vice President, Outreach")
    directors = directors.concat(vp)


    function importAll(r) {
      let images = {};
      r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
      return images;
    }

    const boardHeadshots = importAll(require.context('../../images/headshots/board', false, /\.jpg/));
    const projectImages = importAll(require.context('../../images/outreach/pastprojects', false, /\.png/));



    return (
      <div class='page'>
        <h1>Girls Who Code</h1>

        <Container>
          <Row style={{ paddingBottom: "2%" }}>
            <Col xs lg="6" style={{ paddingRight: "5%", paddingLeft: "0%" }}>
              <p style={{ paddingRight: '5%', paddingTop: '2%' }}>We provide free Computer Science classes for middle and high school students in the greater Ithaca community through Cornell Girls Who Code. Students learn the fundamentals of computing as well as cool technologies like Arduinos, web programming, and Ozobots.</p>
              <center>
                <Button style={{ marginRight: "5%" }} href='https://girlswhocode.com/'>Website</Button>
                <Button href='https://girlswhocode.instructure.com/login/canvas'>Instructure</Button>

              </center>

            </Col>
            <Col >
              <Image src={outreach2} style={{ width: "90%", height: 'auto', paddingBottom: "3%" }}></Image>

            </Col>
          </Row>
        </Container>
        <center>
          {/* <h5 style={{ fontWeight: "bold" }}>Registration for our Girls Who Code program for Spring 2021 has been closed! </h5>*/}


          <h5 style={{ fontWeight: "bold" }}>Interested in our Girls Who Code program for this Fall 2021? Register here! </h5>
          <Button style={{ marginBottom: "3%" }} href='https://docs.google.com/forms/d/e/1FAIpQLScBHRS_-ZjYCC0H3A_R6-Lr2QnrgWduBw-K3fNWw89NLrHwvg/viewform'>Register Now!</Button>
        </center>
        <br />
        <h3>Schedule and Class Slides</h3>

        <Container style={{ paddingBottom: "2%" }}>

          <Row style={{ paddingBottom: "1%" }}>

            <Col style={{ paddingRight: "2%" }}>
              <p style={{ marginBottom: "1%", fontWeight: "bold" }}>
                Middle School (MS)
              </p>
              <p style={{ marginBottom: "7%" }}>12:00PM - 1:30PM</p>
              {/* <p>Online</p> */}

              <p style={{ marginBottom: "1%", fontWeight: "bold" }}>
                High School (HS)
              </p>
              <p style={{ marginBottom: "0%" }}>2:00pm-3:30pm</p>
              {/* <p>Online</p> */}

            </Col>
            <Col style={{ paddingRight: "0%", paddingLeft: "2%", }}>
              <div class='outreachDates'>
                <p >Sept. 19
                </p>
                <p>Sept. 26
                </p>
                <p>Oct. 3
                </p>
                <p><span style={{ textDecoration: "line-through" }}>Oct. 10</span>  NO CLASS *</p>
                <p>Oct. 17
                </p>
                <p>Oct. 24
                </p>
              </div>


            </Col>
            {/* <Col style={{ paddingRight: "1%", paddingLeft: "0%", }}>
              <div class='outreachDates'>
                <p >
                  <a href='https://docs.google.com/presentation/d/1-J0Fb6oV7CCiVo11qFYJcpId2jd-gDbXOlosHAJOFmE/edit?usp=sharing' class='outreachSlides' >MS</a>

                  <a href='https://docs.google.com/presentation/d/10ZGZJhRTdW7Q2nDbcilo720kXWlFE8iTXZw92bDe6EM/edit#slide=id.g86fc84f77b_0_16178' class='outreachSlides'>HS</a>
                </p>
                <p>

                  <a href='https://docs.google.com/presentation/d/1IWHYPV6znv8QiOW81f85yWLJpPP6SQw4IBT0WcMpGVE/edit?usp=sharing' class='outreachSlides' >MS</a>

                  <a href='https://docs.google.com/presentation/d/1hJFgBIYxReHopOxwOyo9hRDhxGYkBt8E7ot54JQIHdc/edit#slide=id.gc0f83df34b_0_125' class='outreachSlides'>HS</a>

                </p>
                <p>
                  <a href='https://docs.google.com/presentation/d/1oaJS2AR6juCOuLtd_6Ioi5c-4N-IhoH9LM-BiyaeUbg/edit?usp=sharing' class='outreachSlides' >MS</a>

                </p>
                <p>
                  <a href='https://docs.google.com/presentation/d/1TgYbhVguP5Xc6VnRHniTJSl61vz7EX849z6UBivc3lw/edit?usp=sharing' class='outreachSlides' >MS</a>
                </p>
                <p>
                  <a href='https://docs.google.com/presentation/d/1bSb8aL7BLZR27KNSF8RaY5e-cdCXFyQxagL8GbW3q8g/edit?usp=sharing' class='outreachSlides' >MS</a>
                </p>
                <p></p>
              </div>


            </Col> */}


            <Col style={{ paddingRight: "1%", paddingLeft: "0%", }}>
              <div class='outreachDates'>
                <p>Oct. 31</p>
                <p>Nov. 7</p>
                <p>Nov. 14</p>
                <p>Nov. 21</p>
                <p>Dec. 5  <span style={{ fontWeight: "bold" }}> Mid-Year Celebration</span></p>

              </div>

            </Col>
            <Col >
              <div class='outreachDates'>
                <p >
                </p>
                <p>


                </p>
                <p>

                </p>
                <p>
                </p>
                <p>
                </p>
                <p></p>
              </div>


            </Col>

          </Row>
          <center>
            <p>* Please note we will NOT be having class on October 10th due to Cornell's academic break.</p>

          </center>

        </Container >
        <h3>Extra Resources</h3>
        <center>

          <h5>Technology Workshop</h5>
          <ReactGoogleSlides
            width={640}
            height={480}
            slidesLink="https://docs.google.com/presentation/d/1jDTdeZ5SSLfrTmPQoL4GqaEx4gwDAv39n7rXyeKyWYo/edit#slide=id.g8b238304a6_0_105"
            showControls
          />
        </center>


        <Container>
          <h3>Past Projects</h3>

          <Row style={{ paddingBottom: "2%" }}>

            <Col style={{ paddingRight: "5%" }}>
              <a href="https://www.khanacademy.org/computer-programming/ashley-hs-fall-2018-shooting-star/5814504135491584"><Image src={(projectImages['Ashley_Shooting Star.png'])} roundedCircle style={{ width: "60%", height: 'auto' }}></Image>
              </a>
              <p><span style={{ fontWeight: "bold" }}>Shooting Star</span></p>
              <p>Ashley</p>
              <p>HS, Fall 2018</p>

              <a href="https://www.khanacademy.org/computer-programming/teddy-ms-fall-2018-build-a-house/4719725664960512"><Image src={(projectImages['Teddy_Build-A-House.png'])} roundedCircle style={{ width: "60%", height: 'auto' }}></Image>
              </a>
              <p><span style={{ fontWeight: "bold" }}>Build-A-House</span></p>
              <p>Teddy</p>
              <p>MS, Fall 2018</p>


            </Col>
            <Col style={{ paddingRight: "5%", paddingLeft: "0%", }}>
              <a href="https://www.khanacademy.org/computer-programming/ania-hs-fall-2018-armageddon/6201068844384256"><Image src={(projectImages['Ania_Armageddon.png'])} roundedCircle style={{ width: "60%", height: 'auto' }}></Image>
              </a>
              <p><span style={{ fontWeight: "bold" }}>Armageddon</span></p>
              <p>Ania</p>
              <p>HS, Fall 2018</p>


              <a href="https://www.khanacademy.org/computer-programming/dax-ms-fall-2018-random-colour-generator/4720164017438720"> <Image src={(projectImages['Dax_Random Colour Generator.png'])} roundedCircle style={{ width: "60%", height: 'auto' }}></Image>
              </a>
              <p><span style={{ fontWeight: "bold" }}>Random Color Generator</span></p>
              <p>Dax</p>
              <p>MS, Fall 2018</p>

            </Col>
            <Col >
              <a href="https://www.khanacademy.org/computer-programming/audrey-hs-fall-2018-colorful-flashy-flashcard/5717846265593856"><Image src={(projectImages['Audrey_Colorful Flashy Flashcard.png'])} roundedCircle style={{ width: "60%", height: 'auto' }}></Image>
              </a>
              <p><span style={{ fontWeight: "bold" }}>Colorful Flashy Flashcard</span></p>
              <p>Audrey</p>
              <p>HS, Fall 2018</p>

              <a href="https://www.khanacademy.org/computer-programming/michael-ms-fall-2018-oh-noes/5878804048936960"><Image src={(projectImages['Michael_Oh Noes.png'])} roundedCircle style={{ width: "60%", height: 'auto' }}></Image>
              </a>
              <p><span style={{ fontWeight: "bold" }}>Oh Noes</span></p>
              <p>Michael</p>
              <p>MS, Fall 2018</p>

            </Col>

          </Row>
        </Container>
        <Container>
          <h3>Volunteers - Get Involved</h3>
          <br />

          <Row style={{ paddingBottom: "2%" }}>

            <Col >
              <h6 style={{ fontWeight: "bold" }}>Interested in being a WICC Outreach Volunteer for this Fall 2021? Apply here! </h6>
              <Button style={{ marginBottom: "5%" }} href='https://forms.gle/nacdKvrHdh5Jb5ct9'>Apply Now!</Button>

              <p>
                Interested in sponsoring Girls Who Code?
                Think you would make a good guest speaker?
                Want to be a general volunteer at workshops around the local community?
              </p>
              <p>
                Contact the Outreach Team at <a href={"mailto:" + this.props.netId + "@cornell.edu"} class="emailLink">
                  girlswhocode@cornell.edu</a>
              </p>

            </Col>

            <Col >
            </Col>

          </Row>
        </Container>
        <Container>
          <h3>More Outreach</h3>
          <br />

          <Row>

            <Col >
              <p>
                Our teaching team has participated in a number of local events promoting STEM education and career development. Looking for volunteers or a CS workshop at your event?
                Contact the Outreach Directors!</p>

              <p style={{ fontWeight: 'bold' }}>Past Examples:</p>
            </Col>
            <Col >
            </Col>

          </Row>
          <Row style={{ paddingBottom: "9%" }}>

            <Col >
              <div class='localEvents'>
                <p>Code Red Open House at Ithaca High School </p>
                <p>Science Workshop at Science and Math Saturday Academy </p>
                <p>STEAM Night at Lansing Middle School</p>
                <p>Workshop at Lansing Community Library </p>
              </div>
            </Col>
            <Col >
              <div class='localEvents'>
                <p>Workshop at South Hill Elementary</p>
                <p>Splash at Cornell</p>
                <p>Think Like a Programmer with Girl Scouts</p>
              </div>

            </Col>

          </Row>
          <Row>

            <Col >
              <Image src={outreach} style={{ width: "80%", height: 'auto', paddingBottom: "7%" }}></Image>

            </Col>

            <Col >
              <Image src={outreach1} style={{ width: "80%", height: 'auto', paddingBottom: "7%" }}></Image>

            </Col>

          </Row>


        </Container>

        <center>
          <h5 style={{ paddingTop: '5%' }}>Questions?</h5>
          <Container style={{ paddingRight: "5%" }}>
            <Row style={{ paddingBottom: "1%" }}>

              <Col >
                <QuestionsCard name={directors[3].name} title={directors[3].title} img={(boardHeadshots[directors[3].netId + '.jpg'])} netId={directors[3].netId} />


              </Col>
              <Col >
                <QuestionsCard name={directors[0].name} title={directors[0].title} img={(boardHeadshots[directors[0].netId + '.jpg'])} netId={directors[0].netId} />

              </Col>
              <Col >
                <QuestionsCard name={directors[1].name} title={directors[1].title} img={(boardHeadshots[directors[1].netId + '.jpg'])} netId={directors[1].netId} />
              </Col>
              <Col >
                <QuestionsCard name={directors[2].name} title={directors[2].title} img={(boardHeadshots[directors[2].netId + '.jpg'])} netId={directors[2].netId} />
              </Col>
            </Row>
          </Container>



        </center>
      </div >
    );
  }
}
