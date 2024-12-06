import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Offcanvas, Nav, NavDropdown, Row, Col } from 'react-bootstrap';

const user={
  name: 'Henry Cavill',
  summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."

}
function App() {

  return (
    <>
      <Navbar expand="lg" className={'custom-navbar'} style={{fontFamily: 'Manrope', fontWeight: 'bold'}}>
        <Container fluid style={{ paddingLeft: '5vw', paddingRight: '5vw' }}>
          <Navbar.Brand href="#" >Profile.</Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
                <NavDropdown title="More" id="offcanvasNavbarDropdown">
                  <NavDropdown.Item href="#action1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action2">Another Action</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action3">Something Else</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>

      <section className="section1">
        <Container>
          <Row>
            <Col md={6}></Col>
            <Col md={6}>
              <h1 style={{fontFamily: 'Manrope', fontSize: '7vw', fontWeight: 'bold'}}>{user.name}</h1>
              <p style={{fontFamily: 'Helvetica', fontSize: '15px'}}>{user.summary}</p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className='section2'>
        <Container>
          <Row>
            <Col md={6} style={{backgroundColor: 'blue'}}>HELLO</Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default App;
