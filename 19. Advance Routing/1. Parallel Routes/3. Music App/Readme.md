<h1  align="center" > 🏕️ 𝐌υ𝗌𝗂𝖼 𝐀ρρ 🏚️</h1>

</br>

![Music app](https://github.com/user-attachments/assets/b1d0edf7-df40-44a2-aa3e-7ace9cc11adf)

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

<h3 align="center" > 🐇 Musics Page  🦚</h3>

```dash
http://localhost:3000/musics
```

```TSX
//============ 🗂️App/🗂️musics/⚛️page.tsx ============== 

import { ReactNode } from "react";

import React from 'react'

const Music = () => {
  return null;
}

export default Music

```

</br>

<h3 align="center" > 🐇 Musics Layout Page  🦚</h3>

```dash
http://localhost:3000/musics
```

```TSX
//============ 🗂️App/🗂️musics/⚛️layout.tsx ============== 

import React, { ReactNode } from 'react'

const MusicLayout = ({
  children,
  sidebar,
  songs,
  player
}: {
  children: ReactNode,
  sidebar: ReactNode,
  songs: ReactNode,
  player: ReactNode
}) => {
  return (
    <div className='flex'>
      {sidebar}
      <div className='flex-1 p-6'>
        {songs}
        {player}
      </div>
      {children}
    </div>
  )
}

export default MusicLayout
```

</br>

<h3 align="center" > 🐇 Musics Layout Page  🦚</h3>

```dash
http://localhost:3000/musics
```

```TSX
//============ 🗂️App/🗂️musics/⚛️layout.tsx ============== 

import React from 'react'

const DefaultMusics = () => {
  return null;
}

export default DefaultMusics
```

</br>

---

</br>

<h3 align="center" > 🐇 Musics @Sidebar components Page  🦚</h3>

```dash
http://localhost:3000/musics
```

```TSX
//============ 🗂️App/🗂️musics/🗂️@sidebar/⚛️page.tsx ============== 

import { Clock, Home, TrendingUp } from 'lucide-react'
import React from 'react'

const Sidebar = async () => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("Content is currently loading...")
    }, 500);
  })
  return (
    <aside className='w-64 bg-[#111111] text-white flex flex-col justify-between p-4 min-h-screen'>
      <section>
        <h2 className='text-xl font-bold'>Menu</h2>
        <nav className='mt-4'>
          <ul>
            {[
              { icon: Home, name: "Discover" },
              { icon: TrendingUp, name: "Trending" },
              { icon: Clock, name: "Recent" }
            ].map(({ icon: Icon, name }) => (
              <li key={name} className='flex items-center gap-2 p-2 border-l-2 mt-2 border-gray-500 hover:bg-[#171717] rounded-md cursor-pointer'>
                <Icon /> {name}
              </li>
            ))}

          </ul>
        </nav>
      </section>

      <section>
        <h2 className="mt-6 text-xl font-bold">FAVORITE</h2>
        {[1, 2, 3, 4].map((i) => (
          <div className="flex mt-[2rem] gap-4 items-center" key={i} >
            <img src="https://avatars.githubusercontent.com/u/136890202?v=4" alt="Image"
              className='h-15 w-15 bg-gray-700 rounded-md'
            />
            <div className="">
              <p className="text-white">Prakhar-002</p>
              <p className="text-sm text-gray-400">Playlist</p>
            </div>
          </div>
        ))}
      </section>
    </aside>
  );
}

export default Sidebar

```

</br>

<h3 align="center" > 🐇 Musics @Sidebar Default Page  🦚</h3>

```dash
http://localhost:3000/musics
```

```TSX
//============ 🗂️App/🗂️musics/🗂️@sidebar/⚛️default.tsx ============== 

import { Clock, Home, TrendingUp } from 'lucide-react'
import Sidebar from './page'


const DefaultSidebar = () => {
  return (
    <Sidebar />
  )
}

export default DefaultSidebar
```

</br>

<h3 align="center" > 🐇 Musics @Sidebar Loading Page  🦚</h3>

```dash
http://localhost:3000/musics
```

```TSX
//============ 🗂️App/🗂️musics/🗂️@sidebar/⚛️loading.tsx ============== 

import React from 'react'

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-12 h-12 border-4 border-teal-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  )
}

export default Loading

```

</br>

<h3 align="center" > 🐇 Musics @Player Page  🦚</h3>

```dash
http://localhost:3000/musics
```

```TSX
//============ 🗂️App/🗂️musics/🗂️@player/⚛️page.tsx ============== 

'use client'

import { Pause, Play, SkipBack, SkipForward } from 'lucide-react'
import { useState } from 'react'

const Player = () => {
  const [isPause, setIsPause] = useState(true);

  return (
    <div className='fixed bottom-0  left-[60%] -translate-x-1/2 w-[95%] sm:w-[28rem] md:w-[35rem] lg:w-[45rem] bg-[#171717] p-4 flex flex-wrap sm:flex-nowrap items-center justify-between gap-4 text-white rounded-t-xl shadow-md'>

      {/* Song Image */}
      <div className='w-14 h-14 bg-gray-700 rounded-md overflow-hidden shrink-0'>
        <img className='w-full h-full object-cover' src="https://i.scdn.co/image/ab67616d0000b2738ffc294c1c4362e8472d14cd" alt="Song cover" />
      </div>

      {/* Controls */}
      <div className="flex items-center gap-4 sm:gap-6 mx-auto">
        <SkipBack size={24} className='cursor-pointer hover:text-white transition-colors' />

        <Play
          size={24}
          className={`cursor-pointer text-white hover:text-gray-300 transition-colors ${isPause ? "hidden" : ""}`}
          onClick={() => setIsPause(!isPause)}
        />

        <Pause
          size={24}
          className={`cursor-pointer text-white hover:text-gray-300 transition-colors ${isPause ? "" : "hidden"}`}
          onClick={() => setIsPause(!isPause)}
        />

        <SkipForward size={24} className='cursor-pointer hover:text-white transition-colors' />
      </div>

      {/* Progress */}
      <div className="flex items-center gap-2 sm:gap-4 flex-grow justify-end text-green-400 min-w-[200px]">
        <span className='text-gray-400 text-sm'>2:21</span>

        <div className="relative w-full max-w-[200px] h-1 bg-gray-700 rounded-md">
          <div className='absolute top-0 left-0 h-1 bg-white rounded-md' style={{ width: "50%" }} />
          <input type="range" className='absolute top-0 left-0 w-full h-1 bg-transparent cursor-pointer' />
        </div>

        <span className='text-gray-400 text-sm'>3:11</span>
      </div>
    </div>

  )
}

export default Player

```

</br>

<h3 align="center" > 🐇 Musics @Player default Page  🦚</h3>

```dash
http://localhost:3000/musics
```

```TSX
//============ 🗂️App/🗂️musics/🗂️@player/⚛️default.tsx ============== 

import React from 'react'

import Player from './page'

const DefaultPlayer = () => {
  return (
    <Player />
  )
}

export default DefaultPlayer

```

</br>

<h3 align="center" > 🐇 Musics @Song Page  🦚</h3>

```dash
http://localhost:3000/musics
```

```TSX
//============ 🗂️App/🗂️musics/🗂️@song/⚛️page.tsx ============== 

import { Clock, Heart } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

export const songs = [
  {
    id: 1,
    artist: "The Weeknd",
    title: "Blinding Lights",
    time: "3:20",
    img: "https://i.scdn.co/image/ab67616d00001e028863bc11d2aa12b54f5aeb36"
  },
  {
    id: 2,
    artist: "Dua Lipa",
    title: "Levitating",
    time: "3:23",
    img: "https://i.scdn.co/image/ab67616d0000b273838698485511bd9108fadadc"
  },
  {
    id: 3,
    artist: "Harry Styles",
    title: "As It Was",
    time: "2:47",
    img: "https://i.scdn.co/image/ab67616d00001e02766ba00b287429d0b13e1e5f"
  },
  {
    id: 4,
    artist: "Olivia Rodrigo",
    title: "good 4 u",
    time: "2:58",
    img: "https://i.scdn.co/image/ab67616d0000b2738ffc294c1c4362e8472d14cd"
  },
  {
    id: 5,
    artist: "Drake",
    title: "God's Plan",
    time: "3:18",
    img: "https://i.scdn.co/image/ab67616d0000b273f907de96b9a4fbc04accc0d5"
  }
];

const SongsList = async () => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("Content is currently loading...")
    }, 500);
  })

  return (
    <div className='w-[96%] mx-auto px-4'>
      <h2 className="text-3xl text-white mt-8 font-bold mb-6">Songs Collection</h2>

      <ul className="space-y-4">
        {songs.map((song) => (
          <Link key={song.id} href={`/musics/${song.id}`}>
            <li className='flex items-center justify-between p-3 hover:bg-[#2a2929] rounded-md cursor-pointer transition-all duration-200 ease-in-out transform hover:scale-105 group'>
              <div className="flex items-center gap-5">
                <img src={song.img} className='h-16 w-16 bg-gray-700 rounded-md' />
                <div>
                  <p className="text-white font-medium">{song.artist}</p>
                  <p className="text-sm text-gray-400">{song.title}</p>
                </div>
              </div>

              <div className="flex items-center gap-6 text-gray-400">
                <div className="flex items-center gap-1">
                  <Clock size={16} />
                  <span>{song.time}</span>
                </div>

                <Heart size={16} className=' cursor-pointer group-hover:text-red-500' />

                <button className='text-lg font-bold'>⋮</button>
              </div>


            </li>

          </Link>
        ))}
      </ul>
    </div>
  )
}

export default SongsList

```

</br>

<h3 align="center" > 🐇 Musics @Song Loading Page  🦚</h3>

```dash
http://localhost:3000/musics
```

```TSX
//============ 🗂️App/🗂️musics/🗂️@song/⚛️loading.tsx ============== 

import React from 'react'

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-12 h-12 border-4 border-teal-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  )
}

export default Loading
```


</br>

<h3 align="center" > 🐇 Musics @Song [ID] Page  🦚</h3>

```dash
http://localhost:3000/musics/id
```

```TSX
//============ 🗂️App/🗂️musics/🗂️@song/🗂️[id]/⚛️page.tsx ============== 

import React from 'react'

import { songs } from '../page';

const Song = ({ params }: { params: { id: string } }) => {
  const song = songs.find((s) => s.id === +params.id);

  if (!song) {
    return (
      <div className="text-white text-xl p-6">
        Song not found.
      </div>
    );
  }

  return (
    <div className=" bg-black text-white p-6 flex flex-col md:flex-row items-center gap-8">
      <img
        src={song.img}
        alt={song.title}
        className="w-full max-w-sm rounded-xl shadow-lg"
      />
      <div className="space-y-4">
        <h1 className="text-4xl font-extrabold">{song.title}</h1>
        <p className="text-lg">
          <span className="font-semibold text-gray-400">Artist:</span> {song.artist}
        </p>
        <p className="text-lg">
          <span className="font-semibold text-gray-400">Duration:</span> {song.time}
        </p>
      </div>
    </div>
  );
};

export default Song;

```
