import React, { useState, useEffect } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Watermark from "../images/thick-wicc-logo.png";
import { Button } from "react-bootstrap";
import { FaTimes, FaBars } from "react-icons/fa"; // Import icons for toggle
import "./nav.css";

const NavBar = () => {
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 960);
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleResize = () => {
    setIsMobileView(window.innerWidth < 960);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleNavbar = () => setIsCollapsed(!isCollapsed);

  const linkStyle = {
    marginLeft: "10px", 
    color: "white",
  };

  if (isMobileView) {
    return (
      <Navbar bg="light" expand="lg" className="mobile-navbar">
        <div className="mr-auto" style={{ display: 'flex', alignItems: 'center' }}>
          <img src={Watermark} width="35" height="45" alt="WICC logo" />
          <div className="brand-text" style={{ color: 'black', marginTop: '12px', marginLeft: '12px' }}>
            <p>
              Women in Computing <br /> at Cornell
            </p>
          </div>
        </div>
        <Button 
          className="toggle-button" 
          onClick={toggleNavbar}
          aria-label={isCollapsed ? "Open navigation menu" : "Close navigation menu"}
          style={{ backgroundColor: 'transparent', border: 'none' }}
        >
          {isCollapsed ? <FaBars size={24} /> : <FaTimes size={24} />}
        </Button>
        {!isCollapsed && (
          <div className="mobile-links">
            <Nav>
              <Nav.Link style={linkStyle} href="/">Home</Nav.Link>
              <Nav.Link style={linkStyle} href="/#board">Who We Are</Nav.Link>
              <Nav.Link style={linkStyle} href="/#programs">Programs</Nav.Link>
              <Nav.Link style={linkStyle} href="/#sponsors">Sponsors</Nav.Link>
              <div className="join-us-button">
                <Button href="/#join">Join Us</Button>
              </div>
            </Nav>
          </div>
        )}
      </Navbar>
    );
  } else {
    return (
      <Navbar bg="light" expand="lg" className="desktop-navbar">
        <Navbar.Brand className="mr-auto" href="/">
          <img src={Watermark} width="35" height="45" alt="WICC logo" className="navbar-logo"/>
          <div className="brand-text text-white">
            <p>
              Women in Computing <br /> at Cornell
            </p>
          </div>
        </Navbar.Brand>
        <Nav className="links">
          <Nav.Link style={linkStyle} href="/">Home</Nav.Link>
          <Nav.Link style={linkStyle} href="/#board">Who We Are</Nav.Link>
          <Nav.Link style={linkStyle} href="/#programs">Programs</Nav.Link>
          <Nav.Link style={linkStyle} href="/#sponsors">Sponsors</Nav.Link>
          <div className="join-us-button">
            <Button href="/#join">Join Us</Button>
          </div>
        </Nav>
      </Navbar>
    );
  }
};

export default NavBar;