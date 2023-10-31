import React, { Component } from "react";

export default class Calendar extends Component {
  render() {
    let styles = {
      container: {
        margin: "5%",
        fontFamily: "Inter"
      },
      header: {
        backgroundColor: "#9CE2D3",
        fontFamily: "Inter",
        padding: "2rem 2rem",
        fontWeight: "bold",
        fontSize: "2rem",
      },
      calendarContainer: {
        padding: '2rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      },
    };

    return (
      <div>
        <h1 style={styles.header}>WICC Events</h1>
        <div
          style={styles.calendarContainer}
        >
          <iframe
            src="https://calendar.google.com/calendar/embed?src=cornell.edu_98tsboucmi53v2rlt7kdj43vkc%40group.calendar.google.com&ctz=America%2FNew_York"
            style={{ border: "0", width: "1000px", height: "750px" }}
          />
        </div>
      </div>
    );
  }
}
