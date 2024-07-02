import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../redux/user/userSlice";

import { useDispatch, useSelector } from "react-redux";

export default function SignIn() {
  const [formData, setFormData] = useState({});

  const { loading, error } = useSelector((state) => state.user);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      dispatch(signInStart());
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success === false) {
        dispatch(signInFailure(data.error));
        return;
      }

      dispatch(signInSuccess(data));
      navigate("/");
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };

  return (
    <div>
      <div className="text-white p-3 max-w-md mx-auto">
        <h1 className="text-3xl text-center font-semibold my-7">Sign In</h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 text-black"
        >
          <input
            type="email"
            placeholder="Email"
            id="email"
            className="bg-slate-100 p-3 rounded-lg placeholder-[#555]"
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="Password"
            id="password"
            className="bg-slate-100 p-3 rounded-lg placeholder-[#555]"
            onChange={handleChange}
          />
          <button
            disabled={loading}
            className="bg-yellow-200 opacity-95 text-black text-bold p-3 rounded-lg uppercase hover:opacity-85 disabled:opacity-80"
          >
            {loading ? "Loading..." : "Sign In"}
          </button>
        </form>
        <div className="flex gap-2 mt-5">
          <p>Not a member?</p>
          <Link to="/sign-up">
            <span className="text-blue-500">Register Now</span>
          </Link>
        </div>
        {error && <p className="text-red-700 mt-5">{error}</p>}
      </div>
    </div>
  );
}
