import { useEffect } from "react";
import Nav from "../components/Navbar/Nav";

import Link from "next/link";

import { useSelector, useDispatch } from "react-redux";
import { resetCart } from "../redux/cartRedux";

import axios from "axios";

const successorder = () => {
  const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
  const currentUser = user && JSON.parse(user).currentUser;
  const TOKEN = currentUser?.accessToken;
  const productsItem = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  const totalPrice = () => {
    let total = 0;
    productsItem.forEach((item) => {
      total += item.quantity * item.price;
    });
    return total.toFixed(2);
  };

  const createOrder = async () => {
    try {
      const res = await axios
        .post(
          "http://localhost:5000/api/orders",
          {
            userId: currentUser._id,
            products: productsItem.map((item) => ({
              productId: item._id,
              quantity: item._quantity,
            })),
            amount: totalPrice(),
          },
          {
            headers: {
              token: `Bearer ${TOKEN}`,
            },
          }
        )
        .then((resp) => {
          console.log(resp.data);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    createOrder();
  }, [productsItem]);
  return (
    <div>
      <Nav />
      <div className="p-2.5 md:p-x-5 pt-20">
        <div className="flex items-center justify-center p-5">
          <Link href={{ pathname: "/" }}>
            <button
              className="font-semibold cursor-pointer p-2.5 border-2 border-gray-700"
              onClick={() => dispatch(resetCart())}
            >
              CONTINUE SHOPPING
            </button>
          </Link>
        </div>

        <div className="flex flex-col mx-[auto] max-w-[1000px]">
          <div className="w-full ">
            <h1 className="text-[28px] text-center text-[#45af4a] font-semibold">
              Your Order is Successfully Placed
            </h1>
            <div className="flex justify-between items-center mt-16">
              <h1 className="text-[20px] md:text-[26px] text-[#555] font-semibold">
                Reveiw Your Order
              </h1>
              <h1 className="text-[20px] md:text-[26px] text-[#555] font-semibold">
                Total Amount ₹{totalPrice()}
              </h1>
            </div>
          </div>
          <div className="">
            {productsItem.map((product) => (
              <div className="flex flex-col md:h-[300px] w-full md:flex-row justify-between pt-2 border-b-2">
                <div className="flex-2 flex flex-col md:flex-row w-full">
                  <div className="flex-1 flex justify-between items-center">
                    <img
                      src={product.img1}
                      className="w-[100%]  md:h-[100%] md:w-[60%] h-full object-cover p-1"
                    />
                    <img
                      src={product.img2}
                      className="w-[40%] hidden md:block md:h-[100%] md:w-[60%] object-cover p-1"
                    />
                  </div>
                  <div className=" flex flex-col flex-1 p-5 md:p-3">
                    <span className="text-[20px] md:text-[26px] text-[#555] font-semibold">
                      <p>{product.title}</p>
                    </span>
                    <span>
                      <p className="text-[gray] text-[16px] md:text-[20px] mb-2.5">
                        ID : {product._id}
                      </p>
                    </span>
                    <div className="flex items-start justify-between flex-col">
                      <div className="flex items-center justify-between text-[14px] md:text-[20px] w-1/2">
                        <span className="text-[#555] font-semibold">COLOR</span>
                        <span
                          className="w-5 h-5 rounded-[50%]"
                          style={{ backgroundColor: `${product.color}` }}
                        ></span>
                      </div>
                      <div className="flex items-center justify-between text-[14px] md:text-[20px] w-1/2">
                        <span className="text-[#555] font-semibold">SIZE</span>

                        <span className="text-[gray] ">
                          <p>{product.size}</p>
                        </span>
                      </div>
                    </div>
                    <div className="text-[#555] font-semibold pt-4">
                      {product.quantity} x {product.price}
                    </div>
                    <div className="text-3xl font-extralight mb-5 flex justify-between items-center">
                      <div>₹ {product.price * product.quantity}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default successorder;
