import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Facebook from '../images/social/facebook.png';
import Instagram from '../images/social/instagram.png';
import LinkedIn from '../images/social/linkedin.png';
import Email from '../images/social/email.png';
import './footer.css';


class Footer extends React.Component {
  render() {
    return (
      // <Navbar className="fixed-bottom " bg="light" variant="light">
      <Navbar className="fixed-bottom color-nav " variant="light" style={{ paddingTop: "1%" }}>

        <Navbar.Brand className="mr-auto" href="/">Women in Computing at Cornell
        <br />
          <Navbar.Text style={{ fontSize: "50%", color: "black" }}>
            © 2021 Women in Computing at Cornell. All Rights Reserved.
        </Navbar.Text>

        </Navbar.Brand>

        <Nav>
          <Nav.Link href="mailto:wicc@cornell.edu">
            <img className="icon" src={Email} alt="Email" /></Nav.Link>
          <Nav.Link href="https://www.facebook.com/CornellWomenInComputing/">
            <img className="icon" src={Facebook} alt="Facebook" /></Nav.Link>
          <Nav.Link href="https://www.instagram.com/wiccornell/">
            <img className="icon" src={Instagram} alt="Instagram" /></Nav.Link>
          <Nav.Link href="https://www.linkedin.com/groups/8480565">
            <img className="icon" src={LinkedIn} alt="LinkedIn" /></Nav.Link>


        </Nav>
      </Navbar>

    );
  }
}

export default Footer;
