import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import login from "../utils/login";
import logout from "../utils/logout";
import React from "react";
import { Modal, Button } from "react-bootstrap";

function Header(props) {
  const [modalShow, setModalShow] = React.useState(false);

  const session = props.isLoggedIn ? (
    <Nav.Link onClick={logout}>Logout</Nav.Link>
  ) : (
    <Nav.Link onClick={login}>Login</Nav.Link>
  );

  return (
    <>
      <header>
        <Navbar variant="dark" expand="lg">
          <Container>
            <Navbar.Brand href="#home">RemitNow</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav>
                <Nav.Link>Send Money</Nav.Link>
                <Nav.Link href="#">Balance: ${props.balance}</Nav.Link>
                <Nav.Link href="#">Transactions</Nav.Link>
                <Nav.Link onClick={() => setModalShow(true)}>
                  {props.account}
                </Nav.Link>
                {session}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>

      <Modal
        size="lg"
        show={modalShow}
        onHide={() => setModalShow(false)}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Account Details
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Account Number: {props.account}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setModalShow(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Header;
