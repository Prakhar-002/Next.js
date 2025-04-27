import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-8">
      <div className="text-center p-6 bg-white shadow-lg rounded-lg max-w-lg w-full">
        <h1 className="text-4xl font-bold text-red-600 mb-4">
          404 - Page Not Found
        </h1>
        <p className="text-xl text-gray-700 mb-4">
          The page you're looking for does not exist.
        </p>
        <p className="text-lg text-gray-600">
          You might want to check the URL or
          <Link
            href="/"
            className="text-blue-500 hover:text-blue-700 font-semibold ml-1"
          >
            go back to the homepage
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default NotFound;
