import React from "react";
import LeftImageRightText from "../../Components/imageandtextcomponent/LeftImageRightText";
import LeftTextRightImage from "../../Components/imageandtextcomponent/LeftTextRightImage";
import Layout from "../../Components/Layout";
import COLLABORATIVEVRim1 from "../../images/02_OURSERVICES/pages/COLLABORATIVEVR/COLLABORATIVEVRim_1.jpg";
// import COLLABORATIVEVRim2 from "../../images/02_OURSERVICES/pages/COLLABORATIVEVR/COLLABORATIVEVRim_2@2x.png";

const CollaborativeVRAR = ({ location }) => {
  const CollabrateVRData = {
    bg: "bg-COLLABORATIVEVR",
    title: "COLLABORATIVE XR",
    data1: {
      numberofcolspan: 3,
      imageurl: COLLABORATIVEVRim1,
      h1: "Join us in a new dimension.",
      p1: "Augmented and virtual reality have come a long way, from being just a gimmick to being an integral part of the ‘digital revolution’.",

    h2: "Using Collaboration in Healthcare:",
      p4:"Complete tasks, resolve problems, learn in depth with the mixed reality headgears that has hand tracking, built-in voice commands, eye tracking, spatial mapping, and large field of view. Train and collaborate with other clinicians on real medical scenarios, transferring knowledge and improving procedural understanding before operations.",
      h3: "Using Collaboration in Oil/Gas:",
      p6: "Two or more people wearing augmented reality glasses can come together in a photorealistic virtual space to showcase new concepts with true-to-life in real time. The view of the location in AR glasses worn by the miners can be seen by the experts and he/she will be able to guide them remotely during the process on-field.",
      h4: "Using Collaboration for Training:",
      p7: "The trainer and the trainees can understand complex concepts and case studies by collaborating on the same platform using mixed reality headgears. This gives the users an immersive glance into detailed images and videos. Collaborate in real-time with teams locally and remotely.",
      p8: "Such collaborative applications of AR, VR and MR are endless, liberate your imagination, think BIG."
      // p2: "AR &amp; VR are the first steps towards a brand’s Digital transformation and a gateway into the future of collaboration. With tools such as VR or AR glasses and devices enabled with AR and VR collaboration is seamless and empowering. The ease of use is another added advantage since many applications are built to support these technologies. The applications of AR and VR are endless, liberate your imagination, THINK BIG.",
      // p3: " Can be used for Virtual meeting rooms, training spaces, virtual shopping experiences, remote collaborations, etc.",
    },
    // data2: {
    //   numberofcolspan: 3,
    //   imageurl: COLLABORATIVEVRim2,
    //   p1: "AR &amp; VR are the first steps towards a brand’s Digital transformation and a gateway into the future of collaboration. With tools such as VR or AR glasses and devices enabled with AR and VR collaboration is seamless and empowering. The ease of use is another added advantage since many applications are built to support these technologies. The applications of AR and VR are endless, liberate your imagination, THINK BIG.",
    //   // p3: "Can be used for Virtual meeting rooms, training spaces, virtual shopping experiences, remote collaborations, etc.",
    // },
  };

  return (
    <Layout location={location?.pathname}>
      <div className="pt-24 lg:pt-0 bg-black">
        <div
          className={`${CollabrateVRData?.bg} bg-cover bg-no-repeat bg-center`}
        >
          <div className="container">
            <div className="pt-0 md:pt-48 xl:pt-96">
              <div className="text-2xl md:text-5xl text-white pt-28 pb-4 md:pb-8 text-left ml-8 md:ml-16 uppercase">
                {CollabrateVRData?.title}
              </div>
            </div>
          </div>
        </div>
        {CollabrateVRData?.data1 && (
          <LeftImageRightText data={CollabrateVRData?.data1} />
        )}
        {CollabrateVRData?.data2 && (
          <LeftTextRightImage data={CollabrateVRData?.data2} />
        )}
        {CollabrateVRData?.data3 && (
          <LeftImageRightText data={CollabrateVRData?.data3} />
        )}
      </div>
    </Layout>
  );
};

export default CollaborativeVRAR;
