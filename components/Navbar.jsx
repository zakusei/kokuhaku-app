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
import { faSign, faSignIn, faSignOut } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
config.autoAddCss = false; 


const Navbar = () => {
  const path = usePathname();
  const isUserLoggedIn = true;

  const [providers, setProviders] = useState(null);

  useEffect(() => {
    const setProviders = async () => {
      const response = await getProviders();

      setProviders(response);
    }

    setProviders();
  }, []);

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
            <button className='font-bold hover:text-neutral-400' onClick={signOut}>
            <FontAwesomeIcon icon={faSignIn}/><span className=''> Sign Out</span>
            </button>
          ):(
            <>
            {providers && 
            Object.values(providers).map(provider => {
              (
                <button 
                  className='font-bold hover:text-neutral-400'
                  onClick={() => signIn(provider.id)}
                  key={provider.name}
                >
                  <FontAwesomeIcon icon={faSignOut}/><span className=''> Sign In</span>
                </button>
              )
            })}
            </>
          )}
        </div>
    </nav>
  )
}

export default Navbar