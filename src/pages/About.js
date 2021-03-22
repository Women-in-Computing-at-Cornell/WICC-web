import React from 'react';
import './About.css';
import community from "../images/about-pictures/community.jpg";
import Figure from 'react-bootstrap/Figure'
import FigureImage from 'react-bootstrap/FigureImage'
import FigureCaption from 'react-bootstrap/FigureCaption'


const About = () => {
  return (
    <div class="home-container">
      <section class="hero-container">
        <h1>About Us</h1>
        <br />
        <p style={{ fontWeight: "bold", fontSize: 20 }}>We hold community events, campaigns, and programs with the Cornell student body
          and local Ithaca community to uplift anyone to succeed in tech with confidence.</p>

        <div class='row'>
          <div class='column left'>
            <h5><span style={{ color: "#9CE2D3", fontWeight: "bold" }}> {">"} </span> &nbsp;&nbsp;Community</h5>
            <p>WICC engages regularly with students, faculty, and corporate sponsors. From community discussions on diversity in tech to mentorship groups, our goal is to make anyone feel included and welcome in CIS at Cornell.</p>
            <p style={{ fontSize: "70%" }}><span style={{ fontWeight: "bold" }}> Focus: </span> Community discussions, Mentorship, Social</p>
            <br />
          </div>
          <div class='column right'>
            {/* <img src={community} ></img> */}
            <Figure>
              <Figure.Image
                // width={171}
                // height={180}
                alt="171x180"
                src={community}
              />
              <Figure.Caption>
                A photo from a community discussion!
  </Figure.Caption>
            </Figure>
          </div>
        </div>


        <div class='row'>
          <div class='column left'>
            <h5><span style={{ color: "#9CE2D3", fontWeight: "bold" }}> {">"} </span> &nbsp;&nbsp;Academic</h5>
            <p>WICC engages regularly with students, faculty, and corporate sponsors. From community discussions on diversity in tech to mentorship groups, our goal is to make anyone feel included and welcome in CIS at Cornell.</p>
            <p style={{ fontSize: "70%" }}><span style={{ fontWeight: "bold" }}> Focus: </span> Career Development, Faculty & Alumni Relations, Underclassmen Outreach</p>
            <br />
          </div>
          <div class='column right'>
            <img src={community} ></img>
          </div>
        </div>


        <div class='row'>
          <div class='column left'>

            <h5><span style={{ color: "#9CE2D3", fontWeight: "bold" }}> {">"} </span> &nbsp;&nbsp;Outreach</h5>
            <p>WICC engages regularly with students, faculty, and corporate sponsors. From community discussions on diversity in tech to mentorship groups, our goal is to make anyone feel included and welcome in CIS at Cornell.</p>
            <p style={{ fontSize: "70%" }}><span style={{ fontWeight: "bold" }}> Focus: </span> Girls Who Code</p>
            <br />
          </div>

          <div class='column right'>
            <img src={community} ></img>
          </div>
        </div>




        <div class='row'>
          <div class='column left'>


            <h5><span style={{ color: "#9CE2D3", fontWeight: "bold" }}> {">"} </span> &nbsp;&nbsp;Brand</h5>
            <p>WICC engages regularly with students, faculty, and corporate sponsors. From community discussions on diversity in tech to mentorship groups, our goal is to make anyone feel included and welcome in CIS at Cornell.</p>
            <p style={{ fontSize: "70%" }}><span style={{ fontWeight: "bold" }}> Focus: </span> Publicity, Design, Web, Photography</p>
          </div>
          <div class='column right'>
            <img src={community} ></img>
          </div>


        </div>



      </section>
    </div >
  );
}

export default About;
