import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "./product.slice";
export const ProductLayout = () => {
  const productState = useSelector((state) => state.products.products);
  console.log("SK@ff", productState);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  return (
    <>
      <h1>Product</h1>
    </>
  );
};
