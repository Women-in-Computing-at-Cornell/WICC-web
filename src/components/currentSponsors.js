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
  ...sponsorpicssilver
};

const allImgNames = [
  ...Object.keys(sponsorpicsplatinum),
  ...Object.keys(sponsorpicsgold),
  ...Object.keys(sponsorpicssilver)
];

export default function CurrentSponsors() {
  const [carouselIndex, setCarouselIndex] = useState(0);

  const nextSlide = () => {
    setCarouselIndex(prev => prev + 1);
  };

  return (
    <div>
      <section className="sponsor-container">
        <div className="sponsor-header">
          <h2 className="sponsor-title">
            Sponsors
          </h2>
          <button onClick={nextSlide} style={{ background: 'none', border: 'none' }}>
            <img src={arrow} alt="Next" />
          </button>
        </div>
        <PCarousel imgNames={allImgNames} pics={allSponsorPics} currentIndex={carouselIndex} onChange={setCarouselIndex} />
      </section>
      <section className="sponsor-carousel-container">
      </section>
    </div>
  );
}
