import useCart from "../hooks/useCart";
import CartItem from "./CartItem";
import { Button } from "react-bootstrap";

const Cart = () => {
  const { items, navToCheckout, totalPrice } = useCart();
  return (
    <div className="d-flex flex-column m-auto col-11 col-lg-10 col-xl-8">
      {items.length ? (
        <>
          <div>
            {items.map((item, index) => (
              <CartItem key={item?._id || index} item={item} />
            ))}
          </div>
          <Button
            className="m-auto my-4 w-25 py-3"
            variant="warning"
            onClick={navToCheckout}
          >
            Procceed To Checkout (Total: ${totalPrice})
          </Button>
        </>
      ) : (
        <h1>Cart is Empty</h1>
      )}
    </div>
  );
};
export default Cart;
