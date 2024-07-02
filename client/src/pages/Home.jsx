import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen  ">
      <div className="px-4 py-12 max-w-3xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-lg">
          You are at Home!
        </h1>
      </div>
    </div>
  );
}
