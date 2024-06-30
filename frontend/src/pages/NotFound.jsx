import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { RiErrorWarningLine } from "react-icons/ri";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <RiErrorWarningLine className="text-red-600 text-9xl mb-4" />
      <h1 className="text-6xl font-bold mb-2">404</h1>
      <p className="text-xl mb-6">
        Oops! The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-blue-500 text-white text-lg font-semibold rounded-full flex items-center space-x-2 hover:bg-blue-600 transition"
      >
        <FaHome />
        <span>Go Back Home</span>
      </Link>
    </div>
  );
};

export default NotFound;
