import React from "react";
import COLLABORATIVEVRim1 from "../images/02_OURSERVICES/pages/COLLABORATIVEVR/COLLABORATIVEVRim_1@2x.png";
import COLLABORATIVEVRim2 from "../images/02_OURSERVICES/pages/COLLABORATIVEVR/COLLABORATIVEVRim_2@2x.png";
import LeftTextRightImage from "./imageandtextcomponent/LeftTextRightImage";
import LeftImageRightText from "./imageandtextcomponent/LeftImageRightText";

const ImgTextComponent = () => {
  const data1 = {
    numberofcolspan: 3,
    imageurl: COLLABORATIVEVRim1,
    h1: "Our collaborative VR platformwill allow for people and businesses to collaborate and meet up in the virtual world",
    p1: "Teamwork is crucial and has become a challenge for global firms whose departments or subsidiaries are spread all over the world. Using virtual reality collaborative tools, you can gather all thestakeholders of your project in the same VR workspace and display your virtual prototype at scale to create and collaborate.",
    p2: "Our VIRTUAL REALITY CAVE SOLUTION will help you visualize your product better. It is an immersive, interactive 3D experience theatre that requires practically no footprint. With ultra short-throw projection and VR COLLABORATIVE TOOLS, nearly any existing room can be converted into a mind-blowing visualization center.",
    p3: " Can be used for Virtual meeting rooms, training spaces, virtual shopping experiences, remote collaborations, etc.",
  };
  const data2 = {
    imageurl: COLLABORATIVEVRim2,
    p1: "Teamwork is crucial and has become a challenge for global firms whose departments or subsidiaries are spread all over the world. Using virtual reality collaborative tools, you can gather all thestakeholders of your project in the same VR workspace and display your virtual prototype at scale to create and collaborate.",
    p3: "Can be used for Virtual meeting rooms, training spaces, virtual shopping experiences, remote collaborations, etc.",
  };
  return (
    <>
      <div id="slider" className="bg-COLLABORATIVEVRBG bg-cover bg-no-repeat">
        {/* <img src={backGroundImage} style={{height:"100%",width:"100%"}}/> */}
        <div className=" md:text-5xl text-white pt-80 text-lg pb-8 text-left ml-16  ">
          COLLABORATIVE VR
        </div>
      </div>
      <LeftImageRightText data={data1} />
      <LeftTextRightImage data={data2} />
    </>
  );
};

export default ImgTextComponent;
