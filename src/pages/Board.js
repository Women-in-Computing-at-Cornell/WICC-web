import React, { Component } from "react";
import "./pages.css";
import BoardCard from "../components/BoardCard";
import Navbar from "react-bootstrap/Navbar";
import { Nav, NavDropdown } from "react-bootstrap";
import {
  presidents,
  operations,
  corporate,
  technical,
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
import Subteam from "../components/Subteam";
import hero from "../images/about-pictures/abouthero.jpg";

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

const teams = [
  presidents,
  operations,
  corporate,
  technical,
  academic,
  brand,
  outreach,
  community,
  advisors,
];

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
              img={
                boardHeadshots[member.netId + ".jpg"] ||
                boardHeadshots[member.netId + ".JPG"]
              }
            />
          </div>
        ))}
      </div>
    );
  };

  render() {
    const { value } = this.state;

    return (
      <div>
        <div>
          <img
            src={hero}
            style={{ maxWidth: "100%", height: "auto" }}
            alt="Description"
          />
        </div>
        <div className="containerPage">
          <h2 style={{ fontWeight: "bold" }}>Who We Are</h2>
          <p>
            WICC was founded in March 2013 to bring together women and gender
            minorities in computing fields at Cornell, expand their
            opportunities and successes, provide a support network, and empower
            them to encourage younger underrepresented students to consider
            computing fields. We hope to create a budding community and promote
            interaction on academic, social, and professional issues. By making
            women and gender minorities in computing fields visible, providing
            role models and dispelling stereotypes, WICC fosters a support
            network to empower everyone and encourage young students to discover
            their love for computing.
          </p>
          <div style={{ display: "flex" }}>
            <div style={{ flexGrow: 1 }}>
              {teams.map((t, key) => (
                <div key={key} style={{ marginBottom: "20px" }}>
                  <div>
                    {t.name}
                    <Subteam team={t} />
                  </div>
                </div>
              ))}
            </div>
            <div
              style={{
                float: "right", // Float might not be necessary with flex layout
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                position: "sticky",
                top: "0px",
              }}
            >
              <Nav
                onSelect={this.handleSelect}
                className="flex-column"
                style={{}}
              >
                <p style={{ fontWeight: "bold" }}> ON THIS PAGE:</p>
                <Nav.Link href="#board#presidents" eventKey="pres">
                  Presidents
                </Nav.Link>
                <Nav.Link href="#board#operations" eventKey="operations">
                  Operations
                </Nav.Link>
                <Nav.Link href="#board#corporate" eventKey="corporate">
                  Corporate
                </Nav.Link>
                <Nav.Link href="#board#technical" eventKey="technical">
                  Technical
                </Nav.Link>
                <Nav.Link href="#board#academic" eventKey="academic">
                  Academic
                </Nav.Link>
                <Nav.Link href="#board#brand" eventKey="brand">
                  Brand
                </Nav.Link>
                <Nav.Link href="#board#community" eventKey="community">
                  Community
                </Nav.Link>
                <Nav.Link href="#board#outreach" eventKey="outreach">
                  Outreach
                </Nav.Link>
                <Nav.Link href="#board#advisors" eventKey="advisors">
                  Advisors
                </Nav.Link>
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
            </div>
          </div>
        </div>
      </div>
    );
  }
}
