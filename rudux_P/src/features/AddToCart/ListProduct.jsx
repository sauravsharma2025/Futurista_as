import { useDispatch } from "react-redux";
import {
  BtnStyle,
  ListStyled,
  DivStyled,
  ProductDetail,
  MainContainer,
} from "../../assets/Styles/ListStyled";
import { addToCart, decreaseQuantity } from "./cartSummarySlice";

export const ListProduct = ({ arr }) => {
  const dispatch = useDispatch();

  return (
    <>
      <MainContainer>
        {arr.map((item, i) => {
          return (
            <>
              <div key={i} style={{ width: "40%" }}>
                <ListStyled>
                  <ProductDetail>
                    {item.title}
                    {item.quantity}
                    <img src={item.image} width="100px" height="140px" />
                  </ProductDetail>
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
                    <BtnStyle
                      onClick={() => dispatch(decreaseQuantity(item.id))}
                    >
                      -
                    </BtnStyle>
                  </DivStyled>
                </ListStyled>
              </div>
            </>
          );
        })}
      </MainContainer>
    </>
  );
};
