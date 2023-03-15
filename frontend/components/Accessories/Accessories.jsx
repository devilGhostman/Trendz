import React from "react";
import Link from "next/link";

const Accessories = () => {
  return (
    <>
      <div className="hidden md:block" id="accessories">
        <div className="mb-5 md:text-[22px] font-medium uppercase md:p-3 px-0  after:block after:w-[70px] after:h-[3px] after:bg-[#2dafe2] after:mt-[5px]">
          Accessories to choose
        </div>
        <div className="flex h-[80vh] gap-2.5 m-2.5">
          <div className="flex-[1] flex flex-col gap-2.5">
            <div className="flex-[1] flex gap-2.5 relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1544468266-6a8948003cd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2074&q=80"
                alt=""
                className=" w-full h-full object-cover"
              />
              <Link
                href={{
                  pathname: "/products/[category]",
                  query: { category: "Perfume" },
                }}
              >
                <button className="absolute min-w-[100px] w-fit h-[50px] cursor-pointer bg-[black] text-[white] uppercase font-semibold m-auto p-2.5 border-[none] inset-0">
                  PERFUMES
                </button>
              </Link>
            </div>
            <div className="flex-[1] flex gap-2.5 relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1583623733237-4d5764a9dc82?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                alt=""
                className=" w-full h-full object-cover"
              />
              <Link
                href={{
                  pathname: "/products/[category]",
                  query: { category: "Handbag" },
                }}
              >
                <button className="absolute min-w-[100px] w-fit h-[50px] cursor-pointer bg-[black] text-[white] uppercase font-semibold m-auto p-2.5 border-[none] inset-0">
                  HANDBAGS
                </button>
              </Link>
            </div>
          </div>
          <div className="flex-[1] flex flex-col gap-2.5">
            <div className="flex-[1] flex gap-2.5 relative overflow-hidden">
              <div className="flex-[1] flex gap-2.5 relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1611010344444-5f9e4d86a6e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                  alt=""
                  className=" w-full h-full object-cover"
                />
                <Link
                  href={{
                    pathname: "/products/[category]",
                    query: { category: "Backpack" },
                  }}
                >
                  <button className="absolute min-w-[100px] w-fit h-[50px] cursor-pointer bg-[black] text-[white] uppercase font-semibold m-auto p-2.5 border-[none] inset-0">
                    BACKPACKS
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex-[2] flex flex-col gap-2.5">
            <div className="flex-[1] flex gap-2.5 relative overflow-hidden">
              <div className="flex-[1] flex gap-2.5 relative overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                  className=" w-full h-full object-cover"
                />
                <Link
                  href={{
                    pathname: "/products/[category]",
                    query: { category: "Sunglass" },
                  }}
                >
                  <button className="absolute min-w-[100px] w-fit h-[50px] cursor-pointer bg-[black] text-[white] uppercase font-semibold m-auto p-2.5 border-[none] inset-0">
                    SUNGLASSES
                  </button>
                </Link>
              </div>
              <div className="flex-[1] flex gap-2.5 relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1617265859824-46910d1ad447?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=841&q=80"
                  alt=""
                  className=" w-full h-full object-cover"
                />
                <Link
                  href={{
                    pathname: "/products/[category]",
                    query: { category: "Watch" },
                  }}
                >
                  <button className="absolute min-w-[100px] w-fit h-[50px] cursor-pointer bg-[black] text-[white] uppercase font-semibold m-auto p-2.5 border-[none] inset-0">
                    WATCHES
                  </button>
                </Link>
              </div>
            </div>

            <div className="flex-[1] flex gap-2.5 relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1556906781-9a412961c28c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                alt=""
                className=" w-full h-full object-cover"
              />
              <Link
                href={{
                  pathname: "/products/[category]",
                  query: { category: "Shoes" },
                }}
              >
                <button className="absolute min-w-[100px] w-fit h-[50px] cursor-pointer bg-[black] text-[white] uppercase font-semibold m-auto p-2.5 border-[none] inset-0">
                  SHOES
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="block md:hidden">
        <div className="mb-5 text-lg font-medium uppercase px-3  after:block after:w-[70px] after:h-[3px] after:bg-[#2dafe2] after:mt-[5px]">
          Accessories to choose
        </div>
        <div className="flex h-[80vh] gap-2.5 m-2.5">
          <div className="flex-[1] flex flex-col gap-2.5">
            <div className="flex-[1] flex gap-2.5 relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1544468266-6a8948003cd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2074&q=80"
                alt=""
                className=" w-full h-full object-cover"
              />
              <Link
                href={{
                  pathname: "/products/[category]",
                  query: { category: "Perfume" },
                }}
              >
                <button className="absolute min-w-[100px] w-fit h-[50px] cursor-pointer bg-[black] text-[white] uppercase font-semibold m-auto p-2.5 border-[none] inset-0">
                  PERFUMES
                </button>
              </Link>
            </div>
            <div className="flex-[1] flex gap-2.5 relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1583623733237-4d5764a9dc82?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                alt=""
                className=" w-full h-full object-cover"
              />
              <Link
                href={{
                  pathname: "/products/[category]",
                  query: { category: "Handbag" },
                }}
              >
                <button className="absolute min-w-[100px] w-fit h-[50px] cursor-pointer bg-[black] text-[white] uppercase font-semibold m-auto p-2.5 border-[none] inset-0">
                  HANDBAGS
                </button>
              </Link>
            </div>
          </div>
          <div className="flex-[1] flex flex-col gap-2.5">
            <div className="flex-[1] flex gap-2.5 relative overflow-hidden">
              <div className="flex-[1] flex gap-2.5 relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1617265859824-46910d1ad447?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=841&q=80"
                  alt=""
                  className=" w-full h-full object-cover"
                />
                <Link
                  href={{
                    pathname: "/products/[category]",
                    query: { category: "Watch" },
                  }}
                >
                  <button className="absolute min-w-[100px] w-fit h-[50px] cursor-pointer bg-[black] text-[white] uppercase font-semibold m-auto p-2.5 border-[none] inset-0">
                    WATCHES
                  </button>
                </Link>
              </div>
            </div>

            <div className="flex-[1] flex gap-2.5 relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1556906781-9a412961c28c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                alt=""
                className=" w-full h-full object-cover"
              />
              <Link
                href={{
                  pathname: "/products/[category]",
                  query: { category: "Shoes" },
                }}
              >
                <button className="absolute min-w-[100px] w-fit h-[50px] cursor-pointer bg-[black] text-[white] uppercase font-semibold m-auto p-2.5 border-[none] inset-0">
                  SHOES
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Accessories;
