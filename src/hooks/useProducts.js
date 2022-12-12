import { useState, useEffect } from "react";
import useStore from "../appStore";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const { addItem } = useStore();
  const getAllProducts = async () => {
    try {
      const res = await fetch("http://localhost:5200/products", {
        methos: "GET",
      });
      const { products } = await res.json();
      setProducts(products);
    } catch (error) {
      setProducts([]);
    }
  };

  const AddToCart = async (product) => {
    addItem(product);
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return {
    products,
    getAllProducts,
    AddToCart,
  };
};
export default useProducts;
