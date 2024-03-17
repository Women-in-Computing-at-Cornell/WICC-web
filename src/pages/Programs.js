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

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });

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
      style={{
        width: "100%",
        height: "100%",
        backgroundImage: 'linear-gradient(#ffffff, #9CE2D3, #ffffff)'
      }}
    >
      <div className="hero">
        <div
          style={{
            width: "30%",
            paddingLeft: "56px",
            position: "absolute",
            marginLeft: "15%",
            marginTop: "10%",
          }}
        >
          <h1
            style={{
              fontWeight: "bold",
              paddingTop: "56px",
              paddingBottom: "16px",
            }}
          >
            Programs
          </h1>
          <p>
            We are dedicated to fostering an inclusive and empowering community
            for women and non-binary students at Cornell. Each semester, we
            curate a dynamic lineup of programs and events designed to not only
            provide support but also create an environment that is both
            enriching and informative. Our goal is to continually enhance these
            offerings, ensuring they resonate with our diverse community and
            actively engage every participant.
          </p>
        </div>
        <Image
          src={Programhero}
          style={{ width: "100%", height: "auto" }}
        ></Image>
      </div>
      <div className="button-display">
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
      </div>
      {/* <Card title="Active Membership" description="xxx" imageUrl={activemember} link="/membership" /> */}
      <div className="events-grid">
        <div className="column-1">
          <Link to="/crackingyourcareer" style={styles.link}>
            <Card title="Cracking Your Career" description="xxx" imageUrl={cyc} link="/crackingyourcareer" />
          </Link>
          <Link to="/crackingyourcareer" style={styles.link}>
            <Card title="Corporate Events" description="xxx" imageUrl={cyc} link="/crackingyourcareer" />
          </Link>
          <Link to="/crackingyourcareer" style={styles.link}>
            <Card title="Networking" description="xxx" imageUrl={cyc} link="/crackingyourcareer" />
          </Link>
        </div>

        <div className="column-2">
          <div className="row-1">
            <Link to="/mentorship" style={styles.link}>
              <Card title="Mentorship" description="xxx" imageUrl={mentorship} />
            </Link>
            <Link to="/campaigns" style={styles.link}>
              <Card title="Campaigns" description="xxx" imageUrl={campaigns} />
            </Link>
          </div>
          <div>
            <Link to="/outreach" style={styles.link}>
              {" "}
              <Card title="Girls Who Code" description="xxx" imageUrl={girlswhocode} />
            </Link>
          </div>
        </div>
      </div>
      {/* <Link to="/membership" style={styles.link}>
        <Row
          style={{
            marginBottom: "100px",
            marginTop: "100px",
            padding: "56px",
            paddingTop: "32px",
            paddingBottom: "32px",
            border: "1px solid #9CE2D3",
            borderRadius: "29px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Col style={styles.col}>
            <h3 className="text-center">Active Membership</h3>
          </Col>
          <Col>
            <Image
              src={activemember}
              style={{ width: "90%", height: "auto" }}
            ></Image>
          </Col>
        </Row>
      </Link>
      <Card title="Active Membership" description="xxx" imageUrl={activemember} />
      <Link to="/membership" style={styles.link}>
        <Row
          style={{
            marginBottom: "100px",
            marginTop: "100px",
            padding: "56px",
            paddingTop: "32px",
            paddingBottom: "32px",
            border: "1px solid #9CE2D3",
            borderRadius: "29px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Col style={styles.col}>
            <h3 className="text-center">Active Membership</h3>
          </Col>
          <Col>
            <Image
              src={activemember}
              style={{ width: "90%", height: "auto" }}
            ></Image>
          </Col>
        </Row>
      </Link>
      <Link to="/discussions" style={styles.link}>
        <Row
          style={{
            marginBottom: "100px",
            marginTop: "100px",
            padding: "56px",
            paddingTop: "32px",
            paddingBottom: "32px",
            border: "1px solid #9CE2D3",
            borderRadius: "29px",
            display: "flex",
            alignItems: "center",
          }}
        >
          {" "}
          <Col style={styles.col}>
            <h3 className="text-center">Community Discussion</h3>
          </Col>
          <Col>
            <Image
              src={community}
              style={{ width: "90%", height: "auto" }}
            ></Image>
          </Col>
        </Row>
      </Link>
      <Link to="/lunch" style={styles.link}>
        <Row
          style={{
            marginBottom: "100px",
            marginTop: "100px",
            padding: "56px",
            paddingTop: "32px",
            paddingBottom: "32px",
            border: "1px solid #9CE2D3",
            borderRadius: "29px",
            display: "flex",
            alignItems: "center",
          }}
        >
          {" "}
          <Col style={styles.col}>
            <h3 className="text-center">Lunch Bunch</h3>
          </Col>
          <Col>
            <Image
              src={lunchbunch}
              style={{ width: "90%", height: "auto" }}
            ></Image>
          </Col>
        </Row>
      </Link>
      <Link to="/mentorship" style={styles.link}>
        <Row
          style={{
            marginBottom: "100px",
            marginTop: "100px",
            padding: "56px",
            paddingTop: "32px",
            paddingBottom: "32px",
            border: "1px solid #9CE2D3",
            borderRadius: "29px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Col style={styles.col}>
            <h3 className="text-center">Mentorship</h3>
          </Col>
          <Col>
            <Image
              src={mentorship}
              style={{ width: "90%", height: "auto" }}
            ></Image>
          </Col>
        </Row>
      </Link>
      <Link to="/outreach" style={styles.link}>
        <Row
          style={{
            marginBottom: "100px",
            marginTop: "100px",
            padding: "56px",
            paddingTop: "32px",
            paddingBottom: "32px",
            border: "1px solid #9CE2D3",
            borderRadius: "29px",
            display: "flex",
            alignItems: "center",
          }}
        >
          {" "}
          <Col style={styles.col}>
            <h3 className="text-center"> Outreach</h3>
          </Col>
          <Col>
            <Image
              src={outreach}
              style={{ width: "90%", height: "auto" }}
            ></Image>
          </Col>
        </Row>
      </Link>

      <Link to="/crackingyourcareer" style={styles.link}>
        <Row
          style={{
            marginBottom: "100px",
            marginTop: "100px",
            padding: "56px",
            paddingTop: "32px",
            paddingBottom: "32px",
            border: "1px solid #9CE2D3",
            borderRadius: "29px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Col style={styles.col}>
            {" "}
            <h3 className="text-center">Cracking Your Career</h3>
          </Col>
          <Col>
            <Image src={cyc} style={{ width: "90%", height: "auto" }}></Image>
          </Col>
        </Row>
      </Link> */}
    </div>
  );
};
export default Programs;
