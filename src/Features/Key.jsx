import React from 'react'
import { GiGems } from "react-icons/gi";
import { TbWriting } from "react-icons/tb";
import { IoMdRefresh } from "react-icons/io";

export const Key = () => {
    return (
        <>
            <div className='flex justify-center py-8'>
                <img className='lg:w-[240px] w-[200px]' src="4-small.png" alt="" />
            </div>
            <div className='py-12 flex flex-col justify-center items-center'>
                <form className='flex flex-col gap-5 max-w-[1000px] items-center '>
                    <button className='bg-[#221f2e] text-purple-400 px-4 py-2 hover:bg-[#151833] duration-200 rounded-full font-semibold cursor-pointer text-xs lg:text-sm flex items-center gap-1'><GiGems /> TRY BRAINWAVE FOR FREE</button>
                    <h1 className='lg:text-5xl text-2xl text-center mb-4 font-semibold'>Key Features of our tool.</h1>
                    <p className='lg:w-[800px] w-[300px] text-center lg:text-[20px] text-xs mx-auto lg:leading-7 leading-5 text-[#aeadac]'>Brain wave contain so many features like making content, making editing, make attractive things, ask anything and manymore</p>
                </form>
            </div>
            <div className='flex flex-wrap justify-center gap-4 py-16'>
                <form className='border-2 border-purple-400 rounded-2xl w-[320px] flex flex-col items-center text-center p-5 gap-3 hover:scale-108 duration-300'>
                    <div className='border-2 text-purple-400 border-purple-400 rounded-full text-[48px] p-4 w-fit'>
                        <TbWriting />
                    </div>
                    <h1 className='text-[20px] font-semibold'>Intelligent Writing Asistant</h1>
                    <p className='text-sm font-semibold text-[#A8A7A7]'>Our AI writing tool analyzes your content, suggest improvements,</p>
                </form>
                <form className='border-2 border-yellow-300 rounded-2xl w-[320px] flex flex-col items-center text-center p-5 gap-3 hover:scale-108 duration-300'>
                    <div className='border-2 text-yellow-300 border-yellow-300 rounded-full text-[48px] p-4 w-fit'>
                    <IoMdRefresh />
                    </div>
                    <h1 className='text-[20px] font-semibold'>Grammer & Spell Check</h1>
                    <p className='text-sm font-semibold text-[#A8A7A7]'>Say Goodbye, to ambbarasing typos and grammer mistakes</p>
                </form>
                <form className='border-2 border-[#94F3DC] rounded-2xl w-[320px] flex flex-col items-center text-center p-5 gap-3 hover:scale-108 duration-300'>
                    <div className='border-2 text-[#94F3DC] border-[#94F3DC] rounded-full text-[48px] p-4 w-fit'>
                        <TbWriting />
                    </div>
                    <h1 className='text-[20px] font-semibold'>Extract audio from video</h1>
                    <p className='text-sm font-semibold text-[#A8A7A7]'>Our AI tool analyzes your content, suggest improvements and also extract audio from video in a profesional way.</p>
                </form>
                <form className='border-2 border-red-300 rounded-2xl w-[320px] flex flex-col items-center text-center p-5 gap-3 hover:scale-108 duration-300'>
                    <div className='border-2 text-red-300 border-red-300 rounded-full text-[48px] p-4 w-fit'>
                        <TbWriting />
                    </div>
                    <h1 className='text-[20px] font-semibold'>Intelligent Writing Asistant</h1>
                    <p className='text-sm font-semibold text-[#A8A7A7]'>Our AI writing tool analyzes your content, suggest improvements,</p>
                </form>
                <form className='border-2 border-green-800 rounded-2xl w-[320px] flex flex-col items-center text-center p-5 gap-3 hover:scale-108 duration-300'>
                    <div className='border-2 text-green-600 border-green-800 rounded-full text-[48px] p-4 w-fit'>
                        <TbWriting />
                    </div>
                    <h1 className='text-[20px] font-semibold'>Intelligent Writing Asistant</h1>
                    <p className='text-sm font-semibold text-[text-[#A8A7A7]]'>Our AI writing tool analyzes your content, suggest improvements,</p>
                </form>
                <form className='border-2 border-white rounded-2xl w-[320px] flex flex-col items-center text-center p-5 gap-3 hover:scale-108 duration-300'>
                    <div className='border-2 text-white border-white rounded-full text-[48px] p-4 w-fit'>
                        <TbWriting />
                    </div>
                    <h1 className='text-[20px] font-semibold'>Intelligent Writing Asistant</h1>
                    <p className='text-sm font-semibold text-[#A8A7A7]'>Our AI writing tool analyzes your content, suggest improvements,</p>
                </form>
            </div>
        </>
    )
}
