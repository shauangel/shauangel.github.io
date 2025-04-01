import '../assets/styles/common.css'
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaSearch, FaLinkedin, FaGithub } from 'react-icons/fa';

function NaviBar() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Navbar expand="lg" className="flex-column py-3 fixed-top">
      <Navbar.Brand onClick={() => scrollToSection('home')} className="mb-3 brand" style={{ cursor: 'pointer'}}>
        Monkey Dev
      </Navbar.Brand>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => scrollToSection('home')} className="px-3">Home</Nav.Link>
            <Nav.Link onClick={() => scrollToSection('about')} className="px-3">About</Nav.Link>
            <Nav.Link onClick={() => scrollToSection('courses')} className="px-3">Courses</Nav.Link>
            <Nav.Link onClick={() => scrollToSection('projects')} className="px-3">Projects</Nav.Link>
            <Nav.Link onClick={() => scrollToSection('playground')} className="px-3">Playground</Nav.Link>
            <Nav.Link onClick={() => scrollToSection('life')} className="px-3">Life</Nav.Link>
            <Nav.Link onClick={() => scrollToSection('contact')} className="px-3">Contact</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="https://www.linkedin.com/in/anchi-shau-506466326/" target="_blank" className="px-3">
              <FaLinkedin />
            </Nav.Link>
            <Nav.Link href="https://github.com/shauangel" target="_blank" className="px-3">
              <FaGithub />
            </Nav.Link>
            <Nav.Link onClick={() => scrollToSection('search')} className="px-3">
              <FaSearch />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NaviBar;
