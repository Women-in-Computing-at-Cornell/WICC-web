import React, { Component } from "react";
import "./Board.css"; // Make sure this path is correct
import BoardCard from "../components/BoardCard";
import Navbar from "react-bootstrap/Navbar";
import { Nav, NavDropdown } from "react-bootstrap";
import {
  presidents,
  operations,
  corporate,
  technical,
  photo,
  academic,
  brand,
  outreach,
  community,
  advisors,
  faculty,
} from "./boardData";
import Subteam from "../components/Subteam";
import hero from "../images/about-pictures/abouthero.png";
import FloatingMenu from "../components/BoardNav";

const teams = [
  faculty,
  presidents,
  operations,
  corporate,
  academic,
  brand,
  community,
  outreach,
  technical,
  photo,
  advisors,
];

export default class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "pres",
      scrollProgress: 0,
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    const totalScroll = document.documentElement.scrollTop;
    const windowHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrollProgress = `${(totalScroll / windowHeight) * 100}`;

    this.setState({
      scrollProgress,
    });
  };

  handleSelect = (e) => {
    this.setState({
      value: e,
    });
  };

  renderProgressBar() {
    return (
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: `${this.state.scrollProgress}%`,
          height: "5px",
          backgroundColor: "#73CFBB",
          zIndex: 1000, // Ensure it's above other content
        }}
      />
    );
  }

  render() {
    const { value } = this.state;

    return (
      <div>
        <div className="hero-container">
          <img
            className="heroimg "
            src={hero}
            style={{height: "100%",objectFit:"cover" }}
            alt="Description"
          />
          <div className="hero-content">
            <h2
              className="responsive-title"
              style={{ fontWeight: "bold", marginBottom: "15px" }}
            >
              Who We Are
            </h2>
            <p className="responsive-text wwa" style={{ marginBottom: "20px" }}>
              WICC was founded in March 2013 to bring together women and gender
              minorities in computing fields at Cornell, expand their
              opportunities and successes, provide a support network, and
              empower them to encourage younger underrepresented students to
              consider computing fields. We hope to create a budding community
              and promote interaction on academic, social, and professional
              issues. By making women and gender minorities in computing fields
              visible, providing role models and dispelling stereotypes, WICC
              fosters a support network to empower everyone and encourage young
              students to discover their love for computing.
            </p>
            <p className="responsive-text wwa2" style={{ marginBottom: "20px", display:"none" }}>
              WICC was founded in March 2013 to bring together women and gender
              minorities in computing fields at Cornell, expand their
              opportunities and successes, provide a support network, and
              empower them to encourage younger underrepresented students to
              consider computing fields. 
            </p>
          </div>
          <img
            src={require("../images/downarrow.png")}
            alt="Scroll Down"
            className="downward-arrow"
          />
        </div>
        <div className="containerPage">
          <div style={{ display: "flex" }}>
            <div style={{ flexGrow: 1 }}>
              {teams.map((team, key) => (
                <div key={key} style={{ marginBottom: "20px" }}>
                  <div>
                    <span className="subteam-name">{team.name}</span>
                    <Subteam team={team} />
                  </div>
                </div>
              ))}
            </div>
            <FloatingMenu />
            <div className="right-sidebar">
              {this.renderProgressBar()}
              <Nav
                onSelect={this.handleSelect}
                className="flex-column"
                style={{}}
              >
                <p
                  style={{
                    fontWeight: "bold",
                    marginTop: "20px",
                    marginBottom: "5px",
                    width: "150px",
                  }}
                >
                  {" "}
                  ON THIS PAGE:
                </p>
                <Nav.Link href="#board#faculty" eventKey="faculty">
                  Faculty
                </Nav.Link>
                <Nav.Link href="#board#presidents" eventKey="pres">
                  Presidents
                </Nav.Link>
                <Nav.Link href="#board#operations" eventKey="operations">
                  Operations
                </Nav.Link>
                <Nav.Link href="#board#corporate" eventKey="corporate">
                  Corporate
                </Nav.Link>
                <Nav.Link href="#board#academic" eventKey="academic">
                  Academic
                </Nav.Link>
                <Nav.Link href="#board#brand" eventKey="brand">
                  Brand
                </Nav.Link>
                <Nav.Link href="#board#community" eventKey="community">
                  Community
                </Nav.Link>
                <Nav.Link href="#board#outreach" eventKey="outreach">
                  Outreach
                </Nav.Link>
                <Nav.Link href="#board#technical" eventKey="technical">
                  Technical
                </Nav.Link>
                <Nav.Link href="#board#photo-&-film" eventKey="photo">
                  Photo & Film
                </Nav.Link>
                <Nav.Link href="#board#advisors" eventKey="advisors">
                  Advisors
                </Nav.Link>
              </Nav>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
