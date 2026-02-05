import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Badge from 'react-bootstrap/Badge'
import logo from '../assets/logo.png'
import { NavLink } from 'react-router'
import "./Navbar.css"

function NavbarComponent({ cart }) {
  return (
    <Navbar collapseOnSelect expand="lg" className="custom-navbar">
      <Container>
        <Navbar.Brand as={NavLink} to='/'>
          <img
            alt=""
            src={logo}
            height="50"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Featured</Nav.Link>
            <Nav.Link href="#pricing">Best sellers</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link 
              as={NavLink}
              to='/cart'
              className={({ isActive }) =>
                isActive ? "active" : ""
              }>
              Cart{' '}
              <Badge pill bg="dark">{cart.length}</Badge>
            </Nav.Link>
            <NavDropdown title="Account" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Orders
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Customer Care</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Log out
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;