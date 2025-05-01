

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