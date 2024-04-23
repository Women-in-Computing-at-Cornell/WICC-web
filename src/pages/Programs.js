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

let events = [
  <EventCard key="1" title="Upcoming Event 1" description="xxx" imageUrl={activemember} />,
  <EventCard key="2" title="Upcoming Event 2" description="yyy" imageUrl={activemember} />,
  <EventCard key="3" title="Upcoming Event 3" description="zzz" imageUrl={activemember} />,
  <EventCard key="4" title="Upcoming Event 4" description="xxx" imageUrl={activemember} />,
  <EventCard key="5" title="Upcoming Event 5" description="yyy" imageUrl={activemember} />,
  <EventCard key="6" title="Upcoming Event 6" description="zzz" imageUrl={activemember} />,
  <EventCard key="7" title="Upcoming Event 7" description="yyy" imageUrl={activemember} />,
  <EventCard key="8" title="Upcoming Event 8" description="zzz" imageUrl={activemember} />
];

const Programs = () => {
  const [startIdx, setStartIdx] = useState(0)
  const [endIdx, setEndIdx] = useState(3)
  const [currEvents, setCurrEvents] = useState(() => events.slice(startIdx, endIdx));
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setCurrEvents(events.slice(startIdx, endIdx));
    setProgress((endIdx / events.length) * 100);
  }, [startIdx, endIdx, events]);

  function updateEventsRight() {
    setStartIdx(prevStartIdx => {
      const newStartIdx = prevStartIdx + 3;
      return newStartIdx;
    });
    setEndIdx(prevEndIdx => {
      const newEndIdx = prevEndIdx + 3;
      return Math.min(newEndIdx, events.length);
    });
  }

  function updateEventsLeft() {
    setStartIdx(prevStartIdx => {
      const newStartIdx = Math.max(prevStartIdx - 3, 0);
      return newStartIdx;
    });
    setEndIdx(prevEndIdx => {
      const newStartIdx = Math.max(prevEndIdx - 3, 3);
      return newStartIdx;
    });
  }

  return (
    <div
    // style={{
    //   width: "100%",
    //   height: "100%"
    // }}
    >
      <div className="hero">
        <div className='hero-text'
        // style={{
        //   width: "30%",
        //   paddingLeft: "56px",
        //   position: "absolute",
        //   marginLeft: "15%",
        //   marginTop: "10%",
        // }}
        >
          <h1
          // style={{
          //   fontWeight: "bold",
          //   paddingTop: "56px",
          //   paddingBottom: "16px",
          // }}
          >
            Programs
          </h1>
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
            style={{ width: "100%", height: "auto" }}
          ></img>
        </div>

      </div>
      {/* <div className="button-display">
        <text className="upcoming-title">
          Upcoming Events 2023-2024
        </text>
        <div>
          {startIdx > 0 && <button
            onClick={updateEventsLeft}
            style={{ border: 'none', background: 'transparent', cursor: 'pointer', marginRight: '40px' }}>
            <FaChevronLeft size={24} />
          </button>}
          {endIdx < events.length && <button
            onClick={updateEventsRight}
            style={{ border: 'none', background: 'transparent', cursor: 'pointer' }}>
            <FaChevronRight size={24} />
          </button>}
        </div>
      </div>
      <Progressbar
        bgcolor="#9CE2D3"
        progress={progress}
        height={4}
      />
      <div className="event-container">
        {currEvents.map((event, index) => (
          <React.Fragment key={index}>
            {event}
          </React.Fragment>
        ))
        }
      </div> */}
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
    </div >
  );
};
export default Programs;
