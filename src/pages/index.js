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
      
      <BannerImage />
      <OurServices />
      <OurProcess />
      <Studio />
      <OurPartners />
    </Layout>
  );
};

export default IndexPage;
