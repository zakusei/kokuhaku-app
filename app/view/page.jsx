'use client'

import "@fortawesome/fontawesome-svg-core/styles.css"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    faPenToSquare,
    faMagnifyingGlass,
  } from "@fortawesome/free-solid-svg-icons";


import Link from "next/link";
import Typewrite from "@components/Typewrite";
import Message from "@components/Message";


const ViewPost = ({item}) => {  
  return (
    <main className="container mx-auto">
      <section className="container mx-auto text-white font-cutive text-center w-3/4 justify-center">
          <Typewrite/>
      </section>

      <div 
      // key={item.id}
      // onClick={handleClick}
      className={`mx-auto h-96 w-1/4 font-cutive bg-neutral-800 rounded-lg mt-10`}>
          <div className="mt-6 ml-6 inline flex text-white text-xl">
              <h1 className="px-2 py-4 outline-0 font-bold">Author</h1>
          </div>
          <p
          className="m-4 pl-4 w-11/12 h-3/6 resize-none outline-0 text-xl indent-12 text-white bg-transparent">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi eget mauris pharetra et ultrices. Est velit egestas dui id ornare.
          </p>
      </div>

    </main>
  )
}

export default ViewPost;

