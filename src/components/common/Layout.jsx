import { Footer } from './Footer';
import { Header } from './Header'
import PropTypes from "prop-types";

 
 export const Layout = ({children}) => {
   return (
     <div>
        <Header/>
        <main style={{minHeight: "90lvh"}}>{children}</main>
        <Footer/>
     </div>
   )
 }
 
 Layout.propTypes = {
   children: PropTypes.isRequired,
 }
