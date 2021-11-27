import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Watermark from '../images/thick-wicc-logo.png'
import './nav.css'

class NavBar extends React.Component {
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand className="mr-auto" href="/">
          <img src={Watermark} width="30" height="35" alt="WICC logo" />
        </Navbar.Brand>
        <Nav>
          <Nav.Link href="/" class="navLink">
            Home
          </Nav.Link>
          <Nav.Link href="/#about" class="navLink">
            About
          </Nav.Link>
          <Nav.Link href="/#board">Who We Are</Nav.Link>
          <Nav.Link href="/#programs">Programs</Nav.Link>
          <Nav.Link href="/#resources">Resources</Nav.Link>
          <Nav.Link href="/#calendar">Calendar</Nav.Link>
          <Nav.Link href="/#join">Get Involved</Nav.Link>
        </Nav>
      </Navbar>
    )
  }
}

export default NavBar
