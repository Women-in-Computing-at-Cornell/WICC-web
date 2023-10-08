import React, { Component } from 'react';
import './pages.css';
import BoardCard from "../components/BoardCard.js";
import illustration from "../images/homepage-illustration.png";
import Navbar from 'react-bootstrap/Navbar';
import { Nav, NavItem, NavDropdown } from 'react-bootstrap';
import { sponsorData } from './sponsorData';
import Image from 'react-bootstrap/Image';
import { WICCSponsors } from './WICCsponsors.pdf';


export default class Sponsors extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "pres",
      displayData: []

    };
  }


  render() {

    const gold = []
    const silver = []
    const platinum = []
    const graceHopper = []

    const displayTemp = []

    sponsorData.forEach((d, i) => {
      if (d.level === "Platinum") {
        platinum.push(d)
      }
      if (d.level === "Gold") {
        gold.push(d)
      }
      if (d.level === "Grace Hopper") {
        graceHopper.push(d)
      }
      if (d.level === "Silver") {
        silver.push(d)
      }
    })

    console.log('check')


    function importAll(r) {
      let images = {};
      r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
      return images;
    }

    const sponsorHeadshots = importAll(require.context('../images/sponsors', false, /\.jpg/));

    return (
      <div class='containerPage'>
        <div style={{ marginBottom: '10%' }}>
          {/* <h4 style={{ marginBottom: '3%', fontWeight: 'bold' }}>Gold</h4>
          {gold.map((value) => {
            return <a href={value.link}><Image src={(sponsorHeadshots[value.sponsor + '.jpg'])} width='25%' height='10%' style={{ marginTop: '-6%', paddingRight: '20px' }} /></a>
          })}
        </div>
        <div style={{ marginBottom: '10%' }}>
          <h4 style={{ marginBottom: '3%', fontWeight: 'bold' }}>Silver</h4>
          {silver.map((value) => {
            return <a href={value.link}><Image src={(sponsorHeadshots[value.sponsor + '.jpg'])} width='19%' height='5%' style={{ marginTop: '-2%', paddingRight: '20px' }} /></a>
          })
          }
        </div>
        <h4 style={{ marginBottom: '3%', fontWeight: 'bold' }}>Platinum</h4>
        {
          platinum.map((value) => {
            return <a href={value.link}><Image src={(sponsorHeadshots[value.sponsor + '.jpg'])} width='15%' height='2%' style={{ marginBottom: '2%', paddingRight: '20px' }} /></a>
          })
        } */}
          <h4 style={{ marginBottom: '8%', fontWeight: 'bold' }}>Platinum</h4>
          {platinum.map((value) => {
            return <a href={value.link}><Image src={(sponsorHeadshots[value.sponsor + '.jpg'])} width='25%' height='10%' style={{ marginTop: '-6%', paddingRight: '20px' }} /></a>
          })}
        </div>
        <div style={{ marginBottom: '10%' }}>
          <h4 style={{ marginBottom: '3%', fontWeight: 'bold' }}>Gold</h4>
          {gold.map((value) => {
            return <a href={value.link}><Image src={(sponsorHeadshots[value.sponsor + '.jpg'])} width='19%' height='5%' style={{ marginTop: '-2%', paddingRight: '20px' }} /></a>
          })
          }
        </div>
        <div style={{ marginBottom: '8%' }}>
          <h4 style={{ marginBottom: '3%', fontWeight: 'bold' }}>Silver</h4>
          {
            silver.map((value) => {
              return <a href={value.link}><Image src={(sponsorHeadshots[value.sponsor + '.jpg'])} width='15%' height='2%' style={{ marginBottom: '2%', paddingRight: '20px' }} /></a>
            })
          }
        </div>

        <h4 style={{ marginBottom: '3%', fontWeight: 'bold' }}>Grace Hopper</h4>
        {
          graceHopper.map((value) => {
            return <a href={value.link}><Image src={(sponsorHeadshots[value.sponsor + '.jpg'])} width='15%' height='2%' style={{ marginBottom: '2%', paddingRight: '20px' }} /></a>
          })
        }



      </div>
    );
  }
}
