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
import { PiSun } from "react-icons/pi";
import { MdOutlineDarkMode } from "react-icons/md";
const myFont = localFont({ src: "../../assets/font/corporate-normal.otf" });
import { useTheme } from "@/context/ThemeContext";
import { theme } from "@/utils/theme";
import { GrMenu } from "react-icons/gr";

function Header() {
  const { isDarkMode, toggleTheme } = useTheme();

  const { contact } = content;

  return (
    <Navbar
      sticky="top"
      collapseOnSelect
      expand="lg"
      className="   header-box bg"
    >
      <Container>
        <Navbar.Brand href="/">
          <div className="header-logo ">
            <img src={logo.src} alt="" />
            <h5 className={`${myFont.className} logo-color`}> Rate</h5>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle style={{outline:"none", border:"none"}} aria-controls="responsive-navbar-nav" >
          <GrMenu className="menu-icon"/>
        </Navbar.Toggle>
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
          <Nav className="menu-icon-wrapper">
            {/* <div className="menu-icon-wrapper"> */}
            {/* <Nav.Link href="#deets" className="header-link">Sign in</Nav.Link> */}
            <div onClick={toggleTheme} className="theme-mode">
              {isDarkMode == theme.light ? (
                <PiSun className="mode-icon" />
              ) : (
                <MdOutlineDarkMode className="mode-icon" />
              )}
            </div>
            <Link href={contact.mailLink}>
              <button className="round-btn light-blue headerContact">
                Contact us
                {/* <img src={leftArrow.src} alt="" /> */}
              </button>
            </Link>
            {/* </div> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
