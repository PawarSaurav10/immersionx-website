import React from "react";
import LeftImageRightText from "../../Components/imageandtextcomponent/LeftImageRightText";
import LeftTextRightImage from "../../Components/imageandtextcomponent/LeftTextRightImage";
import Layout from "../../Components/Layout";
import VRCAVEimg1 from "../../images/09_pages/VRCAVE/im_1.jpg";
import VRCAVEimg3 from "../../images/09_pages/VRCAVE/im_3.jpg";
import VRCAVEimg4 from "../../images/09_pages/VRCAVE/im_4@2x.png";

const VRCave = ({ location }) => {
  const VRCaveData = {
    bg: "bg-VRCAVEBG",
    title: "VIRTUAL REALITY CAVE",
    data1: {
      
      imageurl: VRCAVEimg1,
      // h1: "",
      p1: "Our collaborative VR platform will allow for people and businesses to collaborate and meet up in the virtual world. Teamwork is crucial and has become a challenge for global firms whose departments or subsidiaries are spread all over the world. Using virtual reality collaborative tools, you can gather all thestakeholders of your project in the same VR workspace and display your virtual prototype at scale to create and collaborate.",
      p2: "Our VIRTUAL REALITY CAVE SOLUTION will help you visualize your product better. It is an immersive, interactive 3D experience theatre that requires practically no footprint. With ultra short-throw projection and VR COLLABORATIVE TOOLS, nearly any existing room can be converted into a mind-blowing visualization center. Can be used for Virtual meeting rooms, training spaces, virtual shopping experiences, remote collaborations, etc.",
      // p3: "",
    },
    data2: {
      numberofcolspan: 2,
      imageurl: VRCAVEimg3,
      // p1: "Teamwork is crucial and has become a challenge for global firms whose departments or subsidiaries are spread all over the world. Using virtual reality collaborative tools, you can gather all thestakeholders of your project in the same VR workspace and display your virtual prototype at scale to create and collaborate.",
      // p3: "Can be used for Virtual meeting rooms, training spaces, virtual shopping experiences, remote collaborations, etc.",
    },
    // data3: {
    //   imageurl: VRCAVEimg4,
    // p1: "Teamwork is crucial and has become a challenge for global firms whose departments or subsidiaries are spread all over the world. Using virtual reality collaborative tools, you can gather all thestakeholders of your project in the same VR workspace and display your virtual prototype at scale to create and collaborate.",
    // p3: "Can be used for Virtual meeting rooms, training spaces, virtual shopping experiences, remote collaborations, etc.",
    // },
  };

  return (
    <Layout location={location?.pathname}>
      <div className="pt-24 lg:pt-0 bg-black">
        <div className={`${VRCaveData?.bg} bg-cover bg-no-repeat bg-center`}>
          <div className="container">
            <div className="pt-0 md:pt-48 xl:pt-96">
              <div className="text-2xl md:text-5xl text-white pt-28 pb-4 md:pb-8 text-left ml-8 md:ml-16 uppercase">
                {VRCaveData?.title}
              </div>
            </div>
          </div>
        </div>
        {VRCaveData?.data2 && <LeftTextRightImage data={VRCaveData?.data1} />}
        {VRCaveData?.data1 && <LeftImageRightText data={VRCaveData?.data2} />}
        {/* {VRCaveData?.data2 && <LeftTextRightImage data={VRCaveData?.data2} />} */}
        {/* {VRCaveData?.data3 && <LeftImageRightText data={VRCaveData?.data3} />} */}
      </div>
    </Layout>
  );
};

export default VRCave;
