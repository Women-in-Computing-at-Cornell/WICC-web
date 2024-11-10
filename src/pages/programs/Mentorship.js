import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import { community } from "../boardData";
import QuestionsCard from "./QuestionsCard.js";
import "./programPages.css";
import banner from "../../images/programs/mentorship_cropped.jpg";
import mentorshipInfo from "../../images/programs/mentorship-info.jpg";
import "./programPages.css";

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

    const linkStyle = {
      marginLeft: "10px", // Adjust the right margin to space out the links
    };

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
              connecting them with more experienced upperclassmen. The role of
              the mentor is to empower their mentees and enhance their interests
              in computing. Mentors and mentees will be matched primarily based
              on academic and career interests.
            </p>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            background: "#f7f9f8",
            padding: "40px",
          }}
        >
          <img
            src={mentorshipInfo}
            style={{
              width: "45%",
              borderRadius: "20px",
              marginRight: "5%",
              marginLeft: "8%",
            }}
          />
          <div>
            <p class="section-title">Mentorship Information</p>
            <ul>
              <li>Mondays 5:30 - 6:30</li>
              <li>Thursdays 5:30 - 6:30</li>
              <li>Find out more information from our kickoff slides!</li>
            </ul>
            <div className="mentorship-button">
              <Button
                style={linkStyle}
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
              <h2 className="mentor-mentee-header">Mentors</h2>
              <p className="mentor-mentee-text">
                As a mentor, you are expected to hold conversations with your
                mentees monthly, help your mentees establish meaningful
                connections, give advice on course selection, or otherwise. Any
                motivated undergraduates, graduate students, and grads majoring
                in or working in CS or related technical fields can sign up as a
                mentor.
              </p>
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
              <div className="button-container-mentor">
                <Button
                  style={{
                    backgroundColor: "black",
                    color: "white",
                    ...linkStyle,
                  }}
                  href="https://docs.google.com/forms/d/e/1FAIpQLSetjBeKhkapcHk0RtMoafbaE12gMS5kQ4qTLGWrjADagiTqvw/viewform"
                >
                  Become a Mentor!
                </Button>
              </div>
            </div>

            <div className="mentor-mentee-column">
              <h2 className="mentor-mentee-header">Mentees</h2>
              <p className="mentor-mentee-text">
                Mentees are matched with experienced upperclassmen or alumni
                mentors in groups of 2 mentors and 3-5 other mentees.
              </p>
              <h6 className="requirements-header-mentor">
                <b>Requirements:</b>
              </h6>
              <ul className="requirements-list-mentor">
                <li>
                  Undergraduates must be freshmen or sophomores at Cornell.
                </li>
                <li>
                  Participate in five meetings throughout the semester with the
                  group.
                </li>
              </ul>
              <div className="button-container-mentor">
                <Button
                  style={{
                    backgroundColor: "black",
                    color: "white",
                    ...linkStyle,
                  }}
                  href="https://docs.google.com/forms/d/e/1FAIpQLSeOZPJffYOUrGr65pawIY_YNJkax_ZEbxMmILyeIaxK356QWA/viewform"
                >
                  Become a Mentee!
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
