import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./member.css";
// import defaultImage from "../images/noimage.png";

function Member({ name, title, netid, bio, img }) {
  const [showDetails, setShowDetails] = useState(false);
  // const [imageSrc, setImageSrc] = useState(img);

  // const handleError = () => {
  //   setImageSrc(defaultImage);
  // };

  const toggleDetails = () => setShowDetails(!showDetails);

  return (
    <>
      <div className="memberContainer" onClick={toggleDetails}>
        <div>
          <LazyLoadImage
            alt={name}
            src={img}
            effect="blur"
            className="imageStyle"
            // onError={handleError}
          />
        </div>
        <div className="title">{title}</div>
        <div className="name">{name}</div>
        {showDetails && (
          <div className="bio">
            <p>{bio}</p>
            {/* More detailed info can be added here */}
          </div>
        )}
      </div>
    </>
  );
}

export default Member;
