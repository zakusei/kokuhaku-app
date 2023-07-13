'use client'

// Modules
import "@fortawesome/fontawesome-svg-core/styles.css"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faSignIn,
    faUser,
    faKey
  } from "@fortawesome/free-solid-svg-icons";
  
import Link from "next/link";


// Components
import Typewrite from "@components/Typewrite";

const LoginPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <main className="container mx-auto">
      <section className="container mx-auto mt-40 text-white font-cutive text-center w-3/4 justify-center">
        <Typewrite/>
        <div>
          <form onSubmit={handleSubmit}>
            <div>
              <span>
                <button disabled className="px-4 py-3 rounded-l-lg outline-0 bg-neutral-800">
                  <FontAwesomeIcon icon={faUser}/>
                </button>
              </span>
              <input className="outline-0 bg-neutral-800 w-3/5 lg:w-96 md:w-80 sm:w-64 py-3 rounded-lg rounded-l-none mb-6 mt-6" type="text" placeholder="Email"/>
            </div>
            <div>
              <span>
                <button disabled className="px-4 py-3 rounded-l-lg outline-0 bg-neutral-800">
                  <FontAwesomeIcon icon={faKey}/>
                </button>
              </span>
              <input className="outline-0 bg-neutral-800 w-3/5 lg:w-96 md:w-80 sm:w-64 py-3 rounded-lg rounded-l-none mb-4" type="password" placeholder="Password"/>
              <div className="mb-4">
                <span>Not yet signed up? <Link className="text-red-500" href={"/signup"}>Sign up.</Link> </span>
              </div>
            </div>
            <button className="btn bg-neutral-800 hover:bg-neutral-700 py-3 px-6 rounded-xl w-30">
              <span>
                <FontAwesomeIcon icon={faSignIn}/> Sign In
              </span>
            </button>
          </form>
        </div>
      </section>
    </main>
  )
}

export default LoginPage;

