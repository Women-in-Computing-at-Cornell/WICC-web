import React, { Component } from 'react';
import './pages.css';
import BoardCard from "../components/BoardCard.js";
import illustration from "../images/homepage-illustration.png";
import Navbar from 'react-bootstrap/Navbar';
import { Nav, NavItem, NavDropdown } from 'react-bootstrap';
import { facultyData } from './facultyData';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FacultyCard from "../components/FacultyCard.js";
import Button from 'react-bootstrap/Button';



import Image from 'react-bootstrap/Image';



export default class Advisors extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "pres",
      displayData: []

    };
  }





  render() {



    function importAll(r) {
      let images = {};
      r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
      return images;
    }

    const facultyHeadshots = importAll(require.context('../images/faculty', false, /\.jpg/));
    console.log(facultyHeadshots)
    console.log(facultyData[0])

    function newlineText(text) {
      const newText = text.split('\n').map(str => <p>{str}</p>);

      return newText;
    }


    return (
      <div class='containerPage'>
        <center>
          <p style={{ paddingBottom: '3%' }}>WICC is creating a network that allows current WICC members to reach out to alumni to ask for advice on academic, social and professional issues. Should you choose to participate in this network, we would ask your permission before putting any WICC members with interests similar to yours in contact with you. You don't have to have been in WICC during your time at Cornell or even strictly a CS major to participate. WICC would truly appreciate your participation in this program and we welcome anyone who wishes to create an even wider support network for women in computer science and women considering joining our community.
</p>

          <p>Would you like to be involved as an alumna? Fill out the form below and we will get back to you about all of the exciting opportunities we have waiting for you!


</p>
          <Button href='https://goo.gl/forms/EddkIUx0HrvbiOzC2'

            style={{ marginBottom: '5%' }}>Sign Up</Button>


          <h3>Testimonials from WICC Members</h3>
        </center>

        <Container>
          <Row style={{ paddingBottom: "1%" }}>
            <div class='vertLine'>

            </div>

            <Col style={{ paddingRight: "6%", paddingLeft: "0%" }}>
              <p >
                "If there's one person who first made me feel involved, integrated and comfortable in the CIS community at Cornell, it would be Harini. Being her friend and mentee from when I was a freshman showed me that incredibly successful and humble upperclassmen also had their own confusions and struggles along the way, and that it was in-fact completely normal. Not to mention she was always willing to grab a meal, have fun conversations, and be there for me when I needed it."


      </p>
              <p class='sub'>- Nandita Mohan '20</p>

            </Col>
            <div class='vertLine'>

            </div>
            <Col style={{ paddingRight: "6%", paddingLeft: "0%", }}>
              <p >
                “WICC has given me an invaluable amount of resources, one of them being the alumni network. When I first heard about WICC my freshman year, I joined Lunch Bunch and was able to meet two incredible women who I am happy to call my mentors. They took the time to talk about all of the diverse opportunities in tech and how WICC has allowed them to connect with other women in the field. WICC alumni are not only incredibly inspirational, but are also dedicated and down-to-earth. Looking forward to being a part of this admirable network after graduation.”

</p>
              <p class='sub'>- Maya Frai '20
</p>
            </Col>
            <div class='vertLine'>

            </div>

            <Col style={{ paddingRight: "6%", paddingLeft: "0%", }}>
              <p >
                “I learned about the different fields of CS and how they're used, which I previously had many misconceptions about. Lunch Bunch truly let me cement my decision to major in CS, as through it I got an idea of the potential of the field.”

</p>
              <p class='sub'>- Karen Zhang '21
</p>
            </Col>
          </Row>
        </Container>


        {/* 
        {facultyData.map((value) => {
          console.log(value.bio.split('\n'))
          return <Container class='facultyAdjust'>
            <Row style={{ paddingBottom: "3%" }}>
              <Col >


              </Col>
              <Col >
              </Col>
            </Row>
          </Container>
        })
        } */}
      </div >
    );
  }
}
