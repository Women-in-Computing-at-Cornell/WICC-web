import React from "react";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";

import "./Home.css";
import illustration from "../images/homepage-illustration.png";
import Sponsors from "../pages/Sponsors";
// import missionImg from "../images/colorgrouppic.png"
// import boardGroupPic from "../images/peoplegroupic.jpg"
// import PhotoCarousel from '../pages/PhotoCarousel';
// import mentorshipPic from '../images/programs-pictures/mentorship2.jpg'
// import outreachPic from '../images/outreach/outreach2.jpg'
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
    for (let i = 0; i < imgNames.length; i += 4) {
      const imagesInGroup = imgNames.slice(i, i + 4).map((img, index) => {
        const imageSrc = pics[img];
        return (
          <div key={index} style={{ width: `${100 / 4}%` }}>
            <Image
              src={imageSrc}
              alt={`Image ${i + index + 1}`}
              style={{ width: "100%", height: "200px", objectFit: "contain" }}
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

const Home = () => {
  const homepicsname = importAll(
    require.context(
      "../images/photo-campaigns/hp-recentevents",
      false,
      /\.(jpg|png)$/i
    )
  );
  const homepics = Object.keys(homepicsname);

  const sponsorpicsname = importAll(
    require.context("../images/sponsors", false, /\.(jpg)$/i)
  );
  const sponsorpics = Object.keys(sponsorpicsname);

  return (
    <div>
      <div class="home-container">
        <section
          class="hero-container"
          style={{
            backgroundImage: { illustration },
          }}
        >
          <Image src={illustration} id="home-illustration" />
          <div style={{ margin: "3% 0" }}>
            <h1
              style={{ marginBottom: "2%", fontWeight: "bold" }}
              class="headerName"
            >
              Women in Computing at Cornell
            </h1>
            <h2>strives to make computing inclusive for all</h2>
          </div>
        </section>
        <section class="mission-container">
          <h2 style={{ fontWeight: "bold" }}> Our Mission</h2>
          <div>
            <p style={{ paddingLeft: "10%", paddingRight: "10%" }}>
              We aim to foster a <strong>supportive community</strong> of women
              and allies* equipped with the resources needed to recognize and
              overcome challenges. By creating{" "}
              <strong>opportunities for technical and leadership growth</strong>
              , we work to ensure that people of all identities are able to
              discover and pursue their interests and talents in order to{" "}
              <strong>positively impact the future of tech.</strong>
            </p>
            <p>* All gender identities are welcomed and supported!</p>
          </div>
        </section>
        {/* Title "What we do" */}
        <section
          style={{ paddingLeft: "5%", paddingRight: "5%" }}
          className="what-we-do-container"
        >
          <div className="title-with-line">
            {/* Title */}
            <h2 className="title-text">What we do</h2>
            {/* Right decorative line */}
            <div className="horizontal-line"></div>
          </div>
        </section>
        <section
          style={{ paddingLeft: "5%", paddingRight: "5%", paddingTop: "20px" }}
          class="carousel-container"
        >
          <PCarousel imgNames={homepics} pics={homepicsname} />
        </section>
        <section
          style={{ paddingLeft: "5%", paddingRight: "5%", paddingTop: "50px" }}
          className="alumni-testimonies-container"
        >
          <div className="alumni-testimonies-content">
            <h2>Alumni Testimonies</h2>
            <div className="testimony-grid">
              <div className="testimony-column">
                {/* Testimony 1 */}
                <h2
                  style={{
                    padding: "10px",
                    fontWeight: "bold",
                    color: "black",
                    fontSize: 22,
                  }}
                >
                  Nandita Mohan '20
                </h2>
                <p style={{ padding: "15px", fontSize: 13 }}>
                  "If there's one person who first made me feel involved,
                  integrated and comfortable in the CIS community at Cornell, it
                  would be Harini. Being her friend and mentee from when I was a
                  freshman showed me that incredibly successful and humble
                  upperclassmen also had their own confusions and struggles
                  along the way, and that it was in-fact completely normal. Not
                  to mention she was always willing to grab a meal, have fun
                  conversations, and be there for me when I needed it.".
                </p>
              </div>
              <div className="testimony-column">
                {/* Testimony 2 */}
                <h2
                  style={{
                    padding: "10px",
                    fontWeight: "bold",
                    color: "black",
                    fontSize: 22,
                  }}
                >
                  Maya Frai '20
                </h2>
                <p style={{ padding: "15px", fontSize: 13 }}>
                  “WICC has given me an invaluable amount of resources, one of
                  them being the alumni network. When I first heard about WICC
                  my freshman year, I joined Lunch Bunch and was able to meet
                  two incredible women who I am happy to call my mentors. They
                  took the time to talk about all of the diverse opportunities
                  in tech and how WICC has allowed them to connect with other
                  women in the field. WICC alumni are not only incredibly
                  inspirational, but are also dedicated and down-to-earth.
                  Looking forward to being a part of this admirable network
                  after graduation.”
                </p>
              </div>
              <div className="testimony-column">
                {/* Testimony 3 */}
                <h2
                  style={{
                    padding: "10px",
                    fontWeight: "bold",
                    color: "black",
                    fontSize: 22,
                  }}
                >
                  Karen Zhang '21
                </h2>
                <p style={{ padding: "15px", fontSize: 13 }}>
                  “I learned about the different fields of CS and how they're
                  used, which I previously had many misconceptions about. Lunch
                  Bunch truly let me cement my decision to major in CS, as
                  through it I got an idea of the potential of the field.”
                </p>
              </div>
              {/* Add more testimonies as needed */}
            </div>
          </div>
        </section>
        {/*<section class="call-to-action-container"> 
          <h3>Get Involved</h3>
          <Button href="/#join">Get Involved</Button>
                </section>  */}
        <section class="call-to-action-title">
          <h2 className="title-text">Get Involved</h2>
        </section>
        <section class="call-to-action-container">
          <div className="action-panel">
            <div className="action-panel-content">
              <a href="/#join" className="panel-link">
                <button className="panel-button">
                  <span>&#x2197;</span>
                </button>
              </a>
              <p>Join Us</p>
            </div>
          </div>
          <div className="action-panel">
            <div className="action-panel-content">
              <a
                href="https://drive.google.com/file/d/1s_okJqDYmfD5-3jEPCPKvbtP_TYruXXD/view?usp=sharing"
                className="panel-link"
              >
                <button className="panel-button">
                  <span>&#x2197;</span>
                </button>
              </a>
              <p>Sponsors</p>
            </div>
          </div>
          <div className="action-panel">
            <div className="action-panel-content">
              <a href="/#programs" className="panel-link">
                <button className="panel-button">
                  <span>&#x2197;</span>
                </button>
              </a>
              <p>Programs</p>
            </div>
          </div>
        </section>

        <section style={{ marginTop: "5%" }} class="sponsor-container">
          <h2 style={{ textAlign: "left", fontWeight: "bold" }}>
            Our Sponsors
          </h2>
        </section>
        <section
          style={{
            objectFit: "cover",
            paddingLeft: "5%",
            paddingRight: "5%",
            paddingTop: "20px",
          }}
          class="sponsor-carousel-container"
        >
          <PCarousel imgNames={sponsorpics} pics={sponsorpicsname} />
        </section>

        {/*  <section style={{ marginTop: "5%" }} class="sponsor-container">
          <h2 style={{ fontWeight: "bold" }}>Our Sponsors</h2>
          <Sponsors />
        </section>
              */}
      </div>
    </div>
  );
};

export default Home;
