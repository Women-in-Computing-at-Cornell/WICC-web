import React from "react";
import "./pages.css";
import "./Sponsors.css";
import Image from "react-bootstrap/Image";
import { sponsorData } from "./sponsorData.js";
//test comment
import sponsorsImg from "../images/sponsors/sponsers_page_imgs/sponsors_img.jpg";
import sponsorsCandid from "../images/sponsors/sponsorsCandid.png";
import whiteCheck from "../images/icons/white-checkmark.svg";
import grayCheck from "../images/icons/gray-checkmark.svg";
import whiteX from "../images/icons/white-X.svg";
import grayX from "../images/icons/gray-X.svg";
import CurrentSponsors from "../components/currentSponsors.js";
import "./Sponsors.css";

function getBenefitImage(key, benefit, level) {
  if (key % 2 === 0) {
    return benefit[level] ? whiteCheck : whiteX;
  } else {
    return benefit[level] ? grayCheck : grayX;
  }
}

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
        <section className="benefits-section">
          <Image
            style={{
              maxHeight: "600px",
              maxWidth: "400px",
              width: "100%",
              borderRadius: "30px",
              height: "auto",
            }}
            src={sponsorsCandid}
          ></Image>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <h2 className="benefits-header">Benefits</h2>
            <p className="benefits-text">
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

      <section className="container-section">
        <div className="container1">
          <h2 className="container-header">
            Listserv Fee
          </h2>
          <p className="container-subheader">
            Want to publicize your company event to 2000+ WICC members?
          </p>
          <br />
          <div className="description">
            $50 to publize company events on WICC Listserv. Note: A company
            event entails an event that is not in collaboration with WICC. This
            fee is waived for all Sliver, Gold, and Platinum WICC Sponsors.
          </div>
        </div>

        <div className="container2">
          <h2 className="container-header">
            Other Ways to Support Us
          </h2>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li className="container-subheader">
              -$1200/student Grace Hopper Scholarship
            </li>
            <li className="container-subheader">
              -$1200/student Tapia Conference
            </li>
            <li className="container-subheader">
              -Sponsor a mentorship event, social event, or general body
              meeting.
            </li>
          </ul>
          <div className="description">
            Note: Hosting an event without sponsorship is possible. There is a
            single Event Fee (In-Person and Virtual): $400 for both
            public/invite-only events, free for non-profits. We reserve the
            right to discontinue partnership with companies whose actions or
            values do not adhere to WICC’s values of diversity and inclusivity.
          </div>
        </div>

        <div className="container3">
          <h2 className="container-header">
            Tiers
          </h2>
          <p className="container-subheader">
            Silver ($1000)
          </p>
          <p className="container-subheader">
            Gold ($2000)
          </p>
          <p className="container-subheader">
            Platinum ($3000)
          </p>
          <br />
          <div className="description">
            We have varying levels of sponsorship with different benefits below.
            Your support makes a big difference!
          </div>
        </div>
      </section>

      <section style={{ paddingTop: "56px" }}>
        <table className="table" id="sponsorsTable">
          <thead>
            <tr>
              <th>Specific Benefits</th>
              <th className="center">Silver</th>
              <th className="center">Gold</th>
              <th className="center">Platinum</th>
            </tr>
          </thead>
          <tbody>
            {sponsorData.map((benefit, key) => (
              <tr key={key}>
                <td>{benefit.name}</td>
                <td className="center">
                  <img src={getBenefitImage(key, benefit, "silver")} />
                </td>
                <td className="center">
                  <img src={getBenefitImage(key, benefit, "gold")} />
                </td>
                <td className="center">
                  <img src={getBenefitImage(key, benefit, "platinum")} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <CurrentSponsors />
    </div>
  );
};

export default Sponsors;
