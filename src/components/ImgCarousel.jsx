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

const ImgCarousel = ({ imgNames, pics }) => {
  const renderImages = () => {
    const imageGroups = [];
    for (let i = 0; i < imgNames.length; i += 5) {
      const imagesInGroup = imgNames.slice(i, i + 5).map((img, index) => {
        const imageSrc = pics[img];
        return (
          <div key={index} style={{ width: `${100 / 5}%`, height: "100%" }}>
            <Image
              src={imageSrc}
              alt={`Image ${i + index + 1}`}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        );
      });
      imageGroups.push(imagesInGroup);
    }
    return imageGroups.map((group, index) => (
      <div key={index} style={{ display: "flex", height: "100%" }}>
        {group}
      </div>
    ));
  };

  return (
    <div style={{ height: "100%" }}>
      <Carousel showThumbs={false} showStatus={false} emulateTouch infiniteLoop>
        {renderImages()}
      </Carousel>
    </div>
  );
};

export default ImgCarousel;
