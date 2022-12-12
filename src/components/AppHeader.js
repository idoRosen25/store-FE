import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Badge from "react-bootstrap/Badge";
import useStore from "../appStore";

const AppHeader = () => {
  const { items } = useStore();
  console.log("items in cart: ", items);
  const itemCount = items?.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);
  return (
    <Navbar bg="light" expand="lg" className="mb-4">
      <Container>
        <Navbar.Brand href="/">Farmer Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" style={{ width: "100%" }}>
            <Nav.Link href="/cart" style={{ width: "50%" }}>
              <span className="fs-bold">Cart</span>
              <Badge bg="primary" className="cartBadge">
                {itemCount}
              </Badge>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default AppHeader;
