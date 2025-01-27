import React from "react";
import Image from "react-bootstrap/Image";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Facebook from "../images/social/facebook.png";
import Instagram from "../images/social/instagram.png";
import LinkedIn from "../images/social/linkedin.png";
import Email from "../images/social/email.png";
import Watermark from "../images/Thicc Wicc Logo 1.png";
import "./footer.css";
import wiccLogo from "../images/icons/wicc_thick_logo.png";

class Footer extends React.Component {
  render() {
    return (
      // <Navbar className="fixed-bottom " bg="light" variant="light">

      <Navbar
        className="fixed-bottom color-nav footer"
        variant="light"
        style={{
          paddingTop: "2%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#77AEA2"
        }}
      >
        <div className="footerNav">
    {/* Logo at the top */}
    <div className="footer-logo">
      <Image
        style={{
          width: "240px",
          height: "74.465px",
          flexShrink: "0",
        }}
        src={wiccLogo}
        className="footerwicc"
      />
    </div>

    {/* Pages in the middle */}
    <div className="pages">
      <Navbar.Brand href="/">Home</Navbar.Brand>
      <Navbar.Brand href="#/board">Who We Are</Navbar.Brand>
      <Navbar.Brand href="#/programs">Programs</Navbar.Brand>
      <Navbar.Brand href="#/calendar">Calendar</Navbar.Brand>
      <Navbar.Brand href="#/sponsors">Sponsors</Navbar.Brand>
    </div>

    {/* Social Media at the bottom */}
    <div className="footer-social">
      <Nav>
        <Nav.Link href="mailto:wicc@cornell.edu">
          <img className="icon" src={Email} alt="Email" />
        </Nav.Link>
        <Nav.Link href="https://www.facebook.com/CornellWomenInComputing/">
          <img className="icon" src={Facebook} alt="Facebook" />
        </Nav.Link>
        <Nav.Link href="https://www.instagram.com/wiccornell/">
          <img className="icon" src={Instagram} alt="Instagram" />
        </Nav.Link>
        <Nav.Link href="https://www.linkedin.com/groups/8480565">
          <img className="icon" src={LinkedIn} alt="LinkedIn" />
        </Nav.Link>
      </Nav>
    </div>
  </div>
        <Navbar.Text
          className="copyright"
          style={{ fontSize: "70%", color: "black" }}
        >
          © 2025 Women in Computing at Cornell. All Rights Reserved. Registered
          Student Organization at Cornell University
        </Navbar.Text>
      </Navbar>
    );
  }
}

export default Footer;
