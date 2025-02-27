import React from 'react';
import { GiGems } from "react-icons/gi";

export const Hero = () => {
    return (
        <div className='mt-5 py-12 flex flex-col justify-center items-center border-b border-zinc-800 px-4'>
            <form className='flex flex-col gap-5 w-full max-w-4xl items-center text-center'>
                <button className='bg-[#221f2e] text-purple-400 px-4 py-2 hover:bg-[#151833] duration-200 rounded-full font-semibold cursor-pointer text-xs lg:text-sm flex items-center gap-1'>
                    <GiGems /> MEET THE NEW BRAINWAVE
                </button>
                <h1 className='lg:w-[1000px] w-[400px] text-3xl sm:text-4xl lg:text-6xl font-bold'>
                    One tool for your whole company. Free for teams to try.
                </h1>
                <p className='lg:w-[700px] w-[300px] lg:text-lg text-xs mx-auto lg:leading-7 text-[#aeadac]'>
                    Brain wave contains many features like content creation, editing, generating attractive elements, answering queries, and much more.
                </p>
            </form>
            <button className='border text-[12px] px-3 py-1 lg:px-8 lg:py-2 mt-10 cursor-pointer rounded-md font-semibold bg-white text-[#201f1c] hover:text-purple-500 duration-200'>
                GET STARTED
            </button>
        </div>
    );
};

