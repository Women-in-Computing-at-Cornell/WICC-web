import React from "react";
import Image from "react-bootstrap/Image";
import { Carousel } from "react-responsive-carousel";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
    return null;
  });
  return images;
}

const PCarousel = ({ imgNames, pics }) => {
  const renderImages = () => {
    const imageGroups = [];
    for (let i = 0; i < imgNames.length; i += 5) {
      const imagesInGroup = imgNames.slice(i, i + 5).map((img, index) => {
        const imageSrc = pics[img];
        return (
          <div key={index} style={{ width: `${100 / 5}%` }}>
            <Image
              src={imageSrc}
              alt={`Image ${i + index + 1}`}
              style={{ width: "80%", height: "100px", objectFit: "contain" }}
            />
          </div>

        );
      });
      imageGroups.push(imagesInGroup);
    }
    return imageGroups.map((group, index) => (
      <div key={index} style={{ display: "flex" }}>
        {group}
      </div>
    ));
  };

  return (
    <div className="carousel-wrapper">
      <Carousel showThumbs={false} showStatus={false} emulateTouch infiniteLoop>
        {renderImages()}
      </Carousel>
    </div>
  );
};

export default PCarousel;