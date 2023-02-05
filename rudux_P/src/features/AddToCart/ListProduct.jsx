import {
  ListStyled,
  DivStyled,
  ProductDetail,
  MainContainer,
} from "../../assets/Styles/ListStyled";
import AddToWish from "../wishList/AddToWish";

import { PlusMinus } from "./PlusMinus";

export const ListProduct = ({ arr }) => {
  return (
    <>
      <MainContainer>
        {arr.map((item, i) => {
          console.log("SK@list", i);

          return (
            <>
              <div key={i} style={{ width: "40%" }}>
                <ListStyled>
                  <ProductDetail>
                    {item.title}
                    <img src={item.image} width="100px" height="140px" />
                    <AddToWish
                      id={item.id}
                      title={item.title}
                      price={item.price}
                    />
                  </ProductDetail>
                  <DivStyled>
                    <PlusMinus
                      id={item.id}
                      title={item.title}
                      price={item.price}
                    />
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
