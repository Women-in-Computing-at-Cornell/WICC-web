import React from 'react';
import Image from 'react-bootstrap/Image';

class BoardMember extends React.Component {
  render() {
    const { name, role, img } = this.props;
    return (
      <Image src={img} rounded />
    );
  }
}

export default BoardMember;
