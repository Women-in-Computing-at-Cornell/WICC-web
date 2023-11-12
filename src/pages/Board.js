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

  // createCols = (members) => {
  //   const gridColsTeam = [[], []];
  //   members.forEach((member, i) => {
  //     const comp = (
  //       <BoardCard
  //         key={member.netId}
  //         title={member.name}
  //         text={member.title}
  //         img={boardHeadshots[member.netId + ".jpg"]}
  //         netId={member.netId}
  //         bio={member.bio}
  //       />
  //     );
  //     gridColsTeam[i % 2].push(comp);
  //   });
  //   return gridColsTeam;
  // };

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

        <div style={{ float: "right", height: "100%", display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
        <Nav onSelect={this.handleSelect} className="flex-column">
        <p style={{ fontWeight: "bold" }} > ON THIS PAGE:</p>
          <Nav.Link href="#board#presidents" eventKey="pres">Presidents</Nav.Link>
          <Nav.Link href="#board#operations" eventKey="operations">Operations</Nav.Link>
          <Nav.Link href="#board#corporate" eventKey="corporate">Corporate</Nav.Link>
          <Nav.Link href="#board#academic" eventKey="academic">Academic</Nav.Link>
          <Nav.Link href="#board#brand" eventKey="brand">Brand</Nav.Link>
          <Nav.Link href="#board#community" eventKey="community">Community</Nav.Link>
          <Nav.Link href="#board#outreach" eventKey="outreach">Outreach</Nav.Link>
          <Nav.Link href="#board#advisors" eventKey="advisors">Advisors</Nav.Link>
          <Nav.Link href="#board#faculty" eventKey="faculty">Faculty Board</Nav.Link>
          <Nav.Link href="#board#sponsors" eventKey="sponsors">Sponsors</Nav.Link>
          <Nav.Link href="#board#alumni" eventKey="alumni">Alumni</Nav.Link>
        </Nav>
      </div>

        {value === "pres" && this.renderMembersSection(presidents.members)}
        {value === "academic" && this.renderMembersSection(academic.members)}
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
