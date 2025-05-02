<h1  align="center" > 🏕️ 𝐆αꭑ𝖾𝗌 𝐀ρρ 🏚️</h1>

</br>

![Game app](https://github.com/user-attachments/assets/edbbcd82-5a08-4882-9b14-23055316fcbc)

</br>

<h3 align="center" > 🐇 Home Page  🦚</h3>

```dash
http://localhost:3000
```

```TSX
//============ 🗂️App/⚛️page.tsx ============== 

import React from 'react'

const Home = () => {
  return (
    <div>Home</div>
  )
}

export default Home
```

</br>

<h3 align="center" > 🐇 GameCard Component  🦚</h3>

```dash
http://localhost:3000
```

```TSX
//============ 🗂️Component/⚛️GameCard.tsx ============== 

type GameProps = {
  game: {
    id: number;
    name: string;
    img: string;
  };
};

const GameCard = ({ game }: GameProps) => {
  return (
    <div className="bg-[#171717] text-white p-4 rounded-lg shadow-md">
      <img
        src={game.img}
        alt={game.name}
        className="w-full h-32 object-cover rounded-md"
      />
      <h3 className="mt-4 text-lg font-semibold">{game.name}</h3>
    </div>
  );
};

export default GameCard;

```

</br>

<h3 align="center" > 🐇 Sidebar Component  🦚</h3>

```dash
http://localhost:3000
```

```TSX
//============ 🗂️Component/⚛️Sidebar.tsx ============== 

import Link from "next/link";
import { FaGamepad, FaUser, FaTrophy, FaCog } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="w-64 bg-black/70 text-white h-screen p-5">
      <h2 className="text-xl font-bold mb-5">Gaming Dashboard</h2>
      <div className="flex flex-col justify-between h-screen">
        <ul className="space-y-2">
          {[
            { icon: <FaGamepad className="mr-2 text-blue-500" />, label: "Games" },
            { icon: <FaUser className="mr-2 text-rose-500" />, label: "Profile" },
            { icon: <FaTrophy className="mr-2 text-amber-500" />, label: "Achievements" },
            { icon: <FaCog className="mr-2 text-gray-500" />, label: "Settings" },
          ].map(({ icon, label }) => (
            <li
              key={label}
              className="flex items-center p-4 border-l-4 rounded-md border-[#353535] hover:bg-[#171717] rounded cursor-pointer"
            >
              {icon} {label}
            </li>
          ))}
        </ul>


        <section className="mb-28 ml-4">
          <Link
            href="/login"
            className="inline-block text-2xl font-bold text-white hover:text-[#d7d7d7] bg-chocolate px-6 py-3 rounded-lg shadow-md hover:bg-chocolate-dark transition duration-300"
          >
            Login
          </Link>
        </section>
      </div>
    </div>
  );
};

export default Sidebar;

```

</br>

<h3 align="center" > 🐇 Games Page  🦚</h3>

```dash
http://localhost:3000/games
```

```TSX
//============ 🗂️App/🗂️games/⚛️page.tsx ============== 

import GameCard from "@/components/GameCard";
import { games } from "@/db/data";
import Sidebar from "@/components/Sidebar";

const Games = () => {
  return (
    <div className="flex h-screen bg-[#0f0f10] text-white overflow-hidden">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto bg-gradient-to-br from-[#1c1c1e] to-[#2d2d2d] p-6 shadow-inner">

        {/* Page Title */}
        <h1 className="text-3xl font-extrabold mb-6 text-chocolate">🎮 Featured Games</h1>

        {/* Game Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {games.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>

      </div>
    </div>

  );
};

export default Games;

```

</br>

<h3 align="center" > 🐇 Login Page  🦚</h3>

```dash
http://localhost:3000/login
```

```TSX
//============ 🗂️App/🗂️login/⚛️page.tsx ============== 

function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black px-4">
      <div className="w-full max-w-md p-8 bg-[#171717] rounded-2xl shadow-xl">
        <h2 className="text-3xl font-bold text-gray-100 mb-6 text-center">Welcome Back</h2>
        <form className="space-y-5">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-200">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-200">
              Password
            </label>
            <input
              id="password"
              type="password"
              required
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              placeholder="••••••••"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-rose-600 text-white font-semibold rounded-lg shadow-md hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          >
            Login
          </button>
        </form>
        <p className="mt-6 text-sm text-center text-gray-600">
          Don't have an account?{' '}
          <a href="/register" className="text-rose-600 hover:underline">
            Register
          </a>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;

```

</br>

<h3 align="center" > 🐇 Games / (.)Login Page  🦚</h3>

```dash
http://localhost:3000/games
```

```TSX
//============ 🗂️App/🗂️games/🗂️(.)login/⚛️page.tsx ============== 

"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

function LoginPage() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-rose-500 z-50">
          <div className="w-full max-w-md p-6 bg-[#171717] rounded-xl shadow-lg relative">
            <button
              onClick={() => router.push("/games")}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-200 transition"
              aria-label="Close"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Login</h2>
            <form className="space-y-5">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  className="w-full mt-1 px-4 py-2 bg-[#1f1f1f] border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-300">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  required
                  className="w-full mt-1 px-4 py-2 bg-[#1f1f1f] border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  placeholder="••••••••"
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-rose-600 text-white font-semibold rounded-lg shadow-md hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              >
                Login
              </button>
            </form>
            <p className="mt-6 text-sm text-center text-gray-400">
              Don't have an account?{' '}
              <a href="/register" className="text-rose-500 hover:underline">
                Register
              </a>
            </p>
          </div>
        </div>

      )}
    </>
  );
}

export default LoginPage;

```

</br>

<h3 align="center" > 🐇 Database Page  🦚</h3>

```dash
http://localhost:3000/games
```

```TSX
//============ 🗂️db/⚛️data.ts ============== 

export const games = [
  {
    id: 1,
    name: "Cyberpunk 2077",
    img: "https://variety.com/wp-content/uploads/2023/10/cyberpunk.jpeg?w=1000&h=667&crop=1",
  },
  {
    id: 2,
    name: "The Witcher 3",
    img: "https://sm.ign.com/ign_za/preview/w/we-played-/we-played-the-witcher-3-wild-hunt-for-6-hours-ign_3v48.jpg",
  },
  {
    id: 3,
    name: "Red Dead Redemption 2",
    img: "https://platform.polygon.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/10137177/49c7d29293f89dfef95969fde62f5c27e7cc780c.jpg?quality=90&strip=all&crop=7.8125,0,84.375,100",
  },
  {
    id: 4,
    name: "Elden Ring",
    img: "https://static.bandainamcoent.eu/high/elden-ring/elden-ring/00-page-setup/elden-ring-new-header-mobile.jpg",
  },
  {
    id: 5,
    name: "Final Fantasy VII Rebirth",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr3Clzp5aR_UZZ7m73inypa_Lgn9JbSNjIEg&s",
  },
  {
    id: 6,
    name: "Dragon's Dogma 2",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ-S-Wxm7lYgVSD1w8gONqRrYLnzoGb6rTgA&s",
  },
  {
    id: 7,
    name: "Metaphor: ReFantazio",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUg3iA85fdDHkmXE9S3WP1rbXi1U5irW429Q&s",
  },
  {
    id: 8,
    name: "Helldivers 2",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS000EZH6SWlfDYsNnu-5ZZXXywxzTM5rp0kg&s",
  },
  {
    id: 9,
    name: "Black Myth: Wukong",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaftpVL32ouEwZLRcznmytgVXiHbiM9xo3bYv15-_SdbsOssKt",
  },
  {
    id: 10,
    name: "Astro Bot",
    img: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTwHe6_x4vYPrJGdVJaq3uKIvDbRAwrgb1D2O38-rsNXRKvqcEz",
  },
  {
    id: 11,
    name: "Call of Duty: Black Ops 6",
    img: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRd4a30CVd8rJrTacarT9V8tpejyUZ2CtTDP_jbn_NnpDgi3nvO",
  },
  {
    id: 12,
    name: "Indiana Jones and the Great Circle",
    img: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRbd1Wk8GMi3jhU9744VF7MLP5EwrtEnbDSeXXKfENbvr_DDu7b",
  },
  {
    id: 13,
    name: "Animal Well",
    img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ2gfOGZaxFYAfuPmtTYl_3s9_IYJ0aAN_tNIBQcbJDUmCviU0P",
  },
  {
    id: 14,
    name: "UFO 50",
    img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcThVK2o36Y9TVC0AJd5OqkfSLBLTrKW_ZNQhgnYjakpO9wI8fgU",
  },
  {
    id: 15,
    name: "The Legend of Zelda: Echoes of Wisdom",
    img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTiuTyKiChRAtYZ74lwfbZmY7hafcY2Pk6uULHB5WYsS-mIjFDz",
  },
];

```
