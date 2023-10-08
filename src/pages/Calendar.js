import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CreateCalendar from "@ericz1803/react-google-calendar";

export default class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
    };
  }

  // componentDidMount() {
  //   getEvents((events) => {
  //     this.setState({ events })
  //   })
  // }

  render() {
    let styles = {
      container: {
        margin: "5%",
        fontFamily: "Inter",
      },
      row: {
        margin: "0",
        display: "flex",
        justifyContent: "space-evenly",
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
        textDecoration: "underline",
      },
    };
    const API_KEY = "AIzaSyBxf7wNsfqoGKuEHg3vMtN6woGrfn4XMyg";
    let calendars = [
      {
        calendarId:
          "cornell.edu_98tsboucmi53v2rlt7kdj43vkc@group.calendar.google.com",
        color: "#9CE2D3",
      },
    ];

    let calStyles = {
      calendar: {
        borderWidth: "3px", //make outer edge of calendar thicker
      },
      today: {
        border: "2px solid red",
      },

      event: {
        fontWeight: "bold",
      },
    };

    return (
      <div style={styles.container}>
        <h1 style={{ fontWeight: "bold" }}>WICC Events</h1>
        <div
          style={{
            width: "90%",
            height: "80%",
            paddingTop: "50px",
            paddingBottom: "50px",
            margin: "auto",
            maxWidth: "1600px",
          }}
        >
          <CreateCalendar
            apiKey={API_KEY}
            calendars={calendars}
            styles={calStyles}
          />
        </div>
      </div>
    );
  }
}
