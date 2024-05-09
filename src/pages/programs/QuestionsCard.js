import React from "react";
import "./questionscard.css";


class QuestionsCard extends React.Component {
  render() {
    const { name, title, img, netId } = this.props;
    return (
      <>
        <div className="card-container">
          <img src={img} className="profile-pic" />
          <div className="email-text">
            <div className="name-text">{name}</div>
            <div>{netId}@cornell.edu</div>
          </div>
        </div>
      </>
    );
  }
}

export default QuestionsCard;
