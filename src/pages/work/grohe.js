import React from "react";
import Layout from "../../Components/Layout";
import LeftImageRightText from "../../Components/imageandtextcomponent/LeftImageRightText";
// import LeftTextRightImage from "../../Components/imageandtextcomponent/LeftTextRightImage";
import Groheimg1 from "../../images/09_pages/GROHE/im_1@2x.png";
import Groheimg2 from "../../images/09_pages/GROHE/im_2@2x.png";

const Grohe = ({ location }) => {
  const GroheData = {
    bg: "bg-GROHEBG",
    title: "Grohe",
    data1: {
      imageurl: Groheimg1,
      h1: "Virtual shower experience with a 4-sided VR Cave Projection System",
      p1: "Grohe understood that shower systems could not be experienced first-hand by their customers. A problem they had identified quite some time back but could not come up with a solution for it.",
      p2: "We created a VR CAVE SIMULATION coupled with 3d glasses and a 4-sided projection simulation replicating an actual bathroom. The concept was simple, choose the shower system you wish to experience with the handheld joysticks and the projection will showcase the pattern in which the shower system would dispense the water. ",
      p3:"The user could control the pattern in the way that the water would bedispensed with the help of a remote control. This eliminates all the drawbacks associated with taking an actual shower."
    },
    // data2: {
    //   numberofcolspan: 2,
    //   imageurl: Groheimg2,
    //   // imageurl2: img10,
    //   // h1: "Our Approach",
    //   // p1: "The user could control the pattern in the way that the water would be dispensed with the help of a remote control. This eliminates all the drawbacks associated with taking an actual shower.",
    //   // p2: "Our modern solution orientated approach, proven managed capabilities in designing such centres and proposed cutting-edge technologies and in-frastructure enabled us to stitch their entire journey and mend a story around it.",
    //   // p3: "We used the latest cutting edge technologies like sliding displays, marker recognition panels, multi-touch interfaces, projection mapping and collaborative tools for conducting meetings and virtual conferences. Further, our carefully curated and designed content enabled them to change the way they use to converse with their end customers. We gave them a CMS, the heart to their content management within the centre.",
    //   // p4: "All the content  was hosted on the cloud with a strong CMS that would allow them to change content depending upon the kind of customer that visits the centre. Different customer profiles could be created depending on the industry the customer was visiting from. Our designed approach enabled them to make every interaction count with simplified and secure experiences further allowing them to create immersive customer journey's through the power of videos and virtual collaborations",
    // },
    // data3: {
    //   imageurl: img11,
    //   h1: "How did it help Tata Communication",
    //   p1: "Creating this centre enabled Tata Communications to;",
    //   l1: "Strengthens existing relationships with their clients",
    //   l2: "Facilitate new business relationships",
    //   l3: "Create opportunities to increase share of wallet",
    //   l4: "Creates opportunities to shorten sales cycles",
    //   h2: "The outcome",
    //   p2: "All-in-all, our solution combined the latest innovative technology, rich content design, a robust content management systen and a carefully designed space that curated a story enabling Tata communications to give their visitors an unforgettable brand experience.",
    //   p3: "Total deployment time was 6 months right from concept building till end delivery"
    // }
  };

  return (
    <Layout location={location?.pathname}>
      <div className="pt-24 lg:pt-0 bg-black">
        <div className={`${GroheData?.bg} bg-cover bg-no-repeat bg-center`}>
          <div className="container">
            <div className="pt-0 md:pt-48 xl:pt-96">
              <div className="text-2xl md:text-5xl font-bold text-white pt-28 pb-4 md:pb-8 text-left ml-8 md:ml-16 uppercase">
                {GroheData?.title}
              </div>
            </div>
          </div>
        </div>
        {/* {GroheData?.data1 && <LeftTextRightImage data={GroheData?.data1} />} */}
        {GroheData?.data1 && <LeftImageRightText data={GroheData?.data1} />}
        {/* {GroheData?.data3 && <LeftTextRightImage data={GroheData?.data3} />} */}
        <img src={Groheimg2}  alt =""/>
      </div>
    </Layout>
  );
};

export default Grohe;
