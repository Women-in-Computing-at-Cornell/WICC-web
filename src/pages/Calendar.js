import React, { Component } from "react";

export default class Calendar extends Component {
  render() {
    let styles = {
      container: {
        margin: "5%",
        fontFamily: "Inter", 
      },
      header: {
        backgroundColor: "#9CE2D3",
        fontFamily: "Inter",
        padding: "2rem 2rem",
        fontWeight: "bold",
        fontSize: "2rem",
      },
      calendarContainer: {
        padding: "2rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center", 
      },
    };

    return (
      <div>
        <h1 style={styles.header}>WICC Events</h1>
        <div style={styles.calendarContainer}>
          <iframe
            src="https://embed.styledcalendar.com/#t8wJ2TwSWYKLUY3xUoT4"
            title="Styled Calendar"
            className="styled-calendar-container"
            style={{ height: "800px", width: "80%", border: "none" }}
            data-cy="calendar-embed-iframe"
          ></iframe> 
          <script
            async
            type="module"
            src="https://embed.styledcalendar.com/assets/parent-window.js"
          ></script>
        </div>
      </div>
    );
  }
}