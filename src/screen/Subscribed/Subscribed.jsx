import React from 'react'

export const Subscribed = () => {
  return (
    <div className='w-full h-lvh flex justify-center items-center text-primary-blue'>
      <div className='w-full h-lvh flex justify-center flex-row gap-20 items-center text-primary-blue mt-20'>

        <div className="group flex fixed h-[30px] w-full overflow-hidden ">
          <p className='text-primary-blue z-40 absolute animate-pulse w-full'>Subscribe..............Subscribe..............Subscribe..............Subscribe..............Subscribe..............Subscribe..............Subscribe..............Subscribe..............Subscribe..............Subscribe..............Subscribe..............Subscribe..............Subscribe..............Subscribe..............</p>
        </div>

        <div className="block">
          <div className="h-[600px] w-[700px] bg-transparent border rounded-3xl border-blue-400 flex justify-center items-center">Subscribed Plan</div>
        </div>

      </div>
    </div>
  )
}
