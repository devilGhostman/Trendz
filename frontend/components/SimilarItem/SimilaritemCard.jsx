import React from "react";
import Link from "next/link";

const SimilaritemCard = ({ product }) => {
  return (
    <Link
      href={{
        pathname: "/product/[id]",
        query: { id: product._id },
      }}
    >
      <div className="w-[190px] md:w-[230px] flex flex-col gap-y-2.5 mb-[50px] border-2 hover:shadow-[0px_15px_15px_rgba(224,224,224,0.75)]">
        <div className=" w-full h-[320px] overflow-hidden relative border-2 group">
          <img
            className="mainImg w-full h-full object-cover absolute z-[1] "
            src={product.img1}
          />
          <img
            className="secondImg w-full h-full object-cover absolute group-hover:z-[2]"
            src={product.img2}
          />
        </div>
        <div className="flex flex-col p-2  items-start justify-center">
          <h2 className="text-base font-semibold">{product.title}</h2>
          <h3 className="text-lg font-bold text-[gray]">₹{product.price}</h3>
        </div>
      </div>
    </Link>
  );
};

export default SimilaritemCard;
