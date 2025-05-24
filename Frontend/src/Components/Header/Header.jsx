import React, { useEffect, useState } from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import axios from "axios";
import logo from "../../assets/images/report_background-removebg-preview.png";

function Header() {
  const [itemCount, setItemCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/smarttray");
        setItemCount(res.data.itemCount ?? 0);
      } catch (err) {
        console.error("Error fetching item count in Header:", err);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Navbar bg="light" expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} alt="logo" style={{ width: "40px", height: "40px" }} /> Smart Fridge
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/other">Check Items</Nav.Link>

            <NavDropdown title="Notifications" id="basic-nav-dropdown">
              {itemCount < 2 ? (
                <NavDropdown.Item style={{ color: "red", fontWeight: "bold" }}>
                  ⚠️ Low stock: Please refill the tray!
                </NavDropdown.Item>
              ) : (
                <NavDropdown.Item disabled>No alerts</NavDropdown.Item>
              )}
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3">Settings</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
