import React from "react";
// import linkedinlogo from "../assets/img/linkedin.svg";

function Member({ name, title, linkedin, netid, bio}) {
  return (
    <>
      <div className="bg-white shadow-lg px-3 py-3 rounded-3xl flex flex-col items-center">
        <div>
          <img src={`src/images/headshots/board/${netid}.jpg`}  alt={name} className="rounded-lg mb-3" />
        </div>
        <div className="flex flex-row items-center justify-center w-full">
          <div>{name}</div>
          {/* <div>
            <a href={linkedin} target="_blank" rel="noopener noreferrer">
              <img
                src={linkedinlogo}
                alt="LinkedIn logo"
                className="inline-block ml-2"
              />
            </a>
          </div> */}
        </div>
        <div>{title}</div>
        <div>{bio}</div>
      </div>
    </>
  );
}

export default Member;
