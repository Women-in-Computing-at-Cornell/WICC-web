import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';
import './FloatingMenu.css';

function FloatingMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`floating-menu ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
      <div className="menu-icon">{isOpen ? '✖' : '☰'}</div>
      {isOpen && (
        <Nav
          className="flex-column"
        >
          <p
            style={{
              fontWeight: "bold"

            }}
          >
            {" "}
            ON THIS PAGE:
          </p>
          <Nav.Link href="#board#faculty" eventKey="faculty">
            Faculty
          </Nav.Link>
          <Nav.Link href="#board#presidents" eventKey="pres">
            Presidents
          </Nav.Link>
          <Nav.Link href="#board#operations" eventKey="operations">
            Operations
          </Nav.Link>
          <Nav.Link href="#board#corporate" eventKey="corporate">
            Corporate
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
          <Nav.Link href="#board#technical" eventKey="technical">
            Technical
          </Nav.Link>
          <Nav.Link href="#board#photo-&-film" eventKey="photo">
            Photo & Film
          </Nav.Link>
          <Nav.Link href="#board#advisors" eventKey="advisors">
            Advisors
          </Nav.Link>
        </Nav >
      )
      }
    </div >
  );
}

export default FloatingMenu;
