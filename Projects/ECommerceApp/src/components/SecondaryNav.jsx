import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Badge from 'react-bootstrap/Badge'
import logo from '../assets/logo.png'
import { NavLink } from 'react-router'
import "./SecondaryNav.css"

function SecondaryNav({ setCategory }) {
  return (
    <Navbar collapseOnSelect expand="lg" className="secondary-navbar">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => setCategory('all')}>
              All
            </Nav.Link>
            <Nav.Link onClick={() => setCategory('beauty')}>
              Beauty
            </Nav.Link>
            <Nav.Link onClick={() => setCategory('fragrances')}>
              Fragrances
            </Nav.Link>
            <Nav.Link onClick={() => setCategory('furniture')}>
              Furniture
            </Nav.Link>
            <Nav.Link onClick={() => setCategory('groceries')}>
              Groceries
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default SecondaryNav;
