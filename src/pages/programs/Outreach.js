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
import ghc1 from "../../images/programs/ghc1.jpg";
import ghc2 from "../../images/programs/ghc2.jpg";

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
          {/* <center>

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
          </center> */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "20px",
              padding: "20px",
            }}
          >
            {/* Left Section: Text and Button */}
            <div style={{ flex: "1", textAlign: "left", maxWidth: "35%" }}>
              <h5
                style={{
                  fontWeight: "bold",
                  fontSize: "15px",
                  marginBottom: "20px",
                }}
              >
                Interested in our Girls Who Code program for Spring 2024? Join
                us now!
              </h5>
              <Button
                style={{
                  marginBottom: "3%",
                  paddingLeft: "22px",
                  paddingRight: "22px",
                }}
                href="https://docs.google.com/forms/d/1cHNFX7JopvVZiPAiaxEzIBvHHfiGwJTEm4N6a74uQR4/edit"
              >
                Register Here
              </Button>
            </div>

            {/* Right Section: Two Images */}
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "0px",
                padding: "0",
                flex: "1",
              }}
            >
              <img
                src={ghc1}
                alt="First Image"
                style={{
                  width: "100%", // Adjust as needed
                  maxWidth: "55%",
                }}
              />
              <img
                src={ghc2}
                alt="Second Image"
                style={{
                  width: "100%",
                  maxWidth: "55%",
                }}
              />
            </div>
          </div>

          <br />

          <Container
            style={{
              paddingTop: "56px",
              paddingBottom: "56px",
              display: "flex",
              alignItems: "flex-start",
              flexDirection: "row",
              gap: "20px",
            }}
          >
            <h3
              style={{
                fontFamily: "Mulish",
                fontSize: "35px",
                fontStyle: "normal",
                fontWeight: "700",
              }}
            >
              Past Projects
            </h3>

            <Row>
              {[
                {
                  href: "https://www.khanacademy.org/computer-programming/ashley-hs-fall-2018-shooting-star/5814504135491584",
                  imgSrc: projectImages["Ashley_Shooting Star.png"],
                  title: "Shooting Star",
                  year: "Ashley | HS, Fall 2018",
                },
                {
                  href: "https://www.khanacademy.org/computer-programming/teddy-ms-fall-2018-build-a-house/4719725664960512",
                  imgSrc: projectImages["Teddy_Build-A-House.png"],
                  title: "Build-A-House",
                  year: "Teddy | MS, Fall 2018",
                },
                {
                  href: "https://www.khanacademy.org/computer-programming/ania-hs-fall-2018-armageddon/6201068844384256",
                  imgSrc: projectImages["Ania_Armageddon.png"],
                  title: "Armageddon",
                  year: "Ania | HS, Fall 2018",
                },
                {
                  href: "https://www.khanacademy.org/computer-programming/dax-ms-fall-2018-random-colour-generator/4720164017438720",
                  imgSrc: projectImages["Dax_Random Colour Generator.png"],
                  title: "Random Color Generator",
                  year: "Dax | MS, Fall 2018",
                },
                {
                  href: "https://www.khanacademy.org/computer-programming/audrey-hs-fall-2018-colorful-flashy-flashcard/5717846265593856",
                  imgSrc: projectImages["Audrey_Colorful Flashy Flashcard.png"],
                  title: "Colorful Flashy Flashcard",
                  year: "Ania | HS, Fall 2018",
                },
                {
                  href: "https://www.khanacademy.org/computer-programming/michael-ms-fall-2018-oh-noes/5878804048936960",
                  imgSrc: projectImages["Michael_Oh Noes.png"],
                  title: "Oh Noes",
                  year: "Michael | MS, Fall 2018",
                },
              ].map((project, index) => (
                <Col
                  key={index}
                  style={{
                    padding: "10px",
                    flex: "1 1 calc(16.66% - 10px)",
                    margin: "0",
                  }}
                >
                  <a href={project.href}>
                    <div
                      style={{
                        position: "relative",
                        textAlign: "left",
                        border: "1px solid #ddd",
                        borderRadius: "8px",
                        overflow: "hidden",
                      }}
                    >
                      <Image
                        src={project.imgSrc}
                        style={{
                          width: "100%",
                          height: "auto",
                          display: "block",
                          borderRadius: "10px",
                          background: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 46.65%, rgba(0, 0, 0, 0.70) 67.25%), url(${project.imgSrc}) lightgray 50% / cover no-repeat`,
                        }}
                      />
                      <div
                        style={{
                          position: "absolute",
                          bottom: 0,
                          background: "rgba(0, 0, 0, 0.2)",
                          color: "white",
                          width: "100%",
                          padding: "10px",
                          fontSize: "12px",
                          fontDamily: "Mulish",
                        }}
                      >
                        <p style={{ margin: 0, fontWeight: "bold" }}>
                          {project.title}
                        </p>
                        <p
                          style={{
                            margin: 0,
                            fontFamily: "Mulish",
                            fontSize: "8px",
                          }}
                        >
                          {project.year}
                        </p>
                      </div>
                    </div>
                  </a>
                </Col>
              ))}
            </Row>
          </Container>

          <Container
            style={{
              paddingTop: "56px",
              paddingBottom: "56px",
              gap: "42px",
              // display: "flex",
              // // width: "1728px",
              // padding: "96px 200px",
              // flexDirection: "row",
              // alignItems: "flex-start",
              // gap: "42px",
            }}
          >
            <Row>
              {/* First Box */}
              <Col
                xs={12}
                md={7}
                style={{
                  padding: "48px",
                  border: "1px solid #ddd",
                  backgroundColor: "#f9f9f9",
                  marginRight: "10px",
                  borderRadius: "20px",
                  background: "var(--3, #FFF)",
                  /* Image Shadow */
                  boxShadow: "0px 0px 40px 0px rgba(0, 0, 0, 0.15)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "24px",
                  flex: "1 0 0",
                  // alignSelf: "stretch",
                }}
              >
                <h3
                  style={{
                    color: "#212529",
                    fontFamily: "Mulish",
                    fontSize: "40px",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight: "150%",
                  }}
                >
                  Volunteers
                </h3>
                <p>
                  Interested in sponsoring Girls Who Code? <br />
                  Think you would make a good guest speaker? <br />
                  Want to be a general volunteer at workshops around the local
                  community?
                </p>
              </Col>

              {/* Second Box */}
              <Col
                xs={12}
                md={7}
                style={{
                  padding: "48px",
                  border: "1px solid #ddd",
                  backgroundColor: "#f9f9f9",
                  // marginLeft: "10px",
                  borderRadius: "20px",
                  background: "var(--3, #FFF)",
                  /* Image Shadow */
                  boxShadow: "0px 0px 40px 0px rgba(0, 0, 0, 0.15)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "24px",
                  flex: "1 0 0",
                  alignSelf: "stretch",
                }}
              >
                <h3
                  style={{
                    color: "#212529",
                    fontFamily: "Mulish",
                    fontSize: "40px",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight: "150%",
                  }}
                >
                  More Outreach
                </h3>
                <p>
                  Our teaching team has participated in a number of local events
                  promoting STEM education and career development. Looking for
                  volunteers or a CS workshop at your event? Contact the
                  Outreach Directors!
                </p>
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
