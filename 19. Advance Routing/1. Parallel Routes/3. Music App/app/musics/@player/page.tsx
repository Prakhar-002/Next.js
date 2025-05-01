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