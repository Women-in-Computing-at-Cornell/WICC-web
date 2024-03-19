import React from "react";
import "./pages.css";
import Image from "react-bootstrap/Image";
import sponsorsImg from "../images/sponsors/sponsers_page_imgs/sponsors_img.jpg";
import CurrentSponsors from "../components/currentSponsors.js";

const Sponsors = () => {
  return (
    <div>
      <section
        style={{
          paddingLeft: "202px",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div>
          <h2
            style={{
              textAlign: "left",
              fontWeight: "700",
              fontFamily: "Mulish",
              fontSize: "25px",
              fontStyle: "normal",
              lineHeight: "150%",
            }}
          >
            Empowering Our Mission Through Industry Partnerships
          </h2>
          <p>
            WICC would not be where we are without our awesome sponsors! By
            sponsoring us, you support many young women with great aspirations
            for careers in industry and academia.
          </p>
        </div>

        <Image
          style={{ maxHeight: "597.412px", maxWidth: "768.509px" }}
          src={sponsorsImg}
        ></Image>
      </section>
      <CurrentSponsors />
    </div>
  );
};

export default Sponsors;
