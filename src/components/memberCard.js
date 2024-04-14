import React, { useState } from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./member.css";
import defaultImage from "../images/noimage.png";
import coffeeImage from "../images/coffeeBear.png";

Modal.setAppElement("#root"); 

function Member({ name, title, netid, bio, img }) {
  const [showDetails, setShowDetails] = useState(false); // for Modal

  const toggleDetails = () => setShowDetails(!showDetails);

  const [imageLoaded, setImageLoaded] = useState(false);

 // Coffee chat email button 
  const openEmail = () => {
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
              className={`imageStyle profileImageStyle ${imageLoaded ? 'fadeIn' : ''}`}  // Apply 'fadeIn' class when image is loaded
              onLoad={() => setImageLoaded(true)}
            />
            <button onClick={openEmail} className="coffeeChatButton">
              <img src={coffeeImage} alt="Coffee Chat" />
            </button>
        </div>
          <div className="position">{title}</div>
          <div className="name">{name}</div>
      </div>


      {/* Member pop up card when profile picture clicked on */}
      <Modal
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
          <img src={img || defaultImage} alt={name} className="profileImageStyle" />
          <div className="modalTextContent">
            <h3 className="name">{name}</h3>
            <p className="modalTextStyle"><b>Position:</b> {title}</p>
            <p className="modalTextStyle"><b>Netid:</b> {netid}</p>
            <p className="modalTextStyle">{bio}</p>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default Member;
