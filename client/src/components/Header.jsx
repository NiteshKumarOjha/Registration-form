import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="bg-black bg-opacity-90">
      <div className="flex justify-between items-center max-w-6xl mx-auto h-10">
        <div className="bg-yellow-200 flex items-center h-full p-3">
          <Link to="/">
            <h1 className="font-bold">Registration Form</h1>
          </Link>
        </div>
        <div>
          <ul className="flex gap-6 text-white mr-2">
            <Link to="/home">
              <li>Home</li>
            </Link>
            <Link to="/about">
              <li>About</li>
            </Link>
            <Link to="/sign-in">
              <li>Sign In</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
