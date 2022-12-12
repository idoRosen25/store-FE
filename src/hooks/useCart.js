import { useMemo } from "react";
import useStore from "../appStore";
import { useNavigate } from "react-router-dom";

const useCart = () => {
  const navigate = useNavigate();
  const { items } = useStore();

  const totalPrice = useMemo(() => {
    return items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }, [items]);

  const navToCheckout = () => {
    navigate("/checkout");
  };

  return { items, navToCheckout, totalPrice };
};
export default useCart;
