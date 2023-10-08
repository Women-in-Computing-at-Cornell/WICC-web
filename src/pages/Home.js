import React from "react";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";

import "./Home.css";
import illustration from "../images/homepage-illustration.png";
import Sponsors from "../pages/Sponsors";

const Home = () => {
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
          <h2 style={{ fontWeight: "bold" }}>Our Mission</h2>
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
          <br />
          <br />
          <h2 style={{ fontWeight: "bold" }}>Our Sponsors</h2>
        </section>
        <section class="sponsor-container">
          <Sponsors />
        </section>
        <section class="call-to-action-container">
          <h3>Believe in this mission?</h3>
          <Button
            style={{
              fontWeight: "bold",
              padding: "24px",
              width: "100%",
              fontSize: "24px",
              marginTop: "15px",
            }}
            href="/#join"
          >
            GET INVOLVED
          </Button>
        </section>
      </div>
    </div>
  );
};

export default Home;
