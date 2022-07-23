import React from "react";
import Layout from "../Components/Layout";
import WorkDtl from "../Components/WorkDetail";

const WorkDetails = ({ location }) => {
  return (
    <Layout>
      <WorkDtl data={location?.state?.data} />
    </Layout>
  );
};

export default WorkDetails;
