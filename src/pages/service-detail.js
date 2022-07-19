import React, { useEffect } from "react";
import ImgTextComponent from "../Components/ImgTextComponent";
import Layout from "../Components/Layout";
import LoaderPage from "../Components/LoaderPage";

const ServiceDtl = ({ location }) => {
  console.log(location, "location");
 
  return (
    <>
      {/* <div id="full-page-loader">
        <LoaderPage />
      </div> */}
      <Layout>
        <ImgTextComponent data={location.state.data} />
      </Layout>
    </>
  );
};

export default ServiceDtl;
