import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CartSummary } from "./CartSummary";
import { addToCart } from "./cartSummarySlice";

export const AddToCartFeature = () => {
  const [product, setProduct] = useState([]);

  const dispatch = useDispatch();
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((data) => {
        return data.json();
      })
      .then((data) => setProduct(data));
  }, []);
  const listStyle = {
    display: "flex",
    flexWrap: "wrap",
    width: "35%",
    height: "50%",
    border: "1px solid black",
  };
  return (
    <>
      <h1>List of Products</h1>
      <ul>
        {product.map((item, i) => {
          return (
            <>
              <li style={listStyle} key={i}>
                {item.title}
                <button
                  style={{ color: "green", border: "1px solid black" }}
                  onClick={() =>
                    dispatch(
                      addToCart({ price: item.price, product: item.title })
                    )
                  }
                >
                  Add to Cart
                </button>
              </li>
            </>
          );
        })}
      </ul>
      <CartSummary />
    </>
  );
};
