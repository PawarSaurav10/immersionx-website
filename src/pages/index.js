import * as React from "react";
import { Helmet } from "react-helmet";
import Layout from "../Components/Layout";
import BannerImage from "../Components/BannerImage";
import OurServices from "../Components/OurServices";
import OurPartners from "../Components/OurPartners";
import OurProcess from "../Components/OurProcess";
import Studio from "../Components/Studio";

const IndexPage = () => {
  return (
    <Layout>
      <Helmet>
        {/* <title>{data.page.meta_title || data.page.title}</title>
        <meta
          property="og:title"
          // content={data.page.meta_title || data.page.title}
        />
        <meta
          name="theme-color"
          content="#144a95"
          media="(prefers-color-scheme: light)"
        />
        <meta
          name="theme-color"
          content="#144a95"
          media="(prefers-color-scheme: dark)"
        />
        <meta name="theme-color" content="#144a95" />
        <meta
          property="twitter:title"
          content={data.page.meta_title || data.page.title}
        />{" "}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
        <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"></meta>
        <meta name="description" content={data.page.meta_desc} />
        <meta property="og:description" content={data.page.meta_desc} />
        <meta property="twitter:description" content={data.page.meta_desc} /> */}
       
      </Helmet>
      <BannerImage />
      <OurServices />
      <OurProcess />
      <Studio />
      <OurPartners />
    </Layout>
  );
};

export default IndexPage;
