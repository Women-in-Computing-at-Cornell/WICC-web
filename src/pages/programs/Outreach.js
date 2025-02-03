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
import fa241 from "../../images/outreach/gwc/FA24_GWC_Beginner_Class_Volunteers.png"
import fa242 from "../../images/outreach/gwc/FA24_GWC_Intermediate_Class_Volunteers.png"
import fa243 from "../../images/outreach/gwc/FA24_Outreach_Volunteer_Social.png"

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
    // directors = directors.concat(vp);

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
                paddingRight: "1%",
                paddingTop: "2%",
                marginRight: "20%",
              }}
            >
              WICC Outreach plans events and programs related to spreading computer science to the greater Ithaca community. We organize a weekly Girls Who Code program on campus and several general outreach workshops involving other organizations, typically off campus.
            </p>
            <p>
              More details on the{" "}
              <a href="https://girlswhocode.com/">
                <span style={{ fontWeight: "bold" }}>Girls Who Code</span>{" "}
  website
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
            <img
              src={OutreachHero}
              style={{
                width: "100%",
                height: "auto",
                objectFit: "cover",
              }}
            ></img>
          </div>
        </div>
        <div
              style={{
                textAlign: "center",
                fontSize: "18px",
                fontWeight: "bold",
                margin: "5vw 10vw",
                padding: "30px",
                backgroundColor: "#ffffff",
                borderRadius: "20px",
                boxShadow: "0px 0px 40px 0px rgba(0, 0, 0, 0.15)",
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
                  Schedule (Spring 2025)
                </h3>
              <p>
                Feb 9th, Feb 23rd, Mar 2nd, Mar 9th, Mar 16th, Mar 23rd,
                Apr 13th, Apr 20th, Apr 27th, May 4th 
              </p>
              <p style={{ fontWeight: "normal", fontSize: "16px", color: "#dc3545" }}>
                Please note that registration has closed for the Spring 2025 semester. <br></br>
                Registration will open again at the beginning of next semester.
              </p>
            </div>
        <div class="page imagediv">
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
              padding: "0px",
            }}
          >
            {/* Left Section: Text and Button */}
            {/* <div style={{ flex: "1", textAlign: "left", maxWidth: "35%" }}>
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
            </div> */}

            {/* Right Section: Two Images */}
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "5%",
                padding: "5%",
                flex: "1",
                marginTop: "0",
                paddingTop: "0",
                
              }} 
            >
              <img
                src={fa241}
                alt="First Image"
                style={{
                  width: "100%", // Adjust as needed
                  maxWidth: "32%",
                  borderRadius: "5px"
                }}
              />
              <img
                src={fa242}
                alt="First Image"
                style={{
                  width: "100%", // Adjust as needed
                  maxWidth: "27%",
                  borderRadius: "15px"
                }}
              />
              <img
                src={fa243}
                alt="Second Image"
                style={{
                  width: "100%",
                  maxWidth: "32%",
                  borderRadius: "15px"
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
            <Row className="divrow">
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
                Our Girls Who Code program, which is for middle and high school students, consists of 10 Sunday classes at Mann Library on campus. Beginner and intermediate classes (taught in Python) are from 1-2:30, and advanced classes (topics include game dev, web dev, data science) are from 3-4:30. Each class typically consists of an icebreaker activity, a lesson, and coding exercises/final project. 

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
                  Outreach
                </h3>
                <p>
                General Outreach organizes workshops/events that we hold with external organizations (like the Tompkins County Public Library and Sciencenter). We have workshops for adults and also workshops for kids. Past workshops include teaching data visualization and web development. Here are the scheduled events for this semester: <a href="https://docs.google.com/spreadsheets/d/1uta_807tnsUrJRrAxbRN2iUabScbH0gLjH61wiGL1CQ/edit?usp=sharing" style={{color: "#7db5a9", textDecoration: "underline", fontWeight: "bold"}} className="divrowa">Spring 2025 General Outreach Events</a>. 

                </p>
              </Col>
            </Row>
          </Container>

          <center>
            <h4 style={{ paddingTop: "5%" }}>Questions? Email <a href="mailto:girlswhocode@cornell.edu">girlswhocode@cornell.edu</a></h4>
            <Container
              style={{
                paddingTop: "56px",
                paddingBottom: "56px",
                paddingRight: "5%",
              }}
            >
              {/* <Row style={{ paddingBottom: "1%" }}>
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
              </Row> */}
              {/* <div className="questions-cards">
                {vp.map((s, i) => (
                  <div key={i} className="question-card">
                    <QuestionsCard
                      name={s.name}
                      title={s.title}
                      img={boardHeadshots[s.netId + ".jpg"]}
                      netId={s.netId}
                      x
                    />
                  </div>
                ))}
              </div>
              <div className="questions-cards">
                {directors.map((s, i) => (
                  <div key={i} className="question-card">
                    <QuestionsCard
                      name={s.name}
                      title={s.title}
                      img={boardHeadshots[s.netId + ".jpg"]}
                      netId={s.netId}
                      x
                    />
                  </div>
                ))}
              </div> */}
            </Container>
          </center>
        </div>
      </div>
    );
  }
}
