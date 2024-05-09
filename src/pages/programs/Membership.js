import React, { Component } from "react";

import banner from "../../images/programs/active_membership_banner.jpg";
import eboard from "../../images/programs/active_member.png";
import iceskating from "../../images/programs/iceskatingsocial.jpg";
import Dropdown from "../../components/Dropdown.jsx";
import { operations } from "../boardData";
import QuestionsCard from "./QuestionsCard.js";
import "./membership.css";

export default class Membership extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    let sec = operations.members.filter(
      (record) => record.position === "Secretary"
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

    return (
      <>
        <div class="full-width-banner">
          <img src={banner} alt="Banner" class="banner" />
          <div class="banner-text">
            <p class="banner-header">Active Membership</p>
            <p>
              WICC Active Membership aims to provide anyone in our community
              with a more personalized WICC experience.
            </p>
            <p>
              The guidelines and requirements for becoming a WICC Active Member
              are created to help dedicated members get the most out of the
              available opportunities. We would especially like to thank the
              members who have completed the requirements below with rewards
              delineated in the “Perks” section. We look forward to your time
              with us!
            </p>
          </div>
        </div>
        <div class="page">
          <p class="section-title">Becoming an active WICC member</p>
          <p>
            The WICC community is open to everyone regardless of their major or
            gender or membership status. We still welcome you to join us as a
            general body member at WICC events even if you can't commit to being
            an active member.
          </p>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              marginTop: "10%",
              marginBottom: "10%",
            }}
          >
            <img
              src={eboard}
              style={{ width: "45%", borderRadius: "20px", marginRight: "5%" }}
            />
            <div>
              <p class="section-title">Perks</p>
              <p>
                As soon as you complete the requirements, you will be named an
                Active Member. Enjoy the perks here after till the end of the
                next semester.{" "}
              </p>
              <ul>
                <li>Get access to the Active Member Slack.</li>
                <li>Get access to the Alumni directory.</li>
                <li>
                  Be invited to a member-only social event at the end of the
                  semester.
                </li>
                <li>Be able to take part in the active member initiative.</li>
              </ul>
            </div>
          </div>

          <p class="section-title">Requirements</p>
          <p>
            <strong>
              As soon as you complete the requirements below, you will be named
              an Active Member.
              <br />
              Enjoy the perks hereafter till the end of the next semester!
            </strong>
            <br />
            (Example: If you sign-up in Fall 2023 and complete the requirements,
            then you will receive the perks for the rest of the semester and in
            Spring 2023.)
          </p>
          <br />
          <div id="reqs">
            <div class="container">
              <div class="column">
                <div class="column-header">01</div>
                <div class="text-content">
                  <ul>
                    <li>
                      Have a positive and supportive outlook on all forms of
                      diversity.{" "}
                    </li>
                    <li>
                      Develop a growth mindset in being an open, aware and
                      helpful individual.{" "}
                    </li>
                    <li>
                      Represent WICC values in-person and online, knowing that
                      what you say/post reflects both yourself and the
                      organization.{" "}
                    </li>
                  </ul>
                </div>
              </div>
              <div class="column">
                <div class="column-header">02</div>
                <div class="text-content">
                  Uphold the WICC mission statement: Women in Computing at
                  Cornell strives to make computing inclusive for all. We aim to
                  foster a supportive community of women* and allies equipped
                  with the resources needed to recognize and overcome
                  challenges. By creating opportunities for technical and
                  leadership growth, we work to ensure that people of all
                  identities are able to discover and pursue their interests and
                  talents in order to positively impact the future of tech. *All
                  gender identities are welcome and supported!{" "}
                </div>
              </div>
              <div class="column">
                <div class="column-header">03</div>
                <div class="text-content">
                  Actively attend and engage at more than 4 WICC events/programs
                  throughout the semester. These events include:
                  <ul>
                    <li>Lunch Bunch </li>
                    <li>Mentorship Circles</li>
                    <li>Cornell Girls Who Code </li>
                    <li>Technical Committee</li>
                    <li>Photo & Video Committee</li>
                    <li>Cracking Your Career</li>
                    <li>Corporate Committee</li>
                  </ul>
                </div>
              </div>

            </div>

          </div>


          <div
            style={{
              marginTop: "10%",
              background: "#DCF3ED",
              display: "flex",
              flexDirection: "row",
              padding: "2%",
              borderRadius: "40px",
              justifyContent: "space-between",
            }}
          >
            <div style={{ flex: 1, padding: "1em" }}>
              <p class="section-title">Track Your Progress</p>
              <p>
                Once you sign in at any event using the event attendance form,
                we will track your attendance at events and see if the above
                requirements are fulfilled. Be sure to sign-in when you attend
                an event!{" "}
              </p>
              <p>
                We will inform you of the type of event you are attending
                (Corporate Event or Non- Corporate Event). We will also keep you
                updated with your progress monthly and give you an opportunity
                to fill out a feedback form.{" "}
              </p>
              <p>Do let us know about your experience!</p>
            </div>
            <img
              src={iceskating}
              style={{
                width: "35%",
                borderRadius: "20px",
                flex: 1,
                marginLeft: "5%",
              }}
            />
          </div>

          <div style={{ marginTop: "10%" }}>
            <p class="section-title">Frequently Asked Questions</p>
          </div>

          <div>
            <Dropdown title="What happens if you sign-up mid-way through a semester?">
              We welcome you to sign-up anytime during a semester. When you
              sign-up, we add in all the events you attended since the start of
              that semester. As mentioned before, you must complete the
              requirements before you become an Active Member.
            </Dropdown>
            <Dropdown title="Is it mandatory to attend G-Body discussions?">
              We highly encourage our members to attend our G-Body discussions
              but it is not required. Our G-Body discussions are held monthly.
            </Dropdown>
            <Dropdown title="How can you keep up with our upcoming events?">
              For updates on our events, you can:
              <br />
              <ul>
                <li>
                  Subscribe to our listserv by sending an email titled 'join' to
                  wicc-l-request@cornell.edu "
                </li>
                <li>
                  Check our{" "}
                  <a href="https://wicc.cornell.edu/#/calendar">Calendar.</a>
                </li>
                <li>Follow us on Facebook and Instagram.</li>
                <li>
                  We will keep you updated with all the required information and
                  progress! Meanwhile, enjoy your experience with WICC and we
                  look forward to interacting with you!
                </li>
              </ul>
            </Dropdown>
          </div>

          <div style={{ marginTop: "10%" }}>
            <p class="section-title">Questions?</p>
            <p>
              Reach out to the following WICC members for clarification
              regarding to Active Membership.
            </p>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
              {
                sec.map((s, i) => (
                  <QuestionsCard
                    name={s.name}
                    title={s.title}
                    img={boardHeadshots[s.netId + ".jpg"]}
                    netId={s.netId}

                  />
                ))
              }
            </div>


          </div>
        </div>
      </>
    );
  }
}
