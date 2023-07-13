'use client'

import {useState, useEffect} from 'react';
import "@fortawesome/fontawesome-svg-core/styles.css"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    faPenToSquare,
    faMagnifyingGlass,
  } from "@fortawesome/free-solid-svg-icons";

export const Form = () => {

    const [color, setColor] = useState("neutral");
    const [{author, quote}, setMessage] = useState({
        author: "",
        quote: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
    }
    useEffect(() => {
        const getAIMessage = async () => {
            const dataForm = new URLSearchParams();
            dataForm.append('text', 'A made up confession message with a max length of 200 characters');
            const response = await fetch('https://api.api-ninjas.com/v1/quotes?category=love', {
                headers: {
                    'X-Api-Key': "+CIO7tEO5EL+YoIFK1ZWRg==71anUiz5MM2T6Uzi"
                },
            })
            .then(resp => resp.json())
            .then(data => setMessage((data[0])));
        }
        getAIMessage();
    }, []);
    return (
    <>
        <section className="mx-auto flex justify-center text-white">
            <div className="grid gap-4 grid-cols-1 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2">
                {/* Canvas */}
                <form onSubmit={handleSubmit} className={`bg-${color}-800 h-96 w-96 rounded-xl`}>
                    <div className="ml-2 mr-2">
                        <div className="flex ml-2 mt-2 text-lg">
                            <input type="text" className="bg-transparent px-4 py-4 outline-0" placeholder={author} />
                        </div>
                        <textarea
                            className="bg-transparent text-lg text-justify w-full px-6 outline-0 indent-12 resize-none"
                            placeholder={quote}
                            maxLength={200}
                            cols="30"
                            rows="10">
                        </textarea>
                    </div>
                </form>
                {/* Color Pallete */}
                <div className="container">
                    <div className="grid grid-cols-2 gap-x-4 gap-y-4">
                        <div className="flex-1 w-48 h-12 bg-red-800 hover:bg-gradient-to-r hover:from-red-700 hover:to-red-800 rounded-xl">
                            <button onClick={() => setColor("red")} className="h-full w-full"></button>
                        </div>
                        <div className="flex-1 w-48 h-12 bg-violet-800 hover:bg-gradient-to-r hover:from-violet-700 hover:to-violet-800 rounded-xl">
                            <button onClick={() => setColor("violet")} className="h-full w-full"></button>
                        </div>
                        <div className="flex-1 w-48 h-12 bg-purple-800 hover:bg-gradient-to-r hover:from-purple-700 hover:to-purple-800 rounded-xl">
                            <button onClick={() => setColor("purple")} className="h-full w-full"></button>
                        </div>
                        <div className="flex-1 w-48 h-12 bg-fuchsia-800 hover:bg-gradient-to-r hover:from-fuchsia-700 hover:to-fuchsia-800 rounded-xl">
                            <button onClick={() => setColor("fuchsia")} className="h-full w-full"></button>
                        </div>
                        <div className="flex-1 w-48 h-12 bg-pink-800 hover:bg-gradient-to-r hover:from-pink-700 hover:to-pink-800 rounded-xl">
                            <button onClick={() => setColor("pink")} className="h-full w-full"></button>
                        </div>
                        <div className="flex-1 w-48 h-12 bg-rose-800 hover:bg-gradient-to-r hover:from-rose-700 hover:to-rose-800 rounded-xl">
                            <button onClick={() => setColor("rose")} className="h-full w-full"></button>
                        </div>
                        <div className="flex-1 w-48 h-12 bg-sky-800 hover:bg-gradient-to-r hover:from-sky-700 hover:to-sky-800 rounded-xl">
                            <button onClick={() => setColor("sky")} className="h-full w-full"></button>
                        </div>
                        <div className="flex-1 w-48 h-12 bg-indigo-800 hover:bg-gradient-to-r hover:from-indigo-700 hover:to-indigo-800 rounded-xl">
                            <button onClick={() => setColor("indigo")} className="h-full w-full"></button>
                        </div>
                        <div className="flex-1 w-48 h-12 bg-yellow-800 hover:bg-gradient-to-r hover:from-yellow-700 hover:to-yellow-800 rounded-xl">
                            <button onClick={() => setColor("yellow")} className="h-full w-full"></button>
                        </div>
                        <div className="flex-1 w-48 h-12 bg-orange-800 hover:bg-gradient-to-r hover:from-orange-700 hover:to-orange-800 rounded-xl">
                            <button onClick={() => setColor("orange")} className="h-full w-full"></button>
                        </div>
                        <div className="flex-1 w-48 h-12 bg-neutral-800 hover:bg-gradient-to-r hover:from-neutral-700 hover:to-neutral-800 rounded-xl">
                            <button onClick={() => setColor("neutral")} className="h-full w-full"></button>
                        </div>
                        <div className="flex-1 w-48 h-12 bg-gray-800 hover:bg-gradient-to-r hover:from-gray-700 hover:to-gray-800 rounded-xl">
                            <button onClick={() => setColor("gray")} className="h-full w-full"></button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <button className="mt-4 bg-neutral-800 text-white hover:bg-neutral-700 px-6 py-3 rounded-xl">
            <span><FontAwesomeIcon icon={faPenToSquare}/> </span>
            Write Message
        </button>
    </>
    )
}
