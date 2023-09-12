import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

const Header = () => {
  return (
    <div>
        <div className='nav-mobile'>
      {[false].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
          <Container fluid>
            <Navbar.Brand href="#">
                <img className='logo' src='https://www.tayanasolutions.com/wp-content/uploads/2021/04/Shopify-Logo.png' alt='logo'/>
            </Navbar.Brand>
            <a className='free-trial' href='#'>Start Free Trial</a>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Shopify
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">Solutions</Nav.Link>
                  <Nav.Link href="#action2">Pricing</Nav.Link>
                  <NavDropdown
                    title="Resources"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
      </div>
      <div className='nav-lg'>
        <nav className='lg-cont'>
            <div className='lg-logo-cont'>
                <img className='logo' src='https://www.tayanasolutions.com/wp-content/uploads/2021/04/Shopify-Logo.png' alt='logo'/>
                <a className='lg-text' href='#'>Solutions</a>
                <a className='lg-text' href='#'>Pricing</a>
                <a className='lg-text' href='#'>Resourses</a>
            </div>
            <div className='lg-login'>
                <p className='lg-text'>Log in</p>
                <button className='free-btn' type='button'>Start free trial</button>
            </div>
        </nav>
      </div>
    </div>
  )
}

export default Header
