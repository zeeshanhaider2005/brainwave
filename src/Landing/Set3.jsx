import React from 'react'

export const Set3 = () => {
    return (
        <div className='max-w-[1230px] flex flex-wrap gap-8 p-6 md:p-12 mx-auto border-l border-r border-[#252134] text-[#aeadac] justify-center'>
        <div className="relative w-full md:w-[48%] h-80 p-6 bg-[#0E0D15] text-white rounded-2xl shadow-lg overflow-hidden group flex flex-col justify-between">
            <h2 className="text-2xl md:text-3xl font-semibold">Ask anything</h2>
            <p className="mt-2 text-gray-400 text-sm md:text-md w-[90%]">
                Lets users quickly find answers to their questions without having to
                search through multiple sources.
            </p>
            <div className="flex justify-between items-center gap-2">
                <div className="bg-purple-600 p-2 rounded-lg">
                    <span className="text-white">💬</span>
                </div>
                <span className="text-sm font-semibold">EXPLORE MORE ➝</span>
            </div>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300">
                <img className='w-full h-full object-cover' src="image-2.png" alt="Hover Image" />
            </div>
        </div>
        <div className="relative w-full md:w-[48%] h-80 p-6 bg-[#0E0D15] text-white rounded-2xl shadow-lg overflow-hidden group flex flex-col justify-between">
            <h2 className="text-2xl md:text-3xl font-semibold">Improve everyday</h2>
            <p className="mt-2 text-gray-400 text-sm md:text-md w-[90%]">
                The app uses natural language processing to understand user queries and provide accurate and relevant responses.
            </p>
            <div className="flex justify-between items-center gap-2">
                <div className="bg-purple-600 p-2 rounded-lg">
                    <span className="text-white">💬</span>
                </div>
                <span className="text-sm font-semibold">EXPLORE MORE ➝</span>
            </div>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300">
                <img className='w-full h-full object-cover' src="image-2.png" alt="Hover Image" />
            </div>
        </div>
    </div>
    )
}
