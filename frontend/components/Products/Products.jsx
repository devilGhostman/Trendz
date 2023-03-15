import Categorycard from "../Categories/Categorycard";

import { useEffect, useState } from "react";
import axios from "axios";

const Products = ({ categoryid, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          categoryid
            ? `http://localhost:5000/api/products?category=${categoryid}`
            : "http://localhost:5000/api/products?new=true"
        );
        setProducts(res.data);
      } catch (err) {}
    };
    getProducts();
  }, [categoryid]);

  useEffect(() => {
    categoryid &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, categoryid, filters]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);
  return (
    <div className="flex flex-wrap justify-between p-5">
      {categoryid
        ? filteredProducts
            .slice(0, 14)
            .map((item) => <Categorycard item={item} key={item.id} />)
        : products
            .slice(0, 7)
            .map((item) => <Categorycard item={item} key={item.id} />)}
    </div>
  );
};

export default Products;
