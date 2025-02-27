import React, { useState, useEffect } from 'react';

export const Landing = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setPosition({
                x: e.clientX / 50, // Adjust the division factor for speed
                y: e.clientY / 50,
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div className='relative w-full overflow-hidden'>
            {/* Stars background */}
            <img
                className='absolute w-[1230px] mx-auto left-1/2 transform -translate-x-1/2'
                src="stars.svg"
                alt=""
                style={{
                    transform: `translate(${position.x}px, ${position.y}px)`,
                    transition: 'transform 0.1s linear',
                }}
            />

            {/* Main content */}
            <div className='max-w-[1230px] flex flex-col gap-10 border mt-15 mx-auto lg:border border-zinc-800 text-[#aeadac] py-18 relative z-10'>
                <div className='flex justify-center items-center'>
                    <form className='max-w-[1000px]'>
                        <h1 className='text-3xl lg:text-6xl flex text-center text-white font-bold'>
                            Explore the Possibilities of&nbsp;AI&nbsp;Chatting with Brainwave.
                        </h1>
                        <img className='w-[324px] absolute ml-156' src="curve.png" alt="" />
                    </form>
                </div>
                <p className='max-w-[300px] lg:max-w-[800px] text-center text-[14px] lg:text-[20px] mx-auto leading-6'>
                    Unleash the power of AI within Brainwave. Upgrade your productivity with Brainwave, the open AI chat app.
                </p>
                <div className='w-full text-center z-2'>
                    <button className='border text-[12px] px-3 py-1 lg:px-8 lg:py-2 cursor-pointer rounded-md font-semibold bg-white text-[#201f1c] hover:text-purple-500 duration-200'>
                        GET STARTED
                    </button>
                </div>
            </div>
        </div>
    );
};
