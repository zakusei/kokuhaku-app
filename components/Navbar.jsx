'use client'

import "@fortawesome/fontawesome-svg-core/styles.css"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { config } from "@fortawesome/fontawesome-svg-core";

import {
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

config.autoAddCss = false; 

const Navbar = () => {
  return (
    <nav className='flex justify-around mx-auto text-white p-6 font-cutive'>
        <div className='font-bold'>Zakusei<span className='text-red-600'>.dev</span></div>
        <div>
            <ul className='hidden gap-x-12 lg:flex md:flex'>
                <li><a href="">About</a></li>
                <li><a href="">Home</a></li>
                <li><a href="">Creator</a></li>
            </ul>
        </div>
        <div>
            <a className='hover:text-red-500' href="">Login <span className='p-x-2'>
            < FontAwesomeIcon icon={faArrowRight} /></span>
            </a>
        </div>
    </nav>
  )
}

export default Navbar