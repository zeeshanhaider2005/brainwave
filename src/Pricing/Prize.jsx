import React from 'react'
import { FaDollarSign } from "react-icons/fa";

export const Prize = () => {
    return (
        <div className='max-w-[1230px]  mx-auto'>
            <div className='flex flex-wrap justify-evenly py-13'>
                <div className="basic w-[380px] border p-5 rounded-3xl border-zinc-800 hover:bg-[#37352f12] ">
                    <h1 className='text-5xl text-orange-300'>Basic</h1>
                    <p className='w-[200px] font-extralight leading-5 mt-5 text-[#adaba3]'>AI chatbot, personalized recommendations</p>
                    <div className='flex items-center mb-4'>
                        <FaDollarSign size={50} className='mt-8' />
                        <h1 className='text-9xl font-semibold'>o</h1>
                    </div>
                    <button className='bg-white text-[#37352F] cursor-pointer rounded-2xl w-full p-4 font-semibold hover:bg-transparent border-2 hover:text-orange-300 duration-300 hover:scale-105'>Get Started</button>
                    <div className='mt-3'>
                        <div className='flex items-start gap-3 border-t border-gray-800 p-4'>
                            <img src="check.svg" alt="" />
                            <p>An AI chatbot that can understand your queries</p>
                        </div>
                        <div className='flex items-start gap-3 border-t border-gray-800 p-4'>
                            <img src="check.svg" alt="" />
                            <p>An AI chatbot that can understand your queries</p>
                        </div>
                        <div className='flex items-start gap-3 border-t border-gray-800 p-4'>
                            <img src="check.svg" alt="" />
                            <p>An AI chatbot that can understand your queries</p>
                        </div>
                    </div>
                </div>
                <div className="basic w-[380px] border-2 p-5 rounded-3xl border-purple-800 hover:bg-[#37352f12] hover:scale-105 duration-300">
                    <h1 className='text-5xl text-purple-800'>Premium</h1>
                    <p className='w-[300px] font-extralight leading-5 mt-5 text-[#adaba3]'>Advanced AI chatbot, priority support, analytics dashboard</p>
                    <div className='flex items-center my-6'>
                        <FaDollarSign size={50} className='mt-8' />
                        <h1 className='text-8xl font-semibold'>9.99</h1>
                    </div>
                    <button className='bg-white text-[#37352F] cursor-pointer rounded-2xl w-full p-4 font-semibold hover:bg-transparent border-2 border-purple-800 hover:text-purple-800 duration-300 hover:scale-105'>Get Started</button>
                    <div className='mt-3'>
                        <div className='flex items-start gap-3 border-t border-gray-800 p-4'>
                            <img src="check.svg" alt="" />
                            <p>An advanced AI chatbot that can understand complex queries</p>
                        </div>
                        <div className='flex items-start gap-3 border-t border-gray-800 p-4'>
                            <img src="check.svg" alt="" />
                            <p>An analytics dashboard to track your conversations</p>
                        </div>
                        <div className='flex items-start gap-3 border-t border-gray-800 p-4'>
                            <img src="check.svg" alt="" />
                            <p>Priority support to solve issues quickly</p>
                        </div>
                    </div>
                </div>
                <div className="basic w-[380px] border p-5 rounded-3xl border-zinc-800 hover:bg-[#37352f12]">
                    <h1 className='text-5xl text-[#ec6357]'>Enterprice</h1>
                    <p className='w-[300px] font-extralight leading-5 mt-5 text-[#adaba3]'>Custom AI chatbot, advanced analytics, dedicated account</p>
                    <div className='flex items-center my-18'>

                    </div>
                    <button className='bg-white text-[#37352F] cursor-pointer rounded-2xl w-full p-4 font-semibold hover:bg-transparent border-2 hover:text-red-300 duration-300 hover:scale-105'>Contact us</button>
                    <div className='mt-3'>
                        <div className='flex items-start gap-3 border-t border-gray-800 p-4'>
                            <img src="check.svg" alt="" />
                            <p>An AI chatbot that can understand your queries</p>
                        </div>
                        <div className='flex items-start gap-3 border-t border-gray-800 p-4'>
                            <img src="check.svg" alt="" />
                            <p>Personalized recommendations based on your preferences</p>
                        </div>
                        <div className='flex items-start gap-3 border-t border-gray-800 p-4'>
                            <img src="check.svg" alt="" />
                            <p>Ability to explore the app and its features without any cost</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
