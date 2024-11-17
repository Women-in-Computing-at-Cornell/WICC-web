import React, { useState, useEffect, useLayoutEffect } from "react";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Program.css";
import "./pages.css";
//import community from "../images/programs/community.jpg";
import cyc from "../images/programs/cyc.jpg";
import lunchbunch from "../images/programs/lunchbunch.jpg";
import mentorship from "../images/programs/mentorship.jpg";
//import girlswhocode from "../images/programs/girlswhocode.jpg";
import outreach from "../images/programs/outreach.jpg";
import Programhero from "../images/programs/Programhero.png";
//import EventCard from "../components/eventCard";
//import Card from "../components/Card";
//import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
//import Progressbar from "../components/ProgressBar";
//import Calendar from "./Calendar";

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
          <h1 style={{ marginBottom: "1.2rem" }}> Programs </h1>
          <p>
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
      
        <div className="events-grid">
        <Link to="/outreach" className="card">
          <div>
            <img src={outreach} alt="Outreach" className="image" />
            <div >
              <h1>Outreach ↗</h1>
              <p>
                Be part of making a difference and empowering others.
              </p>
            </div>
          </div>
        </Link>
        <Link to="/crackingyourcareer" className="card">
          <div>
            <img src={cyc} alt="crackingyourcareer" className="image" />
            <div >
              <h1>Cracking Your Career ↗</h1>
              <p>
                Prepare for recruitment with professional workshops and more!
              </p>
            </div>
          </div>
        </Link>
        <Link to="/lunch" className="card">
          <div>
            <img src={lunchbunch} alt="lunchbunch" className="image" />
            <div >
              <h1>Lunch Bunch ↗</h1>
              <p>
                Network with CIS Professors and Alumni
              </p>
            </div>
          </div>
        </Link>
        <Link to="/mentorship" className="card">
          <div>
            <img src={mentorship} alt="mentorship" className="image" />
            <div >
              <h1>Mentorship ↗</h1>
              <p>
                Navigate your career or studies with the help of upperclassmen
              </p>
            </div>
          </div>
        </Link>
    </div>
        {/* <Link to="/outreach" style={styles.link}>
          <Card
            title="Outreach"
            description="Be part of making a difference and empowering others"
            imageUrl={outreach}
          />
        </Link>
        <Link to="/crackingyourcareer" style={styles.link}>
          <Card
            title="Cracking Your Career (CYC)"
            description="Prepare for interviews or recruitment with interview prep, resume workshops and more!"
            imageUrl={cyc}
          />
        </Link>

        <Link to="/lunch" style={styles.link}>
          <Card title="Lunch Bunch" description="Network with CIS Professors and Alumni" imageUrl={lunchbunch} />
        </Link>
        <Link to="/mentorship" style={styles.link}>
          <Card
            title="Mentorship"
            description="Navigate your career or studies with the help of upperclassmen"
            imageUrl={mentorship}
          />
        </Link> */}

      <div className="calendar-container">
    <h1 className="upcoming-title">Upcoming Events</h1>
    <div className="calendar-wrapper">
        <iframe
            src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FNew_York&showPrint=0&src=d2ljY2Nvcm5lbGxAZ21haWwuY29t&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=Y29ybmVsbC5lZHVfOTh0c2JvdWNtaTUzdjJybHQ3a2RqNDN2a2NAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%23009688&color=%238E24AA&color=%2333B679"
            style={{
                border: 'solid 1px #777',
            }}
            width="900"
            height="600"
            title="Google Calendar"
        ></iframe>
    </div>
</div>



      
    </div>
  );
};
export default Programs;
