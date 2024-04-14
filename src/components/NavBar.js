import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Watermark from '../images/thick-wicc-logo.png';
import './nav.css';
import Button from 'react-bootstrap/Button';




class NavBar extends React.Component {
  render() {
    const linkStyle = {
      marginLeft: '10px', // Adjust the right margin to space out the links
    };
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand className="mr-auto" href="/">
          <img
            src={Watermark}
            width="35"
            height="45"
            alt="WICC logo"
          />
          <div className="brand-text">
            <p>Women in Computing <br /> at Cornell</p>
          </div>
        </Navbar.Brand>
        <Nav>
          <Nav.Link style={linkStyle} href="/">Home</Nav.Link>

          <Nav.Link style={linkStyle} href="/#programs">Programs</Nav.Link>
          <Nav.Link style={linkStyle} href="/#calendar">Calendar</Nav.Link>
          <Nav.Link style={linkStyle} href="/#sponsors">Sponsors</Nav.Link>


          <div className="join-us-button">
            <Button style={linkStyle} href="/#join">Join Us</Button>
          </div>
        </Nav>
      </Navbar>
    );
  }
}



export default NavBar;