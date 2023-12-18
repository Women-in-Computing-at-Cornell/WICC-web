import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import { boardData } from "../boardData";
import communityhero from "../../images/programs/communityhero.jpg";
import ReactGoogleSlides from "react-google-slides";
import QuestionsCard from "./QuestionsCard.js";
// import { Gallery } from "react-grid-gallery";

import Image from "react-bootstrap/Image";

import medal from "../../images/medal.jpg";

import "./programPages.css";
import "../discussions.css";

export default class Discussions extends Component {
  render() {
    let discDirectors = boardData.filter(
      (record) => record.title === "Social Co-Director"
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
        src: "https://images.unsplash.com/photo-1590424744257-fdb03ed78ae0?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
        title: "November 2023: Friendsgiving!",
        caption:
          "In our November GBody, we celebrated the season of giving\
        thanks and came together with our Bowers CiS community for\
        a Friendsgiving event!",
      },
      {
        src: "https://images.unsplash.com/photo-1590424744257-fdb03ed78ae0?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
        title: "Oct 2023: Pumpkin Spice & Chill~",
        caption:
          "At our second semesterly GBody, we took some time to\
        relax, destress, and enjoy the fall cheer by painting\
        pumpkins and drinking pumpkin spiced Swiss Miss.",
      },
      {
        src: "https://images.unsplash.com/photo-1590424744257-fdb03ed78ae0?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
        title: "Sept 2023: Self-Advocacy",
        caption:
          "In our first GBody of the fall semester, WICC members dove\
        into a session that equipped us with the skills and\
        confidence to champion our needs and rights. We also had\
        boba, plushies, pens, and keychains for our WICCies!",
      },
    ];

    const GBodyCard = ({ src, title, caption }) => {
      return (
        <div class="item">
          <a aria-labelledby="person"></a>
          <div class="card-img">
            <img
              src={src}
              alt=""
            ></img>
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
            <GBodyCard key={index} src={image.src} caption={image.caption} title={image.title} />
          ))}
        </div>
      );
    };

    return (
      <div>
        {/* Hero Image */}
        <div class="hero-image">
          <div class="title">
            <div class="typewriter">
              <b>
                <h1>Community Discussions :)</h1>
              </b>
            </div>
          </div>
        </div>

        {/* Blurb */}
        <div class="page">
          <p class="header">
            WICC is dedicated towards fostering an inclusive space for
            individuals of all identities to feel empowered to speak on issues
            in the CIS community, both on- and off-campus. We hold monthly
            discussions encompassing topics such as diversity in tech, the
            definition of success, and more. It is our goal to have a greater
            number of voices heard and to have a greater breadth of women and
            allies voicing their opinions at the table.
          </p>
          <br></br>
          <br></br>

          <div class="wicc-away">
            <h3>G-Body // G-Body Social</h3>
            <br></br>
            {/* Cards */}
            <GBodyCards/>
          </div>
          <br></br>
          <br></br>
          <h4>Last Community Discussions: </h4>
          <br />
          <h5>September 2023</h5>
          <h6>
            This was our WICC Away event where kicked off the Fall semester. We
            introduced WICC and our mission to attendees, hosted an allyship
            workshop, had a painting session, then wrapped up our night with a
            WICC Q&A Panel!
          </h6>
          <br />
          <ReactGoogleSlides
            width={640}
            height={480}
            slidesLink="https://docs.google.com/presentation/d/1qLtKtR55spx-zBkL9bWjo_P2rAm3oCnIGjADSgGq0Z0/edit?usp=sharing"
            showControls
          />
          <br />
          <h5>Febuary 2022</h5>
          <h6>
            This was our G-Body #1 where kicked off the Spring semester. We met
            WICC faculty advisors and reflected on our Fall semester to get
            ready for the new semester. We learned about setting and completing
            goals through intention framing and journaling.
          </h6>
          <br />
          <ReactGoogleSlides
            width={640}
            height={480}
            slidesLink="https://docs.google.com/presentation/d/1cHwUJEC7DM9ekD_KSajxkrtxeZPzD_jqQ4-uymKIZro/edit?usp=sharing"
            showControls
          />
          <br />
          <h5>March 2022</h5>
          <h6>
            This was our G-Body #2 where we had discussions about taking care of
            ourselves and having empathy for others. At the end, we created a
            WICC wall of notes and got to know each other.{" "}
          </h6>
          <br />
          <ReactGoogleSlides
            width={640}
            height={480}
            slidesLink="https://docs.google.com/presentation/d/1SNCHd_FxDbFiqw7yx5JubO15NsFeFsFfrTXV79L2Ap8/edit#slide=id.gfd5af8f16f_0_15"
            showControls
          />
          <br />
          <center>
            <h5 style={{ paddingTop: "5%" }}>Questions?</h5>
            <Container style={{ paddingRight: "10%" }}>
              <Row style={{ paddingBottom: "1%" }}>
                <Col>
                  <QuestionsCard
                    name={discDirectors[0].name}
                    title={discDirectors[0].title}
                    img={boardHeadshots[discDirectors[0].netId + ".jpg"]}
                    netId={discDirectors[0].netId}
                  />
                </Col>
                <Col>
                  <QuestionsCard
                    name={discDirectors[1].name}
                    title={discDirectors[1].title}
                    img={boardHeadshots[discDirectors[1].netId + ".jpg"]}
                    netId={discDirectors[1].netId}
                  />
                </Col>
              </Row>
            </Container>
          </center>
        </div>
      </div>
    );
  }
}
