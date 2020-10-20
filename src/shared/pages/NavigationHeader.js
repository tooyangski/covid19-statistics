import React from "react";
import {
  Nav,
  Navbar,
  Form,
  FormControl,
  Button,
  NavDropdown,
} from "react-bootstrap";

const NavigationHeader = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="/">Manulife</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="#contactus">Contact Us</Nav.Link>
          <NavDropdown title="Account" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Settings</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Subscription</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Report an issue?
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="secondary">Logout</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationHeader;
