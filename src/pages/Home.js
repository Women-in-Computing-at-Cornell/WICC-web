import React from 'react';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image'

import './Home.css';
import illustration from "../images/homepage-illustration.png";

const Home = () => {
  return (
    <div class="home-container">
      <section class="hero-container">
        <Image src={illustration} id="home-illustration" />
        <div style={{ margin: "5% 0" }}>
          <h1 style={{ marginBottom: "2.5%" }} class='headerName'>Women in Computing at Cornell</h1>
          <h2>strives to make computing inclusive for all.</h2>
        </div>
      </section>
      <section class="mission-container">
        <h2>Our Mission</h2>
        <div>
          <p>We aim to foster a <strong>supportive community</strong> of women and
        allies* equipped with the resources needed to recognize
        and overcome challenges. By creating <strong>opportunities for
        technical and leadership growth</strong>, we work to ensure that
        people of all identities are able to discover and pursue
        their interests and talents in order to <strong>positively impact
        the future of tech.</strong></p>
          <p>* all gender identities are welcomed and supported!</p>
        </div>
      </section>
      <section class="call-to-action-container">
        <h4>Believe in this mission?</h4>
        <Button href="/join">Get Involved</Button>
      </section>
    </div>
  );
}

export default Home;
