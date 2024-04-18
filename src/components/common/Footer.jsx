import React, { useState } from 'react'
import { FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

export const Footer = () => {

  const [view,setView] = useState(true);
  const isHomePage = location.pathname === "/";
  const isAbout = location.pathname === "/about";
  // const isServices = location.pathname === "/services";
  // const isTeam = location.pathname === "/team";
  // const isContact = location.pathname === "/contact";

  return (
    <div className='footer relative w-full min-h-[100px] py-12 justify-center items-center mt-[250px]'>

        <div className="waves">
          <div className="wave" id='wave1'></div>
          <div className="wave" id='wave2'></div>
          <div className="wave" id='wave3'></div>
          <div className="wave" id='wave4'></div>
        </div>

        <ul className='social-icons flex gap-3 w-full justify-center'>
          <li><a href="#"><FaInstagram size={27}/></a></li>
          <li><a href='#'><FaLinkedin size={27}/></a></li>
          <li><a href="https://github.com/its-Chandan137"><FaGithub size={27}/></a></li>
          <li><a href='#'><FaTwitter size={27}/></a></li>
        </ul>
        <ul className='foot-menu flex gap-3 w-full justify-center mt-4'>
          <li>{isHomePage? <a href="#">Home</a> : <a href="/">Home</a>}</li>
          <li>{isAbout? <a href="#">About</a> : <a href="/about">About</a>}</li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Team</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <p className='text-white text-center mt-2 opacity-75'>@2024 Built | All Rights Reserved</p>
    </div>
  )
}
