import React from "react";
import Image from "react-bootstrap/Image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const PCarousel = ({ imgNames, pics, currentIndex, onChange }) => {
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

  const totalSlides = Math.ceil(imgNames.length / 5);
  const progress = ((currentIndex + 1) / totalSlides) * 100;

  return (
    <div className="carousel-wrapper">
      <div className="progress-bar" style={{ width: '100%', backgroundColor: 'black', height: '5px', borderRadius: '5px', marginBottom: '20px' }}>
        <div style={{ width: `${progress}%`, height: '100%', backgroundColor: '#9CE2D3', borderRadius: '5px' }}></div>
      </div>
      <Carousel
        selectedItem={currentIndex}
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        emulateTouch
        infiniteLoop
        onChange={(index) => {
          onChange(index);
        }}
      >
        {renderImages()}
      </Carousel>
    </div>
  );
};

export default PCarousel;
