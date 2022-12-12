import useProducts from "../hooks/useProducts";
import Product from "./Product";

const AllProducts = () => {
  const { products, AddToCart } = useProducts();

  return (
    <div className="productListContainer">
      {products?.length ? (
        products.map((product, index) => (
          <div
            className="col-12 col-sm-9 m-md-auto col-md-6 col-lg-4 col-xl-3 p-3"
            key={product?._id || index}
          >
            <Product item={product} onClick={() => AddToCart(product)} />
          </div>
        ))
      ) : (
        <h1>No Products Found</h1>
      )}
    </div>
  );
};
export default AllProducts;
