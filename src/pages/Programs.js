import React, { useState, useEffect, useLayoutEffect } from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import "./Program.css";
import "./pages.css";
import cyc from "../images/programs/cyc.jpg";
import lunchbunch from "../images/programs/lunchbunch.jpg";
import mentorship from "../images/programs/mentorship.jpg";
import outreach from "../images/programs/outreach.jpg";
import Programhero from "../images/programs/Programhero.png";

let styles = {
  container: {
    margin: "3%",
  },
  col: {
    borderRadius: ".5em",
    margin: "0px",
  },
  link: {
    color: "black",
  },
};

const Programs = () => {
  return (
    <div>
      <div className="hero">
        <div className="hero-text">
          <h1
            className="responsive-title"
            style={{
              marginBottom: "1.2rem",
              fontWeight: "900",
              fontSize: "3rem",
            }}
          >
            {" "}
            Programs{" "}
          </h1>
          <p className="responsive-text">
            We are dedicated to fostering an inclusive and empowering community
            for women and non-binary students at Cornell. Each semester, we
            curate a dynamic lineup of programs and events designed to not only
            provide support but also create an environment that is both
            enriching and informative. <br />
            <br /> Our goal is to continually enhance these offerings, ensuring
            they resonate with our diverse community and actively engage every
            participant.
          </p>
        </div>
        <div className="hero-image">
          <img src={Programhero} style={{ width: "100%" }}></img>
        </div>
      </div>
      <h2 className="what-we-do">What We Do</h2>
      <div className="events-grid">
        <Link to="/outreach">
          <div className="card">
            <img src={outreach} alt="Outreach" className="image" />
            <div>
              <h1 className="card-title">Outreach ↗</h1>
              <p className="card-description">
                Be a part of making a difference and empowering others
              </p>
            </div>
          </div>
        </Link>
        <Link to="/crackingyourcareer">
          <div className="card">
            <img src={cyc} alt="Cracking Your Career" className="image" />
            <div>
              <h1 className="card-title">Cracking Your Career ↗</h1>
              <p className="card-description">
                Prepare for recruitment with professional workshops and more!
              </p>
            </div>
          </div>
        </Link>
        <Link to="/lunch">
          <div className="card">
            <img src={lunchbunch} alt="Lunch Bunch" className="image" />
            <div>
              <h1 className="card-title">Lunch Bunch ↗</h1>
              <p className="card-description">
                Network with CIS Professors and Alumni
              </p>
            </div>
          </div>
        </Link>
        <Link to="/mentorship">
          <div className="card">
            <img src={mentorship} alt="Mentorship" className="image" />
            <div>
              <h1 className="card-title">Mentorship ↗</h1>
              <p className="card-description">
                Navigate your career or studies with the help of upperclassmen
              </p>
            </div>
          </div>
        </Link>
      </div>

      <h2 className="upcoming-title">Upcoming Events</h2>
      <div className="calendar-container">
        <div className="calendar-wrapper">
          <iframe
            src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FNew_York&showPrint=0&src=d2ljY2Nvcm5lbGxAZ21haWwuY29t&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=Y29ybmVsbC5lZHVfOTh0c2JvdWNtaTUzdjJybHQ3a2RqNDN2a2NAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%23009688&color=%238E24AA&color=%2333B679"
            style={{
              border: "solid 1px #777",
              width: "100%",
              height: "600px",
            }}
            title="Google Calendar"
          ></iframe>
        </div>
      </div>
    </div>
  );
};
export default Programs;
