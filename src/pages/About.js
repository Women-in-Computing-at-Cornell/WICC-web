import React from "react";
import "./About.css";
import community from "../images/about-pictures/community.jpg";
import outreach from "../images/about-pictures/outreach.jpg";
import academic from "../images/about-pictures/academic.jpg";
import brand from "../images/about-pictures/brand.jpg";
import corporate from "../images/about-pictures/corporate.jpg";

import Image from "react-bootstrap/Image";

// import Figure from 'react-bootstrap/Figure'
// import FigureImage from 'react-bootstrap/FigureImage'
// import FigureCaption from 'react-bootstrap/FigureCaption'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const About = () => {
  return (
    <div class="home-container">
      <section class="hero-container">
        <h1 style={{ fontWeight: "bold" }}>About Us</h1>
        <br />
        <p style={{ fontWeight: "bold", fontSize: 20 }}>
          We hold community events, campaigns, and programs with the Cornell
          student body and local Ithaca community to uplift anyone to succeed in
          tech with confidence.
        </p>
        <Container>
          <Row style={{ paddingBottom: "4%", paddingLeft: "2%" }}>
            <Col
              style={{
                paddingRight: "5%",
                paddingLeft: "0%",
                marginRight: "3%",
              }}
            >
              <h5>
                <span style={{ color: "#9CE2D3", fontWeight: "bold" }}>
                  {" "}
                  {">"}{" "}
                </span>{" "}
                &nbsp;&nbsp;Community
              </h5>
              <p>
                WICC’s Community team regularly engages with students interested
                in tech through our mentorship program, allyship workshops, and
                socials. Our goal is to help foster meaningful relationships and
                make anyone feel included and welcome in CIS at Cornell. In the
                past we’ve hosted the WICC Away retreat and CIS Formal, held
                community discussions on speaking up for yourself, and hosted
                multiple allyship events in collaboration with other
                organizations at Cornell.
              </p>
              <p style={{ fontSize: "90%" }}>
                <span style={{ fontWeight: "bold" }}> Focus: </span> Mentorship,
                Allyship, Social
              </p>
            </Col>
            <Col>
              <Image
                src={community}
                style={{ width: "60%", height: "auto", paddingBottom: "7%" }}
              ></Image>
            </Col>
          </Row>

          <Row style={{ paddingBottom: "4%", paddingLeft: "2%" }}>
            <Col
              style={{
                paddingRight: "5%",
                paddingLeft: "0%",
                marginRight: "3%",
              }}
            >
              <h5>
                <span style={{ color: "#9CE2D3", fontWeight: "bold" }}>
                  {" "}
                  {">"}{" "}
                </span>{" "}
                &nbsp;&nbsp;Academic
              </h5>
              <p>
                WICC works to expand opportunities and provide career support by
                publicizing opportunities for women, hosting alumni women
                panels, tech talks and networking events with companies.{" "}
              </p>
              <p style={{ fontSize: "90%" }}>
                <span style={{ fontWeight: "bold" }}> Focus: </span> Career
                Development, Faculty & Alumni Relations, Underclassmen Outreach
              </p>
            </Col>
            <Col>
              <Image
                src={academic}
                style={{ width: "60%", height: "auto", paddingBottom: "7%" }}
              ></Image>
            </Col>
          </Row>

          <Row style={{ paddingBottom: "4%", paddingLeft: "2%" }}>
            <Col
              style={{
                paddingRight: "5%",
                paddingLeft: "0%",
                marginRight: "3%",
              }}
            >
              <h5>
                <span style={{ color: "#9CE2D3", fontWeight: "bold" }}>
                  {" "}
                  {">"}{" "}
                </span>{" "}
                &nbsp;&nbsp;Outreach
              </h5>
              <p>
                WICC extends our influence through outreach aimed at inspiring
                young students to consider and pursue fields in tech. We run a
                weekly Girls Who Code program for high school and middle
                students in the Ithaca area, intended to teach our students the
                basic principles of computing and encouraging the possibilities
                beyond these basics. In addition, we host a series of workshops
                with the Tompkins Public Library three times a semester, aimed
                at problem solving, critical thinking, and robotics to give
                younger students a taste of the power of technology. Other
                workshops in collaboration with organizations like Splash and
                Hack For Impact are also hosted throughout each semester as a
                blend of both programs to target a more casual setting for
                exploring both areas.
              </p>
              <p style={{ fontSize: "90%" }}>
                <span style={{ fontWeight: "bold" }}> Focus: </span> Girls Who
                Code Program & Tompkins County Robotic Workshops
              </p>
            </Col>
            <Col>
              <Image
                src={outreach}
                style={{ width: "60%", height: "auto", paddingBottom: "7%" }}
              ></Image>
            </Col>
          </Row>

          <Row style={{ paddingBottom: "4%", paddingLeft: "2%" }}>
            <Col
              style={{
                paddingRight: "5%",
                paddingLeft: "0%",
                marginRight: "3%",
              }}
            >
              <h5>
                <span style={{ color: "#9CE2D3", fontWeight: "bold" }}>
                  {" "}
                  {">"}{" "}
                </span>{" "}
                &nbsp;&nbsp;Brand
              </h5>
              <p>
                WICC maintains its vision through the brand team, which is in
                charge of photography, designs, social media, and the website.
                Follow us on our Instagram{" "}
                <a href={"https://www.instagram.com/wiccornell/"}>
                  @wiccornell
                </a>{" "}
                !{" "}
              </p>
              <p style={{ fontSize: "90%" }}>
                <span style={{ fontWeight: "bold" }}> Focus: </span> Website,
                Design, Media
              </p>
            </Col>
            <Col>
              <Image
                src={brand}
                style={{ width: "60%", height: "auto", paddingBottom: "7%" }}
              ></Image>
            </Col>
          </Row>

          <Row style={{ paddingBottom: "4%", paddingLeft: "2%" }}>
            <Col
              style={{
                paddingRight: "5%",
                paddingLeft: "0%",
                marginRight: "3%",
              }}
            >
              <h5>
                <span style={{ color: "#9CE2D3", fontWeight: "bold" }}>
                  {" "}
                  {">"}{" "}
                </span>{" "}
                &nbsp;&nbsp;Corporate
              </h5>
              <p>
                WICC partners with many corporate sponsors to host engaging
                information sessions and other fun events to provide
                opportunities to learn about internship and full-time roles.
              </p>
              <p style={{ fontSize: "90%" }}>
                <span style={{ fontWeight: "bold" }}> Focus: </span> Information
                Sessions, Tech Talks, Networking
              </p>
            </Col>
            <Col>
              <Image
                src={corporate}
                style={{ width: "60%", height: "auto", paddingBottom: "7%" }}
              ></Image>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default About;
