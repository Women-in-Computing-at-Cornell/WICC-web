import React from "react";
import Member from "./memberCard";
import "./subteam.css";

function Subteam({ team }) {
  function importAll(r) {
    let images = {};
    r.keys().forEach((item) => (images[item.replace("./", "")] = r(item)));
    return images;
  }

  const boardHeadshots = importAll(
    require.context("../images/headshots/board", false, /\.jpg/)
  );

  return (
    <>
      <h3>{team.title}</h3>
      <div className="members-grid">
        {/* Apply the custom CSS class */}
        {team.members.map((member, index) => (
          <Member
            key={index}
            name={member.name}
            title={member.position}
            netid={member.netId}
            bio={member.bio}
            img={boardHeadshots[member.netId + ".jpg"]}
          />
        ))}
      </div>
    </>
  );
}

export default Subteam;
