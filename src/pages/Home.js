import React from 'react';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image'
import './Home.css';
import illustration from "../images/homepage-illustration.png";
import Sponsors from '../pages/Sponsors';
import missionImg from "../images/colorgrouppic.png"
import boardGroupPic from "../images/peoplegroupic.jpg"
import PhotoCarousel from '../pages/PhotoCarousel';
import mentorshipPic from '../images/programs-pictures/mentorship2.jpg'
import outreachPic from '../images/outreach/outreach2.jpg'
import { Carousel } from 'react-responsive-carousel';


import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace('./', '')] = r(item);
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
            <Image src={imageSrc} alt={`Image ${i + index + 1}`} style={{ width: '100%', height: '200px', objectFit: 'fill' }} />
          </div>
        );
      });
      imageGroups.push(imagesInGroup);
    }
    return imageGroups.map((group, index) => <div key={index} style={{ display: 'flex' }}>{group}</div>);
  };

  return (
    <div className="carousel-wrapper">
      <Carousel showThumbs={false} showStatus={false} emulateTouch infiniteLoop>
        {renderImages()}
      </Carousel>
    </div>
  );;
};

const Home = () => {
  const homepicsname = importAll(require.context('../images/photo-campaigns/hp-recentevents', false, /\.(jpg|png)$/i));
  const homepics = Object.keys(homepicsname);
  
  return (
    <div >
      <Image style = {{maxWidth: '100%', height: 'auto'}} src={boardGroupPic} id="hero-image" />
      <div class="home-container" >
        <section class="hero-container" style={{
          backgroundImage: { illustration }
        }}>
          <div>
            <h1
              style={{ marginBottom: "2%", fontWeight: "bold" }}
              class="headerName"
            >
              Women in Computing at Cornell
            </h1>
            <h2>strives to make computing inclusive for all</h2>
          </div>
        </section>
        <section style = {{justifyContent: 'space-around'}}class="mission-container">
        <div>
            <Image style={{ maxWidth: '450px' }} src={missionImg} id="mission-image"></Image>
          </div>
            <div>
            <h2 style={{ textAlign: 'left', fontWeight: 'bold' }}>  Our Mission</h2>
            <p style={{textAlign: 'left', maxWidth: '570px'}}>We aim to foster a <strong>supportive community</strong> of women and
              allies* equipped with the resources needed to recognize
              and overcome challenges. By creating <strong>opportunities for
                technical and leadership growth</strong>, we work to ensure that
              people of all identities are able to discover and pursue
              their interests and talents in order to <strong>positively impact
                the future of tech.</strong></p>
            <p style={{ textAlign: 'left'}}>* All gender identities are welcomed and supported!</p>
            <h2 style={{ textAlign: 'left', fontWeight: 'bold' }}>  Semester Outlook</h2>
            <p style={{textAlign: 'left', maxWidth: '570px'}}>WICC is a place where women 
            and gender minorities feel supported throughout their academic journey and 
            careers in technology. We are a coalition of leaders who seek to make an 
            impact on Cornell, Ithaca and our greater community. Achieving this 
            impact does not just involve WICC e-board, but also you (g-body members),
             CIS staff, Cornell, and the greater Ithaca community!</p>
          </div>
        </section>
        {/* Title "What we do" */}
      <section className="what-we-do-container">
        <div className="title-with-line">
          {/* Title */}
          <h2 className="title-text">What we do</h2>
          {/* Right decorative line */}
          <div className="horizontal-line"></div>
        </div>
      </section>
        <section style={{paddingTop: '5px'}} class="carousel-container">
          <PCarousel imgNames={homepics} pics={homepicsname} />
      </section>
      <section style = {{paddingTop: '50px'}} className="alumni-testimonies-container">
        <div className="alumni-testimonies-content">
          <h2>Alumni Testimonies</h2>
          <div className="testimony-grid">
            <div className="testimony-column">
              {/* Testimony 1 */}
              <h2 style={{ fontWeight: 'bold', color: 'white', fontSize: 25 }}>Nandita Mohan '20</h2>
              <p>
"If there's one person who first made me feel involved, integrated and comfortable in the CIS community at Cornell, it would be Harini. Being her friend and mentee from when I was a freshman showed me that incredibly successful and humble upperclassmen also had their own confusions and struggles along the way, and that it was in-fact completely normal. Not to mention she was always willing to grab a meal, have fun conversations, and be there for me when I needed it.".</p>
            </div>
            <div className="testimony-column">
              {/* Testimony 2 */}
              <h2 style={{ fontWeight: 'bold', color: 'white', fontSize: 25 }}>Maya Frai '20</h2>
              <p>
“WICC has given me an invaluable amount of resources, one of them being the alumni network. When I first heard about WICC my freshman year, I joined Lunch Bunch and was able to meet two incredible women who I am happy to call my mentors. They took the time to talk about all of the diverse opportunities in tech and how WICC has allowed them to connect with other women in the field. WICC alumni are not only incredibly inspirational, but are also dedicated and down-to-earth. Looking forward to being a part of this admirable network after graduation.”
</p>
            </div>
            <div className="testimony-column">
              {/* Testimony 3 */}
              <h2 style={{ fontWeight: 'bold', color: 'white', fontSize: 25 }}>Karen Zhang '21</h2>
              <p>
“I learned about the different fields of CS and how they're used, which I previously had many misconceptions about. Lunch Bunch truly let me cement my decision to major in CS, as through it I got an idea of the potential of the field.”</p>
            </div>
            {/* Add more testimonies as needed */}
          </div>
        </div>
      </section>
        <section style = {{marginTop: '5%'}} class='sponsor-container'>
        <h2 style={{ fontWeight: 'bold' }}>Our Sponsors</h2>
          <Sponsors />
        </section>
        <section class="call-to-action-container">
          <h3>Believe in this mission?</h3>
          <Button href="/#join">Get Involved</Button>
        </section>
      </div>
    </div>
  );
}
export default Home;