import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "@/assets/images/logo.png";
// import logo from "../../assets/font/corporate-normal.otf"
import localFont from "next/font/local";
import { Button } from "react-bootstrap";
import leftArrow from "@/assets/images/icon-arrow-dark.svg";
import Link from "next/link";
import { content } from "@/content";

const myFont = localFont({ src: "../../assets/font/corporate-normal.otf" });
function Header() {
  const { contact } = content;

  return (
    <Navbar
    
      sticky="top"
      collapseOnSelect
      expand="lg"
      className=" bg-white mt-2 header-box"
    >
      <Container>
        <Navbar.Brand href="/">
          <div className="header-logo">
            <img src={logo.src} alt="" />
            <h5 className={myFont.className}> Rate</h5>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto link-wrapper">
            <Nav.Link href="/#home" className="header-link">
              Home
            </Nav.Link>
            <Nav.Link href="#product" className="header-link">
              Products
            </Nav.Link>
            <Nav.Link href="#plans" className="header-link">
              Plans
            </Nav.Link>
          </Nav>
          <Nav>
            {/* <Nav.Link href="#deets" className="header-link">Sign in</Nav.Link> */}

            <Link href={contact.mailLink}>
              <button className="round-btn bg-blue headerContact">
                Contact us
                {/* <img src={leftArrow.src} alt="" /> */}
              </button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
