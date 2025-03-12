import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Navbar.css";

export default function NavBar() {
  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          {" "}
          <i class="fa-solid fa-shop brand-icon"></i> AgroHut
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Nav.Link>Home</Nav.Link>
            <Nav.Link>Shop</Nav.Link>
            <Nav.Link>About</Nav.Link>
            <Nav.Link>Blog</Nav.Link>
            <Nav.Link>Contact</Nav.Link>
            <Nav.Link>
              <i class="fa-solid fa-cart-shopping"></i>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

// export default Nav;
