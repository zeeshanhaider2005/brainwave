import React from 'react'

export const Set7 = () => {
    return (
        <div className='max-w-[1230px] mx-auto border-l p-5 border-r border-zinc-800'>
            <div className='flex flex-wrap gap-6 justify-center lg:justify-around'>
                <div className="relative w-full md:w-[572px] rounded-xl overflow-hidden">
                    <img className='w-full object-cover' src="service-2.png" alt="Photo Editing" />
                    <div className='absolute top-0 w-full h-full p-6 md:p-12 flex flex-col justify-end bg-gradient-to-t from-black/60 to-transparent'>
                        <h1 className='text-3xl md:text-5xl text-white'>Photo Editing</h1>
                        <p className='mt-4 md:mt-6 text-[#c2bdc8] text-sm md:text-base'>Automatically enhance your photos using our AI app's photo editing feature. Try it now!</p>
                    </div>
                </div>
                <div className="w-full md:w-[572px] border border-gray-800 rounded-xl p-6 md:p-10 flex flex-col gap-4 md:gap-6">
                    <h1 className='text-2xl md:text-4xl'>Video Generation</h1>
                    <p className='text-[#8B879E] text-sm md:text-base'>The world’s most powerful AI photo and video art generation engine. What will you create?</p>
                    <div>
                        <img className='w-full' src="button.PNG" alt="Button" />
                    </div>
                    <div>
                        <img className='w-full' src="enter.PNG" alt="Enter" />
                    </div>
                </div>
            </div>
        </div>
    )
}
