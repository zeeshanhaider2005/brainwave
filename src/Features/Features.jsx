
import React from 'react'
import { Hero } from './Hero'
import { Key } from './Key'
import { Explain } from './Explain'

export const Features = () => {
    return (
        <div className='max-w-[1230px] mx-auto border-l border-r border-gray-900 mt-20'>
            <Hero />
            <Key />
            <Explain />
       </div>
    )
}
