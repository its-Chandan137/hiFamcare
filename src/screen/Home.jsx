import React, { useEffect } from 'react'
import { Hero } from '../router'

export const Home = () => {
  useEffect(() => {
    window.scrollTo(0,0);
},[]);
  return (
    <div className='backgroundScreens min-w-full min-h-[90lvh] text-primary-blue'>
      <Hero/>
    </div>
  )
}
