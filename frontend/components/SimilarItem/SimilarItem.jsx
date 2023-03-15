import React from "react";
import { useState, useEffect } from "react";

import axios from "axios";
import FeaturedCard from "../FeaturedItem/FeaturedCard";
import SimilaritemCard from "./SimilaritemCard";

const SimilarItem = ({ type }) => {
  const [productsdata, setProductsdata] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const getProductsdata = async () => {
    const res = await axios.get(
      type
        ? `https://trendz-vercel-api.vercel.app/api/products?category=${type}`
        : "https://trendz-vercel-api.vercel.app/api/products"
    );
    setProductsdata(res.data);
    setLoading(false);
  };
  useEffect(() => {
    setLoading(true);
    getProductsdata();
  }, [type]);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <div className="mx-[10px] md:mx-[50px] my-[50px]">
      <div className="mb-5 md:text-[22px] text-lg font-medium uppercase  after:block after:w-[70px] after:h-[3px] after:bg-[#2dafe2] after:mt-[5px]">
        Similar products
      </div>
      <div className="flex flex-wrap justify-between p-1 ">
        {productsdata.slice(0, 6).map((product) => (
          <SimilaritemCard product={product} />
        ))}
      </div>
    </div>
  );
};

export default SimilarItem;
