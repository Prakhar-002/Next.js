<h1  align="center" > 🏕️ 𝐒𝗂ꭑρᥣ𝖾 𝐆αꭑ𝗂𐓣𝗀 𝐖𝖾ᑲ𝗌𝗂𝗍𝖾 🏚️</h1>

<h3 align="center" > 🐇 Game Page  🦚</h3>

```dash
http://localhost:3000/game
```

```TSX
//============ 🗂️App/🗂️game/⚛️page.tsx ============== 


import Link from "next/link";
import { games } from "./data/games";


export default function GamesPage() {
  return (
    <div className="container mx-auto p-8">
      {/* Page Title */}
      <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#e9ded6] via-[#D2691E] to-[#3E1F00] text-center mb-12">
        Explore Games
      </h1>


      {/* Games Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {games.map((game) => (
          <Link
            key={game.id}
            href={`/game/${game.category}/${game.slug}`}
            className="group relative bg-gradient-to-r from-[#3e2723] to-[#6f4f37] p-6 rounded-xl shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl hover:from-[#8d6e63] hover:to-[#5d4037]"
          >
            <div className="relative">
              {/* Game Image */}
              <img
                src={game.image}
                alt={game.title}
                className="w-full h-56 object-cover rounded-lg group-hover:opacity-90 transition-opacity duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
            </div>

            {/* Game Title */}
            <h2 className="text-2xl font-semibold text-white mt-4 group-hover:text-yellow-300 transition-all duration-300 group-hover:scale-105">
              {game.title}
            </h2>

            {/* Game Description */}
            <p className="text-gray-300 mt-2 text-sm">{game.description}</p>

            {/* Game Rating */}
            <p className="text-yellow-400 font-medium mt-4 flex items-center gap-1">
              <span>⭐ {game.rating}/10</span>
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}

```

</br>

<h3 align="center" > 🐇 Games/[...Slug] Page  🦚</h3>

```dash
http://localhost:3000/games/[...slug]/gamename
```

```TSX
//============ 🗂️games/🗂️[...slug]/⚛️page.tsx ============== 

import { games, categories } from "../data/games";
import { FaGamepad, FaCalendarAlt, FaDesktop, FaStar } from "react-icons/fa";

export default function GamePage({ params }: { params: { slug: string[] } }) {
  const { slug } = params;

  const [category, gameSlug] = slug;
  const game = games.find(
    (game) => game.category === category && game.slug === gameSlug
  );

  if (!game) {
    return <div>Game not found</div>;
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* Game Image Section */}
      <div className="relative w-full overflow-hidden rounded-lg shadow-2xl mb-8">
        <img
          src={game.image}
          alt={game.title}
          className="w-full h-full object-cover rounded-t-lg transition-transform transform hover:scale-105 duration-500 ease-in-out"
        />
      </div>

      {/* Game Title */}
      <div className="my-4 text-center">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#e9ded6] via-[#D2691E] to-[#3E1F00] text-center mb-12">
          {game.title}
        </h1>
      </div>

      <div className="mt-10 space-y-8">
        {/* Game Description */}
        <p className="text-lg text-gray-200 leading-relaxed">{game.description}</p>

        {/* Game Details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Game Rating */}
          <div className="flex items-center bg-gradient-to-r from-[#1A1A1A] via-[#262525] to-[#4A4A4A] p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow hover:bg-[#5A5A5A]">
            <FaStar className="text-yellow-400 mr-4 text-2xl" />
            <div>
              <span className="font-semibold text-cyan-400">Rating:</span>
              <span className="text-white"> {game.rating}/10</span>
            </div>
          </div>

          {/* Release Date */}
          <div className="flex items-center bg-gradient-to-r from-[#1A1A1A] via-[#262525] to-[#4A4A4A] p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow hover:bg-[#5A5A5A]">
            <FaCalendarAlt className="mr-4 text-green-500 text-2xl" />
            <div>
              <span className="font-semibold text-cyan-400">Release Date:</span>
              <span className="text-white"> {game.releaseDate}</span>
            </div>
          </div>

          {/* Developer */}
          <div className="flex items-center bg-gradient-to-r from-[#1A1A1A] via-[#262525] to-[#4A4A4A] p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow hover:bg-[#5A5A5A]">
            <FaGamepad className="mr-4 text-pink-400 text-2xl" />
            <div>
              <span className="font-semibold text-cyan-400">Developer:</span>
              <span className="text-white"> {game.developer}</span>
            </div>
          </div>
        </div>

        {/* Platforms Section */}
        <div className="mt-8 p-6 rounded-lg shadow-lg bg-gradient-to-r from-[#1A1A1A] via-[#262525] to-[#444444] transition-colors ease-in-out">
          <div className="flex items-center">
            <FaDesktop className="mr-4 text-purple-500 text-2xl" />
            <div>
              <span className="font-semibold text-cyan-400">Platforms:</span>
              <span className="text-white"> {game.platforms.join(", ")}</span>
            </div>
          </div>
        </div>

        {/* Story Section */}
        <div className="mt-8">
          <h2 className="text-3xl mb-2 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6347] to-[#D2691E]">
            Story:
          </h2>
          <p className="text-lg text-gray-400">{game.story}</p>
        </div>

      </div>
    </div>
  );
}
```
</br>

<h3 align="center" > 🐇 DataBase  🦚</h3>

```TS

export type Game = {
  id: string;
  slug: string;
  title: string;
  category: string;
  description: string;
  image: string;
  rating: number;
  developer: string;
  releaseDate: string;
  platforms: string[];
  story: string;
};

export const games: Game[] = [
  {
    id: "1",
    slug: "elden-ring",
    title: "Elden Ring",
    category: "action-rpg",
    description:
      "Elden Ring is an open-world action RPG developed by FromSoftware and published by Bandai Namco Entertainment. Known for its intricate lore and vast, interconnected world, it offers players an unforgettable adventure where every choice matters.",
    image:
      "https://assetsio.gnwcdn.com/elden-ring-walkthrough-8042-1647018411119.jpg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp",
    rating: 9.5,
    developer: "FromSoftware",
    releaseDate: "February 25, 2022",
    platforms: [
      "PlayStation 4",
      "PlayStation 5",
      "Xbox One",
      "Xbox Series X/S",
      "PC",
    ],
    story:
      "The story centers around the player character, the Tarnished, who is tasked with seeking the shattered Elden Ring and restoring the world to its former glory. Along the journey, players will encounter powerful demigods and discover hidden secrets about the universe.",
  },
  {
    id: "2",
    slug: "god-of-war",
    title: "God of War",
    category: "action-adventure",
    description:
      "God of War blends visceral action with an emotional story set in the world of Norse mythology. It redefines the franchise with a more personal journey for Kratos, taking him on an adventure alongside his son, Atreus, through a beautiful yet dangerous world.",
    image:
      "https://cdn1.epicgames.com/offer/3ddd6a590da64e3686042d108968a6b2/EGS_GodofWar_SantaMonicaStudio_S2_1200x1600-fbdf3cbc2980749091d52751ffabb7b7_1200x1600-fbdf3cbc2980749091d52751ffabb7b7",
    rating: 9.8,
    developer: "Santa Monica Studio",
    releaseDate: "April 20, 2018",
    platforms: ["PlayStation 4", "PlayStation 5"],
    story:
      "Kratos, the God of War, embarks on a journey with his son, Atreus, to fulfill the final wish of his deceased wife – to scatter her ashes at the highest peak of the Nine Realms. Along the way, they confront gods and monsters from Norse mythology.",
  },
  {
    id: "3",
    slug: "the-witcher-3",
    title: "The Witcher 3: Wild Hunt",
    category: "action-rpg",
    description:
      "The Witcher 3: Wild Hunt is an expansive action RPG set in a dark fantasy world. Players control Geralt of Rivia, a monster hunter searching for his adopted daughter, while navigating a morally complex world filled with political intrigue, magical beasts, and ancient sorcery.",
    image:
      "https://sm.ign.com/t/ign_ap/preview/w/we-played-/we-played-the-witcher-3-wild-hunt-for-6-hours-ign_936e.1200.jpg",
    rating: 9.7,
    developer: "CD Projekt Red",
    releaseDate: "May 19, 2015",
    platforms: [
      "PlayStation 4",
      "Xbox One",
      "PC",
      "Nintendo Switch",
      "PlayStation 5",
      "Xbox Series X/S",
    ],
    story:
      "Geralt of Rivia, a seasoned Witcher, is on a quest to find his adopted daughter, Ciri, who is being pursued by the Wild Hunt, a mysterious and dangerous group. Along the way, Geralt becomes embroiled in a war between Nilfgaard and the Northern Kingdoms, facing moral dilemmas and dangerous foes.",
  },
  {
    id: "4",
    slug: "cyberpunk-2077",
    title: "Cyberpunk 2077",
    category: "action-rpg",
    description:
      "Cyberpunk 2077 is a futuristic RPG set in the dystopian world of Night City. Players control V, a mercenary navigating the streets filled with high-tech weaponry, corruption, and cybernetic enhancements. Despite initial criticism, the game offers deep world-building, branching storylines, and a rich narrative.",
    image: "https://cdn.mos.cms.futurecdn.net/BeyhFdCM2ugLQjX8vX7fuQ.jpg",
    rating: 7.5,
    developer: "CD Projekt Red",
    releaseDate: "December 10, 2020",
    platforms: [
      "PlayStation 4",
      "PlayStation 5",
      "Xbox One",
      "Xbox Series X/S",
      "PC",
    ],
    story:
      "Set in Night City, players assume the role of V, a customizable protagonist, as they seek a way to remove a dangerous AI known as Johnny Silverhand from their mind. The game explores themes of identity, technology, and power, while offering players the chance to make impactful decisions.",
  },
  {
    id: "5",
    slug: "red-dead-redemption-2",
    title: "Red Dead Redemption 2",
    category: "action-adventure",
    description:
      "Red Dead Redemption 2 is an open-world action-adventure game set in the American Wild West. Players control Arthur Morgan, a member of the Van der Linde gang, as he navigates a world filled with lawmen, outlaws, and dramatic encounters. It's known for its immersive world and engaging narrative.",
    image:
      "https://wallpapercat.com/w/full/2/6/4/656-3840x2160-desktop-4k-red-dead-redemption-background.jpg",
    rating: 9.6,
    developer: "Rockstar Games",
    releaseDate: "October 26, 2018",
    platforms: [
      "PlayStation 4",
      "Xbox One",
      "PC",
    ],
    story:
      "Set in the fading days of the American frontier, players follow Arthur Morgan as he struggles to navigate his loyalty to the Van der Linde gang while dealing with the inevitable collapse of the outlaw way of life. The game explores themes of redemption, loyalty, and morality.",
  },
  {
    id: "6",
    slug: "super-mario-odyssey",
    title: "Super Mario Odyssey",
    category: "platformer",
    description:
      "Super Mario Odyssey is a platformer game where Mario embarks on a globe-trotting adventure to rescue Princess Peach from Bowser. The game introduces a new mechanic where Mario uses his sentient hat, Cappy, to possess enemies and objects to solve puzzles and defeat challenges.",
    image:
      "https://www.hollywoodreporter.com/wp-content/uploads/2017/11/super-mario-game_copy_-_h_2017.jpg",
    rating: 9.3,
    developer: "Nintendo",
    releaseDate: "October 27, 2017",
    platforms: ["Nintendo Switch"],
    story:
      "Mario and his new companion, Cappy, set off on a journey to stop Bowser from marrying Princess Peach. Along the way, Mario visits various kingdoms, each with unique environments and challenges, as he tries to prevent the wedding and save Peach.",
  },
  {
    id: "7",
    slug: "horizon-zero-dawn",
    title: "Horizon Zero Dawn",
    category: "action-rpg",
    description:
      "Horizon Zero Dawn is an open-world action RPG set in a post-apocalyptic world where robotic creatures have taken over. Players control Aloy, a skilled hunter, as she uncovers the mysteries of the world and confronts the forces that threaten humanity’s survival.",
    image:
      "https://cdn1.epicgames.com/3328b08ac1c14540aa265a1a85c07839/offer/hzd_wide-2560x1440-bd312be05c49cf339097777c493cb899.jpg",
    rating: 9.4,
    developer: "Guerrilla Games",
    releaseDate: "February 28, 2017",
    platforms: [
      "PlayStation 4",
      "PC",
    ],
    story:
      "Aloy, a young hunter, is on a journey to uncover the secrets of her past while discovering the true origin of the robotic creatures that inhabit the Earth. As she uncovers hidden truths, she faces powerful enemies and unravels a world-ending conspiracy.",
  },
  {
    id: "8",
    slug: "assassins-creed-valhalla",
    title: "Assassin's Creed Valhalla",
    category: "action-rpg",
    description:
      "Assassin's Creed Valhalla is an action RPG set in the Viking Age. Players control Eivor, a Viking raider, as they lead their clan to settle in England. The game combines exploration, combat, and a rich narrative filled with Norse mythology.",
    image:
      "https://www.outoflives.net/wp-content/uploads/2018/09/Ranking-the-Assassins-Creed-Games-933x445.jpg",
    rating: 8.7,
    developer: "Ubisoft",
    releaseDate: "November 10, 2020",
    platforms: [
      "PlayStation 4",
      "PlayStation 5",
      "Xbox One",
      "Xbox Series X/S",
      "PC",
    ],
    story:
      "Eivor, a Viking warrior, sets out on a journey to establish a new home for their people in England. Along the way, they must navigate through political intrigue, battles with rival clans, and encounters with gods from Norse mythology.",
  },
  {
    id: "9",
    slug: "fortnite",
    title: "Fortnite",
    category: "battle-royale",
    description:
      "Fortnite is a free-to-play battle royale game where 100 players fight to be the last one standing. Players can build structures, use a variety of weapons, and outlast opponents in ever-shrinking play zones.",
    image:
      "https://300mind.studio/blog/wp-content/uploads/2023/12/Fortnite-Game-Strategies.webp",
    rating: 8.0,
    developer: "Epic Games",
    releaseDate: "July 25, 2017",
    platforms: [
      "PlayStation 4",
      "PlayStation 5",
      "Xbox One",
      "Xbox Series X/S",
      "PC",
      "Nintendo Switch",
      "Mobile",
    ],
    story:
      "The game is set in a world overrun by a mysterious storm, and players are tasked with surviving and competing in battle royale mode. Over time, Fortnite has expanded its universe with various events and collaborations.",
  },
  {
    id: "10",
    slug: "death-stranding",
    title: "Death Stranding",
    category: "action-adventure",
    description:
      "Death Stranding is a genre-defying game where players control Sam Porter Bridges, a deliveryman tasked with reconnecting a fractured America. Set in a post-apocalyptic world, the game features unique mechanics, such as carrying packages, and explores themes of isolation and human connection.",
    image:
      "https://deathstrandingpc.505games.com/wp-content/themes/deathstranding-cyberpunk/img/topimage.jpg",
    rating: 8.9,
    developer: "Kojima Productions",
    releaseDate: "November 8, 2019",
    platforms: [
      "PlayStation 4",
      "PlayStation 5",
      "PC",
    ],
    story:
      "Sam Porter Bridges is tasked with reconnecting the isolated cities across America to restore the country after a mysterious event known as the 'Death Stranding.' Along the way, he encounters strange creatures and uncovers a complex web of secrets.",
  }
];

export const categories = [
  { slug: "action-rpg", name: "Action RPG" },
  { slug: "action-adventure", name: "Action Adventure" },
];

```