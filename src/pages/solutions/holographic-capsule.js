import React from "react";
import ReactPlayer from "react-player";
// import LeftImageRightText from "../../Components/imageandtextcomponent/LeftImageRightText";
import LeftTextRightImage from "../../Components/imageandtextcomponent/LeftTextRightImage";
import Layout from "../../Components/Layout";
// import Video from "../../Components/Video";
import Capsuleimg1 from "../../images/09_pages/CAPSULE/im_1@2x.png";
// import Capsuleimg3 from "../../images/09_pages/CAPSULE/im_3@2x.png";
// import Capsuleimg4 from "../../images/09_pages/CAPSULE/im_4@2x.png";
import capsulevideo from "../../images/09_pages/VOLUSTUDIO/Volumetric.mp4";

const Capsule = ({ location }) => {
  const CapsuleData = {
    bg: "bg-CAPSULEBG",
    title: "Holographic Capsule",
    data1: {
      numberofcolspan: 2,
      imageurl: Capsuleimg1,
      h1: "The Brief",
      p1: "CAPSULE is a hologram display that creates incredible interactive experiences.",
      p2: "CAPSULE is a consumer-facing holographic display that is plug-and-play for events in all lighting conditions and can be permanently installed for retail and other consumer or user-facing applications. CAPSULE can beam-in live hologram presenters by leveraging HoloPresence capabilities, as well as playback pre-recorded programmatic content that viewers can interact with using touch.",
      // p2: "Our VIRTUAL REALITY CAVE SOLUTION will help you visualize your product better. It is an immersive, interactive 3D experience theatre that requires practically no footprint. With ultra short-throw projection and VR COLLABORATIVE TOOLS, nearly any existing room can be converted into a mind-blowing visualization center.",
      // p3: " Can be used for Virtual meeting rooms, training spaces, virtual shopping experiences, remote collaborations, etc.",
    },
    data2: {
      // imageurl: capsulevideo,
      videourl: capsulevideo,
      // p1: "Teamwork is crucial and has become a challenge for global firms whose departments or subsidiaries are spread all over the world. Using virtual reality collaborative tools, you can gather all thestakeholders of your project in the same VR workspace and display your virtual prototype at scale to create and collaborate.",
      // p3: "Can be used for Virtual meeting rooms, training spaces, virtual shopping experiences, remote collaborations, etc.",
    },
    // data3: {
    //   imageurl: Capsuleimg4,
    //   // p1: "Teamwork is crucial and has become a challenge for global firms whose departments or subsidiaries are spread all over the world. Using virtual reality collaborative tools, you can gather all thestakeholders of your project in the same VR workspace and display your virtual prototype at scale to create and collaborate.",
    //   // p3: "Can be used for Virtual meeting rooms, training spaces, virtual shopping experiences, remote collaborations, etc.",
    // },
  };

  console.log(CapsuleData, "first");
  return (
    <Layout location={location?.pathname}>
      <div className="pt-24 lg:pt-0 bg-black">
        <div className={`${CapsuleData?.bg} bg-cover bg-no-repeat bg-center`}>
          <div className="container">
            <div className="pt-0 md:pt-48 xl:pt-96">
              <div className="text-2xl md:text-5xl text-white pt-28 pb-4 md:pb-8 text-left ml-8 md:ml-16 uppercase">
                {CapsuleData?.title}
              </div>
            </div>
          </div>
        </div>
        {/* {CapsuleData?.data1 && <LeftImageRightText data={CapsuleData?.data1} />} */}
        {CapsuleData?.data1 && <LeftTextRightImage data={CapsuleData?.data1} />}
        {/* {CapsuleData?.data2 && <LeftImageRightText data={CapsuleData?.data2} />} */}
        <div className="bg-slate-900">
          <div className="container ">
            <div className="player-wrapper">
              {/* {CapsuleData?.data2.videourl && (
              // <video
              //   loop
              //   autoPlay
              //   width={"100%"}
              //   height={"100%"}
              //   controls
              //   // className={`${
              //   //   CapsuleData?.data2.imageurl2 ? "h-1/2" : "h-full"
              //   // } w-full`}
              //   alt=""
              // >
              //   <source src={CapsuleData?.data2.videourl} type="video/mp4" />
              // </video>
              
            )} */}
              <ReactPlayer
                width="100%"
                height="100%"
                className="react-player"
                url="https://www.youtube.com/watch?v=OWYXEO_Lh8Y&t=17s"
                // videoTitle="Official Music Video on YouTube"
              />
            </div>
          </div>
        </div>

        {/* <img src={capsulevideo} alt=""/> */}
      </div>
    </Layout>
  );
};

export default Capsule;
