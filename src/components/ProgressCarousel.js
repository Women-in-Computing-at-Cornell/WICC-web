import React, { useState, useEffect, useLayoutEffect } from "react";
import "./Program.css";
import "./pages.css";
import activemember from "../images/programs/activemember.jpg";
import EventCard from "../components/eventCard";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import Progressbar from "../components/ProgressBar";

let events = [
  <EventCard
    key="1"
    title="Upcoming Event 1"
    description="xxx"
    imageUrl={activemember}
  />,
  <EventCard
    key="2"
    title="Upcoming Event 2"
    description="yyy"
    imageUrl={activemember}
  />,
  <EventCard
    key="3"
    title="Upcoming Event 3"
    description="zzz"
    imageUrl={activemember}
  />,
  <EventCard
    key="4"
    title="Upcoming Event 4"
    description="xxx"
    imageUrl={activemember}
  />,
  <EventCard
    key="5"
    title="Upcoming Event 5"
    description="yyy"
    imageUrl={activemember}
  />,
  <EventCard
    key="6"
    title="Upcoming Event 6"
    description="zzz"
    imageUrl={activemember}
  />,
  <EventCard
    key="7"
    title="Upcoming Event 7"
    description="yyy"
    imageUrl={activemember}
  />,
  <EventCard
    key="8"
    title="Upcoming Event 8"
    description="zzz"
    imageUrl={activemember}
  />,
];

const ProgressCarousel = () => {
  const [startIdx, setStartIdx] = useState(0);
  const [endIdx, setEndIdx] = useState(3);
  const [currEvents, setCurrEvents] = useState(() =>
    events.slice(startIdx, endIdx)
  );
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setCurrEvents(events.slice(startIdx, endIdx));
    setProgress((endIdx / events.length) * 100);
  }, [startIdx, endIdx, events]);

  function updateEventsRight() {
    setStartIdx((prevStartIdx) => {
      const newStartIdx = prevStartIdx + 3;
      return newStartIdx;
    });
    setEndIdx((prevEndIdx) => {
      const newEndIdx = prevEndIdx + 3;
      return Math.min(newEndIdx, events.length);
    });
  }

  function updateEventsLeft() {
    setStartIdx((prevStartIdx) => {
      const newStartIdx = Math.max(prevStartIdx - 3, 0);
      return newStartIdx;
    });
    setEndIdx((prevEndIdx) => {
      const newStartIdx = Math.max(prevEndIdx - 3, 3);
      return newStartIdx;
    });
  }

  return (
    <div>
      <div className="button-display">
        <text className="upcoming-title">Upcoming Events 2023-2024</text>
        <div>
          {startIdx > 0 && (
            <button
              onClick={updateEventsLeft}
              style={{
                border: "none",
                background: "transparent",
                cursor: "pointer",
                marginRight: "40px",
              }}
            >
              <FaChevronLeft size={24} />
            </button>
          )}
          {endIdx < events.length && (
            <button
              onClick={updateEventsRight}
              style={{
                border: "none",
                background: "transparent",
                cursor: "pointer",
              }}
            >
              <FaChevronRight size={24} />
            </button>
          )}
        </div>
      </div>
      <Progressbar bgcolor="#9CE2D3" progress={progress} height={4} />
      <div className="event-container">
        {currEvents.map((event, index) => (
          <React.Fragment key={index}>{event}</React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ProgressCarousel;
