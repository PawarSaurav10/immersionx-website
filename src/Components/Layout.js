import React, { useEffect } from "react";
// import { Helmet } from "react-helmet";
import Header from "./Header";
import LoaderPage from "../pages/loader";

const Layout = ({ children }) => {
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
    <div>
    <div id="full-page-loader">
        <LoaderPage />
      </div>
      <Header />
      {children}
    </div>
    </>
  );
};

export default Layout;
