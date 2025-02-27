import React from 'react';

export const Explain = () => {
    return (
        <div className='max-w-6xl mx-auto px-4 py-8'>
            {[
                {
                    title: "Writing Assistant",
                    img: "text-generator.jpeg",
                    border: "border-purple-500"
                },
                {
                    title: "Grammar & Spell Check",
                    img: "seo.jpeg",
                    border: "border-yellow-500"
                },
                {
                    title: "Audio Extractor",
                    img: "image-3.png",
                    border: "border-[#1ef6e7]"
                },
                {
                    title: "Grammar & Spell Check",
                    img: "image-2.png",
                    border: "border-red-300"
                }
            ].map((item, index) => (
                <div key={index} className='flex flex-col md:flex-row items-center p-6 md:p-14 justify-around gap-6 flex-wrap'>
                    {index % 2 === 0 ? (
                        <>
                            <div className={`w-full md:w-[590px] p-4 flex flex-col gap-5 h-fit border-2 ${item.border} rounded-2xl`}>
                                <h1 className='text-2xl md:text-4xl font-semibold'>{item.title}</h1>
                                <p className='text-sm md:text-base text-[#aeadac]'>Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.</p>
                            </div>
                            <div className={`relative w-full md:w-[300px] border-2 rounded-2xl ${item.border}`}>
                                <img className='w-full rounded-2xl' src={item.img} alt={item.title} />
                            </div>
                        </>
                    ) : (
                        <>
                            <div className={`relative w-full md:w-[300px] border-2 rounded-2xl ${item.border}`}>
                                <img className='w-full rounded-2xl' src={item.img} alt={item.title} />
                            </div>
                            <div className={`w-full md:w-[590px] p-4 flex flex-col gap-5 h-fit border-2 ${item.border} rounded-2xl`}>
                                <h1 className='text-2xl md:text-4xl font-semibold'>{item.title}</h1>
                                <p className='text-sm md:text-base text-[#aeadac]'>Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.</p>
                            </div>
                        </>
                    )}
                </div>
            ))}
        </div>
    );
};
