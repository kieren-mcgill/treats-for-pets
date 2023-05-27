import { Container, Nav, Navbar, NavDropdown, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavbarEl = () => {
  const expand = "lg";
  return (
    <>
      <Navbar key={expand} bg="light" expand={expand} className="mb-3" sticky="top">
        <Container fluid>
          <Navbar.Brand href="#">
            <div className="d-flex">
            <img
              alt=""
              src={"images/logos/treats_for_pets_logo.jpeg"}
              width="50"
              height="50"
              className="d-inline-block"
            />
            <h3>Treats for Pets</h3>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link as={Link} to="/pet-shop">Treats for Pets</Nav.Link>
                <Nav.Link as={Link} to="/charity">Pets in Need</Nav.Link>
                <Nav.Link href="#findUs">Find us</Nav.Link>
                {/*<NavDropdown*/}
                {/*  title="Dropdown"*/}
                {/*  id={`offcanvasNavbarDropdown-expand-${expand}`}*/}
                {/*>*/}
                {/*  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>*/}
                {/*  <NavDropdown.Item href="#action4">*/}
                {/*    Another action*/}
                {/*  </NavDropdown.Item>*/}
                {/*  <NavDropdown.Divider />*/}
                {/*  <NavDropdown.Item href="#action5">*/}
                {/*    Something else here*/}
                {/*  </NavDropdown.Item>*/}
                {/*</NavDropdown>*/}
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  )
}

export default NavbarEl