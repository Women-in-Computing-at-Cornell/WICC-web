import React, { Component } from 'react';
import './pages.css';
import BoardCard from "../components/BoardCard.js";
import illustration from "../images/homepage-illustration.png";
import Navbar from 'react-bootstrap/Navbar';
import { Nav, NavItem, NavDropdown } from 'react-bootstrap';
import { sponsorData } from './sponsorData';
import Image from 'react-bootstrap/Image';



export default class ResourcesSoon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "pres",
      displayData: []

    };
  }


  render() {

    return (
      <div>
        <h5>More resources coming soon!</h5>
      </div >
    );
  }
}
