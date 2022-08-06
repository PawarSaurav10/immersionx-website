import React from "react";
import LeftImageRightText from "../../Components/imageandtextcomponent/LeftImageRightText";
import LeftTextRightImage from "../../Components/imageandtextcomponent/LeftTextRightImage";
import Layout from "../../Components/Layout";
import COLLABORATIVEVRim1 from "../../images/02_OURSERVICES/pages/COLLABORATIVEVR/MULTITACTIONim_1.jpg";
import COLLABORATIVEVRim2 from "../../images/02_OURSERVICES/pages/COLLABORATIVEVR/MULTITACTIONim_2.jpg";

const Multitaction = ({ location }) => {
  const MultitactionData = {
    bg: "bg-MULTITACTION",
    title: "Multitaction",
    data1: {
      numberofcolspan: 3,
      imageurl: COLLABORATIVEVRim1,
      // h1: "Volumetric Capture",
      p1: `The epitome of collaboration, MultiTaction is the benchmark in touch-based interactive installations. Compatible with a number of add-ons and accessories such as markers, pens and other. `,
      p2: "The iWall is an extension of the Multitaction technology that provides an unparalleled user experience with a unique hardware design with unmatched capabilities. The MultiTaction iWall can be designed to any size format depending on the user’s requirement and purpose – large format walls, touch tables, curved walls etc.",
      // p3: "Think of it as like taking one photograph of each side of a cube and then gluing the photos together into a cube shape. You now have a spatial model created from two-dimensional representations of the real thing.",
    },
    data2: {
      imageurl: COLLABORATIVEVRim2,
      h1: "CANVUS COLLABORATIVE SOFTWARE",
      p1: "Over the years, there have been many attempts at achieving team collaboration, from video conferencing to shared document services. But, these platforms have always fallen short of realizing a truly unified collaboration experience.",
      p3: "Now, with Canvus, there is a collaboration platform that can deliver on the promise of anywhere, anytime, any device collaboration.",
    },
  };
  return (
    <Layout location={location?.pathname}>
      <div className="pt-24 lg:pt-0 bg-black">
        <div
          className={`${MultitactionData?.bg} bg-cover bg-no-repeat bg-center`}
        >
          <div className="container">
            <div className="pt-0 md:pt-48 xl:pt-96">
              <div className="text-2xl md:text-5xl text-white pt-28 pb-4 md:pb-8 text-left ml-8 md:ml-16 uppercase">
                {MultitactionData?.title}
              </div>
            </div>
          </div>
        </div>
        {MultitactionData?.data1 && (
          <LeftImageRightText data={MultitactionData?.data1} />
        )}
        {MultitactionData?.data2 && (
          <LeftTextRightImage data={MultitactionData?.data2} />
        )}
        {MultitactionData?.data3 && (
          <LeftImageRightText data={MultitactionData?.data3} />
        )}
      </div>
    </Layout>
  );
};

export default Multitaction;
