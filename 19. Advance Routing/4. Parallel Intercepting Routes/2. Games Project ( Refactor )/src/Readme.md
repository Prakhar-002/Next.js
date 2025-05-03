<h1  align="center" > 🏕️ 𝐆αꭑ𝖾𝗌 𝐀ρρ 🏚️</h1>

</br>

![image](https://github.com/user-attachments/assets/a5fa822e-b787-4335-8456-82d80ec434a3)

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
    <div className="bg-gray-800  text-white p-4 rounded-lg shadow-md">
      <img
        src={game.img}
        alt={game.name}
        className="w-full h-32 object-cover rounded-md"
      />
      <h3 className="mt-2 text-lg font-semibold">{game.name}</h3>
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
    <div className="w-64 bg-gray-900 text-white h-screen p-5">
      <h2 className="text-xl font-bold mb-5">Gaming Dashboard</h2>
      <div className="flex flex-col justify-between h-screen">
        <ul>
          <li
            className="flex items-center p-2 hover:bg-gray-700
           rounded cursor-pointer"
          >
            <FaGamepad className="mr-2" /> Games
          </li>
          <li
            className="flex items-center p-2 hover:bg-gray-700
           rounded cursor-pointer"
          >
            <FaUser className="mr-2" /> Profile
          </li>
          <li
            className="flex items-center p-2 hover:bg-gray-700
           rounded cursor-pointer"
          >
            <FaTrophy className="mr-2" /> Achievements
          </li>
          <li
            className="flex items-center p-2 hover:bg-gray-700
           rounded cursor-pointer"
          >
            <FaCog className="mr-2" /> Settings
          </li>
        </ul>

        <section className="mb-[7rem]">
          <Link className="text-2xl font-bold" href="/login">
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
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 bg-gray-100 p-5">
        <h1 className="text-2xl font-bold mb-4">Featured Games</h1>
        <div className="flex gap-4">
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

<h3 align="center" > 🐇 Games Layout Page 🦚</h3>

```dash
http://localhost:3000/games
```

```TSX
//============ 🗂️App/🗂️games/⚛️layout.tsx ============== 

import { ReactNode } from "react";

const GamesLayout = ({
  children,
  login,
}: {
  children: ReactNode;
  login: ReactNode;
}) => {
  return (
    <div>
      {children}
      {login}
    </div>
  );
};

export default GamesLayout;

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
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-gray-900 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;

```

</br>

<h3 align="center" > 🐇 Games / @Login Default Page  🦚</h3>

```dash
http://localhost:3000/games
```

```TSX
//============ 🗂️App/🗂️games/🗂️@login/⚛️default.tsx ============== 

const Default = () => {
  return null;
};

export default Default;

```

</br>

<h3 align="center" > 🐇 Games / @Login / (.)login Page  🦚</h3>

```dash
http://localhost:3000/games
```

```TSX
//============ 🗂️App/🗂️games/🗂️@login/🗂️(.)login/⚛️page.tsx ============== 

"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

function LoginPage() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/95">
          <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md relative">
            <button
              onClick={() => {
                setIsOpen(false);
                router.push("/games");
              }}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 font-bold"
            >
              &#10005;
            </button>
            <h2 className="text-2xl font-semibold mb-4 text-center">Login</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                  placeholder="Enter your password"
                />
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 text-white bg-gray-900 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
              >
                Login
              </button>
            </form>
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
];

```
