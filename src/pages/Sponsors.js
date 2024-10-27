import React from "react";
import "./pages.css";
import "./Sponsors.css";
import Image from "react-bootstrap/Image";
import { sponsorData } from "./sponsorData.js";
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
        <div style={{
            background: "#FFF",
            borderRadius: "10px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
            padding: "20px",
            flex: "0 1 calc(25% - 20px)", // 75% width of the middle box
            maxWidth: "calc(25% - 10px)", // Adjusted width, reduced margin
            marginLeft: "40px",
          }}
        >
          <h2
            style={{
              color: "var(--2, #212529)",
              fontFamily: "Mulish",
              fontSize: "30px",
              fontStyle: "normal",
              fontWeight: "700",
              lineHeight: "150%", // 45px
              textAlign: "left",
            }}
          >
            Listserv Fee
          </h2>
          <p
            style={{
              color: "var(--2, #212529)",
              fontFamily: "Mulish",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: "700",
              lineHeight: "150%", // 24px
              textAlign: "left",
              marginBottom: 0, // Removed margin-bottom
            }}
          >
            Want to publicize your company event to 2000+ WICC members?
          </p>
          <br />
          <div
            style={{
              color: "var(--2, #212529)",
              fontFamily: "Mulish",
              fontSize: "13px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "150%",
            }}
          >
            $50 to publize company events on WICC Listserv. Note: A company
            event entails an event that is not in collaboration with WICC. This
            fee is waived for all Sliver, Gold, and Platinum WICC Sponsors.
          </div>
        </div>

        <div
          style={{
            background: "#FFF",
            borderRadius: "10px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
            padding: "20px",
            flex: "1 1 calc(40% - 20px)", // Adjusted width, reduced margin
            maxWidth: "calc(40% - 10px)", // Adjusted width, reduced margin
            marginRight: "5px", // Reduced margin between the boxes by half
          }}
        >
          <h2
            style={{
              color: "var(--2, #212529)",
              fontFamily: "Mulish",
              fontSize: "30px",
              fontStyle: "normal",
              fontWeight: "700",
              lineHeight: "150%", // 45px
              textAlign: "left",
            }}
          >
            Other Ways to Support Us
          </h2>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li
              style={{
                color: "var(--2, #212529)",
                fontFamily: "Mulish",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight: "150%",
              }}
            >
              -$1200/student Grace Hopper Scholarship
            </li>
            <li
              style={{
                color: "var(--2, #212529)",
                fontFamily: "Mulish",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight: "150%",
              }}
            >
              -$1200/student Tapia Conference
            </li>
            <li
              style={{
                color: "var(--2, #212529)",
                fontFamily: "Mulish",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight: "150%",
              }}
            >
              -Sponsor a mentorship event, social event, or general body
              meeting.
            </li>
          </ul>
          <div
            style={{
              color: "var(--2, #212529)",
              fontFamily: "Mulish",
              fontSize: "13px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "150%",
            }}
          >
            Note: Hosting an event without sponsorship is possible. There is a
            single Event Fee (In-Person and Virtual): $400 for both
            public/invite-only events, free for non-profits. We reserve the
            right to discontinue partnership with companies whose actions or
            values do not adhere to WICC’s values of diversity and inclusivity.
          </div>
        </div>

        <div
          style={{
            background: "#FFF",
            borderRadius: "10px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
            padding: "20px",
            flex: "0 1 calc(25% - 20px)", // 75% width of the middle box
            maxWidth: "calc(25% - 10px)", // Adjusted width, reduced margin
            marginRight: "40px",
          }}
        >
          <h2
            style={{
              color: "var(--2, #212529)",
              fontFamily: "Mulish",
              fontSize: "30px",
              fontStyle: "normal",
              fontWeight: "700",
              lineHeight: "150%", // 45px
              textAlign: "left",
            }}
          >
            Tiers
          </h2>
          <p
            style={{
              color: "var(--2, #212529)",
              fontFamily: "Mulish",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: "700",
              lineHeight: "150%", // 24px
              textAlign: "left",
              marginBottom: 0, // Removed margin-bottom
            }}
          >
            Silver ($1000)
          </p>
          <p
            style={{
              color: "var(--2, #212529)",
              fontFamily: "Mulish",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: "700",
              lineHeight: "150%", // 24px
              textAlign: "left",
              marginBottom: 0, // Removed margin-bottom
            }}
          >
            Gold ($2000)
            <br />
            Platinum ($3000)
          </p>
          <br />
          <div
            style={{
              color: "var(--2, #212529)",
              fontFamily: "Mulish",
              fontSize: "13px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "150%",
            }}
          >
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
