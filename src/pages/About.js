import React from 'react';
import './About.css';
import community from "../images/about-pictures/community.jpg";
import outreach from "../images/about-pictures/outreach.jpg";
import academic from "../images/about-pictures/academic.jpg";
import brand from "../images/about-pictures/brand.jpg";


import Image from 'react-bootstrap/Image'

import Figure from 'react-bootstrap/Figure'
import FigureImage from 'react-bootstrap/FigureImage'
import FigureCaption from 'react-bootstrap/FigureCaption'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



const About = () => {
  return (
    <div class="home-container">
      <section class="hero-container">
        <h1 style={{ fontWeight: 'bold' }}>About Us</h1>
        <br />
        <p style={{ fontWeight: "bold", fontSize: 20 }}>We hold community events, campaigns, and programs with the Cornell student body
          and local Ithaca community to uplift anyone to succeed in tech with confidence.</p>
        <Container>
          <Row style={{ paddingBottom: "4%", paddingLeft: '2%' }}>
            <Col style={{ paddingRight: "5%", paddingLeft: "0%", marginRight: '3%' }}>
              <h5><span style={{ color: "#9CE2D3", fontWeight: "bold" }}> {">"} </span> &nbsp;&nbsp;Community</h5>
              <p>WICC engages regularly with students, faculty, and corporate sponsors. From community discussions on diversity in tech to mentorship groups, our goal is to make anyone feel included and welcome in CIS at Cornell.</p>
              <p style={{ fontSize: "90%" }}><span style={{ fontWeight: "bold" }}> Focus: </span> Community discussions, Mentorship, Social</p>


            </Col>
            <Col >
              <Image src={community} style={{ width: "60%", height: 'auto', paddingBottom: "7%" }}></Image>

            </Col>
          </Row>

          <Row style={{ paddingBottom: "4%", paddingLeft: '2%' }}>
            <Col style={{ paddingRight: "5%", paddingLeft: "0%", marginRight: '3%' }}>
              <h5><span style={{ color: "#9CE2D3", fontWeight: "bold" }}> {">"} </span> &nbsp;&nbsp;Academic</h5>
              <p>WICC works to expand opportunities and provide career
              support by publicizing opportunities for women,
              hosting alumni women panels, tech talks and networking events with companies. </p>
              <p style={{ fontSize: "90%" }}><span style={{ fontWeight: "bold" }}> Focus: </span> Career Development, Faculty & Alumni Relations, Underclassmen Outreach</p>


            </Col>
            <Col >
              <Image src={academic} style={{ width: "60%", height: 'auto', paddingBottom: "7%" }}></Image>

            </Col>
          </Row>

          <Row style={{ paddingBottom: "4%", paddingLeft: '2%' }}>
            <Col style={{ paddingRight: "5%", paddingLeft: "0%", marginRight: '3%' }}>
              <h5><span style={{ color: "#9CE2D3", fontWeight: "bold" }}> {">"} </span> &nbsp;&nbsp;Outreach</h5>
              <p>
                WICC extends our influence through outreach aimed at inspiring young students to consider and pursue computing fields. We
                encourage and support scholarships for the Grace Hopper Conference, and run weekly Girls Who Code workshops
                for high school and middle students in the Ithaca area.

              </p>
              <p style={{ fontSize: "90%" }}><span style={{ fontWeight: "bold" }}> Focus: </span> Girls Who Code</p>


            </Col>
            <Col >
              <Image src={outreach} style={{ width: "60%", height: 'auto', paddingBottom: "7%" }}></Image>

            </Col>
          </Row>



          <Row style={{ paddingBottom: "4%", paddingLeft: '2%' }}>
            <Col style={{ paddingRight: "5%", paddingLeft: "0%", marginRight: '3%' }}>
              <h5><span style={{ color: "#9CE2D3", fontWeight: "bold" }}> {">"} </span> &nbsp;&nbsp;Brand</h5>
              <p>WICC maintains its vision through the brand team, which is in charge of photography, designs, and the website.</p>
              <p style={{ fontSize: "90%" }}><span style={{ fontWeight: "bold" }}> Focus: </span> Publicity, Design, Web, Photography</p>


            </Col>
            <Col >
              <Image src={brand} style={{ width: "60%", height: 'auto', paddingBottom: "7%" }}></Image>

            </Col>
          </Row>
        </Container>




      </section>
    </div >
  );
}

export default About;
