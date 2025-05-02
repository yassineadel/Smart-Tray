import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";

function Header() {
  return (
    <Navbar bg="light" expand="xxl" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">Smart Fridge</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/other">Check Items</Nav.Link>
            <NavDropdown title="Notifications" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/2">Another action</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3">Something else</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
