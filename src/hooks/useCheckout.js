import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import useStore from "../appStore";

const defaultModalState = {
  show: false,
  title: "",
  text: "",
  orderId: null,
  onClose: null,
};
const useCheckout = () => {
  const { items, clearCart } = useStore();
  const [validated, setValidated] = useState(false);
  const [values, setValues] = useState({});
  const [modalState, setModalState] = useState({
    ...defaultModalState,
    onClose: () => setModalState({ ...defaultModalState, show: false }),
  });

  const navigate = useNavigate();

  const totalCart = useMemo(
    () => items.reduce((acc, item) => acc + item.price * item.quantity, 0),
    [items]
  );
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();

    if (form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
      submitPayment(values);
    }
    setValidated(true);
  };

  const handleChange = (inputName, event) => {
    setValues({ ...values, [inputName]: event.target.value });
  };

  const submitPayment = async (dataObject) => {
    console.log("for order fetch: ", items, dataObject);
    const payment = await fetch("http://localhost:5200/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        items: items.map((item) => ({ id: item._id, quantity: item.quantity })),
        userData: dataObject,
        totalPrice: totalCart,
      }),
    });

    const { order } = await payment.json();

    if (order) {
      setModalState((prevState) => ({
        ...prevState,
        show: true,
        title: "Order placed",
        text: `Your order has been placed successfully.`,
        orderId: order.id,
        onClose: () => {
          setModalState({ ...defaultModalState, show: false });
          clearCart();
          navigate("/");
        },
      }));
    } else {
      setModalState((prevState) => ({
        ...prevState,
        show: true,
        title: "Error on payment",
        text: "Order could not be placed. Please try again later.",
      }));
    }
  };
  return {
    validated,
    handleSubmit,
    handleChange,
    modalState,
    setModalState,
    totalCart,
  };
};
export default useCheckout;
