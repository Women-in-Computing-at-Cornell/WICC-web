import React from "react";
import "./pages.css";
import Image from "react-bootstrap/Image";
import sponsorsImg from "../images/sponsors/sponsers_page_imgs/sponsors_img.jpg";
import CurrentSponsors from "../components/currentSponsors.js";
import "./Sponsors.css";

const Sponsors = () => {
  return (
    <div>
      <section className="top-section">
        <div>
          <h2 className="top-header">
            Empowering Our Mission Through Industry Partnerships
          </h2>
          <p className="top-text">
            WICC would not be where we are without our awesome sponsors! By
            sponsoring us, you support many young women with great aspirations
            for careers in industry and academia.
          </p>
        </div>

        <Image
          style={{ maxHeight: "570.412px", maxWidth: "680.509px" }}
          src={sponsorsImg}
        ></Image>
      </section>
      <CurrentSponsors />
    </div>
  );
};

export default Sponsors;
