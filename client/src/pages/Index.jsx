import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen  ">
      <div className="px-4 py-12 max-w-3xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-lg">
          Welcome
          <br />
          to my
          <br />
          Registration App!
        </h1>
        <p className="mt-10 text-md sm:text-xl md:text-2xl lg:text-3xl text-gray-200">
          We are excited to have you here.
          <br />
          Please sign up and get started!
        </p>
        <Link to="/sign-up">
          <button className="mt-8 px-6 py-3 bg-yellow-200 text-black font-semibold text-lg rounded-lg shadow-md hover:bg-yellow-400 transition duration-300 ease-in-out">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
}
