import { useState } from 'react';
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavbarEl = () => {

  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleCloseOffcanvas = () => {
    setShowOffcanvas(false);
  };

  const handleLinkClick = () => {
    setShowOffcanvas(false);
  };

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
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`}
                         onClick={() => setShowOffcanvas(true)}/>
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="start"
            show={showOffcanvas}
            onHide={handleCloseOffcanvas}
          >
            <Offcanvas.Header className="beige" closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                {brandTitle()}
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className='beige'>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link as={Link} to="/" onClick={handleLinkClick}>TREATS FOR PETS</Nav.Link>
                <Nav.Link as={Link} to="/charity" onClick={handleLinkClick}>PETS IN NEED</Nav.Link>
                <Nav.Link as={Link} to="/our-shop" onClick={handleLinkClick}>OUR PRODUCTS</Nav.Link>
                <Nav.Link href="#findUs" onClick={handleLinkClick}>FIND US</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  )
}

export default NavbarEl