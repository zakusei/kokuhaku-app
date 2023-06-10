
import { useEffect } from "react";


let messages = [
  {
    color: "sky",
    recipient: "Lorem Ipsum",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi eget mauris pharetra et ultrices. Est velit egestas dui id ornare.`
  },
  {
    color: "violet",
    recipient: "Lorem Ipsum",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi eget mauris pharetra et ultrices. Est velit egestas dui id ornare.`
  },
  {
    color: "purple",
    recipient: "Lorem Ipsum",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi eget mauris pharetra et ultrices. Est velit egestas dui id ornare.`
  },
  {
    color: "fuchsia",
    recipient: "Lorem Ipsum",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi eget mauris pharetra et ultrices. Est velit egestas dui id ornare.`
  },
  {
    color: "pink",
    recipient: "Lorem Ipsum",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi eget mauris pharetra et ultrices. Est velit egestas dui id ornare.`
  },
  {
    color: "orange",
    recipient: "Lorem Ipsum",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi eget mauris pharetra et ultrices. Est velit egestas dui id ornare.`
  },
  {
    color: "sky",
    recipient: "Lorem Ipsum",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi eget mauris pharetra et ultrices. Est velit egestas dui id ornare.`
  },
  {
    color: "yellow",
    recipient: "Lorem Ipsum",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi eget mauris pharetra et ultrices. Est velit egestas dui id ornare.`
  },
];



const Messages = (params) => {
  
  const generateLoremIpsum = () => {
    fetch(`https://api.api-ninjas.com/v1/loremipsum?max_length=${200}`, { headers: {'X-Api-Key':"+CIO7tEO5EL+YoIFK1ZWRg==71anUiz5MM2T6Uzi"} })
    .then(respose => respose.json())
    .then(respose => respose);
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 mb-24">
      <div className={`h-96 w-full font-cutive bg-red-800 rounded-lg`}>
        <div className="mt-6 ml-6 inline flex text-white text-xl">
            <h1 className="px-2 py-4 outline-0 font-bold">Lorem Ipsum</h1>
        </div>
        <p
        className="m-4 pl-4 w-11/12 h-3/6 resize-none outline-0 text-xl indent-12 text-white bg-transparent">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi eget mauris pharetra et ultrices. Est velit egestas dui id ornare. 
        </p>
      </div>
    </div>
  )
}

export default Messages


// <div className={`h-96 w-full font-cutive bg-red-800 rounded-lg`}>
// <div className="mt-6 ml-6 inline flex text-white text-xl">
//     <h1 className="px-2 py-4 outline-0 font-bold">Lorem Ipsum</h1>
// </div>
// <p
// className="m-4 pl-4 w-11/12 h-3/6 resize-none outline-0 text-xl indent-12 text-white bg-transparent">
//   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi eget mauris pharetra et ultrices. Est velit egestas dui id ornare. 
// </p>
// </div>
// <div className={`h-96 w-full font-cutive bg-violet-800 rounded-lg`}>
// <div className="mt-6 ml-6 inline flex text-white text-xl">
//     <h1 className="px-2 py-4 outline-0 font-bold">Lorem Ipsum</h1>
// </div>
// <p
// className="m-4 pl-4 w-11/12 h-3/6 resize-none outline-0 text-xl indent-12 text-white bg-transparent">
//   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi eget mauris pharetra et ultrices. Est velit egestas dui id ornare. 
// </p>
// </div>
// <div className={`h-96 w-full font-cutive bg-purple-800 rounded-lg`}>
// <div className="mt-6 ml-6 inline flex text-white text-xl">
//     <h1 className="px-2 py-4 outline-0 font-bold">Lorem Ipsum</h1>
// </div>
// <p
// className="m-4 pl-4 w-11/12 h-3/6 resize-none outline-0 text-xl indent-12 text-white bg-transparent">
//   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi eget mauris pharetra et ultrices. Est velit egestas dui id ornare. 
// </p>
// </div>
// <div className={`h-96 w-full font-cutive bg-fuchsia-800 rounded-lg`}>
// <div className="mt-6 ml-6 inline flex text-white text-xl">
//     <h1 className="px-2 py-4 outline-0 font-bold">Lorem Ipsum</h1>
// </div>
// <p
// className="m-4 pl-4 w-11/12 h-3/6 resize-none outline-0 text-xl indent-12 text-white bg-transparent">
//   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi eget mauris pharetra et ultrices. Est velit egestas dui id ornare. 
// </p>
// </div>
// <div className={`h-96 w-full font-cutive bg-pink-800 rounded-lg`}>
// <div className="mt-6 ml-6 inline flex text-white text-xl">
//     <h1 className="px-2 py-4 outline-0 font-bold">Lorem Ipsum</h1>
// </div>
// <p
// className="m-4 pl-4 w-11/12 h-3/6 resize-none outline-0 text-xl indent-12 text-white bg-transparent">
//   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi eget mauris pharetra et ultrices. Est velit egestas dui id ornare. 
// </p>
// </div>
// <div className={`h-96 w-full font-cutive bg-rose-800 rounded-lg`}>
// <div className="mt-6 ml-6 inline flex text-white text-xl">
//     <h1 className="px-2 py-4 outline-0 font-bold">Lorem Ipsum</h1>
// </div>
// <p
// className="m-4 pl-4 w-11/12 h-3/6 resize-none outline-0 text-xl indent-12 text-white bg-transparent">
//   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi eget mauris pharetra et ultrices. Est velit egestas dui id ornare. 
// </p>
// </div>
// <div className={`h-96 w-full font-cutive bg-sky-800 rounded-lg`}>
// <div className="mt-6 ml-6 inline flex text-white text-xl">
//     <h1 className="px-2 py-4 outline-0 font-bold">Lorem Ipsum</h1>
// </div>
// <p
// className="m-4 pl-4 w-11/12 h-3/6 resize-none outline-0 text-xl indent-12 text-white bg-transparent">
//   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi eget mauris pharetra et ultrices. Est velit egestas dui id ornare. 
// </p>
// </div>
// <div className={`h-96 w-full font-cutive bg-indigo-800 rounded-lg`}>
// <div className="mt-6 ml-6 inline flex text-white text-xl">
//     <h1 className="px-2 py-4 outline-0 font-bold">Lorem Ipsum</h1>
// </div>
// <p
// className="m-4 pl-4 w-11/12 h-3/6 resize-none outline-0 text-xl indent-12 text-white bg-transparent">
//   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi eget mauris pharetra et ultrices. Est velit egestas dui id ornare. 
// </p>
// </div>
// <div className={`h-96 w-full font-cutive bg-yellow-800 rounded-lg`}>
// <div className="mt-6 ml-6 inline flex text-white text-xl">
//     <h1 className="px-2 py-4 outline-0 font-bold">Lorem Ipsum</h1>
// </div>
// <p
// className="m-4 pl-4 w-11/12 h-3/6 resize-none outline-0 text-xl indent-12 text-white bg-transparent">
//   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi eget mauris pharetra et ultrices. Est velit egestas dui id ornare. 
// </p>
// </div>
// <div className={`h-96 w-full font-cutive bg-orange-800 rounded-lg`}>
// <div className="mt-6 ml-6 inline flex text-white text-xl">
//     <h1 className="px-2 py-4 outline-0 font-bold">Lorem Ipsum</h1>
// </div>
// <p
// className="m-4 pl-4 w-11/12 h-3/6 resize-none outline-0 text-xl indent-12 text-white bg-transparent">
//   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi eget mauris pharetra et ultrices. Est velit egestas dui id ornare. 
// </p>
// </div>
// <div className={`h-96 w-full font-cutive bg-gray-800 rounded-lg`}>
// <div className="mt-6 ml-6 inline flex text-white text-xl">
//     <h1 className="px-2 py-4 outline-0 font-bold">Lorem Ipsum</h1>
// </div>
// <p
// className="m-4 pl-4 w-11/12 h-3/6 resize-none outline-0 text-xl indent-12 text-white bg-transparent">
//   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi eget mauris pharetra et ultrices. Est velit egestas dui id ornare. 
// </p>
// </div>