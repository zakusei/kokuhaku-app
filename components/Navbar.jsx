'use client'

import "@fortawesome/fontawesome-svg-core/styles.css"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { config } from "@fortawesome/fontawesome-svg-core";

import {
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

config.autoAddCss = false; 

const Navbar = () => {
  return (
    <nav className='flex justify-around mx-auto text-gray p-6 font-cutive text-gray-50'>
        <div className='font-bold'>Zakusei<span className='text-red-600'>.dev</span></div>
        <div>
            <ul className='hidden gap-x-12 lg:flex md:flex'>
                <li className="hover:text-red-500 font-bold"><Link href={"/about"}>About</Link></li>
                <li className="hover:text-red-500 font-bold"><Link href={"/"}>Home</Link></li>
                <li className="hover:text-red-500 font-bold"><a href="https://github.com/zakusei/">Creator</a></li>
            </ul>
        </div>
        <div>
            <a className='hover:text-gray-100 font-bold' href="">Login <span className='p-x-2'>
            <FontAwesomeIcon icon={faArrowRight} /></span>
            </a>
        </div>
    </nav>
  )
}

export default Navbar