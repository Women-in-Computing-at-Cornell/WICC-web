import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import { boardData } from '../boardData'
import QuestionsCard from './QuestionsCard.js'

import Image from 'react-bootstrap/Image'

import medal from '../../images/medal.jpg'

import './programPages.css'

export default class Events extends Component {
  render() {
    return (
      <div class="page">
        <h1>Events</h1>

        <Container>
          <Row style={{ paddingBottom: '4%' }}>
            <Col xs lg="6" style={{ paddingRight: '5%', paddingLeft: '0%' }}>
              <p
                style={{ paddingRight: '5%', paddingTop: '2%', paddingBottom: '5%' }}
              >
                WICC events are open to all (and often even have free food for all)!
                They include workshops on career development, socials, tech talks
                with top companies, and more.
              </p>
              <h5>List of Events coming soon!</h5>
              <h6>Check out the Calendar page for more:</h6>
              <Button href="/#calendar">Calendar</Button>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </div>
    )
  }
}
