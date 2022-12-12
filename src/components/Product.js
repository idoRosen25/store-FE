import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Product = ({ item, onClick }) => {
  return (
    <Card className="">
      <Card.Img variant="top" src={item.image} style={{ height: "450px" }} />
      <Card.Body style={{ height: "250px" }}>
        <Card.Title className="firstCap fs-lg">{item.name}</Card.Title>
        <Card.Text>
          <b>Description: </b>
          {item.description}
        </Card.Text>
        <Card.Text>
          <b>Price: </b> ${item.price}
        </Card.Text>
        <Button
          variant="primary"
          onClick={() => {
            console.log("item added to cart: ", item);
            onClick();
          }}
        >
          Add To Cart
        </Button>
      </Card.Body>
    </Card>
  );
};
export default Product;
