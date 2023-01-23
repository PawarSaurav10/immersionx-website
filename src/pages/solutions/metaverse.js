import React from "react";
import LeftImageRightText from "../../Components/imageandtextcomponent/LeftImageRightText";
import LeftTextRightImage from "../../Components/imageandtextcomponent/LeftTextRightImage";
import Layout from "../../Components/Layout";
// import COLLABORATIVEVRim1 from "../../images/02_OURSERVICES/pages/COLLABORATIVEVR/COLLABORATIVEVRim_1@2x.png";
// import COLLABORATIVEVRim2 from "../../images/02_OURSERVICES/pages/COLLABORATIVEVR/COLLABORATIVEVRim_2@2x.png";

const Metaverse = ({ location }) => {
  const MetaverseData = {
    // bg: "bg-COLLABORATIVEVRBG",
    title: "Metaverse",
    data1: {
      numberofcolspan: 3,
      // imageurl: COLLABORATIVEVRim1,
      h1: "Creating the Metaverse with Volumetric Video and Virtual Production",
      p1: "The metaverse is one of those big concepts that tends to spur all kinds of ideas. Sometimes practical, often theoretical.Immersiox creates that platform to collaborate in the metaverse and bring your business into ‘THAT VIRTUAL WORLD’.",
      p2: "We provide you the state-of-the-art, 3D volumetric video capture studio and 3D solutions—using our volumetric capture is perfect for traversing into the metaverse as representations of real people, real objects or environments.",
    },
    data2: {
      // imageurl: COLLABORATIVEVRim2,
      h1: "How Does It Work",
      l1: "STEP 1: The human is captured in the studio using the green screen set-up and multiple cameras.",
      l2: "STEP 2: The software converts the human figure into a digital 3d human using our backend software",
      l3: "STEP 3: The 3d content extracted of the human figure can now be used in any digital environment",
      // l4: "Creates opportunities to shorten sales cycles",
    },
  };

  return (
    <Layout location={location?.pathname}>
      <div className="pt-24 lg:pt-0 bg-black">
        <div className={`${MetaverseData?.bg} bg-cover bg-no-repeat bg-center`}>
          <div className="container">
            <div className="pt-0 md:pt-48 xl:pt-96">
              <div className="text-2xl md:text-5xl text-white pt-28 pb-4 md:pb-8 text-left ml-8 md:ml-16 uppercase">
                {MetaverseData?.title}
              </div>
            </div>
          </div>
        </div>
        {MetaverseData?.data1 && (
          <LeftImageRightText data={MetaverseData?.data1} />
        )}
        {MetaverseData?.data2 && (
          <LeftTextRightImage data={MetaverseData?.data2} />
        )}
        {MetaverseData?.data3 && (
          <LeftImageRightText data={MetaverseData?.data3} />
        )}
      </div>
    </Layout>
  );
};

export default Metaverse;
