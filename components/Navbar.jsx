'use client'
import {signIn, signOut, useSession, getProviders } from "next-auth/react";
import Link from "next/link";
import { usePathname } from 'next/navigation';


// CSS Imports
import "@fortawesome/fontawesome-svg-core/styles.css"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { config } from "@fortawesome/fontawesome-svg-core";
import {
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";
config.autoAddCss = false; 


const Navbar = () => {
  const path = usePathname();
  const isUserLoggedIn = true;
  return (
    <nav className='flex justify-around mx-auto text-gray p-6 font-cutive text-gray-50'>
        <div className='font-bold'><Link href={"https://github.com/zakusei/"}>Zakusei<span className='text-red-600'>.dev</span></Link></div>
        <div>
            <ul className='hidden gap-x-12 lg:flex md:flex'>
                <li className="hover:text-red-500 font-bold"><Link className={path == "/about" ? "text-red-500" : ""} href={"/about"}>About</Link></li>
                <li className="hover:text-red-500 font-bold"><Link className={path == "/" ? "text-red-500" : ""} href={"/"}>Home</Link></li>
                <li className="hover:text-red-500 font-bold"><a href="https://github.com/zakusei/">Developer</a></li>
            </ul>
        </div>
        <div>
            <Link className='hover:text-gray-100 font-bold' href={'/login'}>
            <FontAwesomeIcon icon={faGoogle}/> Login <span className='p-x-2'></span>
            </Link>
        </div>
    </nav>
  )
}

export default Navbar