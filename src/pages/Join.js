import React from 'react';
import Container from 'react-bootstrap/Container';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './Join.css';
// let styles = {
//   container: {
//     margin: "5%",
//   },
//   row: {
//     margin: "0",
//     display: "flex",
//     justifyContent: "space-between"
//   },
//   col: {
//     width: "25%",
//     margin: "2.5% 0",
//     backgroundColor: "#9CE2D3",
//     padding: "2.5%",
//     paddingBottom: "3%",
//     borderRadius: ".5em"
//   },
//   link: {
//     textDecoration: 'underline'
//   }

// };
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

const Join = () => {
  return (
    <div style={styles.container}>
      <h1>Get Involved</h1>
      <div style={styles.row}>
        <div style={styles.col}>
          <h2>Students</h2>
          <p>Join Our Listserve</p>
        </div>
        <div style={styles.col}>
          <h2>Corporate</h2>
          <p>Interested in hosting an event with us? Contact us at <a href="mailto:wicc@cornell.edu">wicc@cornell.edu</a></p>
        </div>
        <div style={styles.col}>
          <Link to="/membership" style={styles.link}><h2>Active Membership</h2>
          </Link>
          <p>Learn how to become a WICC Active Member</p>
        </div>
      </div>
      <div style={styles.row}>
        <div style={styles.col}>
          <h2>Alumni</h2>
          <p>Join our alumni network to stay involved with WICC!</p>
        </div>
        <div style={styles.col}>
          <Link to="/prospective" style={styles.link}><h2>Prospective Students</h2>
          </Link>
          <p>Learn more about CIS at Cornell!</p>
        </div>
        <div style={styles.col}>
          <Link to="/mentorship" style={styles.link}><h2>Mentorship</h2>
          </Link>
          <p>Learn how to become a mentor or a mentee</p>
        </div>
      </div>


    </div>
  );
}

export default Join;
