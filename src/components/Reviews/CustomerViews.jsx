import React from 'react'
import { review } from './Reviews'
import { Comments } from './Comments'

export const CustomerViews = () => {
  return (
    <div className='w-full h-[500px] text-center flex flex-col gap-7'>
        <div className='line1 w-full h-1/2 overflow-hidden'>
            <div className='testimonials-row-1 w-fit h-full flex gap-7 overflow-hidden overflow-x-scroll'>
                {review.map((x,i)=>(
                    <Comments key={i} data={x}/>
                ))}                
            </div>
        </div>
        <div className='line2 w-full h-1/2 overflow-hidden'>
            <div className='testimonials-row-2 w-fit h-full flex gap-7 overflow-hidden overflow-x-scroll'>
                {review.map((x,i)=>(
                    <Comments key={i} data={x}/>
                ))}    
            </div>
        </div>
    </div>
  )
}
