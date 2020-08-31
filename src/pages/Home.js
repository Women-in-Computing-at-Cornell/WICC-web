import React from 'react';
import Button from 'react-bootstrap/Button';

const Home = () => {
  return (
    <div>
      <h1>Women in Computing at Cornell</h1>
      <h3>strives to make computing inclusive for all.</h3>
      <h4>Our Mission</h4>
      <p>We aim to foster a supportive community of women and allies* equipped with the resources needed to recognize and overcome challenges. By creating opportunities for technical and leadership growth, we work to ensure that people of all identities are able to discover and pursue their interests and talents in order to positively impact the future of tech.</p>
      <p>* all gender identities are welcomed and supported!</p>
      <h4>Believe in this mission?</h4>
      <Button variant="light" href="/join">Get Involved</Button>
    </div>
  );
}

export default Home;
