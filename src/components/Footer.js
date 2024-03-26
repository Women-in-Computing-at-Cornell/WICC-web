import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Facebook from "../images/social/facebook.png";
import Instagram from "../images/social/instagram.png";
import LinkedIn from "../images/social/linkedin.png";
import Email from "../images/social/email.png";
import Watermark from "../images/Thicc Wicc Logo 1.png"
import "./footer.css";
import Button from 'react-bootstrap/Button';




class Footer extends React.Component {
 render() {
   const linkStyle = {
     marginLeft: '10px', // Adjust the right margin to space out the links
   };
   return (
     // <Navbar className="fixed-bottom " bg="light" variant="light">
     <Navbar
       className="fixed-bottom color-nav "
       variant="light"
       style={{ paddingTop: "1%" , paddingBottom: "2%", paddingRight:"3%"}}
     >
       <Navbar.Brand imgs className="mr-auto" href="/">
         <img
             src={Watermark}
             width="17%"
             height="12%"
             alt="WICC logo"
           /> 
         <Navbar.Text className="mr-auto" style={{ paddingLeft: "30%", fontSize: "70%", color: "grey" }}>
           © 2024 Women in Computing at Cornell. All Rights Reserved.
         </Navbar.Text>
       </Navbar.Brand>
      
       <Nav>
         <Nav.Link href="mailto:wicc@cornell.edu">
           <img className="icon" src={Email} alt="Email" />
         </Nav.Link>
         <Nav.Link href="https://www.facebook.com/CornellWomenInComputing/">
           <img className="icon" src={Facebook} alt="Facebook" />
         </Nav.Link>
         <Nav.Link href="https://www.instagram.com/wiccornell/">
           <img className="icon" src={Instagram} alt="Instagram" />
         </Nav.Link>
         <Nav.Link href="https://www.linkedin.com/groups/8480565">
           <img className="icon" src={LinkedIn} alt="LinkedIn" />
         </Nav.Link>
       </Nav>
     </Navbar>
   );
 }
}

export default Footer;