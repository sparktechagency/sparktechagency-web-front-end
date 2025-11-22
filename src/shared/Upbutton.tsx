"use client";
import React from 'react';
import { IoArrowUpOutline } from 'react-icons/io5';

const Upbutton = () => {
    return (
        <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className=" border border-primary/50 rounded-full w-9 h-9 flex-center  bg-white/10 cursor-pointer"
        >
            <IoArrowUpOutline size={20} color="#9aca3c" />
        </button>
    );
};

export default Upbutton;