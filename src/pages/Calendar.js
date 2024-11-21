import React, { Component } from "react";

const CalendarEmbed = () => {
  return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
          
          <iframe
              src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FNew_York&showPrint=0&src=d2ljY2Nvcm5lbGxAZ21haWwuY29t&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=Y29ybmVsbC5lZHVfOTh0c2JvdWNtaTUzdjJybHQ3a2RqNDN2a2NAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%23009688&color=%238E24AA&color=%2333B679"
              style={{ border: 'solid 1px #777' }}
              width="900"
              height="600"
              title="Google Calendar"
          ></iframe>
      </div>
  );
};

export default CalendarEmbed;

// export default class Calendar extends Component {
//   render() {
//     let styles = {
//       container: {
//         margin: "5%",
//         fontFamily: "Inter",
//       },
//       header: {
//         fontFamily: "Inter",
//         paddingLeft: "7%",
//         fontWeight: "bold",
//         fontSize: "2rem",
//       },
//       calendarContainer: {
//         padding: "2rem",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//       },
//     };

//     return (
//       <div>
//         <h1 style={styles.header}>Upcoming Events</h1>
//         <div style={styles.calendarContainer}>
//           <iframe
//             src="https://embed.styledcalendar.com/#dbok0HlKHCTpqz0ajQoT"
//             title="Styled Calendar"
//             className="styled-calendar-container"
//             style={{ height: '800px', width: '90%', border: 'none' }}
//             data-cy="calendar-embed-iframe"
//           ></iframe>
//           <script
//             async
//             type="module"
//             src="https://embed.styledcalendar.com/assets/parent-window.js"
//           ></script>
//         </div>
//       </div>
//     );
//   }
// }
