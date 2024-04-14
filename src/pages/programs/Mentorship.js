import React, { Component } from "react";
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
import mentorship from "../../images/programs/mentorship.jpg";
import mentorship1 from "../../images/programs-pictures/mentorship1.jpeg"
import QuestionsCard from "./QuestionsCard.js";
import Image from "react-bootstrap/Image";

import medal from "../../images/medal.jpg";

import "./Mentorship.css";

export default class Mentorship extends Component {
  render() {
    let directors = community.members.filter(
      (record) => record.position === "Mentorship Co-Director"
    );

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
      <div className="page">
          <div className="wrapper">
            <div className="mentorship-top" style={{ 
          backgroundRepeat: 'no-repeat', backgroundSize:"cover", opacity:"90%" }}>
              <div className="mentorship-title">
                  Mentorship
              </div>
              <div className="description">
                Our mentorship program strives to encourage and support students
                who are pursuing studies or future employment in computing by
                connecting them with more experienced upperclassmen. The role of
                the mentor is to empower their mentees and enhance their
                interests in computing. Mentors and mentees will be matched
                primarily based on academic and career interests.
              </div>
            </div>
            <div className="mentorship-info">
              <div className="mentorship-info-img">
                <img className="mentorship1-img" src={mentorship1} alt="mentorship1"/>
              </div>
              <div className="mentorship-info-text">
                <h3>Mentorship Information</h3>
                <ul>
                    <li>
                    Mondays: 5:30-6:30
                    </li>
                    <li>
                    Thursdays: 5:30-6:30
                    </li>
                    <li>
                    Find out more information in our kick off slides!
                    </li>
                  </ul>
              </div>
            </div>
            <div className="outer-div">
              <div className="mentor-div">
                <h3>Mentors</h3>
                <p>
                  As a mentor you are expected to hold conversations with your
                  mentees monthly, help your mentees establish meaningful
                  connections, give advice on course selection, or otherwise. Any
                  motivated undergraduates, graduate students, and grads majoring
                  in or working CS or related technical fields can sign-up as a
                  mentor.
                </p>
                <h5>Requirements</h5>
                <ul>
                    <li>
                      Undergraduates must be{" "}
                      <span style={{ fontWeight: "bold" }}>
                        sophomores, juniors
                      </span>
                      , or <span style={{ fontWeight: "bold" }}>seniors</span> at
                      Cornell.
                    </li>
                    <li>
                      <span style={{ fontWeight: "bold" }}>
                        Five meetings with your mentees:
                      </span>{" "}
                      mentorship groups will meet biweekly.
                    </li>
                  </ul>
              </div>
              <div className="mentee-div">
                <h3>Mentees</h3>
                <p>
                  Mentees are matched with experienced upperclassmen or alumni
                  mentors in groups of 2 mentors and 3-5 other mentees.
                </p>

                <h5>Requirements</h5>
                  <ul>
                    <li>
                      Undergraduates must be freshman or sophomores at Cornell.
                    </li>
                    <li>
                      Participate in{" "}
                      <span style={{ fontWeight: "bold" }}>five meetings</span>{" "}
                      throughout the semester with the group.
                    </li>
                  </ul>
              </div>
            </div>
          </div>
          <div className="question-wrapper">
            <div className="question-div">
              <h5 style={{ paddingTop: "5%" , textAlign: "center"}}>Questions?</h5>
              <div className="q-photos">
                <div className="person1">
                  <QuestionsCard
                          name={directors[0].name}
                          title={directors[0].title}
                          img={boardHeadshots[directors[0].netId + ".jpg"]}
                          netId={directors[0].netId}
                  />
                </div>
                <div className="person2">
                  <QuestionsCard
                        name={directors[1].name}
                        title={directors[1].title}
                        img={boardHeadshots[directors[1].netId + ".jpg"]}
                        netId={directors[1].netId}
                    />
                </div>
              </div>
            </div>
          </div>
        </div>
      
    );
  }
}
