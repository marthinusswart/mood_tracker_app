import { NavbarToggle } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      <Navbar expand="sm" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#">
            <img
              src="/face-smile.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <NavbarToggle aria-controls="basic-navbar-nav" aria-label="Toggle navigation" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto mb-2 mb-sm-0">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/add_mood">Add Mood</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <hr />

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
    </div>
  );
}

export default Layout;
