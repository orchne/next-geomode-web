import Link from "next/link"
import {FaUserTie, FaPiggyBank} from 'react-icons/fa'
import {TbWriting} from 'react-icons/tb'


const ContentTeam = () => {
  return (
    <div className="mt-5 px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight  sm:text-4xl md:mx-auto text-white">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="34f481be-159a-4846-821d-9ca19fb6bcc5"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#34f481be-159a-4846-821d-9ca19fb6bcc5)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relativ text-white">Meet</span>
          </span>{' '}
          Our <span className='text-[#2ee09a]'>Divisions</span>
        </h2>
        <p className="text-base text-white md:text-lg">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque rem aperiam, eaque ipsa quae.
        </p>
      </div>


      <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-3 ">

            <div class="flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl dark:bg-gray-800 hover:-translate-y-2 duration-300 transform">
                <span class="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
                  <FaUserTie class="w-6 h-6"  stroke="currentColor">
                  </FaUserTie>
                </span>

                <h1 class="text-2xl font-semibold text-gray-700 capitalize dark:text-white">President</h1>

                <p class="text-gray-500 dark:text-gray-300">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
                </p>
            </div>


        <div class="flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl dark:bg-gray-800 hover:-translate-y-2 duration-300 transform">
                <span class="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
                  <TbWriting class="w-6 h-6">
                  </TbWriting>
                </span>

                <h1 class="text-2xl font-semibold text-gray-700 capitalize dark:text-white">Secretary</h1>

                <p class="text-gray-500 dark:text-gray-300">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
                </p>
            </div>

        <div class="flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl dark:bg-gray-800 hover:-translate-y-2 duration-300 transform">
                <span class="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
                  <FaPiggyBank class="w-6 h-6">
                  </FaPiggyBank>
                </span>

                <h1 class="text-2xl font-semibold text-gray-700 capitalize dark:text-white">Treasurer</h1>

                <p class="text-gray-500 dark:text-gray-300">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
                </p>
            </div>
            
        
      </div>
      <div className="text-center mt-10">
        <Link
          href="/division"
        >
          <button className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none">Learn More</button>
        </Link>
      </div>
    </div>
  )
}

export default ContentTeam