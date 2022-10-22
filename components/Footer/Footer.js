import { Image } from "@chakra-ui/react"
import { SiLinkedin, SiGmail } from "react-icons/si";
import {FiInstagram} from 'react-icons/fi'

const Footer = () => {
    return (
 <footer className="px-4 py-8 text-gray-100  bg-black ">
	<div className="container flex flex-wrap items-center justify-center mx-auto space-y-4 sm:justify-between sm:space-y-0">
    <div className="lg:w-1/3">
			<a rel="noopener noreferrer" href="#" className="flex justify-center space-x-3 lg:justify-start">
				<div className="flex items-center justify-center w-12 h-12 rounded-full dark:bg-violet-400">
				<Image
            src="/asset/GEOMODE2.png"
            className="w-20 h-20 absolute"
            alt="logo amv"
          />	
				</div>
				<span className="self-center text-2xl font-semibold">GEOMODE</span>
			</a>
		</div>
		<div className="flex justify-center space-x-4">
				<a rel="noopener noreferrer" href="#" title="Linkedin" className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-violet-400 dark:text-gray-900">
					<SiLinkedin className="w-7 h-7"/>
				</a>
				<a rel="noopener noreferrer" href="#" title="Gmail" className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-violet-400 dark:text-gray-900">
					<SiGmail className="w-7 h-7"/>
				</a>
				<a rel="noopener noreferrer" href="#" title="Instagram" className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-violet-400 dark:text-gray-900">
					<FiInstagram className="w-7 h-7"/>
				</a>
			</div>
	</div>
</footer>
)
}

export default Footer