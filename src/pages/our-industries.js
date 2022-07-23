import React from "react";
import Layout from "../Components/Layout";
import Industries from "../Components/OurIndustries";

const OurIndustries = ({location}) => {
  return (
    <Layout location={location?.pathname}>
      <Industries />
    </Layout>
  );
};

export default OurIndustries;
