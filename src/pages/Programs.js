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
    margin: "0",
    display: "flex",
    justifyContent: "space-evenly"
  },
  col: {
    width: "20%",
    margin: "2.3% 0",
    backgroundColor: "#9CE2D3",
    padding: "2.5%",
    paddingBottom: "5%",
    borderRadius: ".5em",
  },
  link: {
    textDecoration: 'underline'
  }
};

const Programs = () => {
  return (

    <div style={styles.container}>

      <h1>Programs</h1>
      <div style={styles.row}>
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


    </div>

  );
}

export default Programs;
