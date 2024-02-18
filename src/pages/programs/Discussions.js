import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import {
  presidents,
  operations,
  corporate,
  academic,
  brand,
  outreach,
  community,
  advisors,
} from "../boardData";
import discussion from "../../images/programs-pictures/discussions.jpg";
import QuestionsCard from "./QuestionsCard.js";

import Image from "react-bootstrap/Image";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import { boardData } from "../boardData";
import communityhero from "../../images/programs/communityhero.jpg";

//wicc away imports (note: use a function instead)
import group1 from "../../images/programs-pictures/wiccaway/group1.JPG";
import painting1 from "../../images/programs-pictures/wiccaway/painting1.jpg";
import painting2 from "../../images/programs-pictures/wiccaway/painting2.JPG";
import group3 from "../../images/programs-pictures/wiccaway/group3.JPG";
import painting3 from "../../images/programs-pictures/wiccaway/painting3.JPG";

//gbody imports
import friendsgiving from "../../images/programs-pictures/gbody1.png";
import pumpkinspice from "../../images/programs-pictures/gbody3.png";
import advocacy from "../../images/programs-pictures/gbody2.png";

//gbody social imports
import social1 from "../../images/programs-pictures/socials/dodgeball2.JPG";
import social2 from "../../images/programs-pictures/socials/tree1.JPG";
import social3 from "../../images/programs-pictures/socials/dodgeball1.JPG";

import medal from "../../images/medal.jpg";

import "./programPages.css";
import "../discussions.css";


export default class Discussions extends Component {
  render() {
    let discDirectors = community.members.filter(
      (record) => record.position === "Social Co-Director"
    );

    function importAll(r) {
      let images = {};
      r.keys().map((item, index) => {
        images[item.replace("./", "")] = r(item);
      });
      return images;
    }

    const boardHeadshots = importAll(
      require.context("../../images/headshots/board", false, /\.jpg/)
    );

    const images = [
      {
        src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
        width: 320,
        height: 174,
        isSelected: true,
        caption: "After Rain (Jeshu John - designerspics.com)",
      },
      {
        src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
        width: 320,
        height: 212,
        tags: [
          { value: "Ocean", title: "Ocean" },
          { value: "People", title: "People" },
        ],
        alt: "Boats (Jeshu John - designerspics.com)",
      },
      {
        src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
        width: 320,
        height: 212,
      },
    ];

    const GBodyCardData = [
      {
        src: friendsgiving,
        title: "Nov 2023: Friendsgiving!",
        caption:
          "In our November GBody, we celebrated the season of giving\
        thanks and came together with our Bowers CiS community for\
        a Friendsgiving event!",
      },
      {
        src: pumpkinspice,
        title: "Oct 2023: Pumpkin Spice & Chill~",
        caption:
          "At our second semesterly GBody, we took some time to\
        relax, destress, and enjoy the fall cheer by painting\
        pumpkins and drinking pumpkin spiced Swiss Miss.",
      },
      {
        src: advocacy,
        title: "Sept 2023: Self-Advocacy",
        caption:
          "In our first GBody of the fall semester, WICC members dove\
        into a session that equipped us with the skills and\
        confidence to champion our needs and rights. We also had\
        boba, plushies, pens, and keychains for our WICCies!",
      },
    ];

    const GBodyCard = ({ src, title, caption }) => {
      //random comment lol
      return (
        <div class="item">
          <a aria-labelledby="person"></a>
          <div class="card-img-div">
            <img src={src} alt="GBody Image" class="card-img"></img>
            <div class="img-overlay"></div>
          </div>
          <div class="item__overlay">
            <h3 id="person" aria-hidden="true">
              {title}
            </h3>
            <div class="item__body">
              <p>{caption}</p>
            </div>
          </div>
        </div>
      );
    };

    const GBodyCards = () => {
      return (
        <div class="grid">
          {GBodyCardData.map((image, index) => (
            <GBodyCard
              key={index}
              src={image.src}
              caption={image.caption}
              title={image.title}
            />
          ))}
        </div>
      );
    };

    const WiccAwayImages = [group1, painting1, painting2, painting3, group3];

    const SocialImages = [social1, social2, social3];

    const CarouselComponent = ({ images }) => {
      const [index, setIndex] = useState(0);

      const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
      };
      return (
        <Carousel
          activeIndex={index}
          onSelect={handleSelect}
          indicators={false}
          class="carousel"
          controls={false}
        >
          {images.map((imageUrl, index) => (
            <Carousel.Item key={index}>
              <img
                src={imageUrl}
                alt={`Slide ${index}`}
                className="carousel-image"
              />
            </Carousel.Item>
          ))}
        </Carousel>
      );
    };

    const CarouselComponents = () => {
      return (
        <div>
          <div class="image-caption-container">
            <CarouselComponent images={WiccAwayImages} />
            <div class="caption">
              <h2>WICC Away!</h2>
              <br />
              <p>
                At our annual WICC Away retreat event, we kick off the Fall
                semester and get to know our fellow WICCies. Join us for a
                kickoff where we introduce WICC's mission, dive into an allyship
                workshop that sparks insightful conversations, indulge in
                engaging activity sessions, and cap off the night with an
                exciting Q&A panel.
              </p>
            </div>
          </div>
          <br />
          <div class="image-caption-container">
            <div class="caption">
              <h2>G-Body Socials</h2>
              <br />
              <p>
                Join us for our vibrant G-Body Socials—a fantastic opportunity
                for women in Bowers CiS to connect, collaborate, and thrive! Our
                meetings foster an inclusive environment where students engage
                in fun activities, share enlightening insights, and build
                lasting connections. Whether you're a coding enthusiast, an
                aspiring tech leader, or simply curious about the industry, our
                G-Body Socials welcome all with open arms.
              </p>
      </div>
    );
  }
}
