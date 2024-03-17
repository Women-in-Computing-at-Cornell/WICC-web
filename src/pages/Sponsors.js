import React, { Component } from "react";
import "./pages.css";
import { sponsorData } from "./sponsorData";
import Image from "react-bootstrap/Image";
// import { WICCSponsors } from "./WICCsponsors.pdf";

export default class Sponsors extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "pres",
      displayData: [],
    };
  }

  render() {
    const gold = [];
    const silver = [];
    const platinum = [];
    const graceHopper = [];

    // const displayTemp = [];

    sponsorData.forEach((d, i) => {
      if (d.level === "Platinum") {
        platinum.push(d);
      }
      if (d.level === "Gold") {
        gold.push(d);
      }
      if (d.level === "Grace Hopper") {
        graceHopper.push(d);
      }
      if (d.level === "Silver") {
        silver.push(d);
      }
    });

    console.log("check");

    function importAll(r) {
    }
  }
}
