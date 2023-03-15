import React from "react";
import Link from "next/link";

const CategoryItem = ({ item }) => {
  return (
    <div className="flex-[1] h-[70vh] relative m-[3px]">
      <Link
        href={{
          pathname: "/products/[category]",
          query: { category: item.cat },
        }}
      >
        <img src={item.img} className=" w-full h-full object-cover" />
        <div className="absolute w-full h-full flex flex-col items-center justify-center left-0 top-0">
          <h1 className="text-[white] mb-5">{item.title}</h1>
          <button className="bg-[black] text-[white] cursor-pointer font-semibold p-2.5 border-[none]">
            SHOP NOW
          </button>
        </div>
      </Link>
    </div>
  );
};

export default CategoryItem;
