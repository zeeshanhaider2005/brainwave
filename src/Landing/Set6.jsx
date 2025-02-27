import React from 'react'

export const Set6 = () => {
    return (
        <div className='max-w-[1230px] mx-auto border-l border-r border-zinc-800 px-4 md:px-8'>
            <div className='text-center flex flex-col py-10 md:py-20'>
                <h1 className='text-3xl md:text-5xl font-semibold'>Generative AI made for creators.</h1>
                <p className='text-[#665A73] text-sm md:text-base mt-2'>Brainwave unlocks the potential of AI-powered applications</p>
            </div>
            <div className='flex flex-col md:flex-row items-center w-full border border-gray-800 rounded-2xl overflow-hidden'>
                <img className='w-full md:w-[780px] object-cover' src="service-1.png" alt="Service" />
                <div className='p-6 md:p-10 w-full md:w-1/2'>
                    <h1 className='text-2xl md:text-3xl font-semibold'>Smartest AI</h1>
                    <p className='text-[#665A73] mt-4'>Brainwave unlocks the potential of AI-powered applications</p>
                    <div className='mt-10 md:mt-16'>
                        <p className='text-base md:text-lg border-t border-gray-800 py-3 flex items-center gap-4'><img src="check.svg" alt="Check" className='w-5 h-5' /> Photo generating</p>
                        <p className='text-base md:text-lg border-t border-gray-800 py-3 flex items-center gap-4'><img src="check.svg" alt="Check" className='w-5 h-5' /> Photo enhance</p>
                        <p className='text-base md:text-lg border-t border-gray-800 py-3 flex items-center gap-4'><img src="check.svg" alt="Check" className='w-5 h-5' /> Seamless Integration</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
