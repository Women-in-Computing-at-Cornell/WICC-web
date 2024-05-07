import React, { useState } from "react";
import ReactDOM from "react-dom";
//import Modal from "react-modal";
//import { LazyLoadImage } from "react-lazy-load-image-component";
//import "react-lazy-load-image-component/src/effects/blur.css";
import "./member.css";
import defaultImage from "../images/noimage.png";

// Ideally, this should be in your main app component or index file
//Modal.setAppElement("#root"); // Replace '#root' with your actual app root element id

function Member({ name, title, netid, bio, img }) {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => setShowDetails(!showDetails);

  return (
    <>
      <div className="memberContainer" onClick={toggleDetails}>
        <div>
          {/* <LazyLoadImage
            alt={name}
            src={img || defaultImage} // Fallback to defaultImage if img is not provided
            effect="blur"
            className="imageStyle"
            // onError={handleError}
          /> */}
        </div>
        <div className="position">{title}</div>
        <div className="name">{name}</div>
      </div>

      {/* <Modal
        isOpen={showDetails}
        onRequestClose={toggleDetails} // Close modal when overlay is clicked
        contentLabel="Member Details"
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.6)", // Semi-transparent overlay
          },
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            width: "80%",
            maxWidth: "800px",
            borderRadius: "15px",
          },
        }}
      >
        <div className="modalContent">
          <img src={img || defaultImage} alt={name} className="imageStyle" />
          <div className="modalTextContent">
            <h3>{name}</h3>
            <p className="modalTextStyle">
              <b>Position:</b> {title}
            </p>
            <p className="modalTextStyle">
              <b>Netid:</b> {netid}
            </p>
            <p className="modalTextStyle">{bio}</p>
          </div>
        </div>
      </Modal> */}
    </>
  );
}

export default Member;
