import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-7xl font-bold text-red-500 mb-4">404</h1>
      <p className="text-xl mb-6">
        Oops! The page you are looking for does not exist.
      </p>

      <Link
        to="/"
        className="px-6 py-2 bg-blue-600 text-white rounded"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;

