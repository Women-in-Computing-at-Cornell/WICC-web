import React from "react";

function Member({ name, title, linkedin, netid, bio, img }) {
  return (
    <>
      <div
        style={{ width: "30%", height: "80%", border: "none", padding: "5%" }}
      >
        <div>
          {/* Use the img prop passed to the component */}
          <img
            style={{
              borderRadius: "10%",
              height: "200px",
              width: "100%",
              objectFit: "cover",
              float: "left",
            }}
            class="headshots"
            src={img}
            alt={name}
          />
        </div>
        <div>
          <div>{name}</div>
        </div>
        <div>{title}</div>
        {/* <div>{bio}</div> */}
      </div>
    </>
  );
}

export default Member;
