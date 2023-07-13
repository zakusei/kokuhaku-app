import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faArrowLeft,
    faArrowRight
} from "@fortawesome/free-solid-svg-icons";

export const Pagination = () => {
  return (
    <div className="container mx-auto -mt-12 mb-12 w-full">
        <div className="flex justify-center text-white">
        <Link className="bg-neutral-800 px-4 py-3 rounded-l-xl h-full hover:bg-neutral-700" href={"/"}><FontAwesomeIcon icon={faArrowLeft}/></Link>
        <Link className="bg-neutral-800 px-4 py-3 h-full hover:bg-neutral-700" href={"/"}>1</Link>
        <Link className="bg-neutral-700 px-4 py-3 h-full hover:bg-neutral-700" href={"/"}>2</Link>
        <Link className="bg-neutral-800 px-4 py-3 h-full hover:bg-neutral-700" href={"/"}>3</Link>
        <Link className="bg-neutral-800 px-4 py-3 rounded-r-xl h-full hover:bg-neutral-700" href={"/"}><FontAwesomeIcon icon={faArrowRight}/></Link>
        </div>
    </div>
  )
}
