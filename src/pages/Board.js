import React, { Component } from 'react';
import './pages.css';
import BoardCard from "../components/BoardCard.js";
import illustration from "../images/homepage-illustration.png";
import Navbar from 'react-bootstrap/Navbar';
import { Nav, NavItem, NavDropdown } from 'react-bootstrap';
import { boardData } from './boardData';


export default class DataTable extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "pres" };
  }


  render() {

    const firstNames = boardData.map(e => e.name)
    const presidents = []
    const operations = []
    const academic = []
    const brand = []
    const community = []
    const corporate = []
    const outreach = []
    const advisors = []

    boardData.forEach((d, i) => {
      if (d.team === "Presidents") {
        presidents.push(d)
      }
      if (d.team === "Operations") {
        operations.push(d)
      }
      if (d.team === "Academic") {
        academic.push(d)
      }
      if (d.team === "Brand") {
        brand.push(d)
      }
      if (d.team === "Community") {
        community.push(d)
      }
      if (d.team === "Corporate") {
        corporate.push(d)
      }
      if (d.team === "Outreach") {
        outreach.push(d)
      }
      if (d.team === "Advisors") {
        advisors.push(d)
      }


    })

    const handleSelect = (e) => {
      // console.log("e", e);
      this.setState({
        value: e
      });
    }

    function importAll(r) {
      let images = {};
      r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
      return images;
    }

    const boardHeadshots = importAll(require.context('../images/headshots/board', false, /\.jpg/));


    return (
      <div class="container">
        <h2>Who We Are</h2>

        <p>WICC was founded in March 2013 to bring together women in computing fields at Cornell, expand their opportunities and successes, provide a support network of women, and empower them to encourage younger women to consider computing fields. We hope to create a budding community for women and promote interaction on academic, social, and professional issues. By making women in computing fields visible, providing role models and dispelling stereotypes, WICC fosters a support network to empower women and encourage young girls to discover their love for computing.</p>
        <hr />
        <Navbar className="justify-content-center" expand="lg" onSelect={handleSelect} style={{ width: "45%", marginLeft: "35%" }}>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <NavDropdown title="Student Board" id="basic-nav-dropdown">
                <NavDropdown.Item href="#presidents" eventKey="pres">Presidents</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2" eventKey="ops">Operations</NavDropdown.Item>
                <NavDropdown.Item href="#academic" eventKey="academic">Academic</NavDropdown.Item>
                <NavDropdown.Item href="#brand" eventKey="brand">Brand</NavDropdown.Item>
                <NavDropdown.Item href="#community" eventKey="comm">Community</NavDropdown.Item>
                <NavDropdown.Item href="#corporate" eventKey="corporate">Corporate</NavDropdown.Item>
                <NavDropdown.Item href="#outreach" eventKey="outreach">Outreach</NavDropdown.Item>
                <NavDropdown.Item href="#advisors" eventKey="advisors">Advisors</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#link" >Faculty Board</Nav.Link>
              <Nav.Link href="#link1">Sponsors</Nav.Link>
              <Nav.Link href="#link2">Alumni</Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <div id="presidents">
          {this.state.value === "pres" &&
            presidents.map((member) => {
              return <BoardCard title={member.name} text={member.title}
                img={(boardHeadshots[member.netId + '.jpg'])} netId={member.netId} bio={member.bio} />
            })}
        </div>
        <div id="academic">
          {this.state.value === "academic" && academic.map((value) => {
            return <BoardCard title={value.name} text={value.title} img={(boardHeadshots[value.netId + '.jpg'])}
              netId={value.netId} bio={value.bio} />
          })}
        </div>
        <div id="brand">
          {this.state.value === "brand" && brand.map((value) => {
            return <BoardCard title={value.name} text={value.title} img={(boardHeadshots[value.netId + '.jpg'])}
              netId={value.netId} bio={value.bio} />
          })}
        </div>
        <div id="community">
          {this.state.value === "community" && community.map((value) => {
            return <BoardCard title={value.name} text={value.title} img={(boardHeadshots[value.netId + '.jpg'])}
              netId={value.netId} bio={value.bio} />
          })}
        </div>
        <div id="corporate">
          {this.state.value === "corporate" && corporate.map((value) => {
            return <BoardCard title={value.name} text={value.title} img={(boardHeadshots[value.netId + '.jpg'])}
              netId={value.netId} bio={value.bio} />
          })}
        </div>
        <div id="outreach">
          {this.state.value === "outreach" && outreach.map((value) => {
            return <BoardCard title={value.name} text={value.title} img={(boardHeadshots[value.netId + '.jpg'])}
              netId={value.netId} bio={value.bio} />
          })}
        </div>
        <div id="advisors">
          {this.state.value === "advisors" && advisors.map((value) => {
            return <BoardCard title={value.name} text={value.title} img={(boardHeadshots[value.netId + '.jpg'])}
              netId={value.netId} bio={value.bio} />
          })}
        </div>




      </div>
    );
  }
}
