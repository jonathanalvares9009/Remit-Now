import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

function Header(props) {
  return (
    <header>
      <Navbar variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">RemitNow</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Nav.Link href="#">Send Money</Nav.Link>
              <Nav.Link href="#">Balance: ${props.balance}</Nav.Link>
              <Nav.Link href="#">Transactions</Nav.Link>
              <Nav.Link href="#">{props.account}</Nav.Link>
              <Nav.Link href="#">Logout</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
