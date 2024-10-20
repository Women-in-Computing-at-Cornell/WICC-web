import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
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
import ReactGoogleSlides from "react-google-slides";
import outreach3 from "../../images/outreach/outreach.jpg";
import outreach1 from "../../images/outreach/outreach1.jpg";
import OutreachHero from "../../images/outreach/OutreachHero.jpg";
import QuestionsCard from "./QuestionsCard.js";

import Image from "react-bootstrap/Image";

import "./programPages.css";
import "./Outreach.css";

export default class Outreach extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    let directors = outreach.members.filter(
      (record) => record.position === "Outreach Co-Director"
    );
    let vp = outreach.members.filter(
      (record) => record.position === "Vice President, Outreach"
    );
    directors = directors.concat(vp);

    function importAll(r) {
      let images = {};
      r.keys().forEach((item) => {
        images[item.replace("./", "")] = r(item);
      });
      return images;
    }

    const boardHeadshots = importAll(
      require.context("../../images/headshots/board", false, /\.jpg|\.JPG/)
    );
    const projectImages = importAll(
      require.context("../../images/outreach/pastprojects", false, /\.png/)
    );

    return (
      <div>
        <div class="hero">
          <div class="hero-text">
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
            <h1
              style={{
                marginBottom: "1.2rem",
                marginTop: "1.2rem",
                fontWeight: "700",
              }}
            >
              {" "}
              Outreach: Girls Who Code{" "}
            </h1>
            <p
              style={{
                paddingRight: "5%",
                paddingTop: "2%",
                marginRight: "20%",
              }}
            >
              We provide free Computer Science classes for middle and high
              school students in the greater Ithaca community through Cornell
              Girls Who Code. Students learn the fundamentals of computing as
              well as cool technologies like Arduinos, web programming, and
              Ozobots.
            </p>
            <p>
              Check out more details on the{" "}
              <a href="https://girlswhocode.com/">
                <span style={{ fontWeight: "bold" }}>Girls Who Code</span>{" "}
                official website
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M7 17L17 7"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M7 7H17V17"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
            </p>
            <p>
              Register your account{" "}
              <a href="https://girlswhocode.instructure.com/login/canvas">
                here
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M7 17L17 7"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M7 7H17V17"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
            </p>
          </div>
          <div class="hero-image">
            <img src={OutreachHero} style={{ width: "100%" }}></img>
          </div>
        </div>
        <div class="page">
          <center>
            {/* <h5 style={{ fontWeight: "bold" }}>Registration for our Girls Who Code program for Spring 2021 has been closed! </h5>*/}

            <h5 style={{ fontWeight: "bold" }}>
              Interested in our Girls Who Code program for this Spring 2024?
              Register here!{" "}
            </h5>
            <Button
              style={{ marginBottom: "3%" }}
              href="https://docs.google.com/forms/d/1cHNFX7JopvVZiPAiaxEzIBvHHfiGwJTEm4N6a74uQR4/edit"
            >
              Register Now!
            </Button>
          </center>
          <br />
          <h3 class="h3title">Schedule and Class Slides</h3>

          <Container style={{ paddingBottom: "2%" }}>
            <Row style={{ paddingBottom: "1%" }}>
              <Col style={{ paddingRight: "2%" }}>
                <p
                  style={{
                    marginBottom: "1%",
                    fontWeight: "bold",
                    fontSize: 18,
                  }}
                >
                  Beginner Level
                </p>
                <p style={{ marginBottom: "7%" }}>
                  <strong>Sundays</strong> 1:00PM - 2:30PM
                </p>
                {/* <p>Online</p> */}

                <p
                  style={{
                    marginBottom: "1%",
                    fontWeight: "bold",
                    fontSize: 18,
                  }}
                >
                  Intermediate/Advanced Level
                </p>
                <p style={{ marginBottom: "0%" }}>
                  <strong>Sundays</strong> 3:00pm-4:30pm
                </p>
                {/* <p>Online</p> */}
              </Col>
              <Col style={{ paddingRight: "0%", paddingLeft: "10%" }}>
                <div class="outreachDates">
                  <p>September 10</p>
                  <p>September 17</p>
                  <p>September 24</p>
                  <p>October 1st</p>
                  <p>October 15</p>
                  {/*  /* <p><span style={{ textDecoration: "line-through" }}>Oct. 10</span>  NO CLASS *</p>*/}
                </div>
              </Col>

              <Col style={{ paddingRight: "1%", paddingLeft: "0%" }}>
                <div class="outreachDates">
                  <p>October 22</p>
                  <p>October 29</p>
                  <p>November 5</p>
                  <p>November 12</p>
                  <p>December 3 - End-of-Year Celebration</p>
                  {/*<span style={{ fontWeight: "bold" }}> Mid-Year Celebration</span>*/}
                </div>
              </Col>
            </Row>
            <center></center>
          </Container>
          <h3 class="h3title">Extra Resources</h3>
          <center>
            <h5>Technology Workshop</h5>
            <ReactGoogleSlides
              width={640}
              height={480}
              slidesLink="https://docs.google.com/presentation/d/1jDTdeZ5SSLfrTmPQoL4GqaEx4gwDAv39n7rXyeKyWYo/edit#slide=id.g8b238304a6_0_105"
              showControls
            />
          </center>

          <Container style={{ paddingTop: "56px", paddingBottom: "56px" }}>
            <h3 class="h3title">Past Projects</h3>

            <Row style={{ paddingBottom: "2%" }}>
              <Col style={{ paddingRight: "5%" }}>
                <a href="https://www.khanacademy.org/computer-programming/ashley-hs-fall-2018-shooting-star/5814504135491584">
                  <Image
                    src={projectImages["Ashley_Shooting Star.png"]}
                    roundedCircle
                    style={{ width: "60%", height: "auto" }}
                  ></Image>
                </a>
                <p>
                  <span style={{ fontWeight: "bold" }}>Shooting Star</span>
                </p>
                <p>Ashley</p>
                <p>HS, Fall 2018</p>

                <a href="https://www.khanacademy.org/computer-programming/teddy-ms-fall-2018-build-a-house/4719725664960512">
                  <Image
                    src={projectImages["Teddy_Build-A-House.png"]}
                    roundedCircle
                    style={{ width: "60%", height: "auto" }}
                  ></Image>
                </a>
                <p>
                  <span style={{ fontWeight: "bold" }}>Build-A-House</span>
                </p>
                <p>Teddy</p>
                <p>MS, Fall 2018</p>
              </Col>
              <Col style={{ paddingRight: "5%", paddingLeft: "0%" }}>
                <a href="https://www.khanacademy.org/computer-programming/ania-hs-fall-2018-armageddon/6201068844384256">
                  <Image
                    src={projectImages["Ania_Armageddon.png"]}
                    roundedCircle
                    style={{ width: "60%", height: "auto" }}
                  ></Image>
                </a>
                <p>
                  <span style={{ fontWeight: "bold" }}>Armageddon</span>
                </p>
                <p>Ania</p>
                <p>HS, Fall 2018</p>

                <a href="https://www.khanacademy.org/computer-programming/dax-ms-fall-2018-random-colour-generator/4720164017438720">
                  {" "}
                  <Image
                    src={projectImages["Dax_Random Colour Generator.png"]}
                    roundedCircle
                    style={{ width: "60%", height: "auto" }}
                  ></Image>
                </a>
                <p>
                  <span style={{ fontWeight: "bold" }}>
                    Random Color Generator
                  </span>
                </p>
                <p>Dax</p>
                <p>MS, Fall 2018</p>
              </Col>
              <Col>
                <a href="https://www.khanacademy.org/computer-programming/audrey-hs-fall-2018-colorful-flashy-flashcard/5717846265593856">
                  <Image
                    src={projectImages["Audrey_Colorful Flashy Flashcard.png"]}
                    roundedCircle
                    style={{ width: "60%", height: "auto" }}
                  ></Image>
                </a>
                <p>
                  <span style={{ fontWeight: "bold" }}>
                    Colorful Flashy Flashcard
                  </span>
                </p>
                <p>Audrey</p>
                <p>HS, Fall 2018</p>

                <a href="https://www.khanacademy.org/computer-programming/michael-ms-fall-2018-oh-noes/5878804048936960">
                  <Image
                    src={projectImages["Michael_Oh Noes.png"]}
                    roundedCircle
                    style={{ width: "60%", height: "auto" }}
                  ></Image>
                </a>
                <p>
                  <span style={{ fontWeight: "bold" }}>Oh Noes</span>
                </p>
                <p>Michael</p>
                <p>MS, Fall 2018</p>
              </Col>
            </Row>
          </Container>
          <Container style={{ paddingTop: "56px", paddingBottom: "56px" }}>
            <h3 class="h3title">Volunteers - Get Involved</h3>
            <br />

            <Row style={{ paddingBottom: "2%" }}>
              <Col>
                <h6 style={{ fontWeight: "bold" }}>
                  Interested in being a WICC Outreach Volunteer for this Spring
                  2023? Apply here!{" "}
                </h6>
                <Button
                  style={{ marginBottom: "5%" }}
                  href="https://forms.gle/nacdKvrHdh5Jb5ct9"
                >
                  Apply Now!
                </Button>

                <p>
                  Interested in sponsoring Girls Who Code? Think you would make
                  a good guest speaker? Want to be a general volunteer at
                  workshops around the local community?
                </p>
                <p>
                  Contact the Outreach Team at{" "}
                  <a
                    href={"mailto:" + this.props.netId + "@cornell.edu"}
                    class="emailLink"
                  >
                    girlswhocode@cornell.edu
                  </a>
                </p>
              </Col>

              <Col></Col>
            </Row>
          </Container>
          <Container style={{ paddingTop: "56px", paddingBottom: "56px" }}>
            <h3 class="h3title">More Outreach</h3>
            <br />

            <Row>
              <Col>
                <p>
                  Our teaching team has participated in a number of local events
                  promoting STEM education and career development. Looking for
                  volunteers or a CS workshop at your event? Contact the
                  Outreach Directors!
                </p>

                <p style={{ fontWeight: "bold" }}>Past Examples:</p>
              </Col>
              <Col></Col>
            </Row>
            <Row style={{ paddingBottom: "9%" }}>
              <Col>
                <div class="localEvents">
                  <p>Code Red Open House at Ithaca High School </p>
                  <p>Science Workshop at Science and Math Saturday Academy </p>
                  <p>STEAM Night at Lansing Middle School</p>
                  <p>Workshop at Lansing Community Library </p>
                </div>
              </Col>
              <Col>
                <div class="localEvents">
                  <p>Workshop at South Hill Elementary</p>
                  <p>Splash at Cornell</p>
                  <p>Think Like a Programmer with Girl Scouts</p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <Image
                  src={outreach3}
                  style={{ width: "80%", height: "auto", paddingBottom: "7%" }}
                ></Image>
              </Col>

              <Col>
                <Image
                  src={outreach1}
                  style={{ width: "80%", height: "auto", paddingBottom: "7%" }}
                ></Image>
              </Col>
            </Row>
          </Container>

          <center>
            <h3 style={{ paddingTop: "5%" }}>Questions?</h3>
            <Container
              style={{
                paddingTop: "56px",
                paddingBottom: "56px",
                paddingRight: "5%",
              }}
            >
              <Row style={{ paddingBottom: "1%" }}>
                <Col>
                  <QuestionsCard
                    name={directors[3].name}
                    title={directors[3].title}
                    img={boardHeadshots[directors[3].netId + ".jpg"]}
                    netId={directors[3].netId}
                  />
                </Col>
                <Col>
                  <QuestionsCard
                    name={directors[0].name}
                    title={directors[0].title}
                    img={boardHeadshots[directors[0].netId + ".jpg"]}
                    netId={directors[0].netId}
                  />
                </Col>
                <Col>
                  <QuestionsCard
                    name={directors[1].name}
                    title={directors[1].title}
                    img={boardHeadshots[directors[1].netId + ".jpg"]}
                    netId={directors[1].netId}
                  />
                </Col>
                <Col>
                  <QuestionsCard
                    name={directors[2].name}
                    title={directors[2].title}
                    img={boardHeadshots[directors[2].netId + ".jpg"]}
                    netId={directors[2].netId}
                  />
                </Col>
              </Row>
            </Container>
          </center>
        </div>
      </div>
    );
  }
}
