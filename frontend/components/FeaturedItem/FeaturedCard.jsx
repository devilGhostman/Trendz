import React from "react";
import Link from "next/link";

const FeaturedCard = ({ product }) => {
  return (
    <Link
      href={{
        pathname: "/product/[id]",
        query: { id: product._id },
      }}
    >
      <div className="w-[163px] sm:w-[190px] md:w-[230px] flex flex-col gap-y-2.5 mb-[50px] hover:shadow-[0px_15px_15px_rgba(224,224,224,0.75)]">
        <div className=" w-full h-[300px] sm:h-[320] overflow-hidden relative border-2 group">
          <img
            className="mainImg w-full h-full object-cover absolute z-[1] "
            src={product.img1}
          />
          <img
            className="secondImg w-full h-full object-cover absolute group-hover:z-[2]"
            src={product.img2}
          />
          <h3 className="z-[3] absolute w-[45px] left-2 top-3 text-center bg-[white] text-[green] font-semibold">
            SALE
          </h3>
        </div>
        <div className="p-2 min-h-[120px] flex flex-col justify-between">
          <h2 className="text-base font-normal">{product.title}</h2>
          <div className="flex gap-2 sm:gap-5 justify-start items-center">
            <h3 className="text-lg font-medium text-[gray] line-through">
              ₹{product.price + product.price * 0.3}
            </h3>
            <span className="text-[green] font-bold">30%</span>
            <h3 className="text-lg font-semibold">₹{product.price}</h3>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default FeaturedCard;
