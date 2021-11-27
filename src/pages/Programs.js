import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './pages.css';
import ProgramInfoCard from "../components/ProgramInfoCard";
import Col from "react-bootstrap/Col";

let styles = {
  container: {
    margin: "5rem",
  },
  row: {
    // display: "flex",
    justifyContent: "space-evenly"
  },
  link: {
    textDecoration: 'underline'
  }
};

// code to store JSX elements in arrays corresponding to their rows
const perRow = 4

// stores all of the program info to be displayed. If you want more info, simply add it to the each of the objects.
const programInfo = [
  {
    url: '/membership',
    heading: 'Active Membership'
  },
  {
    url: '/discussions',
    heading: 'Community Discussion'
  },
  {
    url: '/lunch',
    heading: 'Lunch Bunch'
  },
  {
    url: '/mentorship',
    heading: 'Mentorship'
  },
  {
    url: '/prospective',
    heading: 'Prospective Students'
  },
  {
    url: '/outreach',
    heading: 'Outreach'
  },
  {
    url: '/campaigns',
    heading: 'Campaigns'
  },
  {
    url: '/events',
    heading: 'Events'
  },
]

// creates arrays in this array based on how many perRow there needs to be
const rows = [...Array( Math.ceil(programInfo.length / perRow) )];

// adds programInfo based on layout of the rows
const programRows = rows.map( (row, i) =>
  programInfo.slice(i * perRow, i * perRow + perRow)
);

// this returns 4 elements per row. If you want to change this so that it doesn't do that, use the map function on the
// programInfo variable and print out the information in a component
// below function adds components based on layout of the programRows
const content = programRows.map((row, i) => {
  return (
    <Row style={styles.row} key={i}>
      { row.map( ({url, heading}, j) => <Col><ProgramInfoCard key={j} url={url} heading={heading} /></Col> )}
    </Row>
  )
});

const Programs = () => {
  return (
    <Container>

    <h1 style={{ fontWeight: 'bold' }}>Programs</h1>
        {content}
    </Container >
  );
}

export default Programs;
