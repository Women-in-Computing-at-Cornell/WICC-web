import React from "react";
import "./pages.css";
import Image from "react-bootstrap/Image";
import sponsorsImg from "../images/sponsors/sponsers_page_imgs/sponsors_img.jpg";
import sponsorsCandid from "../images/sponsors/sponsorsCandid.png";
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
          style={{
            maxHeight: "570.412px",
            maxWidth: "680.509px",
            maxWidth: "100%",
            height: "auto",
          }}
          src={sponsorsImg}
        ></Image>
      </section>
      <div>
        <section
          style={{
            display: "flex",
            width: "100%",
            padding: "96px 150px",
            alignItems: "center",
            gap: "160px",
            background: "var(--3, #FFF)",
          }}
        >
          <Image
            style={{
              maxHeight: "600px",
              maxWidth: "400px",
              width: "100%",
              borderRadius: "30px",
            }}
            src={sponsorsCandid}
          ></Image>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <h2
              style={{
                color: "#000",
                fontFamily: "Mulish",
                fontSize: "36px",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight: "150%",
              }}
            >
              Benefits
            </h2>
            <p
              style={{
                alignSelf: "stretch",
                color: "#000",
                fontFamily: "Mulish",
                fontSize: "19px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "150%",
                maxWidth: "650px",
                maxHeight: "240px",
              }}
            >
              Every day, we are working to foster a sense of allyship among
              intersectional identities in the Cornell community, while also
              empowering the future of computing through Girls Who Code outreach
              program. We believe that these initiatives will translate to
              healthier and more diverse tech spheres in the future when the
              growing number of individuals touched by our work enter the
              workforce. Your generosity and funding, makes us who we are as an
              organization, and in return, we hope to connect you to our network
              of driven, passionate women in computing at Cornell.
            </p>
          </div>
        </section>
      </div>

      <CurrentSponsors />
    </div>
  );
};

export default Sponsors;
