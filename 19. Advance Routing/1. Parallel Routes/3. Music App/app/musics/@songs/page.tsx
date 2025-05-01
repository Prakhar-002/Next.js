

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
                                    <li  className='flex items-center justify-between p-3 hover:bg-[#2a2929] rounded-md cursor-pointer transition-all duration-200 ease-in-out transform hover:scale-105 group'>
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