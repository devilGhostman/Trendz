import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginhandler } from "../redux/userRedux";
import { useRouter } from "next/router";

const login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();
  const { isFetching, error } = useSelector((state) => state.user);

  const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
  const currentUser = user && JSON.parse(user).currentUser;

  const handleClick = (e) => {
    e.preventDefault();
    loginhandler(dispatch, { username, password });
  };

  const handleUser = (e) => {
    e.preventDefault();
    const user = {
      username: "user1",
      password: "123456789",
    };
    loginhandler(dispatch, user);
    // router.back();
  };

  useEffect(() => {
    if (currentUser !== null) {
      router.back();
    }
  }, [currentUser]);
  return (
    <div className="w-screen h-screen bg-cover flex items-center justify-center loginContainer">
      <div className="w-3/4 md:w-3/12 bg-[white] p-5">
        <h1 className="text-2xl font-light">SIGN IN</h1>
        <form className="flex flex-col">
          <input
            className="flex-[1] min-w-[40%] mx-0 my-2.5 p-2.5 border-black border-[1px]"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="flex-[1] min-w-[40%] mx-0 my-2.5 p-2.5 border-black border-[1px]"
            placeholder="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="w-2/5 bg-[teal] text-[white] cursor-pointer mb-2.5 px-5 py-[15px] border-[none]  self-end"
            onSubmit={handleClick}
            disabled={isFetching}
          >
            LOGIN
          </button>
          {error && (
            <span className="text-[red] my-[5px]">
              Wrong Credential entered...
            </span>
          )}

          <button
            className="w-full bg-[teal] text-[white] cursor-pointer mb-2.5 px-5 py-[15px] border-[none]  self-end"
            onClick={handleUser}
            disabled={isFetching}
          >
            LOGIN AS USER
          </button>
          <div className="flex justify-between items-center">
            <a
              href="/register"
              className="text-xs underline cursor-pointer mx-0 my-[5px]"
            >
              CREATE A NEW ACCOUNT
            </a>
            <a
              href="/"
              className="text-xs underline cursor-pointer mx-0 my-[5px]"
            >
              GO TO HOMEPAGE
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default login;
