import { Chat } from './Chat';
import { Footer } from './Footer';
import { Header } from './Header'
import PropTypes from "prop-types";

 
 export const Layout = ({children}) => {
  function handleKeyDown(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      setSelected(selected + 1);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
    } else if (event.key === "Escape") {
      event.preventDefault();
    }
  }
   return (
     <div className='relative'>
        <Header/>
        <main style={{minHeight: "90lvh"}}>{children}</main>
          <button className='chat fixed top-[40rem] right-[4rem] rounded-full w-20 h-20 overflow-hidden'>
            <Chat/>
          </button>
        <Footer/>
     </div>
   )
 }
 
 Layout.propTypes = {
   children: PropTypes.isRequired,
 }
