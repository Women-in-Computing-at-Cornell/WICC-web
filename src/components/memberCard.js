import React, { useState } from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./member.css";
import defaultImage from "../images/noimage.png";
import coffeeChatSVG from "../images/icons/coffee-chat-button.svg";
import coffeeChatExpandedSVG from "../images/icons/coffee-chat-expanded.svg";

Modal.setAppElement("#root");

function Member({ name, title, netid, bio, img }) {
  const [showDetails, setShowDetails] = useState(false); // For Modal
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const toggleDetails = () => setShowDetails(!showDetails);

  // Hover state for button expansion
  const toggleButton = () => setIsHovered(!showDetails);

  // Coffee chat email button
  const openEmail = (event) => {
    // Prevent the click event from bubbling up to the parent elements
    event.stopPropagation();

    const email = `${netid}@cornell.edu`; // Adjust according to your email format
    window.location.href = `mailto:${email}`;
  };

  return (
    <>
      <div className="memberContainer" onClick={toggleDetails}>
        <div className="imageContainer">
          <LazyLoadImage
            alt={name}
            src={img || defaultImage} // Fallback to defaultImage if img is not provided
            effect="blur"
            className={`imageStyle profileImageStyle ${
              imageLoaded ? "fadeIn" : ""
            }`}
            onLoad={() => setImageLoaded(true)}
          />
          {/* Coffee Chat Button */}
          <button
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={openEmail}
            className={`coffeeChatButton ${isHovered ? "expanded" : ""}`}
          >
            <img
              src={isHovered ? coffeeChatExpandedSVG : coffeeChatSVG}
              alt="Coffee Chat"
            />
            {isHovered && <span>Coffee Chat</span>}
          </button>
        </div>
        <div className="position">{title}</div>
        <div className="name">{name}</div>
      </div>

      {/* Member pop up card when profile picture clicked on */}
      <Modal
        isOpen={showDetails}
        onRequestClose={toggleDetails}
        contentLabel="Member Details"
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.6)",
          },
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width: '80%',
            maxWidth: '800px',
            borderRadius: '15px',
          },
        }}
      >
        <div className="modalContent">
          <img
            src={img || defaultImage}
            alt={name}
            className="profileImageStyle"
          />
          <div className="modalTextContent">
            <h3 className="name">{name}</h3>
            <p className="modalTextStyle">
              <b>Position:</b> {title}
            </p>
            <p className="modalTextStyle">
              <b>Netid:</b> {netid}
            </p>
            <p className="modalTextStyle">{bio}</p>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default Member;
