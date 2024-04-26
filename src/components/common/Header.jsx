import LogoImg from "../../assets/common/logo.png";
import { menulists } from "../../assets/data/data.js";
import { Badges, CustomLink, CustomNavLink, CustomNavLink2, Title } from "./CustomComponents.jsx";
import { IoSearchOutline } from "react-icons/io5";
import { useEffect, useRef, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { NavLink, useLocation } from "react-router-dom";
// import { ModelCart } from "../cart/ModelCart.jsx";
import { BsFillPersonFill } from "react-icons/bs";
import { BsGitlab } from "react-icons/bs";
import { useSelector } from "react-redux";




export const Header = () => {
  const isLog = useSelector((state) => state.account.isLog)

  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef(null);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  //closes menu if clicked outside of the menu button...
  const closeMenuOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 0);
  };

  useEffect(() => {
    document.addEventListener("mousedown", closeMenuOutside);
    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", closeMenuOutside);
      document.removeEventListener("scroll", handleScroll);
    };
  },[]);

  console.log("Is User LoggedIn? : " , isLog)

  const isHomePage = location.pathname === "/";

  return (
    <div>
      <header
        className={
          isHomePage
            ? `header px-12 bg-transparent relative z-20 border dark:border-slate-300/10
            ${isScrolled ? "scrolled" : ""}`
            : `header px-12 relative z-20 border dark:border-slate-300/10
            ${isScrolled ? "scrolled" : ""}`
        }
      >
        {isHomePage && (
          <div
            className={`${isScrolled ? "lg:bg-none" : "lg:bg-blue-1 lg:border lg:border-blue-1"}
                lg:h-[33px] lg:absolute lg:top-0 lg:right-0 lg:w-[480px] lg:-z-10 rounded-l-full my-4 hover:bg-sky-400/20 py-2 z-40000`}
          ></div>
        )}

        <nav className="p-4 flex justify-between items-center relative">
          <div className="flex items-center gap-24">
            <div>
              <CustomNavLink href="/" className="flex">
                <img src={LogoImg} alt="hi famcare" className="h-8" />
                <Title level={5} className="title text-white-100">hifamcare</Title>
              </CustomNavLink>
            </div>
            <div className="hidden lg:flex items-center justify-between gap-16 ">
              {menulists.map((list) => (
                <li key={list.id} className="list-none text-sm leading-6 font-semibold text-slate-700 dark:text-slate-200 ">
                  <CustomNavLink 
                    href={list.path} 
                    className="hover:text-sky-500 dark:hover:text-sky-400">
                      {list.link}
                  </CustomNavLink>
                </li>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-8 icons">

 {/* ------------------------Login and register will change into profile icon here -------------------------------------------*/}

            <div className={`uppercase hidden lg:block text-inherit relative z-20
                            ${!isHomePage || isScrolled ? "text-white" : "text-white"}`}>



              {isLog == false 

            ? <div className="flex gap-12">
                <CustomNavLink2 href={"/subs"}
                className="hover:text-sky-500 dark:hover:text-sky-400">
                  Subscriptions
                </CustomNavLink2>

                <CustomNavLink2 href={"/login"}
                className="hover:text-sky-500 dark:hover:text-sky-400">
                  Login
                </CustomNavLink2>

                <CustomNavLink2 href={"/register"}
                className="hover:text-sky-500 dark:hover:text-sky-400">
                  Register
                </CustomNavLink2>
              </div> 

              : 
              <div className="flex gap-20 items-center">
                <CustomNavLink2 href={"/Subscribed"}
                className="hover:text-sky-500 dark:hover:text-sky-400">
                  Subscription
                </CustomNavLink2>

                <CustomNavLink2 href={"/profile"}>
                  <BsFillPersonFill size={28}/>
                </CustomNavLink2>
              </div>}

            </div>

            <div
              className={`icon flex items-center justify-center gap-6 
            ${!isHomePage || isScrolled ? "text-primary" : "text-white"}`}
            >
              {/* <IoSearchOutline size={25} /> */}


              <button
                onClick={toggleMenu}
                className="lg:hidden w-10 h-10 flex justify-center items-center bg-black text-white focus:outline-none"
              >
                {isOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu />}
              </button>
            </div>
          </div>

          <div
            ref={menuRef}
            className={`lg:hidden lg:items-center lg:w-auto w-full p-5 absolute right-0 top-full menu-container ${
              isOpen ? "open" : "closed"
            }`}
          >
            {menulists.map((list) => (
              <li key={list.id} className="uppercase list-none">
                <CustomNavLink href={list.path}>{list.link}</CustomNavLink>
              </li>
            ))}
          </div>
        </nav>
      </header>
    </div>
  );
};
