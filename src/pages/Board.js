import React, { Component } from "react";
import "./pages.css";
import BoardCard from "../components/BoardCard";
import Navbar from "react-bootstrap/Navbar";
import { Nav, NavDropdown } from "react-bootstrap";
import {
  presidents,
  operations,
  corporate,
  academic,
  brand,
  outreach,
  community,
  advisors,
} from "./boardData";
import Sponsors from "./Sponsors";
import Faculty from "./Faculty";
import Alumni from "./Alumni";
import Member from "../components/memberCard";

function importAll(r) {
  let images = {};
  r.keys().forEach((item) => (images[item.replace("./", "")] = r(item)));
  return images;
}

const boardHeadshots = importAll(
  require.context("../images/headshots/board", false, /\.jpg/)
);
const advisorHeadshots = importAll(
  require.context("../images/headshots/board/advisors", false, /\.jpg/)
);

export default class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "pres",
    };
  }

  handleSelect = (e) => {
    this.setState({
      value: e,
    });
  };

  createCols = (members) => {
    const gridColsTeam = [[], []];
    members.forEach((member, i) => {
      const comp = (
        <BoardCard
          key={member.netId}
          title={member.name}
          text={member.title}
          img={boardHeadshots[member.netId + ".jpg"]}
          netId={member.netId}
          bio={member.bio}
        />
      );
      gridColsTeam[i % 2].push(comp);
    });
    return gridColsTeam;
  };

  renderMembersSection = (members) => {
    return (
      <div className="container">
        {members.map((member) => (
          <div key={member.netId} className="col">
            <Member
              name={member.name}
              title={member.position}
              netid={member.netId}
              bio={member.bio}
              img={boardHeadshots[member.netId + ".jpg"]} // Pass the dynamically imported image here
            />
          </div>
        ))}
      </div>
    );
  };

  render() {
    const { value } = this.state;

    return (
      <div className="containerPage">
        <h2 style={{ fontWeight: "bold" }}>Who We Are</h2>
        <p>
          WICC was founded in March 2013 to bring together women and gender
          minorities in computing fields at Cornell, expand their opportunities
          and successes, provide a support network, and empower them to
          encourage younger underrepresented students to consider computing
          fields. We hope to create a budding community and promote interaction
          on academic, social, and professional issues. By making women and
          gender minorities in computing fields visible, providing role models
          and dispelling stereotypes, WICC fosters a support network to empower
          everyone and encourage young students to discover their love for
          computing.
        </p>

        <Navbar
          className="justify-content-center"
          expand="lg"
          onSelect={this.handleSelect}
          style={{ width: "45%", marginLeft: "35%" }}
        >
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <NavDropdown title="Student Board" id="basic-nav-dropdown">
                <NavDropdown.Item href="#board#presidents" eventKey="pres">
                  Presidents
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="#board#operations"
                  eventKey="operations"
                >
                  Operations
                </NavDropdown.Item>
                <NavDropdown.Item href="#board#corporate" eventKey="corporate">
                  Corporate
                </NavDropdown.Item>
                <NavDropdown.Item href="#board#academic" eventKey="academic">
                  Academic
                </NavDropdown.Item>
                <NavDropdown.Item href="#board#brand" eventKey="brand">
                  Brand
                </NavDropdown.Item>
                <NavDropdown.Item href="#board#community" eventKey="community">
                  Community
                </NavDropdown.Item>
                <NavDropdown.Item href="#board#outreach" eventKey="outreach">
                  Outreach
                </NavDropdown.Item>
                <NavDropdown.Item href="#board#advisors" eventKey="advisors">
                  Advisors
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#board#faculty" eventKey="faculty">
                Faculty Board
              </Nav.Link>
              <Nav.Link href="#board#sponsors" eventKey="sponsors">
                Sponsors
              </Nav.Link>
              <Nav.Link href="#board#alumni" eventKey="alumni">
                Alumni
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        {value === "pres" && this.renderMembersSection(presidents.members)}
        {value === "academic" && (
          <div className="row">
            {this.createCols(academic.members)[0]}
            {this.createCols(academic.members)[1]}
          </div>
        )}
        {value === "brand" && this.renderMembersSection(brand.members)}
        {value === "community" && this.renderMembersSection(community.members)}
        {value === "corporate" && this.renderMembersSection(corporate.members)}
        {value === "operations" &&
          this.renderMembersSection(operations.members)}
        {value === "outreach" && this.renderMembersSection(outreach.members)}
        {value === "advisors" && this.renderMembersSection(advisors.members)}

        <div id="sponsors" className="sponsorStyle">
          {value === "sponsors" && <Sponsors />}
        </div>

        <div id="faculty">{value === "faculty" && <Faculty />}</div>

        <div id="alumni">{value === "alumni" && <Alumni />}</div>
      </div>
    );
  }
}
