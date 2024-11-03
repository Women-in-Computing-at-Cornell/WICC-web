import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Watermark from "../images/thick-wicc-logo.png";
import { Button } from "react-bootstrap";
import { FaTimes, FaBars } from "react-icons/fa"; // Import icons for toggle
import "./nav.css";

const NavBar = () => {
  const [expanded, setExpanded] = useState(false);

  const linkStyle = {
    marginLeft: "10px",
  };

  return (
    <Navbar bg="light" expand="lg" expanded={expanded}>
      <Navbar.Brand className="mr-auto" href="/">
        <img src={Watermark} width="35" height="45" alt="WICC logo" />
        <div className="brand-text">
          <p>
            Women in Computing <br /> at Cornell
          </p>
        </div>
      </Navbar.Brand>

      {/* Navbar Toggle for Collapsible Menu */}
      <Navbar.Toggle
        aria-controls="responsive-navbar-nav"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? <FaTimes /> : <FaBars />} 
      </Navbar.Toggle>

      {/* Collapsible Navbar */}
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link style={linkStyle} href="/">
            Home
          </Nav.Link>
          <Nav.Link style={linkStyle} href="/#board">
            Who We Are
          </Nav.Link>
          <Nav.Link style={linkStyle} href="/#programs">
            Programs
          </Nav.Link>
          <Nav.Link style={linkStyle} href="/#sponsors">
            Sponsors
          </Nav.Link>

          <div className="join-us-button">
            <Button size="medium" style={linkStyle} href="/#join"> 
              Join Us
            </Button>
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
