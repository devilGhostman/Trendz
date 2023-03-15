import Products from "../../components/Products/Products";
import Newsletter from "../../components/Newsletter/Newsletter";
import Footer from "../../components/Footer/Footer";
import Nav from "../../components/Navbar/Nav";

import { useRouter } from "next/router";
import { useState } from "react";

const ProductList = () => {
  const router = useRouter();
  const { categoryid } = router.query;

  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };

  return (
    <div>
      <Nav />
      <div className="mb-5 mt-[80px] mx-[20px] md:text-[32px] text-4xl font-semibold uppercase  after:block after:w-[70px] after:h-[3px] after:bg-[#2dafe2] after:mt-[5px]">
        {categoryid}
      </div>
      <div className=" flex justify-between">
        <div className="m-5  flex flex-col md:flex-row flex-1 md:justify-start md:items-center">
          <span className="text-xl font-semibold mr-0 md:mr-5 ">
            Filter Products:
          </span>
          <select
            className=" md:mr-5 md:p-2.5 mx-0 my-2.5 "
            name="color"
            onChange={handleFilters}
          >
            <option disabled selected>
              COLOR
            </option>
            <option>White</option>
            <option>Black</option>
            <option>Red</option>
            <option>Blue</option>
            <option>Yellow</option>
            <option>Green</option>
          </select>
          <select
            className=" md:mr-5 md:p-2.5 mx-0 my-2.5 "
            name="size"
            onChange={handleFilters}
          >
            <option disabled selected>
              SIZE
            </option>
            <option>XS</option>
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
          </select>
        </div>
        <div className="m-5 flex-1 flex-col items-end flex md:flex-row md:justify-end md:items-center">
          <span className="text-xl font-semibold mr-0 md:mr-5 ">
            Sort Products:
          </span>
          <select
            className=" md:mr-5 md:p-2.5 mx-0 my-2.5"
            onChange={(e) => setSort(e.target.value)}
          >
            <option selected value="newest">
              NEWEST
            </option>
            <option value="asc">Price (asc)</option>
            <option value="desc">Price (des)</option>
          </select>
        </div>
      </div>
      <Products categoryid={categoryid} filters={filters} sort={sort} />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default ProductList;
