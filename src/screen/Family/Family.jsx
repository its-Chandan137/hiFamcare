import React, { useEffect, useState } from 'react'
import { Reports } from '../../router'

export const Family = () => {

  // const isFamily = location.pathname === "/family";

  // useEffect(() => {
  //     window.scrollTo(0,0);
  // },[]);

 

  return (
    <div className='w-full h-full flex flex-col text-primary-blue mt-32'>
      <Reports/>
    </div>
  )
}
