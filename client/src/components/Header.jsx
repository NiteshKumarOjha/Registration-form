import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className="bg-black bg-opacity-90">
      <div className="flex justify-between items-center max-w-6xl mx-auto h-10">
        <div className="bg-yellow-200 flex items-center h-full p-3">
          <Link to="/">
            <h1 className="font-bold">Registration Form</h1>
          </Link>
        </div>
        <div>
          <ul className="flex gap-6 text-white mr-6">
            <Link to="/home">
              <li>Home</li>
            </Link>
            <Link to="/about">
              <li>About</li>
            </Link>
            <Link to="/profile">
              {currentUser ? (
                <img
                  src={currentUser.profilePicture}
                  alt="profile"
                  className="h-7 w-7 rounded-full object-cover"
                />
              ) : (
                <li>Sign In</li>
              )}
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
