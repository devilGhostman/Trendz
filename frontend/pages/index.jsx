import Head from "next/head";
import React from "react";
import Categories from "../components/Categories/Categories";
import Footer from "../components/Footer/Footer";
import Newsletter from "../components/Newsletter/Newsletter";
import Products from "../components/Products/Products";
import Slider from "../components/Navbar/Slider";
import Accessories from "../components/Accessories/Accessories";
import Nav from "../components/Navbar/Nav";
import FeaturedProduct from "../components/FeaturedItem/FeaturedProduct";

export default function Home() {
  return (
    <>
      <Head>
        <title>TRENDZ</title>
        <meta name="description" content="Fashion Store" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <Slider />
      <FeaturedProduct />
      <Categories />
      <div className="my-4 mx-3 md:text-[22px] text-lg font-medium uppercase  after:block after:w-[70px] after:h-[3px] after:bg-[#2dafe2] after:mt-[5px]">
        New Arrival
      </div>
      <Products />
      <Accessories />
      <Newsletter />
      <Footer />
    </>
  );
}
