import React from 'react'

export const Set1 = () => {
  return (
    <div className='relative max-w-[1230px] flex flex-col items-center justify-between mx-auto lg:border border-zinc-800  text-[#aeadac]'>
        <div className=''>
            <img src="hero-background.jpg" alt="" />
        </div>
        <div className='absolute mt-32 lg:mt-48 p-1 bg-zinc-800 border-zinc-800 border-t border-l border-r rounded-md h-[600px] overflow-hidden'>
            <img className='rounded-md w-[290px] lg:w-[920px]' src="robot.jpg" alt="" />
        </div>
        <div className='absolute mt-240'>
            <img  src="kalo.PNG" alt="" />
        </div>
    </div>
  )
}
