import React, { useEffect } from "react";
import ImgTextComponent from "../Components/ImgTextComponent";
import Layout from "../Components/Layout";

const ServiceDtl = ({ location }) => {
  console.log(location, "location");
 
  return (
    <>
      <Layout>
        <ImgTextComponent data={location.state.data} />
      </Layout>
    </>
  );
};

export default ServiceDtl;
