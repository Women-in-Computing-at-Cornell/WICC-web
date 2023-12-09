import React from "react";
import Image from "react-bootstrap/Image";
// import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./pages.css";
import activemember from "../images/programs/activemember.jpg";
import campaigns from "../images/programs/campaigns.jpg";
import community from "../images/programs/community.jpg";
import cyc from "../images/programs/cyc.jpg";
import lunchbunch from "../images/programs/lunchbunch.jpg";
import mentorship from "../images/programs/mentorship.jpg";
import outreach from "../images/programs/outreach.jpg";
import { HoverStyle } from "devextreme-react/chart.js";

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
    <div style={{ width: "100%", height: "100%" }}>
      <h1 style={{ fontWeight: "bold", margin: "200px" }}>Programs</h1>
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
