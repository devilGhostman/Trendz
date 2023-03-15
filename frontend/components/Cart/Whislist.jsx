import React from "react";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

import { useSelector, useDispatch } from "react-redux";
import { removeItem, resetWhislist } from "../../redux/whislistRedux";
import { addToCart } from "../../redux/cartRedux";

const Whislist = () => {
  const whislistCart = useSelector((state) => state.whislist);
  const dispatch = useDispatch();
  return (
    <div className="absolute z-[999] bg-[#fdf5fc] shadow-[0px_25px_25px_10px_rgb(105,105,105,0.75)] right-1 p-5 overflow-y-scroll h-[95vh] w-screen md:w-[500px]">
      <h1 className=" text-[gray] font-normal text-2xl mb-[30px]">
        Products in your Whislist
      </h1>
      {whislistCart.products?.map((item) => (
        <div className=" flex items-center gap-5 mb-[30px]" key={item._id}>
          <img
            src={item.img1}
            alt=""
            className=" w-20 h-[100px] object-cover"
          />
          <div>
            <h1 className="text-[#373737] text-lg font-medium">{item.title}</h1>
            <p className="text-[gray] text-sm mb-2.5">
              {item.desc?.substring(0, 100)}
            </p>
            <div className="text-[#2879fe] flex justify-between items-center">
              {item.quantity} x ₹{item.price}
              <button
                onClick={() => {
                  dispatch(addToCart(item));
                  dispatch(removeItem(item._id));
                }}
                className="text-[#2879fe] font-semibold"
              >
                Add To Cart
              </button>
            </div>
          </div>
          <DeleteOutlinedIcon
            className="delete text-[red] text-3xl cursor-pointer"
            onClick={() => dispatch(removeItem(item._id))}
          />
        </div>
      ))}
      <button
        className="w-full bg-[#fffefe] text-[#000000] font-semibold p-2.5 my-2 flex items-center justify-center gap-5 border-4 border-black"
        onClick={() => dispatch(resetWhislist())}
      >
        CLEAR CART
      </button>
    </div>
  );
};

export default Whislist;
