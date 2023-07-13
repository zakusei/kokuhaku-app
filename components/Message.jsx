"use client";

import {useState, useEffect} from 'react';

const Message = ({item}) => {
  const handleClick = (e) => {
    console.log(e.target);
    return;
  }
  
  return (
    <div 
    key={item.id}
    onClick={handleClick}
    className={`h-96 w-full font-cutive bg-${item.color}-800 rounded-lg`}>
        <div className="mt-6 ml-6 inline flex text-white text-xl">
            <h1 className="px-2 py-4 outline-0 font-bold">{item.recipient}</h1>
        </div>
        <p
        className="m-4 pl-4 w-11/12 h-3/6 resize-none outline-0 text-xl indent-12 text-white bg-transparent">
          {item.content}
        </p>
    </div>
  )
}

export default Message