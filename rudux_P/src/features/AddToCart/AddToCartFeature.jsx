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
import { totalAmt } from "./Total";
import { RotatingLines } from "react-loader-spinner";
import { WishList } from "../wishList/WishList";

export const AddToCartFeature = () => {
  const [product, setProduct] = useState(null);
  const [cart, setCart] = useState(false);
  const wishList = useSelector((state) => state.addToWishList.wishList);
  console.log("SK@wishList", wishList);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 800,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  const [open, setOpen] = React.useState(false);
  const [openWishList, setOpenWishList] = React.useState(false);

  const handleOpen = () => {
    cart ? setCart(false) : setCart(true);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const openWishListFunc = () => {
    openWishList ? setOpenWishList(false) : setOpenWishList(true);
    setOpen(true);
  };
  const closeWishList = () => {
    setOpenWishList(false);
  };

  useEffect(() => {
    getRequest().then((data) => setProduct(data));
  }, []);

  return (
    <>
      <CartDiv>
        <h1>List of Products</h1>
        <Button onClick={handleOpen}>Cart:{totalAmt().totalQuantity}</Button>
        <Button onClick={openWishListFunc}>WishList:{wishList.length}</Button>
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
      {product ? (
        <>
          <ListProduct arr={product} />
        </>
      ) : (
        <RotatingLines
          strokeColor="grey"
          strokeWidth="5"
          animationDuration="0.75"
          width="100"
          visible={true}
        />
      )}
      {openWishList && (
        <Modal
          open={open}
          onClose={closeWishList}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              <WishList />
            </Typography>
            {/* <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </Typography> */}
          </Box>
        </Modal>
      )}
    </>
  );
};
