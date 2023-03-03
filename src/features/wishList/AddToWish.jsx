import { useState } from "react";
import { AiOutlineHeart, AiTwotoneHeart } from "react-icons/ai";
import { useDispatch } from "react-redux";

import { addToWishList, removeFromWishList } from "./wishListSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const AddToWish = ({ id, price, title }) => {
  const [likecolor, setLikeColor] = useState(false);
  const dispatch = useDispatch();
  const handleLike = () => {
    if (!likecolor) {
      setLikeColor(true);
      const notify = () => toast("Item Added to WishList !");
      notify();
      dispatch(addToWishList({ id: id, price: price, product: title }));
    } else {
      setLikeColor(false);
      dispatch(removeFromWishList(id));
    }
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          alignitem: "center",
        }}
      >
        {likecolor ? (
          <>
            <AiTwotoneHeart
              size={30}
              style={{ color: "red", cursor: "pointer" }}
              onClick={handleLike}
            />
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
            />
          </>
        ) : (
          <AiOutlineHeart
            size={30}
            style={{ cursor: "pointer" }}
            onClick={handleLike}
          />
        )}
      </div>
    </>
  );
};

export default AddToWish;
