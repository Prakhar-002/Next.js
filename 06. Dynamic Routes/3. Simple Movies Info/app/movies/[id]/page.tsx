import { FaStar } from "react-icons/fa";

interface MovieProps {
  params: {
    id: string;
  };
}

export default function MovieDetails({ params }: MovieProps) {
  const movies = [
    {
      id: "1",
      title: "Inception",
      comments: 124,
      rating: 4.7,
      description: "A mind-bending thriller by Christopher Nolan.",
      commentsList: ["Great movie!", "Mind-blowing!", "A true masterpiece."],
    },
    {
      id: "2",
      title: "Interstellar",
      comments: 98,
      rating: 4.8,
      description: "A space exploration film by Christopher Nolan.",
      commentsList: [
        "Amazing visual effects!",
        "Loved the soundtrack.",
        "A bit confusing but great.",
      ],
    },
    {
      id: "3",
      title: "The Dark Knight",
      comments: 255,
      rating: 4.9,
      description: "The iconic Batman film directed by Christopher Nolan.",
      commentsList: [
        "The best Batman movie!",
        "Heath Ledger was outstanding.",
        "Iconic movie.",
      ],
    },
  ];

  const movie = movies.find((movie) => movie.id === params.id);

  return (
    <div className="p-8 space-y-8 bg-gray-900 min-h-screen">
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-8 rounded-xl shadow-lg">
        <h2 className="text-4xl font-semibold text-white mb-4">
          {movie?.title}
        </h2>
        <p className="text-lg text-gray-300">{movie?.description}</p>
      </div>

      <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
        <div className="flex justify-between items-center mb-6">
          <div>
            <p className="text-xl text-gray-300">Rating:</p>
            <div className="flex items-center text-yellow-400">
              <FaStar className="mr-1" />
              <span className="text-2xl font-bold">{movie?.rating}</span> / 5
            </div>
          </div>
          <div>
            <p className="text-xl text-gray-300">Comments:</p>
            <p className="text-2xl font-semibold text-white">
              {movie?.comments} comments
            </p>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-3xl font-semibold text-white mb-4">Comments</h3>
        <ul className="space-y-4">
          {movie?.commentsList.map((comment, index) => (
            <li
              key={index}
              className="bg-gray-800 p-4 rounded-lg hover:shadow-xl transition-shadow duration-300"
            >
              <p className="text-gray-300">{comment}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
