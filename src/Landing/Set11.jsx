import React from "react";

export const Set11 = () => {
    const items = [
        { title: "Voice Recognition", status: "✔ DONE", img: "voive.webp", description: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free." },
        { title: "Voice Recognition", status: "✔ DONE", img: "image-3.png", description: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free." },
        { title: "Gamification", status: "IN PROGRESS", img: "voive.webp", description: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently." },
        { title: "Voice Recognition", status: "✔ DONE", img: "image-3.png", description: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free." }
    ];

    return (
        <div className='max-w-[1230px] border-l border-r border-zinc-800 mx-auto px-4 py-8'>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                {items.map((item, index) => (
                    <div key={index} className='relative border rounded-2xl border-zinc-800 p-4 overflow-hidden ml-2 lg:ml-3 w-[374px] lg:w-[560px]'>
                        <img src="grid.png" alt="Grid Background" className='w-full h-auto object-cover' />
                        <div className='absolute top-0 left-0 right-0 p-8'>
                            <div className='flex items-center justify-between'>
                                <h1 className='text-sm md:text-base'>[ May 2025 ]</h1>
                                <button className='border px-3 py-1 bg-white text-black rounded-lg font-light text-xs md:text-sm'>
                                    {item.status}
                                </button>
                            </div>
                            <img src={item.img} alt="Feature" className='w-full h-auto rounded-lg' />
                            <div className=' lg:mt-5'>
                                <h1 className='text-2xl md:text-4xl font-semibold'>{item.title}</h1>
                                <p className='text-sm md:text-base text-gray-500 mt-3'>{item.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
