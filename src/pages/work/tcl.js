import React from "react";
import Layout from "../../Components/Layout";
import LeftImageRightText from "../../Components/imageandtextcomponent/LeftImageRightText";
import LeftTextRightImage from "../../Components/imageandtextcomponent/LeftTextRightImage";
import TATAimg1 from "../../images/06_OURWORK/pages/TataCommunicationsExperienceCentre/im_1.jpg";
import TATAimg2 from "../../images/06_OURWORK/pages/TataCommunicationsExperienceCentre/im_2.jpg";
import TATAimg3 from "../../images/06_OURWORK/pages/TataCommunicationsExperienceCentre/im_3.jpg";
// import TATAimg4 from "../../images/06_OURWORK/pages/TataCommunicationsExperienceCentre/im_4@2x.png";

const TCL = ({ location }) => {
  const TCLData = {
    bg: "bg-TataCommunicationsBG",
    title: "Tata Communications Experience Centre",
    data1: {
        numberofcolspan: 2,
      imageurl: TATAimg1,
      h1: "Interactive Experience Centre with integration of the Digital Toolkit",
      p1: "Designed and built a customer experience centre for Tata Communication at their BKC office in Mumbai. The intent of setting up this centre was to enable, showcase and demonstrate their capabilities across various industry vertical .",
    },

    data2: {
      numberofcolspan: 2,
      imageurl: TATAimg2,
      imageurl2: TATAimg3,
      // h1: "Our Approach",
      p1: "Keeping this objective, we curated and deployed a centre that changed the way they use to converse with their customers. Keeping this objective, we curated and deployed a centre that changed the way they use to converse with their customers. ",
      p2: "Our proposition included setting up their experience centre for both virtual as well as physical platforms.",
      p3: "Creating this centre enabled Tata Communications to;",
      l1: "Strengthens existing relationships with their clients",
      l2: "Facilitate new business relationships",
      l3: "Create opportunities to increase share of wallet",
      l4: "Creates opportunities to shorten sales cycles",
      p4: "Our solution orientated approach, proven managed capabilities in designing such centres and proposed cutting-edge technologies and in-frastructure enabled us to stitch their entire journey and mend a story around it.",
      p5: "With our approach Tata Communications was able to showcase their solutions with the next level of intelligence which included cloud, mobility, Internet of Things (loT), collaboration, security and network services.",
      p6: "All the content  was hosted on the cloud with a strong CMS that would allow them to change content depending upon the kind of customer that visits the centre.",
    },
    // data3: {
    //   imageurl: TATAimg4,
    //   h1: "How did it help Tata Communication",
    //   p1: "Creating this centre enabled Tata Communications to;",
    //   l1: "Strengthens existing relationships with their clients",
    //   l2: "Facilitate new business relationships",
    //   l3: "Create opportunities to increase share of wallet",
    //   l4: "Creates opportunities to shorten sales cycles",
    //   // h2: "The outcome",
    //   p2: "All-in-all, our solution combined the latest innovative technology, rich content design, a robust content management systen and a carefully designed space that curated a story enabling Tata communications to give their visitors an unforgettable brand experience.",
    //   p3: "Total deployment time was 6 months right from concept building till end delivery",
    // },
  };

  return (
    <Layout location={location?.pathname}>
      <div className="pt-24 lg:pt-0 bg-black">
        <div className={`${TCLData?.bg} bg-cover bg-no-repeat bg-center`}>
          <div className="container">
            <div className="pt-0 md:pt-48 xl:pt-96">
              <div className="text-2xl md:text-5xl font-bold text-white pt-28 pb-4 md:pb-8 text-left ml-8 md:ml-16 uppercase">
                Tata Communications
                <div>Experience Centre</div>
              </div>
            </div>
          </div>
        </div>
        {TCLData?.data1 && <LeftTextRightImage data={TCLData?.data1} />}
        {TCLData?.data2 && <LeftImageRightText data={TCLData?.data2} />}
        {TCLData?.data3 && <LeftTextRightImage data={TCLData?.data3} />}
      </div>
    </Layout>
  );
};

export default TCL;
