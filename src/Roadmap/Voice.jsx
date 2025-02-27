import React from 'react'

export const Voice = () => {
    return (
        <>
            <div className="flex flex-col lg:flex-row items-center justify-around w-full px-5 lg:px-20 space-y-6 lg:space-y-0">
                <div className="relative w-full max-w-md border rounded-2xl border-zinc-800 p-4">
                    <img className=" w-full rounded-xl" src="grid.png" alt="Grid" />
                    <div className="absolute top-0 p-2">
                        <img src="image-2.png" alt="Gamification" className="w-129 mt-12" />
                    </div>
                </div>
                <div className="max-w-md text-center lg:text-left">
                    <h1 className="text-2xl lg:text-4xl font-semibold">Gamification</h1>
                    <p className="text-sm lg:text-base text-gray-400 mt-3">
                        Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.
                    </p>
                </div>
            </div>
            {/* Voice Recognition Section */}
            <div className="flex flex-col-reverse lg:flex-row items-center justify-around w-full px-5 lg:px-20 space-y-6 lg:space-y-0">
                <div className="max-w-md text-center lg:text-left">
                    <h1 className="text-2xl lg:text-4xl font-semibold">Voice Recognition</h1>
                    <p className="text-sm lg:text-base text-gray-400 mt-3">
                        Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.
                    </p>
                </div>
                <div className="relative w-full max-w-md  border rounded-2xl border-zinc-800 p-4">
                    <img className="h-auto w-full rounded-xl" src="grid.png" alt="Grid" />
                    <div className="absolute top-0 p-2">
                        <img className="w-140 lg:w-164 mt-24" src="image-4.png" alt="Voice Recognition" />
                    </div>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center justify-around w-full px-5 lg:px-20 space-y-6 lg:space-y-0">
                <div className="relative w-full max-w-md border rounded-2xl border-zinc-800 p-4">
                    <img className=" w-full rounded-xl" src="grid.png" alt="Grid" />
                    <div className="absolute top-0 p-2">
                        <img src="image-2.png" alt="Gamification" className="w-129 mt-12" />
                    </div>
                </div>
                <div className="max-w-md text-center lg:text-left">
                    <h1 className="text-2xl lg:text-4xl font-semibold">Gamification</h1>
                    <p className="text-sm lg:text-base text-gray-400 mt-3">
                        Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.
                    </p>
                </div>
            </div>
            {/* Voice Recognition Section */}
            <div className="flex flex-col-reverse lg:flex-row items-center justify-around w-full px-5 lg:px-20 space-y-6 lg:space-y-0">
                <div className="max-w-md text-center lg:text-left">
                    <h1 className="text-2xl lg:text-4xl font-semibold">Voice Recognition</h1>
                    <p className="text-sm lg:text-base text-gray-400 mt-3">
                        Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.
                    </p>
                </div>
                <div className="relative w-full max-w-md border rounded-2xl border-zinc-800 p-4">
                    <img className="h-auto w-full rounded-xl" src="grid.png" alt="Grid" />
                    <div className="absolute top-0 p-2">
                        <img className="w-140 lg:w-164 mt-24" src="image-4.png" alt="Voice Recognition" />
                    </div>
                </div>
            </div>
        </>
    )
}
