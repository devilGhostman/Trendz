import React from "react";
import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import Link from "next/link";

import { addToCart } from "../../redux/cartRedux";
import { addToWhislist } from "../../redux/whislistRedux";
import { useDispatch } from "react-redux";

const Categorycard = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <div className="w-[180px] md:w-[230px] flex flex-col gap-y-2.5 mb-[50px]  p-1 hover:shadow-[0px_15px_15px_rgba(224,224,224,0.75)]">
      <div className=" w-full h-[320px] overflow-hidden relative border-2 group">
        <img
          className="mainImg w-full h-full object-cover absolute z-[1] "
          src={item.img1}
        />

        <img
          className="secondImg w-full h-full object-cover absolute group-hover:z-[2]"
          src={item.img2}
        />
        <div className="z-[3] absolute w-[50px] left-2 bottom-3 text-center bg-[#e1e0e0] text-[#797979]  font-semibold flex justify-center items-center p-1">
          {/* <h2
            className="w-5 h-5 cursor-pointer mx-[5px] my-0 rounded-[50%]"
            style={{ backgroundColor: `${item.color}` }}
          >
          </h2> */}
          <h3>₹{item.price}</h3>
        </div>
        <div className="opacity-0 hover:opacity-100 w-full h-full absolute bg-[rgba(0,0,0,0.2)] z-[3] flex items-center justify-center transition-all duration-[0.5s] ease-[ease] cursor-pointer left-0 top-0">
          <div
            className="w-10 h-10 bg-[white] flex items-center justify-center transition-all duration-[0.5s] ease-[ease] m-2.5 rounded-[50%] hover:bg-[#2879fe] hover:text-[white] hover:scale-110"
            onClick={() => {
              dispatch(
                addToCart({
                  ...item,
                  quantity: 1,
                  color: item.color[0],
                  size: item.size[0],
                })
              );
            }}
          >
            <ShoppingCartOutlined />
          </div>
          <Link
            href={{
              pathname: "/product/[id]",
              query: { id: item._id },
            }}
          >
            <div className="w-10 h-10 bg-[white] flex items-center justify-center transition-all duration-[0.5s] ease-[ease] m-2.5 rounded-[50%] hover:bg-[#e9f5f5]  hover:scale-110">
              <SearchOutlined />
            </div>
          </Link>
          <div
            className="w-10 h-10 bg-[white] flex items-center justify-center transition-all duration-[0.5s] ease-[ease] m-2.5 rounded-[50%] hover:bg-[#c22cfe] hover:text-[white] hover:scale-110"
            onClick={() => {
              dispatch(
                addToWhislist({
                  ...item,
                  quantity: 1,
                  color: item.color[0],
                  size: item.size[0],
                })
              );
            }}
          >
            <FavoriteBorderOutlined />
          </div>
        </div>
      </div>
      <div className="w-full p-1">
        <div className="flex flex-col justify-center w-full ">
          <h2 className="text-[15px] font-semibold">{item.title}</h2>
          <h2 className="text-[16px] text-[#838282] font-normal">
            {item.company}
          </h2>
          {/* <h2 className="text-base font-semibold">{item.price}</h2> */}
        </div>
      </div>
    </div>
  );
};

export default Categorycard;
