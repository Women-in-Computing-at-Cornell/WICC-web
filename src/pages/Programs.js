import React, { useState, useEffect, useLayoutEffect } from 'react';
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Program.css";
import "./pages.css";
import activemember from "../images/programs/activemember.jpg";
import campaigns from "../images/programs/campaigns.jpg";
import community from "../images/programs/community.jpg";
import cyc from "../images/programs/cyc.jpg";
import lunchbunch from "../images/programs/lunchbunch.jpg";
import mentorship from "../images/programs/mentorship.jpg";
import girlswhocode from "../images/programs/girlswhocode.jpg"
import outreach from "../images/programs/outreach.jpg";
import Programhero from "../images/programs/Programhero.png";
import EventCard from "../components/eventCard";
import Card from "../components/Card";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import Progressbar from "../components/ProgressBar";
import Calendar from './Calendar';

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
        <div
          className='hero-text'
        >
          <h1 style={{ marginBottom: "1.2rem" }}> Programs </h1>
          <p>
            We are dedicated to fostering an inclusive and empowering community
            for women and non-binary students at Cornell. Each semester, we
            curate a dynamic lineup of programs and events designed to not only
            provide support but also create an environment that is both
            enriching and informative. <br /><br /> Our goal is to continually enhance these
            offerings, ensuring they resonate with our diverse community and
            actively engage every participant.
          </p>
        </div>
        <div className='hero-image'>
          <img
            src={Programhero}
            style={{ width: "100%" }}
          ></img>
        </div>

      </div>
      <div className="events-grid">
        <div className="item1">
          <h1>Get Involved</h1>
          <p>You get what you put in</p>
        </div>
        <Link to="/membership" style={styles.link}>
          <Card title="Active Membership" description="Make the most out of your experience with WICC" imageUrl={activemember} />
        </Link>
        {/* community discussion, lunch bunch, mentorship */}
        <Link to="/discussions" style={styles.link}>
          <Card title="Community Discussion" description="Get involved; meet new people and voice your opinions" imageUrl={community} />
        </Link>
        <Link to="/lunch" style={styles.link}>
          <Card title="Lunch Bunch" description="" imageUrl={lunchbunch} />
        </Link>
        <Link to="/mentorship" style={styles.link}>
          <Card title="Mentorship" description="Navigate your career or studies with the help of upperclassmen" imageUrl={mentorship} />
        </Link>
        {/* outreach, campaigns, cracking your career */}
        <Link to="/outreach" style={styles.link}>
          <Card title="Outreach" description="Be part of making a difference and empowering others" imageUrl={outreach} />
        </Link>
        <Link to="/campaigns" style={styles.link}>
          <Card title="Campaigns" description="Celebrate your community and raise awareness on relevant issues" imageUrl={campaigns} />
        </Link>
        <Link to="/crackingyourcareer" style={styles.link}>
          <Card title="Cracking Your Career (CYC)" description="Prepare for interviews or recruitment for your target career with interview prep, resume workshops and more" imageUrl={cyc} />
        </Link>
      </div>

      <div>
        <Calendar />
      </div>
    </div >
  );
};
export default Programs;
