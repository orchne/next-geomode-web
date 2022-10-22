import Link from "next/link"
import {FaUserTie, FaPeopleArrows, FaPiggyBank} from 'react-icons/fa'
import {BsPeopleFill} from 'react-icons/bs'
import {HiAcademicCap} from 'react-icons/hi'
import {TbWriting} from 'react-icons/tb'

const DivisionFeatures = () => {
    return(
        <section>
    <div class="container px-6 py-10 mx-auto">
        <h1 class="text-3xl font-semibold capitalize lg:text-4xl text-white">Meet our awesome <span class="text-[#2ee09a]">Divisions</span></h1>

        <iframe class="min-w-full mt-12 h-64 md:h-[450px] rounded-xl overflow-hidden" src="https://vimeo.com/showcase/7060635/video/525707984/embed" frameborder="0" allow="autoplay; fullscreen" allowfullscreen=""></iframe>

        <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2">

        <Link href="division/president">
            <div class="p-6 border rounded-xl border-r-gray-200 dark:border-gray-700 hover:cursor-pointer">
                    <div class="md:flex md:items-start md:-mx-4">
                        <span class="inline-block p-2 text-blue-500 bg-blue-100 rounded-xl md:mx-4 dark:text-white dark:bg-blue-500">
                            <FaUserTie class="w-6 h-6"  stroke="currentColor">
                            </FaUserTie>
                        </span>

                        <div class="mt-4 md:mx-4 md:mt-0">
                            <h1 class="text-2xl font-medium capitalize text-[#2ee09a]">President</h1>

                            <p class="mt-3 text-white">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
                            </p>
                        </div>
                    </div>
                </div>
            </Link>

            <Link href='/division/academic'>
                <div class="p-6 border rounded-xl border-r-gray-200 dark:border-gray-700 hover:cursor-pointer">
                    <div class="md:flex md:items-start md:-mx-4">
                        <span class="inline-block p-2 text-blue-500 bg-blue-100 rounded-xl md:mx-4 dark:text-white dark:bg-blue-500">
                            <HiAcademicCap class="w-6 h-6" >
                            </HiAcademicCap>
                        </span>

                        <div class="mt-4 md:mx-4 md:mt-0">
                            <h1 class="text-2xl font-medium capitalize text-[#2ee09a]">Academic Development</h1>

                            <p class="mt-3 text-white">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
                            </p>
                        </div>
                    </div>
                </div>
            </Link>

            <Link href='/division/external'>
                <div class="p-6 border rounded-xl border-r-gray-200 dark:border-gray-700 hover:cursor-pointer">
                    <div class="md:flex md:items-start md:-mx-4">
                        <span class="inline-block p-2 text-blue-500 bg-blue-100 rounded-xl md:mx-4 dark:text-white dark:bg-blue-500">
                            <FaPeopleArrows class="w-6 h-6">
                            </FaPeopleArrows>
                        </span>

                        <div class="mt-4 md:mx-4 md:mt-0">
                            <h1 class="text-2xl font-medium text-[#2ee09a] capitalize ">External Affairs</h1>

                            <p class="mt-3 text-white">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
                            </p>
                        </div>
                    </div>
                </div>
            </Link>

            <Link href='/division/internal'>
                <div class="p-6 border rounded-xl border-r-gray-200 dark:border-gray-700 hover:cursor-pointer">
                    <div class="md:flex md:items-start md:-mx-4">
                        <span class="inline-block p-2 text-blue-500 bg-blue-100 rounded-xl md:mx-4 dark:text-white dark:bg-blue-500">
                            <BsPeopleFill class="w-6 h-6">
                            </BsPeopleFill>
                        </span>

                        <div class="mt-4 md:mx-4 md:mt-0">
                            <h1 class="text-2xl font-medium capitalize text-[#2ee09a]">Internal Affairs</h1>

                            <p class="mt-3 text-white">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
                            </p>
                        </div>
                    </div>
                </div>
            </Link>

            <Link href='division/secretary'>
                <div class="p-6 border rounded-xl border-r-gray-200 dark:border-gray-700 hover:cursor-pointer">
                    <div class="md:flex md:items-start md:-mx-4">
                        <span class="inline-block p-2 text-blue-500 bg-blue-100 rounded-xl md:mx-4 dark:text-white dark:bg-blue-500">
                            <TbWriting class="w-6 h-6">
                            </TbWriting>
                        </span>

                        <div class="mt-4 md:mx-4 md:mt-0">
                            <h1 class="text-2xl font-medium capitalize text-[#2ee09a]">Secretary</h1>

                            <p class="mt-3 text-white">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
                            </p>
                        </div>
                    </div>
                </div>
            </Link>

            <Link href='/division/treasurer'>
                <div class="p-6 border rounded-xl border-r-gray-200 dark:border-gray-700 hover:cursor-pointer">
                    <div class="md:flex md:items-start md:-mx-4">
                        <span class="inline-block p-2 text-blue-500 bg-blue-100 rounded-xl md:mx-4 dark:text-white dark:bg-blue-500">
                            <FaPiggyBank class="w-6 h-6">
                            </FaPiggyBank>
                        </span>

                        <div class="mt-4 md:mx-4 md:mt-0">
                            <h1 class="text-2xl font-medium capitalize text-[#2ee09a]">Treasurer</h1>

                            <p class="mt-3 text-white">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
                            </p>
                        </div>
                    </div>
                </div>
            </Link>

        </div>
    </div>
</section>
    )
}

export default DivisionFeatures