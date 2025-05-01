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
      )
}

export default Sidebar