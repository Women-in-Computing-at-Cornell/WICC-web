import React from "react";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import "./Home.css";
import Sponsors from "../pages/Sponsors";
import { Carousel } from "react-responsive-carousel";
import semoutlook from "../images/semesteroutlookpic.png";
import arrowbutton from "../images/icons/circle-arrows.png";
import newmissionImg from "../images/wiccnewlogo.png";
import PCarousel from "../components/PCarousel";
import CurrentSponsors from "../components/currentSponsors.js";
import ImgCarousel from "../components/ImgCarousel.jsx";
import banner from "../images/home/home.png";
import www1 from "../images/home/www1.png";
import www2 from "../images/home/www2.png";
import www3 from "../images/home/www3.png";
import { Link } from "react-router-dom";

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
    return null;
  });
  return images;
}

const Home = () => {
  const homepicsname = importAll(
    require.context(
      "../images/photo-campaigns/hp-recentevents",
      false,
      /\.(jpg|png)$/i
    )
  );
  const homepics = Object.keys(homepicsname);

  console.log(homepics);
  const commonFlexColumnStyle = {
    display: "flex",
    flexDirection: "column",
    flex: "1",
  };

  const commonImageStyle = {
    width: "100%",
    height: "auto",
  };

  const containerStyle = {
    display: "flex",
    flexDirection: "row",
    marginLeft: "10em",
    marginRight: "10em",
    gap: "8em",
  };
  return (
    <>
      {/* Hero Image */}
      <div className="home-container">
        <section className="hero-container">
          <Image src={banner} className="mission-image"></Image>
          <div className="hero-content">
            <h2>Building a supportive tech community for women and allies.</h2>
            <p>
              We provide resources to conquer challenges and create
              opportunities for technical and leadership growth. We empower
              people from diverse backgrounds to make a positive impact on the
              future of tech. We embrace all gender identities.
            </p>
          </div>
        </section>

        {/* Semester Outlook */}
        <section
          style={{
            display: "flex",
            flexDirection: "row",
            alignContent: "left",
            justifyContent: "flex-start", // Update to flex-start
          }}
          className="semout-container"
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignContent: "left",
              justifyContent: "center",
              marginTop: "5em",
              marginLeft: "10em",
              marginBottom: "3em",
            }}
          >
            <h2 style={{ textAlign: "left", fontWeight: "bold" }}>
              Semester Outlook
            </h2>
            <p style={{ textAlign: "left", maxWidth: "800px" }}>
              WICC is a place where women and gender minorities feel supported
              throughout their academic journey and careers in technology. We
              are a coalition of leaders who seek to make an impact on Cornell,
              Ithaca and our greater community. Achieving this impact does not
              just involve WICC e-board, but also you (g-body members), CIS
              staff, Cornell, and the greater Ithaca community!
            </p>
          </div>
        </section>
        {/* What We Do */}
        <section style={{}} className="what-we-do-container">
          <div>
            <h2
              style={{
                textAlign: "left",
                fontWeight: "bold",
                marginLeft: "5em",
              }}
            >
              What we do
            </h2>
          </div>
          <div style={containerStyle}>
            {/* Left Column */}
            <div style={commonFlexColumnStyle}>
              <img src={www1} alt="Team celebration" style={commonImageStyle} />
              <p style={{ width: "100%", marginLeft: "2em" }}>
                The impact of WICC's initiatives reach far and wide across
                Computing and Information Science.
              </p>
              <div className="stats">
                <div className="stat-item">
                  <strong>400+</strong>
                  <span>Current Active Members</span>
                </div>
                <div className="stat-item">
                  <strong>2000</strong>
                  <span>Followers on Instagram</span>
                </div>
                <div className="stat-item">
                  <strong>1700+</strong>
                  <span>Newsletter Subscriber</span>
                </div>
              </div>
              <img
                src={www3}
                alt="Working at computers"
                style={commonImageStyle}
              />
            </div>
            {/* Right Column */}
            <div style={commonFlexColumnStyle}>
              <p
                style={{
                  marginLeft: "2em",
                  marginRight: "2em",
                  marginTop: "3em",
                  marginBottom: "2em",
                }}
              >
                Through our programs in{" "}
                <strong>
                  academic development, community building, outreach,
                  mentorship, corporate engagement, career development, and
                  photo campaigns
                </strong>
                , we aim to cultivate a supportive environment where women and
                allies can thrive and seize opportunities for{" "}
                <strong>technical, academic, and leadership growth.</strong>
              </p>
              <Button
                href="#/programs"
                className="btn"
                style={{
                  marginLeft: "2em",
                  marginRight: "2em",
                  marginBottom: "2em",
                }}
              >
                Learn More about Our Programs
              </Button>
              <img src={www2} alt="Team meeting" style={commonImageStyle} />
              <p style={{ marginLeft: "2em", marginRight: "2em" }}>
                We actively engage with the broader community to promote{" "}
                <strong>diversity and inclusion</strong> in tech through
                outreach.
              </p>
              <p style={{ marginLeft: "2em", marginRight: "2em" }}>
                Join us as we empower individuals to make a lasting impact on
                the tech industry and beyond!
              </p>
              <Button
                href="#/join"
                className="btn"
                style={{ marginLeft: "2em", marginRight: "2em" }}
              >
                Become a WICC member
              </Button>
            </div>
          </div>
        </section>

        {/* What Our Alumni Says */}
        <section className="alumni-section">
          <h2 className="alumni-header">What Our Alumni Says</h2>
          <div className="testimony-container">
            <div className="testimony">
              <strong className="alumni-name">Nandita Mohan '20</strong>
              <div>
                "If there's one person who first made me feel involved,
                integrated and comfortable in the CIS community at Cornell, it
                would be Harini. Being her friend and mentee from when I was a
                freshman showed me that incredibly successful and humble
                upperclassmen also had their own confusions and struggles along
                the way, and that it was in-fact completely normal. Not to
                mention she was always willing to grab a meal, have fun
                conversations, and be there for me when I needed it."
              </div>
            </div>
            <div className="testimony">
              <strong className="alumni-name">Maya Frai '20</strong>
              <div>
                “WICC has given me an invaluable amount of resources, one of
                them being the alumni network. When I first heard about WICC my
                freshman year, I joined Lunch Bunch and was able to meet two
                incredible women who I am happy to call my mentors. They took
                the time to talk about all of the diverse opportunities in tech
                and how WICC has allowed them to connect with other women in the
                field. WICC alumni are not only incredibly inspirational, but
                are also dedicated and down-to-earth. Looking forward to being a
                part of this admirable network after graduation.”
              </div>
            </div>
            <div className="testimony">
              <strong className="alumni-name">Karen Zhang '21</strong>
              <div>
                “I learned about the different fields of CS and how they're
                used, which I previously had many misconceptions about. Lunch
                Bunch truly let me cement my decision to major in CS, as through
                it I got an idea of the potential of the field.”
              </div>
            </div>
          </div>
        </section>

        {/* Get Involved */}
        <section className="get-involved">
          <h2 className="get-involved-header">Get Involved</h2>
          <div className="call-to-action-container">
            <div className="get-involved-grid">
              {/* First Box */}
              <Link to="/membership#reqs" className="get-involved-columno">
                <div className="get-involved-content">
                  <Image
                    className="arrow-img"
                    style={{ maxWidth: "40px" }}
                    src={arrowbutton}
                  ></Image>
                  <div>
                    <small className="button-description">
                      Learn About Us{" "}
                    </small>
                    <h4 className="button-name">Join Our Listserv</h4>
                  </div>
                </div>
              </Link>

              {/* Second Box */}
              <Link to="/membership" className="get-involved-columne">
                <div className="get-involved-content">
                  <Image
                    className="arrow-img"
                    style={{ maxWidth: "40px" }}
                    src={arrowbutton}
                  ></Image>
                  <div>
                    <small className="button-description">Join Us</small>
                    <h4 className="button-name">Active Membership</h4>
                  </div>
                </div>
              </Link>

              {/* Third Box */}
              <Link to="/sponsors" className="get-involved-columno">
                <div className="get-involved-content">
                  <Image
                    className="arrow-img"
                    style={{ maxWidth: "40px" }}
                    src={arrowbutton}
                  ></Image>
                  <div>
                    <small className="button-description">
                      Collaborate With Us
                    </small>
                    <h4 className="button-name">Sponsorship</h4>
                  </div>
                </div>
              </Link>

              {/* Fourth Box */}

              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSe_QtYzpq9knpmjDAj0bV3MwcsBtOy8IX7XhOHoroq0801sNw/viewform"
                className="get-involved-columne"
              >
                <div className="get-involved-content">
                  <Image
                    className="arrow-img"
                    style={{ maxWidth: "40px" }}
                    src={arrowbutton}
                  ></Image>
                  <div>
                    <small className="button-description">Support Us</small>
                    <h4 className="button-name">Alumni</h4>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* Sponsors */}
        <section>
          <CurrentSponsors />
        </section>
      </div>
    </>
  );
};
export default Home;
