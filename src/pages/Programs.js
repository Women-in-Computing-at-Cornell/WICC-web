import React from 'react';
import Container from 'react-bootstrap/Container';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import About from './About.js';
import './pages.css';

let styles = {
  container: {
    margin: "5%",
  },
  row: {
    margin: "",
    display: "flex",
    justifyContent: "space-evenly"
  },
  col: {
    width: "20%",
    margin: "2.3% 0",
    backgroundColor: "#9CE2D3",
    padding: "3.5%",
    paddingBottom: "6%",
    marginRight: "5%",
    borderRadius: ".5em",
  },
  link: {
    textDecoration: 'underline'
  }
};

const Programs = () => {
  return (

    <div style={styles.container}>

      <h1 style={{ fontWeight: 'bold' }}>Programs</h1>
      {/* <div style={styles.row}>
        <div style={styles.col}>
          <Link to="/membership" style={styles.link} ><h2>Active Membership</h2>
          </Link>
        </div>
        <div style={styles.col}>
          <Link to="/discussions" style={styles.link}><h2>Community Discussion</h2>
          </Link>
        </div>
        <div style={styles.col}>
          <Link to="/lunch" style={styles.link}><h2>Lunch Bunch</h2>
          </Link>
        </div>
        <div style={styles.col}>
          <Link to="/mentorship" style={styles.link}><h2>Mentorship</h2>
          </Link>
        </div>
      </div>
      <div style={styles.row}>
        <div style={styles.col}>
          <Link to="/prospective" style={styles.link}><h2>Prospective Students</h2>
          </Link>
        </div>
        <div style={styles.col}>
          <Link to="/outreach" style={styles.link}><h2> Outreach</h2>
          </Link>
        </div>
        <div style={styles.col}>
          <Link to="/campaigns" style={styles.link}><h2>Campaigns</h2>
          </Link>
        </div><div style={styles.col}>
          <Link to="/events" style={styles.link}><h2>Events</h2>
          </Link>
        </div>

      </div>
 */}
      <Container>
        <Row style={{ paddingBottom: "2%" }}>


          <Col style={styles.col}>
            <Link to="/membership" style={styles.link} ><h3 className="text-center">Active Membership</h3>
            </Link>

          </Col>
          <Col style={styles.col}>
            <Link to="/discussions" style={styles.link}><h3 className="text-center">Community Discussion</h3>
            </Link>
          </Col>
          <Col style={styles.col}>
            <Link to="/lunch" style={styles.link}><h3 className="text-center">Lunch Bunch</h3>
            </Link>

          </Col>
          <Col style={styles.col}>
            <Link to="/mentorship" style={styles.link}><h3 className="text-center">Mentorship</h3>
            </Link>
          </Col>

        </Row>
        <Row style={{ paddingBottom: "1%" }}>
          <Col style={styles.col}>
            <Link to="/prospective" style={styles.link}><h3 className="text-center">Prospective Students</h3>
            </Link>

          </Col>
          <Col style={styles.col}>
            <Link to="/outreach" style={styles.link}><h3 className="text-center"> Outreach</h3>
            </Link>
          </Col>
          <Col style={styles.col}>
            <Link to="/campaigns" style={styles.link}><h3 className="text-center">Campaigns</h3>
            </Link>

          </Col>
          <Col style={styles.col}>
            <Link to="/events" style={styles.link}><h3 className="text-center">Events</h3>
            </Link>

          </Col>
        </Row>
      </Container>

    </div >

  );
}

export default Programs;
