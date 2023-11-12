import React from 'react';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image'

import './Home.css';
import illustration from "../images/homepage-illustration.png";
import Sponsors from '../pages/Sponsors';

import missionImg from "../images/colorgrouppic.png"
import boardGroupPic from "../images/peoplegroupic.jpg"


const Home = () => {
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
        <section class="mission-container">
            <div>
            <h2 style={{ textAlign: 'left', fontWeight: 'bold' }}>  Our Mission</h2>
            <p style={{textAlign: 'left', maxWidth: '400px'}}>We aim to foster a <strong>supportive community</strong> of women and
              allies* equipped with the resources needed to recognize
              and overcome challenges. By creating <strong>opportunities for
                technical and leadership growth</strong>, we work to ensure that
              people of all identities are able to discover and pursue
              their interests and talents in order to <strong>positively impact
                the future of tech.</strong></p>
            <p style={{ textAlign: 'left'}}>* All gender identities are welcomed and supported!</p>
          </div>
          <div>
            <Image style={{ maxWidth: '400px', paddingLeft: '50px' }} src={missionImg} id="mission-image"></Image>
          </div>
          <br /><br />
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
