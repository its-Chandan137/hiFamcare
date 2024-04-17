import React from 'react'

export const Subscriptions = () => {
  return (
    <div className='w-full h-lvh flex justify-center items-center text-primary-blue'>
      <div className='w-full h-lvh flex justify-center flex-row gap-20 items-center text-primary-blue mt-20'>

        <div className="group flex fixed h-[30px] w-full overflow-hidden ">
          <p className='text-primary-blue z-40 absolute animate-pulse w-full'>Subscribe..............Subscribe..............Subscribe..............Subscribe..............Subscribe..............Subscribe..............Subscribe..............Subscribe..............Subscribe..............Subscribe..............Subscribe..............Subscribe..............Subscribe..............Subscribe..............</p>
        </div>

        <div className="block">
          <div className="h-[600px] w-[320px] bg-transparent border rounded-3xl border-blue-400"></div>
        </div>
        <div className="block">
          <div className="h-[600px] w-[320px] bg-transparent border rounded-3xl border-blue-400"></div>
        </div>
        <div className="block">
          <div className="h-[600px] w-[320px] bg-transparent border rounded-3xl border-blue-400"></div>
        </div>

      </div>
    </div>
  )
}
