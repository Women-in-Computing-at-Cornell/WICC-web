import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import banner from "../../images/programs/campaigns_banner.jpg"
import {
  presidents,
  operations,
  corporate,
  academic,
  brand,
  outreach,
  community,
  advisors,
} from "../boardData";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
// import { Carousel } from 'react-responsive-carousel';
import Navbar from "react-bootstrap/Navbar";
import { Nav, NavDropdown } from "react-bootstrap";
import QuestionsCard from "./QuestionsCard.js";
import PhotoCarousel from "../PhotoCarousel";

// import Image from "react-bootstrap/Image";

import "./programPages.css";

export default class Campaigns extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  constructor(props) {
    super(props);
    this.state = {
      value: "sp22",
    };
  }

  render() {
    let photoDirector = brand.members.filter(
      (record) => record.position === "Photography Director"
    );

    function importAll(r) {
      let images = {};
      r.keys().forEach((item) => {
        images[item.replace("./", "")] = r(item);
      });
      return images;
    }

    const boardHeadshots = importAll(
      require.context("../../images/headshots/board", false, /\.jpg/)
    );

    function importAll(r) {
      let images = {};
      r.keys().forEach((item) => {
        images[item.replace("./", "")] = r(item);
      });
      return images;
    }
    const sp19Dit = importAll(
      require.context("../../images/photo-campaigns/sp19-dit", false, /\.png/)
    );
    let imgNamesSp19 = Object.keys(sp19Dit);

    const sp18Fit = importAll(
      require.context("../../images/photo-campaigns/sp18-fit", false, /\.png/)
    );
    let imgNamesSp18 = Object.keys(sp18Fit);

    const fa18Dit = importAll(
      require.context("../../images/photo-campaigns/f18-dit", false, /\.jpg/)
    );
    let imgNamesfa18 = Object.keys(fa18Dit);

    const fa17Dit = importAll(
      require.context("../../images/photo-campaigns/f17-dit", false, /\.jpg/)
    );
    let imgNamesfa17 = Object.keys(fa17Dit);

    const fa16Dit = importAll(
      require.context("../../images/photo-campaigns/f16-dit", false, /\.jpg/)
    );
    let imgNamesfa16 = Object.keys(fa16Dit);

    const fa15 = importAll(
      require.context(
        "../../images/photo-campaigns/f15-looklikeeng",
        false,
        /\.jpg/
      )
    );
    let imgNamesfa15 = Object.keys(fa15);

    const handleSelect = (e) => {
      this.setState({
        value: e,
      });
    };

    return (
      <>
        <div className="full-width-banner3">
          <img src={banner} alt="Banner" className="banner4" />
          <div className="banner-text3">
            <p className="banner-header">Campaigns</p>
            <p>
              WICC’s photo campaigns are a way for us to celebrate our community
              and allies, highlighting individuals and bringing awareness to
              relevant issues in the tech industry.
            </p>
          </div>
        </div >
        <div class="page">

          <Container>
            <Row style={{ paddingBottom: "1%" }}>
              <Col xs lg="6" style={{ paddingRight: "5%", paddingLeft: "0%" }}>
                <p style={{ paddingRight: "5%", paddingTop: "2%" }}>
                  WICC’s photo campaigns are a way for us to celebrate our
                  community and allies, highlighting individuals and bringing
                  awareness to relevant issues in the tech industry.
                </p>
              </Col>
              <Col></Col>
            </Row>
          </Container>
          <Navbar
            expand="lg"
            className="justify-content-center"
            onSelect={handleSelect}
            style={{ fontSize: "25px" }}
          >
            <Nav>
              <NavDropdown title="Photo Campaigns" id="basic-nav-dropdown">
                <NavDropdown.Item eventKey="sp19">
                  Spring 2019: #SheIsWhyICode
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="fa18">
                  Fall 2018: Diversity in Tech with URMC
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="sp18">
                  Spring 2018: #WearWhatYouWant
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="fa17">
                  Fall 2017: Diversity in Tech with URMC
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="fa16">
                  Fall 2016: Diversity in Tech
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="fa15">
                  Fall 2015: #ILookLikeAnEngineer
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar>

          {this.state.value === "sp19" && (
            <PhotoCarousel imgNames={imgNamesSp19} pics={sp19Dit} />
          )}

          {this.state.value === "fa18" && (
            <PhotoCarousel imgNames={imgNamesfa18} pics={fa18Dit} />
          )}

          {this.state.value === "sp18" && (
            <PhotoCarousel imgNames={imgNamesSp18} pics={sp18Fit} />
          )}

          {this.state.value === "fa17" && (
            <PhotoCarousel imgNames={imgNamesfa17} pics={fa17Dit} />
          )}

          {this.state.value === "fa16" && (
            <PhotoCarousel imgNames={imgNamesfa16} pics={fa16Dit} />
          )}

          {this.state.value === "fa15" && (
            <PhotoCarousel imgNames={imgNamesfa15} pics={fa15} />
          )}

        </div>
        <div className="questions-container2">
          <h5 className="questions-text1" style={{ paddingTop: "5%" }}>Questions?</h5>
          <p className="questions-text2">Reach out to the following WICC members for clarification regarding to Active Membership.</p>
          <Container>
              <Row>
                <Col>
                  <QuestionsCard
                    name = {photoDirector[0].name}
                    title = {photoDirector[0].title}
                    img = {boardHeadshots[photoDirector[0].netId + ".jpg"]}
                    netId = {photoDirector[0].netId}
                  />
                </Col>
              </Row>
          </Container>
        </div>
      </>
    );
  }
}
