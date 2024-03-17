import React from "react";
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
import outreach from "../images/programs/outreach.jpg";
import Programhero from "../images/programs/Programhero.png";
import EventCard from "../components/eventCard";
import Card from "../components/Card";

let styles = {
  container: {
    margin: "3%",
  },
  col: {
    borderRadius: ".5em",
  },
  link: {
    color: "black",
  },
};

const Programs = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
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
            actively engage every participant
          </p>
        </div>
        <Image
          src={Programhero}
          style={{ width: "100%", height: "auto" }}
        ></Image>
      </div>
      <EventCard title="Active Membership" description="Active Membership " imageUrl={activemember} />
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
      <Link to="/campaigns" style={styles.link}>
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
            <h3 className="text-center">Campaigns</h3>
          </Col>
          <Col>
            <Image
              src={campaigns}
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
      </Link>
    </div>
  );
};
export default Programs;
