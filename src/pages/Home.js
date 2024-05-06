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
import CurrentSponsors from "../components/currentSponsors.js"
import ImgCarousel from "../components/ImgCarousel.jsx";
import banner from "../images/home/home.png";
import www1 from "../images/home/www1.png";
import www2 from "../images/home/www2.png";
import www3 from "../images/home/www3.png";

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
    return null;
  });
  return images;
}


// const PCarousel = ({ imgNames, pics }) => {
//   const renderImages = () => {
//     const imageGroups = [];
//     for (let i = 0; i < imgNames.length; i += 5) {
//       const imagesInGroup = imgNames.slice(i, i + 5).map((img, index) => {
//         const imageSrc = pics[img];
//         return (
//           <div key={index} style={{ width: `${100 / 5}%` }}>
//             <Image
//               src={imageSrc}
//               alt={`Image ${i + index + 1}`}
//               style={{ width: "80%", height: "100px", objectFit: "contain" }}
//             />
//           </div>

//         );
//       });
//       imageGroups.push(imagesInGroup);
//     }
//     return imageGroups.map((group, index) => (
//       <div key={index} style={{ display: "flex" }}>
//         {group}
//       </div>
//     ));
//   };


//   return (
//     <div className="carousel-wrapper">
//       <Carousel showThumbs={false} showStatus={false} emulateTouch infiniteLoop>
//         {renderImages()}
//       </Carousel>
//     </div>
//   );
// };


const Home = () => {
  const homepicsname = importAll(
    require.context(
      "../images/photo-campaigns/hp-recentevents",
      false,
      /\.(jpg|png)$/i
    )
  );
  const homepics = Object.keys(homepicsname);

  console.log(homepics)
  const commonFlexColumnStyle = {
    display: "flex",
    flexDirection: "column",
    flex: "1"
  };

  const commonImageStyle = {
    width: "100%",
    height: "auto"
  };

  const containerStyle = {
    display: "flex",
    flexDirection: "row",
    marginLeft: "10em",
    marginRight: "10em",
    gap: "8em"
  };
  return (
    <>
      {/* Hero Image */}
      <div className="home-container">
        <section className="hero-container">
          <Image
            src={banner}
            id="mission-image"
          ></Image>
          <div className="hero-content">
            <h2>Building a supportive tech community for women and allies.</h2>
            <p>
              We provide resources to conquer challenges and create opportunities for technical and leadership growth. We empower people from diverse backgrounds to make a positive impact on the future of tech. We embrace all gender identities.
            </p>
          </div>
        </section>
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
              marginLeft: "10em"
            }}
          >
            <h2 style={{ textAlign: "left", fontWeight: "bold" }}>
              {" "}
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
        <section
          style={{}}
          className="what-we-do-container"
        >
          <div >
            <h2 style={{ textAlign: "left", fontWeight: "bold", marginLeft: "5em" }}>What we do</h2>
          </div>
          <div style={containerStyle}>
            <div style={commonFlexColumnStyle}>
              <img src={www1} alt="Team celebration" style={commonImageStyle} />
              <p style={{ width: "100%", marginLeft: "2em" }}>The impact of WICC's initiatives reach far and wide across Computing and Information Science.</p>
              <div className="stats">
                <div style={{ display: "flex", flexDirection: "column" }}><strong style={{ font: "bold", color: "#9CE2D3", fontSize: "3em" }}>400+</strong><span style={{ fontWeight: "bold" }}>Current Active Members</span></div>
                <div style={{ display: "flex", flexDirection: "column" }}><strong style={{ font: "bold", color: "#9CE2D3", fontSize: "3em" }}>2000</strong><span style={{ fontWeight: "bold" }}>Followers on Instagram</span></div>
                <div style={{ display: "flex", flexDirection: "column" }}><strong style={{ font: "bold", color: "#9CE2D3", fontSize: "3em" }}>1700+</strong><span style={{ fontWeight: "bold" }}>Newsletter Subscriber</span></div>
              </div>
              <img src={www2} alt="Working at computers" style={commonImageStyle} />
            </div>
            <div style={commonFlexColumnStyle}>
              <p style={{ marginLeft: "2em", marginRight: "2em", marginTop: "3em", marginBottom: "2em" }}>Through our programs in <strong>academic development, community building, outreach, mentorship, corporate engagement, career development, and photo campaigns</strong>, we aim to cultivate a supportive environment where women and allies can thrive and seize opportunities for <strong>technical, academic, and leadership growth.</strong></p>
              <a href="#" className="btn" style={{ marginLeft: "2em", marginRight: "2em", marginBottom: "2em" }}>Learn More about Our Programs</a>
              <img src={www3} alt="Team meeting" style={commonImageStyle} />
              <p style={{ marginLeft: "2em", marginRight: "2em" }}>We actively engage with the broader community to promote <strong>diversity and inclusion</strong> in tech through outreach.</p>
              <p style={{ marginLeft: "2em", marginRight: "2em" }}>Join us as we empower individuals to make a lasting impact on the tech industry and beyond!</p>
              <a href="#" className="btn" style={{ marginLeft: "2em", marginRight: "2em" }}>Become a WICC member</a>
            </div>
          </div>

        </section>

        <section>
          <h2 style={{ textAlign: "left", fontWeight: "bold", marginLeft: "5em" }}>What Our Alumni Says</h2>

        </section>

        < section className="call-to-action-container" >
          <div className="get-involved-grid">
            <a href="/#join" className="panel-link">
              <div className="get-involved-column">

                <Image
                  className="arrow-img"
                  style={{ maxWidth: "40px", float: "left" }}
                  src={arrowbutton}
                ></Image>


                <small className="button-description">Get Involved </small>
                <h4 className="button-name">Join Us</h4>
              </div>
            </a>

            <a
              href="https://drive.google.com/file/d/1s_okJqDYmfD5-3jEPCPKvbtP_TYruXXD/view?usp=sharing"
              className="panel-link"
            >
              <div className="get-involved-column">
                <Image
                  className="arrow-img"
                  style={{ maxWidth: "40px", float: "left" }}
                  src={arrowbutton}
                ></Image>

                <small className="button-description">
                  Collaborate with us{" "}
                </small>
                <h4 className="button-name">Sponsors</h4>
              </div>
            </a>

            <a href="/#programs" className="panel-link">
              <div className="get-involved-column">

                <Image
                  className="arrow-img"
                  style={{ maxWidth: "40px", float: "left" }}
                  src={arrowbutton}
                ></Image>

                <small className="button-description">Work with us </small>
                <h4 className="button-name">Programs</h4>
              </div>
            </a>
          </div>
        </ section>

        <CurrentSponsors />

      </div >
    </ >
  );
};
export default Home;