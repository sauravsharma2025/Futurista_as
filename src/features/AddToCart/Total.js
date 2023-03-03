import { useSelector } from "react-redux";

export const totalAmt = () => {
  const product = useSelector((state) => state.addToCart.productList);

  let totalQuantity = 0;
  let total = 0;
  product.map((item) => {
    totalQuantity += item.quantity;
    total += item.productPrice * item.quantity;
    return;
  });
  return { totalQuantity, total };
};
