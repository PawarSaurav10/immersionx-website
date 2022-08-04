import * as React from "react";
import Layout from "../Components/Layout";
import BannerImage from "../Components/BannerImage";
import OurServices from "../Components/OurServices";
import OurPartners from "../Components/OurPartners";
import OurProcess from "../Components/OurProcess";
import Studio from "../Components/Studio";
import StudioNew from "../Components/StudioNew";

const IndexPage = ({location}) => {

  return (
    <>
      <Layout location={location?.pathname}>
        <BannerImage />
        <OurServices />
        <OurProcess />
        {/* <Studio /> */}
        <StudioNew/>
        <OurPartners />
      </Layout>
    </>
  );
};

export default IndexPage;
