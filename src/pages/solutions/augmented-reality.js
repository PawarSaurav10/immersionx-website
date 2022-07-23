import React from 'react'
import LeftImageRightText from "../../Components/imageandtextcomponent/LeftImageRightText";
import LeftTextRightImage from "../../Components/imageandtextcomponent/LeftTextRightImage";
import Layout from '../../Components/Layout'
import COLLABORATIVEVRim1 from "../../images/02_OURSERVICES/pages/COLLABORATIVEVR/COLLABORATIVEVRim_1@2x.png";
import COLLABORATIVEVRim2 from "../../images/02_OURSERVICES/pages/COLLABORATIVEVR/COLLABORATIVEVRim_2@2x.png";

const AugumentedReality = ({location}) => {
  const CollabrateVRData = {
    bg: "bg-COLLABORATIVEVRBG",
    title: "COLLABORATIVE AR/VR",
    data1: {
      numberofcolspan: 3,
      imageurl: COLLABORATIVEVRim1,
      h1: "Join us in a new dimension.",
      p1: "Augmented and virtual reality have come a long way, from being just a gimmick to being an integral part of the ‘digital revolution’. Brands look at these technologies as weapons of MASS ENGAGEMENT. Be it, augmenting key information over objects &amp; surroundings or transcending the user to a make-believe virtual world, where the content can be delivered more effectively than any other medium.",
      p2: "AR &amp; VR are the first steps towards a brand’s Digital transformation and a gateway into the future of collaboration. With tools such as VR or AR glasses and devices enabled with AR and VR collaboration is seamless and empowering. The ease of use is another added advantage since many applications are built to support these technologies. The applications of AR and VR are endless, liberate your imagination, THINK BIG.",
      // p3: " Can be used for Virtual meeting rooms, training spaces, virtual shopping experiences, remote collaborations, etc.",
    },
    data2: {
      imageurl: COLLABORATIVEVRim2,
      // p1: "With tools such as VR or AR glasses and devices enabled with AR and VR collaboration is seamless and empowering. The ease of use is another added advantage since many applications are built to support these technologies. The applications of AR and VR are endless, liberate your imagination, think BIG.",
      // p3: "Can be used for Virtual meeting rooms, training spaces, virtual shopping experiences, remote collaborations, etc.",
    },
  };
  return (
   <Layout location={location?.pathname}>
    <div className="pt-24 lg:pt-0 bg-black">
        <div className={`${CollabrateVRData?.bg} bg-cover bg-no-repeat bg-center`}>
          <div className="container">
            <div className="pt-0 md:pt-48 xl:pt-96">
              <div className="text-2xl md:text-5xl text-white pt-28 pb-4 md:pb-8 text-left ml-8 md:ml-16 uppercase">
                {CollabrateVRData?.title}
              </div>
            </div>
          </div>
        </div>
        {CollabrateVRData?.data1 && <LeftImageRightText data={CollabrateVRData?.data1} />}
        {CollabrateVRData?.data2 && <LeftTextRightImage data={CollabrateVRData?.data2} />}
        {CollabrateVRData?.data3 && <LeftImageRightText data={CollabrateVRData?.data3} />}
      </div>
  </Layout>
  )
}

export default AugumentedReality