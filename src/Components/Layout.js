import React, { useEffect } from "react";
// import { Helmet } from "react-helmet";
import Header from "./Header";
import Loader from "../pages/loader";
import ScroolToTopButton from "./ScroolToTopButton";
import Footer from "./footer";

const Layout = ({ children,location }) => {
  // console.log(location,"layoutlocation")
  useEffect(() => {
    setTimeout(() => {
      try {
        const element = document.getElementById("full-page-loader");
        if (element) element.parentNode.removeChild(element);
      } catch (error) {
        console.log(error);
      }
    }, 2000);
  });
  return (
    <>
      <div className="scroll-smooth">
        <div id="full-page-loader">
          <Loader />
        </div>
        <Header data={location}/>
        {children}
        <Footer/>
        {/* <ScroolToTopButton/> */}
      </div>
    </>
  );
};

export default Layout;
