import { useSelector } from "react-redux";

export const CartSummary = () => {
  const total = useSelector((state) => state.addToCart.total);
  const product = useSelector((state) => state.addToCart.productList);

  return (
    <>
      {total ? (
        <>
          <h1>
            Product Name:
            {product.map((item) => (
              <h3>
                {item.productName} :{item.productPrice}
              </h3>
            ))}
          </h1>
          <h1>Total Amount:{total}</h1>
        </>
      ) : (
        <h1>Cart is Empty</h1>
      )}
    </>
  );
};
