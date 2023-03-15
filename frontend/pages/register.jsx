import axios from "axios";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/router";

const register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState(false);

  const router = useRouter();

  const handleRegister = (e) => {
    e.preventDefault();
    const userData = {
      username,
      email,
      password,
    };

    axios
      .post("http://localhost:5000/api/auth/register", userData)
      .then((res) => console.log(res.data))
      .catch((error) => console.log(error))
      .then(() => setStatus(true))
      .then(() => router.back());
  };

  return (
    <div className="w-screen h-screen bg-cover flex items-center justify-center registerContainer">
      <div className="w-3/4 md:w-2/5 bg-[white] p-5">
        <h1 className="text-2xl font-light"> CREATE AN ACCOUNT</h1>
        <form className="flex flex-wrap">
          <input
            className="flex-[1] min-w-[40%] ml-0 mr-2.5 mt-5 mb-0 p-2.5 border-black border-[1px]"
            placeholder="First Name"
          ></input>
          <input
            className="flex-[1] min-w-[40%] ml-0 mr-2.5 mt-5 mb-0 p-2.5  border-black border-[1px]"
            placeholder="Last Name"
          ></input>
          <input
            className="flex w-full min-w-[40%] ml-0 mr-2.5 mt-5 mb-0 p-2.5  border-black border-[1px]"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          ></input>
          <input
            className="flex w-full min-w-[40%] ml-0 mr-2.5 mt-5 mb-0 p-2.5  border-black border-[1px]"
            placeholder="Email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <input
            className="flex w-full min-w-[40%] ml-0 mr-2.5 mt-5 mb-0 p-2.5  border-black border-[1px]"
            placeholder="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <span className="text-xs mx-0 my-5">
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </span>
          {status && (
            <div className="flex justify-center items-center w-full my-4 text-[#006666] text-[20px]">
              <h3>Successfully Created Account</h3>
            </div>
          )}
          <div className="flex justify-end w-full">
            <button
              className="w-2/5 bg-[teal] text-[white] cursor-pointer px-5 py-[15px] border-[none] self-end"
              onSubmit={handleRegister}
            >
              CREATE
            </button>
          </div>
          <div className="flex justify-between items-center">
            <a
              href="/login"
              className="text-xs underline cursor-pointer mx-0 my-[5px]"
            >
              ALREADY HAVE ACCOUNT
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

export default register;
