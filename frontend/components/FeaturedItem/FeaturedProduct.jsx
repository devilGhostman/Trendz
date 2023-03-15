import React from "react";
import { useState, useEffect } from "react";

import axios from "axios";
import FeaturedCard from "./FeaturedCard";

const FeaturedProduct = () => {
  const [productsdata, setProductsdata] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const getProductsdata = async () => {
    const res = await axios.get(
      "https://trendz-vercel-api.vercel.app/api/products"
    );
    setProductsdata(res.data);
    setLoading(false);
  };
  useEffect(() => {
    setLoading(true);
    getProductsdata();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <div className="mx-[10px] md:mx-[50px] my-[50px]">
      <div className="hidden md:flex items-center justify-between mb-[100px] mx-[30px] py-[50px]">
        <h1 className="flex-[2] capitalize"> products</h1>
        <p className=" flex-[3] text-[gray]">
          You can spruce up your style with the right clothing.<b>Trendz</b> is
          home to some of the best cloths for men, for kids, and for women.
          Brands such as Wrangler, Levi’s, Lee, W, Peter England, and U.S. Polo
          Assn have a wide selection of chinos, jeans, shorts, and more. So,
          depending on your preferred style you are definitely going to find
          something that will find its worthy place in your wardrobe. Some of
          the clothing for women that you can shop for include shorts, plaited
          skirts, pencil skirts, ripped jeans, and cargo pants. Some of the
          clothing for men that you should keep an eye out for include striped
          chinos, formal trousers, knee-length jeans, and ripped shorts. Be sure
          to keep a good balance of colours in your selection. Besides the
          mandatory black and beige pants, you can also opt for trousers that
          come in colours such as olive green, brown, yellow, grey, and white.
          With these clothing items, we are sure that you will be the centre of
          attention, wherever you go, thanks to your impeccable sense of
          dressing. Oh, and feel free to enhance your look with some
          accessories. Even wearing a simple watch can go a long way in
          redefining your look.
        </p>
      </div>
      <div className="mb-5 md:text-[22px] text-lg font-medium uppercase  after:block after:w-[70px] after:h-[3px] after:bg-[#2dafe2] after:mt-[5px]">
        Products On sale
      </div>
      <div className="flex flex-wrap justify-between p-1 ">
        {productsdata
          .filter((product) => product.onSale == "true")
          .map(
            (product) => (
              console.log(product), (<FeaturedCard product={product} />)
            )
          )}
      </div>
    </div>
  );
};

export default FeaturedProduct;
