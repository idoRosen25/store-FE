import useStore from "../appStore";
import { Button } from "react-bootstrap";

const CartItem = ({ item }) => {
  const { addItem, removeItem } = useStore();
  return (
    <div className="d-flex mb-3 py-2 rounded shadowBoxLight">
      <img src={item.image} alt="Product" className="mx-2 cartItemImg" />
      <div className="cartItemInfo pt-1 pt-md-3 w-75">
        <h4>{item.name}</h4>
        <p>{item.description}</p>
        <p>
          <span className="fs-bold text-decoration-underline">Price:</span> $
          {item.price}
        </p>
        <div className="d-flex justify-content-around align-items-center w-25">
          <input
            type="number"
            defaultValue={item.quantity}
            className="cartItemInput"
            onChange={(e) => {
              if (e.target.value <= 0) {
                removeItem(item);
                return;
              }
              addItem(item, e.target.value - item.quantity);
            }}
          />
          <Button onClick={() => removeItem(item)} variant="danger">
            Remove
          </Button>
        </div>
      </div>
    </div>
  );
};
export default CartItem;
