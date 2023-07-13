"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowLeft
  } from "@fortawesome/free-solid-svg-icons";

import Link from "next/link";
import Typewrite from "@components/Typewrite";
import { Form } from "@components/Form";

const NewPost = () => {

    return (
    <main className="container mx-auto text-center font-cutive text-white">
        <section className="lg:text-6xl md:text-5xl text-5xl font-cutive mx-auto mt-40 text-gray-50 mb-10">
            <Typewrite/>
        </section>
        <Link href={"/"} className="bg-neutral-800 text-white hover:bg-neutral-700 px-6 py-3 rounded-xl">
            <span><FontAwesomeIcon icon={faArrowLeft}/> </span>
            Back to Home
        </Link>
        <section>
            <p className="m-5 text-white font-cutive text-xl">
                Please note that <span className="text-red-400">bullying, harassment, or any other form of abusive</span> behavior towards others will not be tolerated on this platform. We take this rule seriously to ensure the safety and well-being of all our users.
                Thank you for your cooperation in making this a welcoming space for everyone.
            </p>
        </section>

        <Form/>
    
    </main>
  )
}

export default NewPost
