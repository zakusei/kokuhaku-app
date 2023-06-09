'use client'
// Icons
import "@fortawesome/fontawesome-svg-core/styles.css"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { config } from "@fortawesome/fontawesome-svg-core";
import {
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import {
  faSignOut,
  faSignIn
} from "@fortawesome/free-solid-svg-icons";



import Link from "next/link";
import { usePathname } from 'next/navigation';
import { useEffect, useState } from "react";
import { useSession, signIn, signOut, getProviders } from 'next-auth/react';



const Navbar = () => {
  const path = usePathname();
  const isUserLoggedIn = false;
  

  return (
    <nav className='fixed inset-x-0 top-0 bg-neutral-900 flex justify-around mx-auto text-gray p-6 font-cutive text-gray-50'>
        <div className='font-bold'><Link href={"https://github.com/zakusei/"}>Zakusei<span className='text-red-600'>.dev</span></Link></div>
        <div>
            <ul className='hidden gap-x-12 lg:flex md:flex'>
                <li className="hover:text-neutral-400 font-bold"><Link className={path == "/about" ? "text-neutral-400" : ""} href={"/about"}>About</Link></li>
                <li className="hover:text-neutral-400 font-bold"><Link className={path == "/" ? "text-neutral-400" : ""} href={"/"}>Home</Link></li>
                <li className="hover:text-neutral-400 font-bold"><a href="https://github.com/zakusei/">Developer</a></li>
            </ul>
        </div>
        <div>
          {isUserLoggedIn ? (
            <button className='font-bold hover:text-neutral-400' onClick={() => signOut()}>
            <FontAwesomeIcon icon={faSignIn}/><span className=''> Sign Out</span>
            </button>
          ):(
            <>

              <Link
                type="button" 
                className='font-bold hover:text-neutral-400'
                href={"/login"}
                >

                  <FontAwesomeIcon icon={faSignOut}/><span className=''> Sign In</span>
              </Link>

            </>
          )}
        </div>
    </nav>
  )
}

export default Navbar