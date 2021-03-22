import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { boardData } from '../boardData';
import BoardCard from "../../components/BoardCard.js";




import Image from 'react-bootstrap/Image'

import medal from "../../images/medal.jpg";


import './programPages.css';


export default class Membership extends Component {
  render() {
    console.log(boardData)
    let sec = boardData.find(record => record.title === "Secretary")

    function importAll(r) {
      let images = {};
      r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
      return images;
    }

    const boardHeadshots = importAll(require.context('../../images/headshots/board', false, /\.jpg/));


    return (
      <div class='page'>
        <h1>Active Membership</h1>
        <p style={{ paddingRight: '5%', paddingTop: '2%' }}>WICC Active Membership aims to provide anyone in our community with a more personalized WICC experience. The guidelines and requirements for becoming a WICC Active Member are created to help dedicated members get the most out of the available opportunities. We will keep you updated with your progress through the semester.</p>
        <p style={{ fontSize: '80%', color: "#8A8A8A" }}>The WICC community is open to everyone regardless of their major or gender or membership status. We still welcome you to join us as a general body member at WICC events even if you can’t commit to being an active member.
</p>

        <center>
          <Button href='https://forms.gle/vZeTVhGveoqZ8AWs9'>Register Now!</Button>

        </center>
        <br />

        <Container>
          <Row style={{ paddingBottom: "1%" }}>
            <Col xs lg="5" style={{ paddingRight: "5%", paddingLeft: "0%" }}>
              <h3>Perks</h3>
              <div class="sub">
                <p >As soon as you complete the requirements, you will be named an Active Member. Enjoy the perks hereafter till the end of the next semester.</p>
                <ul>
                  <li>
                    Get access to the Alumni directory
                </li>
                  <li>
                    Attend invite-only corporate events at the company’s request
                </li>
                  <li>
                    Have the opportunity to be featured on our social media
                </li>
                  <li>
                    Be invited to a member-only social event at the end of the semester
                </li>
                  <li>
                    Be rewarded with a Certificate of Active Membership
                </li>

                </ul>
                <center>
                  <Image src={medal} height='50%' width='50%' style={{ marginTop: '3%' }} />

                </center>
                <br /><br />
              </div>

            </Col>
            <Col >
              <h3>Requirements</h3>
              <div class="sub">

                <ul>
                  <li>
                    Have a positive and supportive outlook on all forms of diversity
                </li>
                  <li>
                    Develop a growth mindset in being an open, aware and helpful individual
                </li>
                  <li>
                    Represent WICC values in-person and online, knowing that what you say/post reflects both yourself and the organization
                </li>
                  <li>
                    Uphold the WICC mission statement
                </li>
                  <li>
                    Actively attend and engage at WICC events/programs throughout the semester. You must fulfill any one of the following to be considered an Active Member:
                  <ul>
                      <li>
                        Be part of the <span style={{ fontWeight: "bold" }}>Lunch Bunch, Mentorship Circles, Cornell Girls Who Code,
                      Photo & Video Committee</span> or <span style={{ fontWeight: "bold" }}>Corporate Committee</span>
                      </li>
                      <li>
                        Attend <span style={{ fontWeight: "bold" }}>four events</span> of any type during the semester. (Note: Maximum 2 Corporate Events would be counted towards this total)
                  </li>

                    </ul>
                  </li>


                </ul>
              </div>
              <br />
              <h3>Tracking and Progress</h3>
              <p class="sub"> Once you have filled the form and registered for the Active Membership, we will
              track your attendance at events and see if the above requirements are fulfilled.
              Be sure to sign-in when you attend an event! We will inform you of the type of
              event you are attending (Corporate Event or Non-Corporate Event). We will also
              keep you updated with your progress monthly and give you an opportunity to fill
                  out a feedback form. Do let us know about your experience!</p>

            </Col>
          </Row>
        </Container>
        <h3 style={{ marginBottom: "3%" }}>FAQ</h3>
        <p class='head'>What happens if you sign-up mid-way through a semester?</p>
        <p class='sub'>We welcome you to sign-up anytime during a semester. When you sign-up, we add in all the events you attended since the start of that semester. As mentioned before, you must complete the requirements before you become an Active Member.</p>
        <br />
        <p class='head'>Is it mandatory to attend G-Body discussions?</p>
        <p class='sub'>We highly encourage our members to attend our G-Body discussions but it is not required. Our G-Body discussions are held monthly.</p>
        <br />
        <p class='head'>How can you keep up with our upcoming events?</p>
        <p class='sub'>For updates on our events, you can:</p>
        <ul class='sub'>
          <li>

            Subscribe to our listserv here
          </li>
          <li>
            Check our <Link to="/calendar">website
            </Link>

          </li>
          <li>
            Follow us on <a href='https://www.facebook.com/CornellWomenInComputing/'>Facebook</a> and <a href='https://www.instagram.com/wiccornell/'>Instagram</a>
          </li>
        </ul>
        <p class='sub'>We will keep you updated with all the required information and progress! Meanwhile, enjoy your experience with WICC and we look forward to interacting with you!</p>

        <center>
          <p style={{ paddingTop: '10%' }}>Questions?</p>
          <BoardCard title={sec.name} text={sec.title}
            img={(boardHeadshots[sec.netId + '.jpg'])} netId={sec.netId}
            class="col" />

        </center>
      </div>
    );
  }
}
