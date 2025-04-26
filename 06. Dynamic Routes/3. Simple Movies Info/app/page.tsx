import Link from "next/link";
import { FaStar, FaComment } from "react-icons/fa";

export default function Dashboard() {
  const movies = [
    {
      id: "1",
      title: "Inception",
      comments: 124,
      rating: 4.7,
      description: "A mind-bending thriller by Christopher Nolan.",
    },
    {
      id: "2",
      title: "Interstellar",
      comments: 98,
      rating: 4.8,
      description: "A space exploration film by Christopher Nolan.",
    },
    {
      id: "3",
      title: "The Dark Knight",
      comments: 255,
      rating: 4.9,
      description: "The iconic Batman film directed by Christopher Nolan.",
    },
  ];

  const totalMovies = movies.length;
  const totalComments = movies.reduce((sum, movie) => sum + movie.comments, 0);
  const averageRating = (
    movies.reduce((sum, movie) => sum + movie.rating, 0) / movies.length
  ).toFixed(1);

  return (
    <div className="p-8 space-y-8 bg-gray-900 min-h-screen">
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-6 rounded-xl shadow-lg">
        <h2 className="text-3xl font-semibold text-white mb-4">
          Dashboard Overview
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-white">
          <div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center">
            <p className="text-lg font-medium">Total Movies</p>
            <p className="text-4xl font-bold">{totalMovies}</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center">
            <p className="text-lg font-medium">Total Comments</p>
            <p className="text-4xl font-bold">{totalComments}</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center">
            <p className="text-lg font-medium">Average Rating</p>
            <p className="text-4xl font-bold">{averageRating} / 5</p>
          </div>
        </div>
      </div>

      <h2 className="text-3xl font-semibold text-white">Movie List</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {movies.map((movie) => (
          <li
            key={movie.id}
            className="bg-gray-800 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <Link
              href={`/movies/${movie.id}`}
              className="text-2xl font-bold text-blue-400 hover:text-blue-600"
            >
              {movie.title}
            </Link>
            <p className="text-gray-400 text-sm mt-2">{movie.description}</p>

            <div className="flex justify-between items-center mt-4">
              <div className="flex items-center text-sm text-gray-300">
                <FaComment className="mr-1" />
                <span>{movie.comments}</span>
              </div>
              <div className="flex items-center text-sm text-yellow-400">
                <FaStar className="mr-1" />
                <span>{movie.rating}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
