'use client'

import "@fortawesome/fontawesome-svg-core/styles.css"; 

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Typewriter from "typewriter-effect";
import {
    faMagnifyingGlass
  } from "@fortawesome/free-solid-svg-icons";
  
const Home = () => {
  return (
    
    <section className="container mx-auto text-white font-cutive text-center w-1/2 justify-center">
        <div className="lg:text-6xl md:text-5xl text-5xl text-cutive mx-auto mt-20 text-red-500 mb-10">
            <Typewriter 
            onInit={(typewriter) => {
                typewriter
                    .typeString("Kokuhaku No Tegami")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("Confession Messages")
                    .start();
            }}
            />
        </div>
        <p className="mb-10">
        Welcome to our online community where you can 
        express yourself anonymously. Share your thoughts, 
        feelings, and experiences with others without fear 
        of judgment.</p>
        <p className="mb-10">
        Please note that <span className="text-red-500">bullying, harassment, or any other 
        form of abusive behavior</span>  towards others will not be 
        tolerated on this platform. We take this rule seriously 
        to ensure the safety and well-being of all our users. 
        Thank you for your cooperation in making this a welcoming 
        space for everyone.</p>

        <button className="btn bg-neutral-800 hover:bg-transparent hover:text-red-500 py-2 px-6 rounded-lg w-30 mx-auto mb-10">Write Message</button>

        <div className="mx-auto">
            <input className="outline-0 bg-neutral-800 px-4 w-3/5 lg:w-96 md:w-80 sm:w-64 py-3 rounded-lg mb-10" type="text" placeholder="Enter your name"/><span className="hover:text-red-600"><a className="btn bg-transparent py-2 px-6 py-3 w-30 rounded-lg" href="">
            <FontAwesomeIcon icon={faMagnifyingGlass} /></a></span>
        </div>
    </section>
    
  )
}

export default Home;

