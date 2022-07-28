import React from "react";
import LeftImageRightText from "../../Components/imageandtextcomponent/LeftImageRightText";
import LeftTextRightImage from "../../Components/imageandtextcomponent/LeftTextRightImage";
import Layout from "../../Components/Layout";
import COLLABORATIVEVRim1 from "../../images/02_OURSERVICES/pages/COLLABORATIVEVR/COLLABORATIVEVRim_1@2x.png";
import COLLABORATIVEVRim2 from "../../images/02_OURSERVICES/pages/COLLABORATIVEVR/COLLABORATIVEVRim_2@2x.png";

const VolumetricStudio = ({ location }) => {
  const VolumetricStudioData = {
    bg: "bg-volumetric",
    title: "Volumetric Studio",
    data1: {
      numberofcolspan: 3,
      imageurl: COLLABORATIVEVRim1,
      h1: "Volumetric Capture",
      p1: `“Volumetric capture" (also known as "volumetric intelligence") technology converts a person, object, or place into 3D digital data and reproduces it as a high-quality image. Basically, volumetric capture can create spatial models of moving objects and people in real-time. This video technique captures you from different viewpoints. It captures moving images of people and creates them in 3D in NO TIME! `,
      // p2: "",
      p2: "Think of it as like taking one photograph of each side of a cube and then gluing the photos together into a cube shape. You now have a spatial model created from two-dimensional representations of the real thing.",
    },
    data2: {
      imageurl: COLLABORATIVEVRim2,
      h1: "Creating the Metaverse with Volumetric Video and Virtual Production",
      p1: "The metaverse is one of those big concepts that tends to spur all kinds of ideas. Sometimes practical, often theoretical.",
      p3: "Immersiox creates that platform to collaborate in the metaverse and bring your business into ‘THAT VIRTUAL WORLD’. We provide you the state-of-the-art, 3D volumetric video capture studio and 3D solutions—using our volumetric capture is perfect for traversing into the metaverse as representations of real people, real objects or environments.",
    },
  };

  return (
    <Layout location={location?.pathname}>
      <div className="pt-24 lg:pt-0 bg-black">
        <div
          className={`${VolumetricStudioData?.bg} bg-cover bg-no-repeat bg-center`}
        >
          <div className="container">
            <div className="pt-0 md:pt-48 xl:pt-96">
              <div className="text-2xl md:text-5xl text-white pt-28 pb-4 md:pb-8 text-left ml-8 md:ml-16 uppercase">
                {VolumetricStudioData?.title}
              </div>
            </div>
          </div>
        </div>
        {VolumetricStudioData?.data1 && (
          <LeftImageRightText data={VolumetricStudioData?.data1} />
        )}
        {VolumetricStudioData?.data2 && (
          <LeftTextRightImage data={VolumetricStudioData?.data2} />
        )}
        {VolumetricStudioData?.data3 && (
          <LeftImageRightText data={VolumetricStudioData?.data3} />
        )}
      </div>
    </Layout>
  );
};

export default VolumetricStudio;
