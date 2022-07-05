import React from "react";
import img1 from "../images/06_OURWORK/pages/TataCommunicationsExperienceCentre/im_1@2x.png";
import img2 from "../images/06_OURWORK/pages/TataCommunicationsExperienceCentre/im_2@2x.png";
import img3 from "../images/06_OURWORK/pages/TataCommunicationsExperienceCentre/im_3@2x.png";
import img4 from "../images/06_OURWORK/pages/TataCommunicationsExperienceCentre/im_4@2x.png";
import LeftImageRightText from "./imageandtextcomponent/LeftImageRightText";
import LeftTextRightImage from "./imageandtextcomponent/LeftTextRightImage";

const OurWork = () => {
  const data1 = {
    imageurl: img1,
    h1: "The Brief",
    p1: "Xenium Digital designed and built a customer experience centre for Tata Communication at their BKC office in Mumbai. The intent of setting up this centre was to enable, showcase and demonstrate their capabilities across various industries that they operated in.",
  };
  const data2 = {
    numberofcolspan: 2,
    imageurl: img2,
    imageurl2: img3,
    h1: "Our Approach",
    p1: "Tata Communications is a digital ecosystem enabler that powers today's fast-growing digital economy. They are one of the biggest operating giant's in the telecom domain. With their vast pool of operations across the globe, they host a humangeous set of data on their central server.With all that data that the brand wanted to showcase, we had to work around a more refined approach. We don't take a traditional approach to solving complex problems, or delivering client outcomes. We know that our clients want premium, bespoke and innovative technologies that drives their brand experiences. This is why we create solutions, with immersive experiences that re-frame the possible.",
    p2: "Our modern solution orientated approach, proven managed capabilities in designing such centres and proposed cutting-edge technologies and in-frastructure enabled us to stitch their entire journey and mend a story around it.",
    p3: "We used the latest cutting edge technologies like sliding displays, marker recognition panels, multi-touch interfaces, projection mapping and collaborative tools for conducting meetings and virtual conferences. Further, our carefully curated and designed content enabled them to change the way they use to converse with their end customers. We gave them a CMS, the heart to their content management within the centre.",
    p4: "All the content was put on the CMS and was shared across both, virtual platforms as well as physical centre. Different customer profiles could be created depending on the industry the customer was visiting from. Our designed approach enabled them to make every interaction count with simplified and secure experiences further allowing them to create immersive customer journey's through the power of videos and virtual collaborations",
  };
  const data3 = {
    imageurl: img4,
    h1: "How did it help Tata Communication",
    p1: "Creating this centre enabled Tata Communications to;",
    l1: "Strengthens existing relationships with their clients",
    l2: "Facilitate new business relationships",
    l3: "Create opportunities to increase share of wallet",
    l4: "Creates opportunities to shorten sales cycles",
    h2: "The outcome",
    p2: "All-in-all, our solution combined the latest innovative technology, rich content design, a robust content management systen and a carefully designed space that curated a story enabling Tata communications to give their visitors an unforgettable brand experience.",
  };
  return (
    <>
      <div
        id="slider"
        className="bg-TataCommunicationsBG bg-cover bg-no-repeat"
      >
        {/* <img src={backGroundImage} style={{height:"100%",width:"100%"}}/> */}
        <div className=" text-white pt-80 md:text-5xl text-lg pb-8 text-left ml-16 w-2/4 ">
          Tata Communications Experience Centre
        </div>
      </div>
      <LeftTextRightImage data={data1} />
      <LeftImageRightText data={data2} />
      <LeftTextRightImage data={data3} />
    </>
  );
};

export default OurWork;
