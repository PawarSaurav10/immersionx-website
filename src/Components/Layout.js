import { Link } from "gatsby";
import React, { useEffect } from "react";
// import { Helmet } from "react-helmet";
// import logo from "../images/01_screensaver/immersionlogo@2x.png";
import Header from "./Header";
// import LoaderPage from "./LoaderPage";
// import "../../js/"

const Layout = ({ children }) => {
  // useEffect(() => {
  //   setTimeout(() => {
  //     try {
  //       const element = document.getElementById("full-page-loader");
  //       if (element) element.parentNode.removeChild(element);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }, 2000);
  // });
  return (
    <>
      {/* <div id="full-page-loader">
        <LoaderPage />
      </div> */}

      <Header />
      {children}
    </>
  );
};

export default Layout;
