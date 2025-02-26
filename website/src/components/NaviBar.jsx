import '../assets/styles/common.css'
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { FaSearch, FaLinkedin, FaGithub } from 'react-icons/fa';

function NaviBar() {
  return (
    <Navbar expand="lg" className="flex-column py-3">
      <Navbar.Brand as={Link} to="/" className="mb-3 brand">Monkey Dev</Navbar.Brand>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" className="px-3">Home</Nav.Link>
            <Nav.Link as={Link} to="/features" className="px-3">About</Nav.Link>
            <Nav.Link as={Link} to="/lifestyle" className="px-3">Projects</Nav.Link>
            <Nav.Link as={Link} to="/about" className="px-3">Life</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/contact" className="px-3">Contact</Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/an-chi-shau-506466326/" target="_blank" className="px-3">
              <FaLinkedin />
            </Nav.Link>
            <Nav.Link href="https://github.com/shauangel" target="_blank" className="px-3">
              <FaGithub />
            </Nav.Link>
            <Nav.Link as={Link} to="/search" className="px-3">
              <FaSearch />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NaviBar;
