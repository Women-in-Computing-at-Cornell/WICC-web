import React, { useState } from "react";
import "./currentSponsors.css";
import PCarousel from "./PCarousel";
import arrow from "../images/chevron.svg";

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

const allSponsorPics = {
  ...sponsorpicsplatinum,
  ...sponsorpicsgold,
  ...sponsorpicssilver,
};

const allImgNames = [
  ...Object.keys(sponsorpicsplatinum),
  ...Object.keys(sponsorpicsgold),
  ...Object.keys(sponsorpicssilver),
];

const sponsorLinks = {
  "Bloomberg.jpg": "https://www.linkedin.com/company/bloomberg/",
  "Capital One.jpg": "https://www.linkedin.com/company/capital-one/",
  "DE Shaw.jpg": "https://www.linkedin.com/company/d.-e.-shaw-&-co./",
  "Jane Street.jpg": "https://www.linkedin.com/company/jane-street-global/",
  "pwc.jpg": "https://www.linkedin.com/company/pwc/",
  "Millennium Management.jpg":
    "https://www.linkedin.com/company/millennium-partners/",
  "Accenture.jpg": "https://www.linkedin.com/company/accenture/",
  "HRT.jpg": "https://www.linkedin.com/company/hudson-river-trading/",
  "MathWorks.jpg": "https://www.linkedin.com/company/the-mathworks_2/",
  "Roblox.jpg": "https://www.linkedin.com/company/roblox/",
};

export default function CurrentSponsors() {
  const [carouselIndex, setCarouselIndex] = useState(0);

  const nextSlide = () => {
    setCarouselIndex((prev) => prev + 1);
  };

  return (
    <div>
      <section className="sponsor-container">
        <div className="sponsor-header">
          <h2 className="sponsor-title">Sponsors</h2>
          <button
            onClick={nextSlide}
            style={{ background: "none", border: "none" }}
          >
            <img src={arrow} alt="Next" />
          </button>
        </div>
        <PCarousel
          imgNames={allImgNames}
          pics={allSponsorPics}
          links={sponsorLinks}
          currentIndex={carouselIndex}
          onChange={setCarouselIndex}
        />
      </section>
      <section className="sponsor-carousel-container"></section>
    </div>
  );
}
