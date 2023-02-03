import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { CartDiv } from "../../assets/Styles/ListStyled";
import { getRequest } from "../../services/http/http.service";
import { CartSummary } from "./CartSummary";
import { ListProduct } from "./ListProduct";
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
export const AddToCartFeature = () => {
  const [product, setProduct] = useState([]);
  const [cart, setCart] = useState(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    cart ? setCart(false) : setCart(true);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  useEffect(() => {
    getRequest().then((data) => setProduct(data));
  }, []);
  const productArr = useSelector((state) => state.addToCart.productList);
  const showCart = () => {
    cart ? setCart(false) : setCart(true);
  };
  return (
    <>
      <>
        <CartDiv>
          <h1>List of Products</h1>
          <Button onClick={handleOpen}>Cart:{productArr.length}</Button>
        </CartDiv>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {cart && <CartSummary />}
            </Typography>
            {/* <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography> */}
          </Box>
        </Modal>
      </>

      <ListProduct arr={product} />
    </>
  );
};
