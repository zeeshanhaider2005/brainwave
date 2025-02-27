import React from 'react'
import { Hero } from './Hero'
import { Prize } from './Prize'
import { Plans } from './Plans'

export const Pricing = () => {
  return (
    <div className='max-w-[1230px] mx-auto border-l border-r border-gray-900 mt-20'>
        <Hero />
        <Prize />
        <Plans />
    </div>
  )
}
