import React, { Component } from 'react';
import './pages.css';
import BoardCard from "../components/BoardCard.js";
import illustration from "../images/homepage-illustration.png";
import Navbar from 'react-bootstrap/Navbar';
import { Nav, NavItem, NavDropdown } from 'react-bootstrap';
import { facultyData } from './facultyData';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import Image from 'react-bootstrap/Image';



export default class Faculty extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "pres",
      displayData: []

    };
  }


  render() {



    function importAll(r) {
      let images = {};
      r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
      return images;
    }

    const facultyHeadshots = importAll(require.context('../images/faculty', false, /\.jpg/));
    console.log(facultyHeadshots)
    console.log(facultyData[0])

    return (
      <div>
        {facultyData.map((value) => {
          return <Container>
            <Row style={{ paddingBottom: "1%" }}>
              <Col style={{ paddingRight: "10%" }}>

                <Image src={(facultyHeadshots[value.name + '.jpg'])} width='25%' height='auto' roundedCircle />
                <h4>{value.name}</h4>
                <h6>{value.title}</h6>
              </Col>
              <Col >
                <p>{value.bio}</p>
              </Col>
            </Row>
          </Container>


          // <div>
          //   <Image src={(facultyHeadshots[value.name + '.jpg'])} width='17%' height='auto' roundedCircle />
          //   <h3>{value.name}</h3>
          //   <h4>{value.title}</h4>
          // </div>

        })
        }
      </div >
    );
  }
}
