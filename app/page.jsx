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
import { Pagination } from "@components/Pagination";


const Home = () => {
  let messages = [
    {
      id: 1,
      color: "sky",
      recipient: "Lorem Ipsum",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi eget mauris pharetra et ultrices. Est velit egestas dui id ornare.`
    },
    {
      id: 2,
      color: "violet",
      recipient: "Lorem Ipsum",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi eget mauris pharetra et ultrices. Est velit egestas dui id ornare.`
    },
    {
      id: 3,
      color: "purple",
      recipient: "Lorem Ipsum",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi eget mauris pharetra et ultrices. Est velit egestas dui id ornare.`
    },
    {
      id: 4,
      color: "fuchsia",
      recipient: "Lorem Ipsum",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi eget mauris pharetra et ultrices. Est velit egestas dui id ornare.`
    },
    {
      id: 5,
      color: "pink",
      recipient: "Lorem Ipsum",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi eget mauris pharetra et ultrices. Est velit egestas dui id ornare.`
    },
    {
      id: 6,
      color: "orange",
      recipient: "Lorem Ipsum",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi eget mauris pharetra et ultrices. Est velit egestas dui id ornare.`
    },
    {
      id: 7,
      color: "sky",
      recipient: "Lorem Ipsum",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi eget mauris pharetra et ultrices. Est velit egestas dui id ornare.`
    },
    {
      id: 8,
      color: "yellow",
      recipient: "Lorem Ipsum",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi eget mauris pharetra et ultrices. Est velit egestas dui id ornare.`
    },
  ];

  
  return (
    <main className="container mx-auto">
      <section className="container mx-auto text-white font-cutive text-center w-3/4 justify-center">
          <Typewrite/>
          
          <p className="mb-10 font-cutive text-2xl">
            Welcome to our online community where you can express yourself 
            <span className="text-neutral-400"> anonymously.</span> Share your 
            <span className="text-neutral-400"> thoughts, feelings, and experiences </span> 
            with others without fear 
            of judgment.
          </p>

          <Link href={"/new"} className="btn bg-neutral-800 hover:bg-neutral-700 py-3 px-6 rounded-xl w-30 mx-auto">
            <span><FontAwesomeIcon icon={faPenToSquare}/> </span>
            Write Message
          </Link>

          <div className="mx-auto mt-10">
              <input className="outline-0 bg-neutral-800 w-3/5 lg:w-96 md:w-80 sm:w-64 py-3 px-6 rounded-l-lg mb-10" type="text" placeholder="Enter your name"/>
              <button className="bg-neutral-800 h-12 rounded-r-lg px-6 w-30">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
          </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 mb-24">
        {messages.map((item, index) => (
          <Message key={index} item={item}/>
        ))}
      </div>

      <Pagination/>
    </main>
  )
}

export default Home;

