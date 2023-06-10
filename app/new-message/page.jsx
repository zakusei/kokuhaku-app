"use client"

import Link from "next/link";
import { useState } from "react";

// CSS Libraries
import Typewriter from "typewriter-effect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPenToSquare
  } from "@fortawesome/free-regular-svg-icons";
import {
    faArrowLeft
  } from "@fortawesome/free-solid-svg-icons";

const NewMessage = () => {

    const [ currentColor, setColor ] = useState(`neutral`);
    const color = (color) => {
        setColor(`${color}`);
    }

  return (
    <main className="container mx-auto text-center font-cutive text-white">
        <section className="lg:text-6xl md:text-5xl text-5xl font-cutive mx-auto mt-40 text-gray-50 mb-10">
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
        </section>
        <Link href={"/"} className="bg-neutral-800 text-white hover:bg-neutral-700 px-6 py-3 rounded-xl">
            <span>
            <FontAwesomeIcon icon={faArrowLeft}/> </span>
            Back to Home</Link>
        <section>
            <p class="m-5 text-white font-cutive text-xl">
                Please note that <span class="text-red-400">bullying, harassment, or any other form of abusive</span> behavior towards others will not be tolerated on this platform. We take this rule seriously to ensure the safety and well-being of all our users.
                Thank you for your cooperation in making this a welcoming space for everyone.
            </p>
        </section>
        <section className="mx-auto flex justify-center text-white">
            <div className="grid gap-4 grid-cols-1 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2">
                {/* Canvas */}
                <div className={`bg-${currentColor}-800 h-96 w-96 rounded-xl`}>
                    <div className="ml-2 mr-2">
                        <div className="flex ml-2 mt-2 text-lg">
                            <input type="text" className="bg-transparent px-4 py-4 outline-0" placeholder="Enter recipients name" />
                        </div>
                        <textarea
                            className="bg-transparent text-lg text-justify w-full px-6 outline-0 indent-12 resize-none"
                            placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi eget mauris pharetra et ultrices. Est velit egestas dui id ornare."
                            maxLength={200}
                            cols="30"
                            rows="10">
                        </textarea>
                    </div>
                </div>
                {/* Color Pallete */}
                <div className="container">
                    <div className="grid grid-cols-2 gap-x-4 gap-y-4">
                        <div className="flex-1 w-48 h-12 bg-red-800 hover:bg-gradient-to-r hover:from-red-700 hover:to-red-800 rounded-xl">
                            <button onClick={() => color("red")} className="h-full w-full"></button>
                        </div>
                        <div className="flex-1 w-48 h-12 bg-violet-800 hover:bg-gradient-to-r hover:from-violet-700 hover:to-violet-800 rounded-xl">
                            <button onClick={() => color("violet")} className="h-full w-full"></button>
                        </div>
                        <div className="flex-1 w-48 h-12 bg-purple-800 hover:bg-gradient-to-r hover:from-purple-700 hover:to-purple-800 rounded-xl">
                            <button onClick={() => color("purple")} className="h-full w-full"></button>
                        </div>
                        <div className="flex-1 w-48 h-12 bg-fuchsia-800 hover:bg-gradient-to-r hover:from-fuchsia-700 hover:to-fuchsia-800 rounded-xl">
                            <button onClick={() => color("fuchsia")} className="h-full w-full"></button>
                        </div>
                        <div className="flex-1 w-48 h-12 bg-pink-800 hover:bg-gradient-to-r hover:from-pink-700 hover:to-pink-800 rounded-xl">
                            <button onClick={() => color("pink")} className="h-full w-full"></button>
                        </div>
                        <div className="flex-1 w-48 h-12 bg-rose-800 hover:bg-gradient-to-r hover:from-rose-700 hover:to-rose-800 rounded-xl">
                            <button onClick={() => color("rose")} className="h-full w-full"></button>
                        </div>
                        <div className="flex-1 w-48 h-12 bg-sky-800 hover:bg-gradient-to-r hover:from-sky-700 hover:to-sky-800 rounded-xl">
                            <button onClick={() => color("sky")} className="h-full w-full"></button>
                        </div>
                        <div className="flex-1 w-48 h-12 bg-indigo-800 hover:bg-gradient-to-r hover:from-indigo-700 hover:to-indigo-800 rounded-xl">
                            <button onClick={() => color("indigo")} className="h-full w-full"></button>
                        </div>
                        <div className="flex-1 w-48 h-12 bg-yellow-800 hover:bg-gradient-to-r hover:from-yellow-700 hover:to-yellow-800 rounded-xl">
                            <button onClick={() => color("yellow")} className="h-full w-full"></button>
                        </div>
                        <div className="flex-1 w-48 h-12 bg-orange-800 hover:bg-gradient-to-r hover:from-orange-700 hover:to-orange-800 rounded-xl">
                            <button onClick={() => color("orange")} className="h-full w-full"></button>
                        </div>
                        <div className="flex-1 w-48 h-12 bg-neutral-800 hover:bg-gradient-to-r hover:from-neutral-700 hover:to-neutral-800 rounded-xl">
                            <button onClick={() => color("neutral")} className="h-full w-full"></button>
                        </div>
                        <div className="flex-1 w-48 h-12 bg-gray-800 hover:bg-gradient-to-r hover:from-gray-700 hover:to-gray-800 rounded-xl">
                            <button onClick={() => color("gray")} className="h-full w-full"></button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <button className="mt-4 bg-neutral-800 text-white hover:bg-neutral-700 px-6 py-3 rounded-xl">
            <span>
            <FontAwesomeIcon icon={faPenToSquare}/> </span>
            Write Message</button>
    </main>
  )
}

export default NewMessage
