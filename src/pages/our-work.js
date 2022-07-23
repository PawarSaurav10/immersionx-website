import React from "react";
import Layout from "../Components/Layout";
import OurWork from "../Components/OurWork"

const Work = ({location}) => {
  // console.log(location,"location")
  return (
    <Layout location={location?.pathname}>
      <OurWork />
    </Layout>
  );
};

export default Work;
