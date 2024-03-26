import React from "react";
import "../pages/Home.css";
import PCarousel from "./PCarousel";

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => {
      images[item.replace("./", "")] = r(item);
      return null;
    });
    return images;
  }

const sponsorpicsgold = importAll(
    require.context("../images/sponsors/sponsorpics/gold", false, /\.(jpg)$/i)
  );
  const sponsorpicssilver = importAll(
    require.context("../images/sponsors/sponsorpics/silver", false, /\.(jpg)$/i)
  );
  const sponsorpicsplatinum = importAll(
    require.context("../images/sponsors/sponsorpics/platinum", false, /\.(jpg)$/i)
  );
  const sponsorpicsg = Object.keys(sponsorpicsgold);
  const sponsorpicss = Object.keys(sponsorpicssilver);
  const sponsorpicsp = Object.keys(sponsorpicsplatinum);

  export default function currentSponsors() {
      return (
        <div>
            <section style={{ marginTop: "5%" }} className="sponsor-container">
                <h2 style={{ textAlign: "left", fontWeight: "bold" }}>
                Our Current Sponsors
                </h2>
                <br></br>
                <br></br>
                <h3 style={{ textAlign: "left", marginLeft: "2%" }}>Platinum</h3>
                <PCarousel imgNames={sponsorpicsp} pics={sponsorpicsplatinum} />
                <h3 style={{ textAlign: "left", marginLeft: "2%" }}>Gold</h3>
                <PCarousel imgNames={sponsorpicsg} pics={sponsorpicsgold} />
                <h3 style={{ textAlign: "left", marginLeft: "2%" }}>Silver</h3>
                <PCarousel imgNames={sponsorpicss} pics={sponsorpicssilver} />
            </section>
            <section
                style={{
                    objectFit: "cover",
                    paddingLeft: "5%",
                    paddingRight: "5%",
                    paddingTop: "20px",
                }}
                className="sponsor-carousel-container"
                >
            </section>
        </div>
      );
}