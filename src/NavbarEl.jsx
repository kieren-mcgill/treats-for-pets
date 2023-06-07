import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavbarEl = () => {

  const expand = "lg";

  const brandTitle = () => (
    <h3 className="fw-bold">
      Treats<span style={{ fontFamily: "'Qwitcher Grypen', cursive" }}> for </span>Pets
    </h3>)

  const brandLogo = () => (
    <img
      alt=""
      src={"images/logos/treats_for_pets_logo.jpeg"}
      width="75"
      height="75"
      className="d-inline-block me-3"
    />)

  return (
    <>
      <Navbar key={expand}
              expand={expand}
              className="p-0 m-0 nav-style"
              fixed="top">
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
                <Nav.Link as={Link} to="/">TREATS FOR PETS</Nav.Link>
                <Nav.Link as={Link} to="/charity">PETS IN NEED</Nav.Link>
                <Nav.Link as={Link} to="/our-shop">OUR PRODUCTS</Nav.Link>
                <Nav.Link href="#findUs">FIND US</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  )
}

export default NavbarEl