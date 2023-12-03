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

  const facultyHeadshots = importAll(
    require.context("../images/faculty", false, /\.jpg|\.JPG/)
  );

  const getMemberImage = (member) => {
    const images =
      team.title.toLowerCase() === "faculty"
        ? facultyHeadshots
        : boardHeadshots;
    const memberImageKey = Object.keys(images).find((k) =>
      k.startsWith(member.netId)
    );
    return memberImageKey ? images[memberImageKey] : defaultImage;
  };

  return (
    <>
      <div id={"board#" + team.title.toLowerCase().replaceAll(" ", "-")}>
        <h3 style={{paddingBottom: "16px"}}>{team.title}</h3>
        <div className="members-grid">
          {team.members.map((member, index) => (
            <Member
              key={index}
              name={member.name}
              title={member.position}
              netid={member.netId}
              bio={member.bio}
              img={getMemberImage(member)}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Subteam;
