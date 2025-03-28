import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import { community } from "../boardData";
import QuestionsCard from "./QuestionsCard.js";
import "./programPages.css";
import banner from "../../images/programs/mentorship_cropped.jpg";
import mentorshipInfo from "../../images/programs/mentorship_caro/mentorship-info.jpg";
import ImgCarousel from "../../components/ImgCarousel.jsx";
import "./programPages.css";
import Carousel from "react-bootstrap/Carousel";

export default class Mentorship extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    let cod = community.members.filter(
      (record) => record.position === "Mentorship Co-Director"
    );

    function importAll(r) {
      let images = {};
      r.keys().forEach((item) => {
        images[item.replace("./", "")] = r(item);
      });
      return images;
    }

    const boardHeadshots = importAll(
      require.context("../../images/headshots/board", false, /\.jpg/)
    );

    const carouselImages = importAll(
      require.context("../../images/programs/mentorship_caro", false, /\.jpg/)
    );

    const imgNames = Object.keys(carouselImages);

    //styling for the kickoff slides button
    const kickoffStyle = {
      width: "30%",
    };

    //sstyle for the mentor apply buttons
    const applyStyle = {
      color: "white",
      width: "120%",
      fontWeight: "bold",
      backgroundColor: "black",
      marginLeft: "10px", // Adjust the right margin to space out the links
    }

    return (
      <>
        <div className="full-width-banner">
          <img src={banner} alt="Banner" className="banner" />
          <div className="banner-text">
            <a href="/#/programs">
              <button id="back">&lt; Back to Programs Page</button>
            </a>
            <p className="banner-header">Mentorship</p>
            <p>
              Our mentorship program strives to encourage and support students
              who are pursuing studies or future employment in computing by
              connecting them with more experienced upperclassmen.
            </p>
          </div>
        </div>

        {/* Mentorship Information Section  */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "#f7f9f8",
            padding: "5%",
          }}
        >
          {/* image carousel */}
          <div
            style={{
              width: "100%",
              maxWidth: "700px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Carousel
              style={{
                width: "80%",
              }}
            >
              {Object.values(carouselImages).map((src, index) => (
                <Carousel.Item key={index}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "100%",
                    }}
                  >
                    <img
                      className="d-block w-100"
                      src={src}
                      alt={`Slide ${index + 1}`}
                      style={{
                        objectFit: "cover",
                        maxWidth: "100%",
                        maxHeight: "100%",
                        borderRadius: "25px",

                      }}
                    />
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>

          {/* text for mentorship information */}
          <div style={{
            paddingRight: "10%",
          }}>
            <p class="section-title">Mentorship Information</p>
            <p>The role of the mentor is to empower their mentees and enhance their interests in computing.
              Mentors and mentees will be matched primarily based on academic and career interests.</p>
            <p style={{ fontWeight: "bold" }}> Weekly activity time: <br></br> Wednesdays 5-6pm</p>
            <p>Find out more information from our kickoff slides!</p>
            <div className="mentorship-button">
              <Button
                style={kickoffStyle}
                href="https://docs.google.com/presentation/d/10qt0XGzXejU2yxcj3yZWgZgom5MxcnecLqlItQoKwGU/edit#slide=id.g1134089c044_0_0"
              >
                Kickoff Slides
              </Button>
            </div>
          </div>
        </div>

        <div className="mentor-mentee-content">
          <div className="mentor-mentee-grid">
            <div className="mentor-mentee-column">
              <div>
                <h2 className="mentor-mentee-header">Mentors</h2>
                <p className="mentor-mentee-text">
                  As a mentor, you are expected to hold conversations with your
                  mentees monthly, help your mentees establish meaningful
                  connections, give advice on course selection, or otherwise.
                  Any motivated undergraduates, graduate students, and grads
                  majoring in or working in CS or related technical fields can
                  sign up as a mentor.
                </p>
              </div>
              <div>
                <h6 className="requirements-header-mentor">
                  <b>Requirements:</b>
                </h6>
                <ul className="requirements-list-mentor">
                  <li>
                    Undergraduates must be sophomores, juniors, or seniors at
                    Cornell.
                  </li>
                  <li>
                    Five meetings with your mentees: mentorship groups will meet
                    biweekly.
                  </li>
                </ul>
              </div>
              <div className="apply-button">
                <Button
                  style={applyStyle}
                  href="https://forms.gle/5vAdekmMTXEf8NCT6"
                >
                  Apply to Mentor!
                </Button>
              </div>
            </div>

            <div className="mentor-mentee-column">
              <div>
                <h2 className="mentor-mentee-header">Mentees</h2>
                <p className="mentor-mentee-text">
                  Mentees are matched with experienced upperclassmen or alumni
                  mentors in groups of 2 mentors and 3-5 other mentees.
                </p>
              </div>
              <div>
                <h6 className="requirements-header-mentor">
                  <b>Requirements:</b>
                </h6>
                <ul className="requirements-list-mentor">
                  <li>
                    Undergraduates must be freshmen or sophomores at Cornell.
                  </li>
                  <li>
                    Participate in five meetings throughout the semester with
                    the group.
                  </li>
                </ul>
              </div>
              <div>
                <Button style={applyStyle}
                  href="https://forms.gle/Hm9nxLHkJX7x9ayg7"
                >
                  Apply to be a Mentee!
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="questions-section">
          <h2>
            <b>Questions?</b>
          </h2>
          <br />
          <p>
            Reach out to the following WICC members for clarification regarding
            Active Membership.
          </p>
          <div className="questions-cards-container">
            {cod.map((s, i) => (
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
        </div>
      </>
    );
  }
}
