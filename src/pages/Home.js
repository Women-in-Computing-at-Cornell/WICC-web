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

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace('./', '')] = r(item);
    return null;
  });
  return images;
}

const Home = () => {
  const homepicsname = importAll(require.context('../images/photo-campaigns/hp-recentevents', false, /\.jpg/));
  const homepics = Object.keys(homepicsname);
  const multipleImages = homepics.slice(0, 3);

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
        <section style={{paddingTop: '96px'}} class="carousel-container">
          <PhotoCarousel imgNames={homepics} pics={homepicsname} />
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