import { useDispatch, useSelector } from "react-redux";
import * as React from "react";
import { totalAmt } from "./Total";
import { BtnStyle, DivStyled } from "../../assets/Styles/ListStyled";
import { addToCart, decreaseQuantity, removeItem } from "./cartSummarySlice";

export const CartSummary = () => {
  const total = useSelector((state) => state.addToCart.total);
  const product = useSelector((state) => state.addToCart.productList);
  const dispatch = useDispatch();
  console.log("SK@cartSummrty", total);
  return (
    <>
      {true ? (
        <>
          <div>
            <h5>Cart Summary</h5>
            <table>
              <tr>
                <th>Product Name</th>
                <th>Quantity</th>
                <th>Amount</th>
              </tr>
              {product.map((item) => (
                <tr>
                  <td>{item.productName}</td>
                  <td>
                    <DivStyled>
                      <BtnStyle
                        onClick={() =>
                          dispatch(
                            addToCart({
                              id: item.id,
                              price: item.price,
                              product: item.title,
                            })
                          )
                        }
                      >
                        +
                      </BtnStyle>
                      {item.quantity}
                      <BtnStyle
                        onClick={() => dispatch(decreaseQuantity(item.id))}
                      >
                        -
                      </BtnStyle>
                    </DivStyled>
                  </td>
                  <td>:{item.productPrice * item.quantity}</td>
                  <td onClick={() => dispatch(removeItem(item.id))}>Remove</td>
                </tr>
              ))}

              <tr>
                <td>Total Quantity:{totalAmt().totalQuantity}</td>
                <td>Total Price:</td>
                <td>{totalAmt().total}</td>
              </tr>
            </table>
          </div>
        </>
      ) : (
        <h1>Cart is Empty</h1>
      )}
    </>
  );
};
