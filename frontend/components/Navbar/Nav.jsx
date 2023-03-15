import React from "react";
import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ClearIcon from "@mui/icons-material/Clear";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";

import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";

import { logout } from "../../redux/userRedux";

import Cart from "../Cart/Cart";
import Whislist from "../Cart/Whislist";

const ROUTE_POST_ID = "product/[id]";

const Nav = () => {
  const cart = useSelector((state) => state.cart);
  const whislistcart = useSelector((state) => state.whislist);

  const [openCart, setOpenCart] = useState(false);
  const [openWhislist, setOpenWhislist] = useState(false);
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
  const currentUser = user && JSON.parse(user).currentUser;
  const dispatch = useDispatch();
  const router = useRouter();

  const getProductsdata = async () => {
    const res = await axios.get("http://localhost:5000/api/products");
    setProducts(res.data);
    setLoading(false);
  };
  useEffect(() => {
    setLoading(true);
    getProductsdata();
  }, []);

  const getSearchData = async (qsearch) => {
    console.log(qsearch);
    const res = await axios.get(
      `http://localhost:5000/api/products?search=${qsearch}`
    );
    console.log(res.data);
    setFilteredData(res.data);
  };

  useEffect(() => {
    if (wordEntered === "") {
      setFilteredData([]);
    } else {
      getSearchData(wordEntered);
    }
  }, [wordEntered]);

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    // const newFilter = products.filter((value) => {
    //   return value.title.toLowerCase().includes(searchWord.toLowerCase());
    // });

    // if (searchWord === "") {
    //   setFilteredData([]);
    // } else {
    //   setFilteredData(newFilter);
    // }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  const logoutHandler = () => {
    dispatch(logout());
    router.reload();
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="h-[50px] md:h-[60px] fixed z-[100] shadow-[0_4px_12px_0_rgba(0,0,0,0.05)] bg-[#1e1e1e] top-0 inset-x-0 text-white">
      <div className="flex items-center h-full">
        <div className="flex-2 flex  items-center h-full">
          <Link href={{ pathname: "/" }}>
            <div className="ml-[2%] ">
              <img src="/logo.png" className="w-[90px] h-[20px]" />
            </div>
          </Link>
          <div className=" float-left leading-[80px] hidden md:flex justify-center items-center h-full lg:px-8">
            <Link
              href={{
                pathname: "/products/[category]",
                query: { category: "Men" },
              }}
            >
              <div className="text-cente leading-[60px] tracking-[0.3px] text-[white] font-bold uppercase px-[17px] h-full hover:border-b-[7px] hover:border-blue-600">
                MEN
              </div>
            </Link>
            <Link
              href={{
                pathname: "/products/[category]",
                query: { category: "Women" },
              }}
            >
              <div className="text-cente leading-[60px] tracking-[0.3px] text-[white] font-bold uppercase px-[17px] h-full hover:border-b-[7px] hover:border-[#ff3e6c]">
                WOMEN
              </div>
            </Link>
            <Link
              href={{
                pathname: "/products/[category]",
                query: { category: "Kid" },
              }}
            >
              <div className="text-cente leading-[60px] tracking-[0.3px] text-[white] font-bold uppercase px-[17px] h-full hover:border-b-[7px] hover:border-[#ff7b3e]">
                CHILDREN
              </div>
            </Link>
            <Link href="/#accessories">
              <div className="text-cente leading-[60px] tracking-[0.3px] text-[white] font-bold uppercase px-[17px] h-full hover:border-b-[7px] hover:border-[#fbb500]">
                ACCESSORIES
              </div>
            </Link>
          </div>
        </div>
        <div className="flex-1 flex justify-between md:justify-end items-center hover:text-[white]">
          <div className="">
            <div className="flex items-center ml-[5px] md:ml-[25px] p-[5px] border-[0.5px] border-solid  border-[lightgray]">
              {filteredData.length === 0 ? (
                <Search className="text-[#7a7a7a] text-[20px] mx-4 hover:text-[white] " />
              ) : (
                <ClearIcon
                  className="text-[#7a7a7a] text-[20px] mx-4 hover:text-[white] hover:cursor-pointer"
                  id="clearBtn"
                  onClick={clearInput}
                />
              )}
              <input
                value={wordEntered}
                onChange={handleFilter}
                placeholder="Search for products"
                className="border-[none] bg-[#1e1e1e] w-[160px] md:w-[250px] "
              />
            </div>
            {filteredData.length != 0 && (
              <div className=" mt-1 max-h-[95vh] divide-y overflow-hidden overflow-y-auto shadow-md rounded-b-[2px] md:ml-[25px] right-0 md:right-[176px] w-full md:w-[318px] absolute">
                {filteredData.slice(0, 15).map((value) => {
                  return (
                    <Link
                      href={{
                        pathname: ROUTE_POST_ID,
                        query: { id: value._id },
                      }}
                    >
                      <div className=" bg-[#1c1c1c] border-t-2 border-[#3b3a3a] px-2 py-2 flex hover:bg-[#111010] hover:text-[#26a9e2] ">
                        <div className="max-w-[20%] ">
                          <img
                            src={value.img1}
                            alt=""
                            className="max-w-[50px] max-h-[50px] ml-2"
                          />
                        </div>
                        <p className="text-[#aaa] hover:cursor-pointer hover:text-[#26a9e2] text-[16px] px-2 self-center w-full">
                          {value.title.length > 25
                            ? `${value.title.substring(0, 25)}...`
                            : value.title}
                        </p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
          <div className="flex justify-center items-center ml-2">
            {currentUser === null ? (
              <Link href={{ pathname: "/login" }} reload>
                <div className="text-[12px] md:text-sm cursor-pointer mk-[10px] md:ml-[25px]">
                  <div className="cartIcon">
                    <PersonIcon />
                  </div>
                </div>
              </Link>
            ) : (
              <div
                className="text-[12px] md:text-sm cursor-pointer mk-[10px] md:ml-[25px]"
                onClick={logoutHandler}
              >
                <div className="cartIcon">
                  <LogoutIcon />
                </div>
              </div>
            )}
            <div className="text-[12px] md:text-sm cursor-pointer mk-[10px] md:ml-[25px]">
              <div onClick={() => setOpenWhislist(!openWhislist)}>
                <FavoriteBorderIcon />
                <span className="text-xs w-5 h-5 bg-[#c128fe] text-[white] absolute flex items-center justify-center rounded-[50%] right-[40px] md:right-[60px] top-2.5">
                  {whislistcart.products.length}
                </span>
              </div>
            </div>
            <div className="text-[12px] md:text-sm cursor-pointer mk-[10px] md:ml-[25px] pr-5">
              <div onClick={() => setOpenCart(!openCart)}>
                <ShoppingCartOutlined />
                <span className="text-xs w-5 h-5 bg-[#2879fe] text-[white] absolute flex items-center justify-center rounded-[50%] right-2.5 top-2.5">
                  {cart.products.length}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {openWhislist && <Whislist />}
      {openCart && <Cart />}
    </div>
  );
};

export default Nav;
