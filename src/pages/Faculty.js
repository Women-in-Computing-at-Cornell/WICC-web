import React, { Component } from "react";
import "./pages.css";
// import BoardCard from "../components/BoardCard.js";
// import illustration from "../images/homepage-illustration.png";
// import Navbar from 'react-bootstrap/Navbar';
// import { Nav, NavItem, NavDropdown } from 'react-bootstrap';
import { facultyData } from "./facultyData";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FacultyCard from "../components/FacultyCard.js";

// import Image from 'react-bootstrap/Image';

export default class Faculty extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "pres",
      displayData: [],
    };
  }

  render() {
    function importAll(r) {
      let images = {};
      r.keys().forEach((item) => {
        images[item.replace("./", "")] = r(item);
      });
      return images;
    }

    const facultyHeadshots = importAll(
      require.context("../images/faculty", false, /\.jpg/)
    );
    console.log(facultyHeadshots);
    console.log(facultyData[0]);

    function newlineText(text) {
      const newText = text.split("\n").map((str) => <p>{str}</p>);

      return newText;
    }

    return (
      <div class="faculty">
        {facultyData.map((value) => {
          console.log(value.bio.split("\n"));
          return (
            <Container class="facultyAdjust">
              <Row style={{ paddingBottom: "3%" }}>
                <Col>
                  {/* <Image src={(facultyHeadshots[value.name + '.jpg'])} width='25%' height='auto' roundedCircle />
                <h4>{value.name}</h4>
                <p>{newlineText(value.title)}</p> */}
                  <FacultyCard
                    name={value.name}
                    text={value.title}
                    img={facultyHeadshots[value.name + ".jpg"]}
                  />
                </Col>
                <Col>
                  <h4
                    style={{
                      color: "#9CE2D3",
                      textTransform: "uppercase",
                      fontWeight: "bold",
                    }}
                  >
                    {value.name}
                  </h4>
                  <p>{newlineText(value.bio)}</p>
                </Col>
              </Row>
            </Container>
          );

          // <div>
          //   <Image src={(facultyHeadshots[value.name + '.jpg'])} width='17%' height='auto' roundedCircle />
          //   <h3>{value.name}</h3>
          //   <h4>{value.title}</h4>
          // </div>
        })}
      </div>
    );
  }
}
