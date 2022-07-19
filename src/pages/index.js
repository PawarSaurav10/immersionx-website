import * as React from "react";
import { Helmet } from "react-helmet";
import Layout from "../Components/Layout";
import BannerImage from "../Components/BannerImage";
import OurServices from "../Components/OurServices";
import OurPartners from "../Components/OurPartners";
import OurProcess from "../Components/OurProcess";
import Studio from "../Components/Studio";
import LoaderPage from "../Components/LoaderPage";
import { useEffect } from "react";

const IndexPage = () => {
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
      <div id="full-page-loader">
        <LoaderPage />
      </div>
      <Layout>
        <BannerImage />
        <OurServices />
        <OurProcess />
        <Studio />
        <OurPartners />
      </Layout>
    </>
  );
};

export default IndexPage;
