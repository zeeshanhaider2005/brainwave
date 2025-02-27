import React from 'react'
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaPaperPlane } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";


export const Footer = () => {
    return (
        <div className='max-w-[1230px] flex items-center justify-between px-5 py-12 mx-auto lg:border border-zinc-800  text-[#aeadac]'>
            <div className="left mx-auto lg:mx-0">
                &copy; Brainwave 2025. All rights reserved.
            </div>
            <div className="right gap-5 text-[23px] hidden lg:block lg:flex">
                <div className='hover:bg-zinc-800 bg-zinc-900 p-2 rounded-full cursor-pointer'>
                    <FaYoutube />
                </div>
                <div className='hover:bg-zinc-800 bg-zinc-900 p-2 rounded-full cursor-pointer'>
                    <FaTwitter />
                </div>
                <div className='hover:bg-zinc-800 bg-zinc-900 p-2 rounded-full cursor-pointer'>
                    <RiInstagramFill />
                </div>
                <div className='hover:bg-zinc-800 bg-zinc-900 p-2 rounded-full cursor-pointer'>
                    <FaPaperPlane />
                </div>
                <div className='hover:bg-zinc-800 bg-zinc-900 p-2 rounded-full cursor-pointer'>
                    <FaFacebookF />
                </div>
            </div>
        </div>
    )
}
