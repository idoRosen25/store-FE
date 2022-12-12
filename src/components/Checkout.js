import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import useCheckout from "../hooks/useCheckout";

const Checkout = () => {
  const { validated, handleSubmit, handleChange, modalState, totalCart } =
    useCheckout();
  return (
    <>
      <Form
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
        className="shadowBoxLight col-11 col-lg-8 m-auto p-4 px-5 rounded"
      >
        <Row className="mb-3">
          <h4 className="text-decoration-underline">
            Cart Total: ${totalCart}
          </h4>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="3" controlId="validationCustom01">
            <Form.Label>First name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="First name"
              onChange={(e) => handleChange("firstName", e)}
            />
            <Form.Control.Feedback type="invalid">
              Please enter first name.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom02">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Last name"
              onChange={(e) => handleChange("lastName", e)}
            />
            <Form.Control.Feedback type="invalid">
              Please enter last name.
            </Form.Control.Feedback>{" "}
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationPhone">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type="text"
              placeholder="Phone"
              aria-describedby="inputGroupPrepend"
              required
              minLength="10"
              maxLength="10"
              onChange={(e) => handleChange("phone", e)}
            />
            <Form.Control.Feedback type="invalid">
              Please enter phone number.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationAddress">
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Address"
              required
              onChange={(e) => handleChange("address", e)}
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid address.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom05">
            <Form.Label>Zip</Form.Label>
            <Form.Control
              type="text"
              placeholder="Zip"
              required
              onChange={(e) => handleChange("zip", e)}
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid zip.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Button type="submit" variant="info">
          Complete Checkout
        </Button>
      </Form>

      <Modal show={modalState.show}>
        <Modal.Header>
          <Modal.Title>{modalState.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{modalState.text}</p>
          <p>
            <span className="fs-bold text-decoration-undelrine">Order ID:</span>{" "}
            {modalState.orderId}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={modalState.onClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Checkout;
