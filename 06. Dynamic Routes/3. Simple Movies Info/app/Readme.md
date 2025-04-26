<h1  align="center" > 🏕️ 𝐒𝗂ꭑρᥣ𝖾 𝐌ⱺ𝗏𝗂𝖾𝗌 𝚰𐓣𝖿ⱺ 🏚️</h1>

<h1  align="center" > 

<img src="https://github.com/user-attachments/assets/af9ff901-b188-4648-b922-9d17c74a6cbc"/>

</h1>

<h3 align="center" > 🐇 Home Page  🦚</h3>

```dash
http://localhost:3000/
```

```TSX
//============ 🗂️App/⚛️page.tsx ============== 

import Link from "next/link";
import { FaStar, FaComment } from "react-icons/fa";
import { movies } from "./movies/[id]/movieData";

const Home = () => {

  const totalMovies = movies.length;
  const totalComments = movies.reduce((sum, movie) => sum + movie.comments, 0);
  const averageRating = (
    movies.reduce((sum, movie) => sum + movie.rating, 0) / movies.length
  ).toFixed(1);

  const stats = [
    { label: "Total Movies", value: totalMovies },
    { label: "Total Comments", value: totalComments },
    { label: "Average Rating", value: `${averageRating} / 5` },
  ];


  return (
    <div className="min-h-screen p-8 space-y-14 bg-gradient-to-br from-[#0a0a0d] via-[#0f0f10] to-[#111113]">

      {/* Dashboard Overview */}
      <section className="bg-[#121217] p-10 rounded-3xl shadow-2xl backdrop-blur-sm">
        <h2 className="text-4xl font-bold text-purple-400 mb-12 tracking-tight">
          Dashboard Overview
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          {stats.map(({ label, value }, idx) => (
            <div
              key={idx}
              className="bg-[#1a1a20] p-6 rounded-2xl flex flex-col items-center justify-center hover:bg-[#202028] transition duration-300 shadow-md hover:shadow-xl"
            >
              <p className="text-lg font-medium text-gray-400">{label}</p>
              <p className="text-4xl font-extrabold text-white mt-2">{value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Movie List */}
      <section>
        <h2 className="text-4xl font-bold text-indigo-400 mb-12 tracking-tight">
          Movie List
        </h2>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {movies.map(({ id, title, description, comments, rating }) => (
            <li
              key={id}
              className="bg-[#121217] p-8 rounded-3xl shadow-md hover:shadow-2xl
                                          hover:scale-105 transition-transform duration-300 group"
            >
              <Link
                href={`/movies/${id}`}
                className="block text-2xl font-bold text-purple-300 group-hover:text-purple-400 transition-colors mb-4"
              >
                {title}
              </Link>

              <p className="text-gray-400 text-sm mb-6">{description}</p>

              <div className="flex justify-between items-center text-sm">
                <div className="flex items-center gap-2 text-gray-400">
                  <FaComment className="text-green-500" />
                  <span>{comments}</span>
                </div>

                <div className="flex items-center gap-2 text-yellow-400">
                  <FaStar />
                  <span>{rating}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Home
```

</br>

<h3 align="center" > 🐇 Movies Page  🦚</h3>

```dash
http://localhost:3000/movies
```

```TSX
//============ 🗂️movies/⚛️page.tsx ============== 

import Link from "next/link";

export default function MoviesPage() {
  const movies = [
    { id: "1", title: "Inception" },
    { id: "2", title: "Interstellar" },
    { id: "3", title: "The Dark Knight" },
    { id: "4", title: "The Matrix" },
    { id: "5", title: "The Shawshank Redemption" },
    { id: "6", title: "Avatar" },
    { id: "7", title: "Gladiator" },
    { id: "8", title: "Pulp Fiction" },
    { id: "9", title: "Fight Club" },
    { id: "10", title: "The Godfather" },
  ];

  return (
    <div className="min-h-screen p-8 bg-gradient-to-br from-[#0a0a0d] via-[#0f0f10] to-[#111113]">

      <h2 className="text-4xl font-bold text-indigo-400 mb-12 tracking-tight">
        Movies List
      </h2>

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {movies.map(({ id, title }) => (
          <li
            key={id}
            className="bg-[#121217] p-6 rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 group"
          >
            <Link
              href={`/movies/${id}`}
              className="block text-2xl font-semibold text-purple-300 group-hover:text-purple-400 transition-colors"
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>

    </div>
  );
}

```

</br>

<h3 align="center" > 🐇 Movies/[Id] Page  🦚</h3>

```dash
http://localhost:3000/movies/[id]
```

```TSX
//============ 🗂️movies/🗂️[id]/⚛️page.tsx ============== 

import { FaStar } from "react-icons/fa";
import { movies } from "./movieData";

interface MovieProps {
  params: {
    id: string;
  };
}

export default function MovieDetails({ params }: MovieProps) {

  const movie = movies.find((movie) => movie.id === params.id);

  return (
    <div className="min-h-screen p-8 bg-gradient-to-br from-[#0a0a0d] via-[#0f0f10] to-[#111113] space-y-12">

      {/* Movie Title & Description */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-8 rounded-2xl shadow-2xl">
        <h2 className="text-4xl font-bold text-white mb-6 tracking-tight">
          {movie?.title}
        </h2>
        <p className="text-lg text-gray-200 leading-relaxed">
          {movie?.description}
        </p>
      </div>

      {/* Rating & Comments Count */}
      <div className="bg-[#1a1a1f] p-8 rounded-2xl shadow-xl">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-8">

          <div className="text-center sm:text-left">
            <p className="text-xl text-gray-400 mb-2">Rating</p>
            <div className="flex items-center justify-center sm:justify-start text-yellow-400">
              <FaStar className="mr-2" size={24} />
              <span className="text-3xl font-bold">{movie?.rating}</span>
              <span className="text-gray-400 ml-2 text-lg">/ 5</span>
            </div>
          </div>

          <div className="text-center sm:text-right">
            <p className="text-xl text-gray-400 mb-2">Comments</p>
            <p className="text-3xl font-semibold text-white">
              {movie?.comments} Comments
            </p>
          </div>

        </div>
      </div>

      {/* Comments List */}
      <div>
        <h3 className="text-3xl font-bold text-purple-400 mb-8">User Comments</h3>
        <ul className="grid gap-6">
          {movie?.commentsList.map((comment, idx) => (
            <li
              key={idx}
              className="bg-[#1a1a1f] p-6 rounded-xl hover:shadow-2xl transition-all duration-300"
            >
              <p className="text-gray-300 leading-relaxed">
                {comment}
              </p>
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
}

```

</br>

<h3 align="center" > 🐇 DataBase  🦚</h3>

```TS

export const movies = [
  {
    id: "1",
    title: "Inception",
    comments: 178,
    rating: 4.8,
    description: "A groundbreaking sci-fi thriller where dreams become the ultimate battleground, directed by Christopher Nolan.",
    commentsList: [
      "An absolute masterpiece of storytelling!",
      "Every time I rewatch, I discover something new.",
      "Visually stunning and intellectually captivating.",
      "Hans Zimmer's soundtrack is legendary!",
      "Mind-bending from start to finish."
    ],
  },
  {
    id: "2",
    title: "Interstellar",
    comments: 132,
    rating: 4.7,
    description: "An emotional and visually breathtaking journey across galaxies, exploring love, time, and survival, directed by Christopher Nolan.",
    commentsList: [
      "The visuals left me speechless!",
      "An emotional rollercoaster — cried twice.",
      "Time dilation scene was pure genius.",
      "One of Zimmer's finest musical scores.",
      "Complex yet deeply human story."
    ],
  },
  {
    id: "3",
    title: "The Dark Knight",
    comments: 312,
    rating: 4.9,
    description: "A dark, gripping crime saga redefining the superhero genre, featuring an unforgettable performance by Heath Ledger as the Joker.",
    commentsList: [
      "Best superhero movie ever made!",
      "Heath Ledger's Joker is chilling and iconic.",
      "Unmatched storytelling and cinematography.",
      "Every scene is pure gold.",
      "Changed the way I see comic book movies."
    ],
  },
  {
    id: "4",
    title: "The Matrix",
    comments: 215,
    rating: 4.9,
    description: "A mind-bending sci-fi that revolutionized the genre, with unforgettable action scenes and a philosophical narrative about reality and free will.",
    commentsList: [
      "This film changed everything about action movies.",
      "Keanu Reeves is perfection as Neo!",
      "One of the greatest sci-fi films ever made.",
      "The slow-motion bullet scene is iconic.",
      "A perfect blend of philosophy and action."
    ],
  },
  {
    id: "5",
    title: "The Shawshank Redemption",
    comments: 478,
    rating: 4.9,
    description: "A powerful story of friendship, redemption, and hope set in a prison, based on Stephen King's novella.",
    commentsList: [
      "An emotional masterpiece. I can't stop thinking about it.",
      "Morgan Freeman's voice is everything.",
      "A film about never giving up on hope.",
      "The ending will stay with you forever.",
      "A timeless classic that touches your soul."
    ],
  },
  {
    id: "6",
    title: "Avatar",
    comments: 410,
    rating: 4.7,
    description: "A groundbreaking visual experience set on the alien world of Pandora, exploring the clash between human greed and indigenous cultures.",
    commentsList: [
      "The visuals were out of this world.",
      "One of the best visual effects in cinema history.",
      "James Cameron at his best with world-building.",
      "A powerful message about nature and exploitation.",
      "It takes you to another world, literally!"
    ],
  },
  {
    id: "7",
    title: "Gladiator",
    comments: 356,
    rating: 4.8,
    description: "A gripping historical epic about revenge and honor, starring Russell Crowe as a betrayed Roman general seeking vengeance.",
    commentsList: [
      "Russell Crowe was incredible in this role.",
      "The battle scenes are absolutely epic.",
      "A brilliant mix of action and emotion.",
      "The soundtrack perfectly complements the story.",
      "An unforgettable journey of vengeance and redemption."
    ],
  },
  {
    id: "8",
    title: "Pulp Fiction",
    comments: 389,
    rating: 4.8,
    description: "A groundbreaking film by Quentin Tarantino, known for its non-linear storytelling, sharp dialogue, and unforgettable characters.",
    commentsList: [
      "Tarantino's best work by far.",
      "The dialogues are so iconic.",
      "A must-watch for any film lover.",
      "The soundtrack is an absolute banger.",
      "A true masterpiece in storytelling."
    ],
  },
  {
    id: "9",
    title: "Fight Club",
    comments: 467,
    rating: 4.8,
    description: "A dark, thought-provoking film about identity, consumerism, and mental health, with a twist that will blow your mind.",
    commentsList: [
      "A film that makes you rethink everything.",
      "The plot twist is jaw-dropping.",
      "A movie you can watch over and over and still find something new.",
      "Brilliant performances by Brad Pitt and Edward Norton.",
      "A cult classic for a reason."
    ],
  },
  {
    id: "10",
    title: "The Godfather",
    comments: 522,
    rating: 5.0,
    description: "An epic crime saga about family, loyalty, and power, directed by Francis Ford Coppola, considered one of the greatest films ever made.",
    commentsList: [
      "The Godfather is a cinematic masterpiece.",
      "Marlon Brando's performance is legendary.",
      "The greatest crime drama in film history.",
      "A film that defines the genre.",
      "It doesn't get better than this."
    ],
  },
];

```
