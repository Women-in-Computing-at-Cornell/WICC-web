import React from "react";
import Card from "react-bootstrap/Card";
// import Modal from 'react-bootstrap/Modal';
// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

// import Image from "react-bootstrap/Image";
import "./programPages.css";

class QuestionsCard extends React.Component {
  render() {
    const { name, title, img, netId } = this.props;
    return (
      <>
        <div class="contact">
          <img
            src={img}
            class="profile-pic"
          />
          <div class="contact-details">
            <div style={{ fontWeight: "bold" }}>{name}</div>
            <div>{netId}@cornell.edu</div>
          </div>
        </div>
      </>
    );
  }
}

export default QuestionsCard;
