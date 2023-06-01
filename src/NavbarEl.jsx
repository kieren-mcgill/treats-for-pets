import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavbarEl = () => {

  const brandTitle = () => (
    <h3 className="nav-head-text">
      Treats<span className="nav-for-text"> for </span>Pets
    </h3>)

  const brandLogo = () => (
    <img
      alt=""
      src={"images/logos/treats_for_pets_logo.jpeg"}
      width="75"
      height="75"
      className="d-inline-block me-3"
    />)

  const expand = "lg";

  return (
    <>
      <Navbar key={expand} expand={expand} className="p-0 m-0 nav-style" fixed="top">
        <Container fluid>
          <Navbar.Brand href="#">
            <div className="d-flex align-items-center">
              {brandLogo()}
              {brandTitle()}
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`}/>
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="start"
          >
            <Offcanvas.Header className="beige" closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                {brandTitle()}
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className='beige'>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link as={Link} to="/">Treats for Pets</Nav.Link>
                <Nav.Link as={Link} to="/charity">Pets in Need</Nav.Link>
                <Nav.Link as={Link} to="/our-shop">Our products</Nav.Link>
                <Nav.Link href="#findUs">Find us</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  )
}

export default NavbarEl