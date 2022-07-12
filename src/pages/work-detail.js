import React from "react";
import Layout from "../Components/Layout";
import WorkDtl from "../Components/WorkDetail";

const WorkDetail = ({ location }) => {
  return (
    <Layout>
      <WorkDtl data={location?.state?.data} />
    </Layout>
  );
};

export default WorkDetail;
