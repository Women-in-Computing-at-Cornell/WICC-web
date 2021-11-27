import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import Navbar from 'react-bootstrap/Navbar'
import { Nav, NavItem, NavDropdown } from 'react-bootstrap'

import './programs/programPages.css'

export default class PhotoCarousel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 'sp19',
    }
  }

  render() {
    let arrowStyles = {
      position: 'absolute',
      zIndex: 2,
      top: 'calc(50% - 15px)',
      width: 30,
      height: 30,
      cursor: 'pointer',
    }

    return (
      <div>
        <Carousel
          infiniteLoop
          showStatus={false}
          dynamicHeight
          showIndicators={false}
          showThumbs={true}
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <button
                onClick={onClickHandler}
                title={label}
                style={{
                  ...arrowStyles,
                  backgroundColor: '#9CE2D3',
                  left: 15,
                  border: 'none',
                  borderRadius: '50%',
                  color: 'white',
                }}
              >
                {'<'}{' '}
              </button>
            )
          }
          renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
              <button
                onClick={onClickHandler}
                title={label}
                style={{
                  ...arrowStyles,
                  backgroundColor: '#9CE2D3',
                  right: 15,
                  border: 'none',
                  borderRadius: '50%',
                  color: 'white',
                }}
              >
                {'>'}
              </button>
            )
          }
        >
          {this.props.imgNames.map((member) => {
            return (
              <div>
                <img
                  src={this.props.pics[member]}
                  style={{ width: '60%', height: 'auto' }}
                />
              </div>
            )
          })}
        </Carousel>
      </div>
    )
  }
}
