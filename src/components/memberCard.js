import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function Member({ name, title, netid, bio, img }) {
  // State to toggle display of detailed info
  const [showDetails, setShowDetails] = useState(false);

  // Function to toggle the showDetails state
  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <>
      <div
        style={{
          width: "30%",
          height: "80%",
          border: "none",
          minWidth: "200px",
        }}
        onClick={toggleDetails}
      >
        <div>
          {/* Use the img prop passed to the component */}
          <LazyLoadImage
            alt={name}
            src={img}
            effect="blur" // Optional: Adds a blur effect while loading
            style={{
              borderRadius: "10%",
              height: "200px",
              width: "100%",
              objectFit: "cover",
              float: "left",
              padding: "5%",
            }}
            className="headshots"
          />
        </div>
        <div style={{ fontSize: "smaller", color: "gray", paddingLeft: "5%" }}>
          {title}
        </div>
        <div style={{ paddingLeft: "5%" }}>{name}</div>

        {showDetails && (
          <div>
            <p>{bio}</p>
            {/* More detailed info can be added here */}
          </div>
        )}
      </div>
    </>
  );
}

export default Member;
