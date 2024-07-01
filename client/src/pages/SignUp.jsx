import React from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div>
      <div className=" text-white p-3 max-w-md mx-auto">
        <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Username"
            id="username"
            className="bg-slate-100 p-3 rounded-lg"
          />
          <input
            type="email"
            placeholder="Email"
            id="email"
            className="bg-slate-100 p-3 rounded-lg"
          />
          <input
            type="password"
            placeholder="Password"
            id="password"
            className="bg-slate-100 p-3 rounded-lg"
          />
          <button className="bg-yellow-200 opacity-95 text-black text-bold p-3 rounded-lg uppercase hover:opacity-85 disabled: opacity-80">
            Sign Up
          </button>
        </form>
        <div className="flex gap-2 mt-5">
          <p>Already a member?</p>
          <Link to="/sign-in">
            <span className="text-blue-500">Sign In</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
