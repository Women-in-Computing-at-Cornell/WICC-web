import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";


import banner from "../../images/programs/mentorship_cropped.jpg";
import mentorshipInfo from "../../images/programs/mentorship-info.jpg"
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


import "./programPages.css";


export default class Mentorship extends Component {
  render() {
    let directors = community.members.filter(
      (record) => record.position === "Mentorship Co-Director"
    );


    const linkStyle = {
      marginLeft: "10px", // Adjust the right margin to space out the links
    };


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
      <>
        <div className="full-width-banner">
          <img src={banner} alt="Banner" class="banner" />
          <div class="banner-text">
            <p class="banner-header">Mentorship</p>
            <p>
              Our mentorship program strives to encourage and support students
              who are pursuing studies or future employment in computing by
              connecting them with more experienced upperclassmen. The role of
              the mentor is to empower their mentees and enhance their
              interests in computing. Mentors and mentees will be matched
              primarily based on academic and career interests.
            </p>
          </div>
        </div >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            // marginTop: "10%",
            marginBottom: "10%",
            background: "#f7f9f8",
            padding: "40px",
          }}>
          <img
            src={mentorshipInfo}
            style={{
              width: "45%",
              borderRadius: "20px", marginRight: "5%", marginLeft: "8%"
            }} />
          <div>
            <p class="section-title">Mentorship Information</p>
            <ul>
              <li>Mondays 5:30 - 6:30</li>
              <li>Thursdays 5:30 - 6:30</li>
              <li>Find out more information from our kickoff slides!</li>
            </ul>
            <div className="mentorship-button">
              <Button style={linkStyle} href="https://docs.google.com/presentation/d/10qt0XGzXejU2yxcj3yZWgZgom5MxcnecLqlItQoKwGU/edit#slide=id.g1134089c044_0_0">
                Kickoff Slides
              </Button>
            </div>
          </div>
        </div>
        <div className="mentor-mentee-content">
          <div className="mentor-mentee-grid">
            <div className="mentor-mentee-column">
              <h2
                style={{
                  padding: "10px",
                  fontWeight: "bold",
                  color: "black",
                  fontSize: 22,
                }}
              >
                Mentor
              </h2>
              <p style={{ padding: "15px", fontSize: 13 }}>
                As a mentor you are expected to hold conversations with your
                mentees monthly, help your mentees establish meaningful
                connections, give advice on course selection, or otherwise.
                Any motivated undergraduates, graduate students, and grads
                majoring in or working CS or related technical fields can
                sign-up as a mentor.
                <br />
                <br />
                <h6><b>Requirements:</b></h6>
                <ul></ul>
                <ul>
                  <li>Undergraduates must be sophomores, juniors, or seniors at
                    Cornell.</li>
                  <li>Five meetings with your mentees: mentorship groups will
                    meet biweekly.</li>
                </ul>
              </p>
            </div>
            <div className="mentor-mentee-column">
              <h2
                style={{
                  padding: "10px",
                  fontWeight: "bold",
                  color: "black",
                  fontSize: 22,
                }}
              >
                Mentee
              </h2>
              <p style={{ padding: "15px", fontSize: 13 }}>
                Mentees are matched with experienced upperclassmen or alumni
                mentors in groups of 2 mentors and 3-5 other mentees.
                <br />
                <br />
                <br />
                <br />
                <br />
                <h6><b>Requirements:</b></h6>
                <ul></ul>
                <ul>
                  <li>Undergraduates must be freshman or sophomores at Cornell.
                  </li>
                  <li>Participate in five meetings throughout the semester with
                    the group.</li>
                </ul>
              </p>
            </div>
          </div></div>
      </>
      //   <div class="page">
      //     <h1>Mentorship</h1>


      //     <Container>
      //       <Row style={{ paddingBottom: "1%" }}>
      //         <Col xs lg="6" style={{ paddingRight: "5%", paddingLeft: "0%" }}>
      //           <p style={{ paddingRight: "5%", paddingTop: "2%" }}>
      //             Our mentorship program strives to encourage and support students
      //             who are pursuing studies or future employment in computing by
      //             connecting them with more experienced upperclassmen. The role of
      //             the mentor is to empower their mentees and enhance their
      //             interests in computing. Mentors and mentees will be matched
      //             primarily based on academic and career interests.
      //           </p>
      //           <Container>
      //             <Row style={{ paddingTop: "2%" }}>
      //               <h3>Mentorship Information: </h3>
      //               <ul>
      //                 <li>Mondays: 5:30-6:30</li>
      //                 <li>Thursdays: 5:30-6:30</li>
      //                 <li>
      //                   Find out more information in our kick off slides!
      //                   <Button href="https://docs.google.com/presentation/d/10qt0XGzXejU2yxcj3yZWgZgom5MxcnecLqlItQoKwGU/edit#slide=id.g1134089c044_0_0">
      //                     Kickoff Slides
      //                   </Button>
      //                 </li>
      //               </ul>
      //             </Row>
      //           </Container>
      //         </Col>
      //         <Col>
      //           <Image
      //             src={mentorship1}
      //             style={{ width: "90%", height: "auto", paddingBottom: "7%" }}
      //           ></Image>
      //         </Col>
      //       </Row>
      //     </Container>
      //     <Container>
      //       <h3>Mentors</h3>


      //       <Row style={{ paddingBottom: "1%" }}>
      //         <Col style={{ paddingRight: "5%" }}>
      //           <p>
      //             As a mentor you are expected to hold conversations with your
      //             mentees monthly, help your mentees establish meaningful
      //             connections, give advice on course selection, or otherwise. Any
      //             motivated undergraduates, graduate students, and grads majoring
      //             in or working CS or related technical fields can sign-up as a
      //             mentor.
      //           </p>
      //         </Col>
      //         <Col style={{ paddingRight: "5%", paddingLeft: "0%" }}>
      //           <h4>Requirements</h4>
      //           <ul>
      //             <li>
      //               Undergraduates must be{" "}
      //               <span style={{ fontWeight: "bold" }}>
      //                 sophomores, juniors
      //               </span>
      //               , or <span style={{ fontWeight: "bold" }}>seniors</span> at
      //               Cornell.
      //             </li>
      //             <li>
      //               <span style={{ fontWeight: "bold" }}>
      //                 Five meetings with your mentees:
      //               </span>{" "}
      //               mentorship groups will meet biweekly.
      //             </li>
      //           </ul>
      //         </Col>
      //       </Row>
      //     </Container>
      //     <Container>
      //       <h3>Mentees</h3>


      //       <Row style={{ paddingBottom: "1%" }}>
      //         <Col style={{ paddingRight: "5%" }}>
      //           <p>
      //             Mentees are matched with experienced upperclassmen or alumni
      //             mentors in groups of 2 mentors and 3-5 other mentees.
      //           </p>
      //         </Col>
      //         <Col style={{ paddingRight: "5%", paddingLeft: "0%" }}>
      //           <h4>Requirements</h4>
      //           <ul>
      //             <li>
      //               Undergraduates must be freshman or sophomores at Cornell.
      //             </li>
      //             <li>
      //               Participate in{" "}
      //               <span style={{ fontWeight: "bold" }}>five meetings</span>{" "}
      //               throughout the semester with the group.
      //             </li>
      //           </ul>
      //         </Col>
      //       </Row>
      //     </Container>
      //     <Container>
      //       <Row style={{ paddingBottom: "1%" }}>
      //         <Col style={{ paddingRight: "5%", paddingLeft: "5%" }}>
      //           <Image
      //             src={mentorship2}
      //             style={{ width: "80%", height: "auto", paddingBottom: "7%" }}
      //           ></Image>
      //         </Col>
      //         <Col style={{ paddingRight: "2%", paddingLeft: "0%" }}>
      //           <Image
      //             src={mentorship3}
      //             style={{ width: "80%", height: "auto", paddingBottom: "7%" }}
      //           ></Image>
      //         </Col>
      //       </Row>
      //     </Container>


      //     <center>
      //       <h5 style={{ paddingTop: "5%" }}>Questions?</h5>
      //       <Container style={{ paddingRight: "10%" }}>
      //         <Row></Row>
      //         <Row style={{ paddingBottom: "1%" }}>
      //           <Col>
      //             <QuestionsCard
      //               name={directors[0].name}
      //               title={directors[0].title}
      //               img={boardHeadshots[directors[0].netId + ".jpg"]}
      //               netId={directors[0].netId}
      //             />
      //           </Col>
      //           <Col>
      //             {/* <Image src={(boardHeadshots[directors[1].netId + '.jpg'])} roundedCircle style={{ width: "150px", height: '150px' }}></Image> */}
      //             {/* <Card.Img variant="top" src={(boardHeadshots[directors[1].netId + '.jpg'])} class="boardImg" /> */}


      //             {/* <br /><br />


      //             <div class='boardText'>
      //               <p > {directors[1].name}, {directors[1].title}</p>
      //               <a href={"mailto:" + directors[1].netId + "@cornell.edu"} class="emailLink">
      //                 {directors[1].netId}@cornell.edu
      //               </a>
      //             </div> */}
      //             <QuestionsCard
      //               name={directors[1].name}
      //               title={directors[1].title}
      //               img={boardHeadshots[directors[1].netId + ".jpg"]}
      //               netId={directors[1].netId}
      //             />
      //           </Col>
      //         </Row>
      //       </Container>
      //     </center>
      //   </div>
    );
  }
}