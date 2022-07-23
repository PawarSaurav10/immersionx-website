import React from "react";
import ContactUs from "../Components/ContactUs";
import Layout from "../Components/Layout";

const Contact = ({location}) => {
  return (
    <Layout location={location?.pathname}>
      <ContactUs />
    </Layout>
  );
};

export default Contact;
