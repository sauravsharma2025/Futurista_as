import { useState } from "react";
import { useDispatch } from "react-redux";
import { BtnStyle } from "../../assets/Styles/ListStyled";
import { addToCart, decreaseQuantity } from "../AddToCart/cartSummarySlice";

export const PlusMinus = ({ id, price, title }) => {
  const dispatch = useDispatch();

  const [itemAdded, setItemAdded] = useState(false);
  return (
    <>
      {itemAdded ? (
        <div>
          <BtnStyle
            onClick={() =>
              dispatch(
                addToCart({
                  id: id,
                  price: price,
                  product: title,
                })
              )
            }
          >
            +
          </BtnStyle>
          <BtnStyle onClick={() => dispatch(decreaseQuantity(id))}>-</BtnStyle>
        </div>
      ) : (
        <BtnStyle
          onClick={() => {
            setItemAdded(true);
            dispatch(
              addToCart({
                id: id,
                price: price,
                product: title,
              })
            );
          }}
        >
          Add To Cart
        </BtnStyle>
      )}
    </>
  );
};
