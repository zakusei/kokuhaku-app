'use client'
import Messages from "@components/Messages";
import Link from "next/link";

// CSS Libraries
import Typewriter from "typewriter-effect";
import "@fortawesome/fontawesome-svg-core/styles.css"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPenToSquare
  } from "@fortawesome/free-regular-svg-icons";
import {
    faMagnifyingGlass,
  } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <main className="container mx-auto">
      <section className="container mx-auto text-white font-cutive text-center w-3/4 justify-center">
          <div className="lg:text-6xl md:text-5xl text-5xl font-cutive mx-auto mt-40 text-gray-50 mb-10">
              <Typewriter 
              onInit={(typewriter) => {
                  typewriter
                      .typeString("黒白の手紙")
                      .pauseFor(1000)
                      .deleteAll()
                      .typeString("Kokuhaku No Tegami")
                      .pauseFor(1000)
                      .deleteAll()
                      .typeString("Anonymous Messages")
                      .start();
              }}
              />
          </div>
          <p className="mb-10 font-cutive">
          Welcome to our online community where you can 
          express yourself <span className="text-neutral-700"> anonymously.</span> Share your <span className="text-neutral-700">thoughts, 
          feelings, and experiences </span> with others without fear 
          of judgment.</p>
          <p className="mb-10 hidden font-cutive lg:inline-block md:inline-block">
          Please note that <span className="text-red-500">bullying, harassment, or any other 
          form of abusive behavior</span>  towards others will not be 
          tolerated on this platform. We take this rule seriously 
          to ensure the safety and well-being of all our users. 
          Thank you for your cooperation in making this a welcoming 
          space for everyone.</p>

          <Link href={"/new/"} className="btn bg-neutral-800 hover:bg-gray-50 hover:text-neutral-900 py-3 px-6 rounded-lg w-30 mx-auto">
          <span>
          <FontAwesomeIcon icon={faPenToSquare}/> </span>
          Write Message</Link>

          <div className="mx-auto mt-10">
              <input className="outline-0 bg-neutral-800 w-3/5 lg:w-96 md:w-80 sm:w-64 py-3 px-6 rounded-l-lg mb-10" type="text" placeholder="Enter your name"/>
              <button className="bg-neutral-800 h-12 rounded-r-lg px-6 w-30">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
          </div>
      </section>
      
      <Messages/>
    </main>

  )
}

export default Home;

