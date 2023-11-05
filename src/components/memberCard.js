import React from "react";
// import linkedinlogo from "../assets/img/linkedin.svg";

function Member({ name, title, linkedin, netid, bio }) {
  return (
    <>
      <div
        style={{ width: "30%", height: "80%", border: "none", padding: "5%" }}
      >
        <div>
          <img
            src={`src/images/headshots/board/${netid}.jpg`}
            alt={name}
            className="rounded-lg mb-3"
          />
        </div>
        <div>
          <div>{name}</div>
        </div>
        <div>{title}</div>
        <div>{bio}</div>
      </div>
    </>
  );
}

export default Member;
