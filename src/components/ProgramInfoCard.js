import React from 'react';
import {Link} from "react-router-dom";
import Card from "react-bootstrap/Card";

// insert flex stuff here
let styles = {
  card: {
    width: '14rem',
    // margin: "2%",
    backgroundColor: "#9CE2D3",
    padding: "1.5rem",
    // paddingBottom: "6%",
    // marginRight: "5%",
    borderRadius: ".5em",
    height: "10rem"
  },
  link: {
    // textDecoration: 'underline'
  }
};

const ProgramInfoCard = ({url, heading}) => {
  return (
    <Card style={styles.card}>
      <Card.Body>
        <Card.Title>
          <Link to={url} style={styles.link}>{heading}</Link>
        </Card.Title>
      </Card.Body>
      <div>
      </div>
    </Card>
  )
}

export default ProgramInfoCard;