import React from "react";
import Member from "./memberCard";
import "./subteam.css";
import defaultImage from "../images/noimage.png";

function Subteam({ team }) {
  function importAll(r) {
    let images = {};
    r.keys().forEach((item) => (images[item.replace("./", "")] = r(item)));
    return images;
  }

  const boardHeadshots = importAll(
    require.context("../images/headshots/board", false, /\.jpg|\.JPG/)
  );

  return (
    <>
      <div id={"board#" + String(team.title).toLocaleLowerCase()}>
        <h3>{team.title}</h3>
        <div className="members-grid">
          {team.members.map((member, index) => {
            // Check if the member's image exists, else use default image
            const memberImageKey = Object.keys(boardHeadshots).find((k) =>
              k.startsWith(member.netId)
            );
            const memberImage = memberImageKey
              ? boardHeadshots[memberImageKey]
              : defaultImage;

            return (
              <Member
                key={index}
                name={member.name}
                title={member.position}
                netid={member.netId}
                bio={member.bio}
                img={memberImage}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Subteam;
