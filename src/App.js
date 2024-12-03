// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col, Nav, Navbar, NavDropdown, Container} from 'react-bootstrap';

const user = {
  name: 'Hendy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 170,
};

function App() {
  return (
    <>
    <Navbar bg='light' data-bs-theme="light">
    <Container>
      <Navbar.Brand href='#home'>Logo</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        </NavDropdown>
      </Nav>
      </Container>
      </Navbar>

      <Container style={{marginTop: '2%'}}>
      <Row className='align-items-center'>
        <Col xs="auto">
        <img className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
        />  
        </Col>
        <Col style={{margin: 0}}><h1>{user.name}</h1></Col>
      </Row>
    </Container>
    </>
  );
}

export default App;
