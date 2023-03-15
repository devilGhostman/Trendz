import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

import Footer from "../components/Footer/Footer";
import Nav from "../components/Navbar/Nav";

import Link from "next/link";

import { useSelector, useDispatch } from "react-redux";
import { removeItem, resetCart } from "../redux/cartRedux";

import axios from "axios";
import { useRouter } from "next/router";

const Cart = () => {
  const products = useSelector((state) => state.cart.products);
  const whislistProducts = useSelector((state) => state.whislist.products);

  const dispatch = useDispatch();
  const router = useRouter();

  const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
  const currentUser = user && JSON.parse(user).currentUser;

  const totalPrice = () => {
    let total = 0;
    products.forEach((item) => {
      total += item.quantity * item.price;
    });
    return total.toFixed(2);
  };

  // const stripePromise = loadStripe(
  //   "pk_test_51MbRAOSDLJRPwTLsU2UeC69X16C9WnxhXrtZCQYQdg2Xwos5o8Gidar0o3dGmFunsgvY6fXd37TxcmqBrJBjSSSF00HEwBCGK3"
  // );
  const handlePayment = async () => {
    if (!currentUser) {
      router.push("/login");
    } else {
      try {
        await axios
          .post("https://trendz-vercel-api.vercel.app/api/checkout/payment", {
            products,
          })
          .then((resp) => {
            if (resp.data) {
              var redirectPath = resp.data.url;
              router.push(`${redirectPath}`);
              //   sessionId: res.data.id,
            }
          });
      } catch (err) {
        console.log(err);
      }
    }
  };
  return (
    <div>
      <Nav />

      <div className="p-2.5 md:p-x-5 pt-10">
        <h1 className="font-light text-center">YOUR BAG</h1>

        <div className="flex items-center justify-between p-5">
          <Link href={{ pathname: "/" }}>
            <button className="font-semibold cursor-pointer p-2.5 border-2 border-gray-700">
              CONTINUE SHOPPING
            </button>
          </Link>
          <div className="hidden md:block">
            <span className="underline cursor-pointer mx-2.5 my-0">
              Shopping Bag({products.length})
            </span>
            <span className="underline cursor-pointer mx-2.5 my-0">
              Your Wishlist ({whislistProducts.length})
            </span>
          </div>
          <button
            className="font-semibold cursor-pointer p-2.5 bg-[black] text-[white] border-2 border-gray-300"
            onClick={handlePayment}
          >
            CHECKOUT NOW
          </button>
        </div>

        <div className="flex flex-col md:flex-row mx-2.5">
          <div className="flex-1">
            {products.map((product) => (
              <div className="flex flex-col md:flex-row justify-between pt-4 border-b-2">
                <div className="flex-2 flex flex-col md:flex-row">
                  <div className="flex-1 flex justify-center">
                    <img
                      src={product.img1}
                      className="w-[80%] md:h-[95%] md:w-[90%] object-cover"
                    />
                  </div>
                  <div className=" flex flex-col flex-1 pr-5 md:py-2">
                    <span className="text-[26px] text-[#555] font-semibold">
                      <p>{product.title}</p>
                    </span>
                    <span>
                      <p className="text-[gray] text-[20px] mb-2.5">
                        ID : {product._id}
                      </p>
                    </span>
                    <p className="text-[gray] text-[16px] mb-2.5 border-b-4 pb-4">
                      {product.desc}
                    </p>
                    <div className="flex items-start justify-between flex-col border-b-4 pb-4">
                      <div className="flex items-center justify-between text-[20px] w-1/2">
                        <span className="text-[#555] font-semibold">COLOR</span>
                        <span
                          className="w-5 h-5 rounded-[50%]"
                          style={{ backgroundColor: `${product.color}` }}
                        ></span>
                      </div>
                      <div className="flex items-center justify-between text-[20px] w-1/2">
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
                      <div>
                        <DeleteOutlinedIcon
                          className="delete text-[red] text-3xl cursor-pointer"
                          onClick={() => dispatch(removeItem(product._id))}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex-1 h-[50vh]  p-5 rounded-[10px] border-[0.5px] border-solid border-[lightgray]">
            <h1 className="font-extralight"> ORDER SUMMARY</h1>
            <div className="flex justify-between mx-0 my-[30px]">
              <span>SUBTOTAL</span>
              <span>₹ {totalPrice()}</span>
            </div>
            <div className="flex justify-between mx-0 my-[30px]">
              <span>Estimated Shipping</span>
              <span>₹ 50.00</span>
            </div>
            <div className="flex justify-between mx-0 my-[30px]">
              <span>Shipping Discount</span>
              <span>₹ -50.00</span>
            </div>
            <div className="flex justify-between mx-0 my-[30px] font-medium text-2xl">
              <span>TOTAL</span>
              <span>₹ {totalPrice()}</span>
            </div>
            <button
              className="w-full bg-[black] text-[white] font-semibold p-2.5"
              onClick={handlePayment}
            >
              CHECKOUT
            </button>
            <button
              className="w-full bg-[#fffefe] text-[#000000] font-semibold p-2.5 my-2 flex items-center justify-center gap-5 border-4 border-black"
              onClick={() => dispatch(resetCart())}
            >
              CLEAR CART
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
