import React, { Component } from "react";
import "./pages.css";
import BoardCard from "../components/BoardCard.js";
import Navbar from "react-bootstrap/Navbar";
import { Nav, NavItem, NavDropdown } from "react-bootstrap";
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

export default class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "pres",
      displayData: [],
    };
  }

  render() {
    // const firstNames = boardData.map((e) => e.name);
    const presidents = [];
    const academic = [];
    const brand = [];
    const community = [];
    const corporate = [];
    const operations = [];
    const outreach = [];
    const advisors = [];

    // boardData.forEach((d, i) => {
    //   if (d.team === "Presidents") {
    //     presidents.push(d);
    //   }

    //   if (d.team === "Academic") {
    //     academic.push(d);
    //   }
    //   if (d.team === "Brand") {
    //     brand.push(d);
    //   }
    //   if (d.team === "Community") {
    //     community.push(d);
    //   }
    //   if (d.team === "Corporate") {
    //     corporate.push(d);
    //   }
    //   if (d.team === "Operations") {
    //     operations.push(d);
    //   }
    //   if (d.team === "Outreach") {
    //     outreach.push(d);
    //   }
    //   if (d.team === "Advisors") {
    //     advisors.push(d);
    //   }
    // });

    const handleSelect = (e) => {
      // console.log("e", e);
      this.setState({
        value: e,
      });
    };

    function importAll(r) {
      let images = {};
      r.keys().map((item, index) => {
        images[item.replace("./", "")] = r(item);
      });
      return images;
    }

    const boardHeadshots = importAll(
      require.context("../images/headshots/board", false, /\.jpg/)
    );
    const advisorHeadshots = importAll(
      require.context("../images/headshots/board/advisors", false, /\.jpg/)
    );

    const gridCols = [[], []];
    corporate.forEach((data, i) => {
      const comp = (
        <>
          <BoardCard
            title={data.name}
            text={data.title}
            img={boardHeadshots[data.netId + ".jpg"]}
            netId={data.netId}
            bio={data.bio}
          />
        </>
      );
      const colNumber = i % 2;
      gridCols[colNumber].push(comp);
    });

    function createCols(arr) {
      let gridColsTeam;
      if (
        arr == academic ||
        arr == brand ||
        arr == community ||
        arr == corporate ||
        arr == outreach
      ) {
        gridColsTeam = [[], []];
        arr = arr.slice(1);
      } else {
        gridColsTeam = [[], []];
      }
      arr.forEach((data, i) => {
        const comp = (
          <BoardCard
            title={data.name}
            text={data.title}
            img={boardHeadshots[data.netId + ".jpg"]}
            netId={data.netId}
            bio={data.bio}
          />
        );
        let colNumber = 0;
        colNumber = i % 2;
        gridColsTeam[colNumber].push(comp);
      });
      return gridColsTeam;
    }

    return (
      <div class="containerPage">
        <h2 style={{ fontWeight: "bold" }}>Who We Are</h2>
        {this.displayTemp}

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
        <hr />
        <Navbar
          className="justify-content-center"
          expand="lg"
          onSelect={handleSelect}
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
        {/* <div>
          <Member
            name="Rachel Tong"
            title="President"
            linkedin=""
            netid="rt387"
            bio="WICC introduced me to a close community of people who are not only passionate about computing but also extremely supportive and eager to help. I was first introduced to WICC freshman fall through the Lunch Bunch and Mentorship Program. Amidst the chaotic transition into college, those programs truly helped me ease into college and meet amazing upperclassmen and professors. I'm super excited to get more involved and meet more people!"
          />
        </div> */}

        <div id="presidents" className="rowC">
          {this.state.value === "pres" &&
            presidents.map((member) => {
              return (
                <>
                  {/* <BoardCard
                    title={member.name}
                    text={member.title}
                    img={boardHeadshots[member.netId + ".jpg"]}
                    netId={member.netId}
                    bio={member.bio}
                    major={member.major}
                    year={member.year}
                    class="col"
                  /> */}

                  <Member
                    name={member.name}
                    title={member.title}
                    netid={member.netid}
                    bio={member.bio}
                    class="col"
                  />
                  <div>
                    <img
                      src={`src/images/headshots/board/${member.netid}.jpg`}
                    />
                  </div>
                </>
              );
            })}
        </div>

        <div id="academic" className="container">
          {this.state.value === "academic" && (
            <div>
              <BoardCard
                title={academic[0].name}
                text={academic[0].title}
                img={boardHeadshots[academic[0].netId + ".jpg"]}
                netId={academic[0].netId}
                bio={academic[0].bio}
              />

              <div className="row">
                <div className="col-sm-6">
                  {/* {gridCols[0]} */}
                  {createCols(academic)[0]}
                </div>
                <div className="col-md-6">
                  {/* {gridCols[1]} */}
                  {createCols(academic)[1]}
                </div>
              </div>
            </div>
          )}
        </div>

        <div id="brand" className="container">
          {this.state.value === "brand" && (
            <div>
              <BoardCard
                title={brand[0].name}
                text={brand[0].title}
                img={boardHeadshots[brand[0].netId + ".jpg"]}
                netId={brand[0].netId}
                bio={brand[0].bio}
              />
              <div className="row">
                <div className="col-sm-6">
                  {/* {gridCols[0]} */}

                  {createCols(brand)[0]}
                </div>
                <div className="col-md-6">{createCols(brand)[1]}</div>
              </div>
            </div>
          )}
        </div>

        <div id="community" className="container">
          {this.state.value === "community" && (
            <div>
              <BoardCard
                title={community[0].name}
                text={community[0].title}
                img={boardHeadshots[community[0].netId + ".jpg"]}
                netId={community[0].netId}
                bio={community[0].bio}
              />

              <div className="row">
                <div className="col-md-6">
                  {/* {gridCols[0]} */}

                  {createCols(community)[0]}
                </div>
                <div className="col-md-5">
                  {/* {gridCols[1]} */}
                  {createCols(community)[1]}
                </div>
              </div>
            </div>
          )}
        </div>

        <div id="corporate" className="container">
          {this.state.value === "corporate" && (
            <div>
              <BoardCard
                title={corporate[0].name}
                text={corporate[0].title}
                img={boardHeadshots[corporate[0].netId + ".jpg"]}
                netId={corporate[0].netId}
                bio={corporate[0].bio}
              />
              <div className="row">
                <div className="col-sm-6">
                  {/* {gridCols[0]} */}
                  {createCols(corporate)[0]}
                </div>
                <div className="col-md-6">
                  {/* {gridCols[1]} */}
                  {createCols(corporate)[1]}
                </div>
              </div>
            </div>
          )}
        </div>

        <div id="operations" className="container">
          {this.state.value === "operations" && (
            <div className="row">
              <div className="col-sm-6">
                {/* {gridCols[0]} */}
                {createCols(operations)[0]}
              </div>
              <div className="col-md-6">
                {/* {gridCols[1]} */}
                {createCols(operations)[1]}
              </div>
            </div>
          )}
        </div>

        <div id="outreach" className="container">
          {this.state.value === "outreach" && (
            <div>
              <BoardCard
                title={outreach[0].name}
                text={outreach[0].title}
                img={boardHeadshots[outreach[0].netId + ".jpg"]}
                netId={outreach[0].netId}
                bio={outreach[0].bio}
              />

              <div className="row">
                <div className="col-sm-6">
                  {/* {gridCols[0]} */}
                  {createCols(outreach)[0]}
                </div>
                <div className="col-md-6">
                  {/* {gridCols[1]} */}
                  {createCols(outreach)[1]}
                </div>
              </div>
            </div>
          )}
        </div>
        <div id="advisors" className="container" style={{ paddingLeft: "10%" }}>
          {/*this.state.value === "advisors" && advisors.map((value) => {
            return <BoardCard title={value.name} text={value.title} img={(advisorHeadshots[value.netId + '.jpg'])}
          netId={value.netId} bio={value.bio} year={value.year}*/}
          {this.state.value === "advisors" && (
            <div>
              <BoardCard
                title={advisors[0].name}
                text={advisors[0].title}
                img={advisorHeadshots[advisors[0].netId + ".jpg"]}
                netId={advisors[0].netId}
                bio={advisors[0].bio}
              />
              <div className="row">
                <div className="col-sm-6">
                  {/* {gridCols[0]} */}
                  {createCols(advisors)[0]}
                </div>
                <div className="col-md-6">
                  {/* {gridCols[1]} */}
                  {createCols(advisors)[1]}
                </div>
              </div>
            </div>
          )}
        </div>
        <center>
          <div id="sponsors" class="sponsorStyle" style={{ width: "100%" }}>
            {this.state.value === "sponsors" && <Sponsors />}
          </div>
        </center>
        <div id="faculty" style={{ width: "100%" }}>
          {this.state.value === "faculty" && <Faculty />}
        </div>
        <div id="alumni" style={{ width: "100%" }}>
          {this.state.value === "alumni" && <Alumni />}
        </div>
      </div>
    );
  }
}
