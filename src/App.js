import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col, Navbar, Container, Offcanvas, Nav, NavDropdown, Form, Button } from 'react-bootstrap';
import img from './assets/images/HenryCavill.jpg';


const user = {
  name: 'Henry Cavill',
  work: 'Actor',
  date: '5 May 1983',
  quote: "You're using Wikipedia as your source of information?!",
  imageSize: 300,
};

function App() {
  return (
    <>
    {[false].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-custom mb-3">
          <Container fluid>
            <Navbar.Brand href="#">Profile</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Profile
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action2">Link</Nav.Link>
                  <NavDropdown
                    title="Dropdown"
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

      <section
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}>


      <Container>
      <Row className='align-items-center'>
        <Col xs="auto">
          <img className="avatar"
          src={img}
          alt={'Photo of ' + user.name}
          style={{
            width: user.imageSize,
            height: user.imageSize
          }}
          />  
        </Col>
        <Col>
          <div>
            <ul>
              <h1>{user.name}</h1>
              <p>{user.work}</p>
              <p>{user.date}</p>
              <blockquote>{user.quote}</blockquote>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
    </section>
    </>
  );
}

export default App;
