import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "@/assets/images/logo.png";
// import logo from "../../assets/font/corporate-normal.otf"
import localFont from "next/font/local";
import { Button } from "react-bootstrap";
const myFont = localFont({ src: "../../assets/font/corporate-normal.otf" });
function Header() {
  return (
    <Navbar sticky="top" collapseOnSelect expand="lg" className=" bg-white mt-2 header-box">
      <Container>
        <Navbar.Brand href="/" >
          <div className="header-logo">
            <img src={logo.src} alt="" />
            <h5 className={myFont.className}>  Rate</h5>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto link-wrapper" >
            <Nav.Link href="/" className="header-link" >Home</Nav.Link>
            <Nav.Link href="#pricing"  className="header-link">Feature</Nav.Link>
            <Nav.Link href="#pricing"  className="header-link">Support</Nav.Link>
   
          </Nav>
          <Nav>
            <Nav.Link href="#deets" className="header-link">Sign in</Nav.Link>
           <button className="round-btn bg-blue">Download</button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
