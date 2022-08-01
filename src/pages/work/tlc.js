import React from "react";
import Layout from "../../Components/Layout";
import LeftImageRightText from "../../Components/imageandtextcomponent/LeftImageRightText";
import LeftTextRightImage from "../../Components/imageandtextcomponent/LeftTextRightImage";
import TATAimg1 from "../../images/06_OURWORK/pages/TataCommunicationsExperienceCentre/im_1@2x.png";
import TATAimg2 from "../../images/06_OURWORK/pages/TataCommunicationsExperienceCentre/im_2@2x.png";
import TATAimg3 from "../../images/06_OURWORK/pages/TataCommunicationsExperienceCentre/im_3@2x.png";
import TATAimg4 from "../../images/06_OURWORK/pages/TataCommunicationsExperienceCentre/im_4@2x.png";

const TLC = ({ location }) => {
  const TCLData = {
    bg: "bg-TataCommunicationsBG",
    title: "Tata Communications Experience Centre",
    data1: {
      imageurl: TATAimg1,
      h1: "The Brief",
      p1: "Designed and built a customer experience centre for Tata Communication at their BKC office in Mumbai. The intent of setting up this centre was to enable, showcase and demonstrate their capabilities across various industry vertical that they operated in.",
      p2: "Keeping this objective, we curated and deployed a centre that changed the way they use to converse with their customers. Keeping this objective, we curated and deployed a centre that changed the way they use to converse with their customers. ",
    },

    data2: {
      numberofcolspan: 2,
      imageurl: TATAimg2,
      imageurl2: TATAimg3,
      h1: "Our Approach",
      p1: "Tata Communications is a digital ecosystem enabler that powers today's fast-growing digital economy. They are one of the biggest operating giant's in the telecom domain. With their vast pool of operations across the globe, they host a humangeous set of data on their central server.With all that data that the brand wanted to showcase, we had to work around a more refined approach. We don't take a traditional approach to solving complex problems, or delivering client outcomes. We know that our clients want premium, bespoke and innovative technologies that drives their brand experiences. This is why we create solutions, with immersive experiences that re-frame the possible.",
      p2: "Our modern solution orientated approach, proven managed capabilities in designing such centres and proposed cutting-edge technologies and in-frastructure enabled us to stitch their entire journey and mend a story around it.",
      p3: "We used the latest cutting edge technologies like sliding displays, marker recognition panels, multi-touch interfaces, projection mapping and collaborative tools for conducting meetings and virtual conferences. Further, our carefully curated and designed content enabled them to change the way they use to converse with their end customers. We gave them a CMS, the heart to their content management within the centre.",
      p4: "All the content  was hosted on the cloud with a strong CMS that would allow them to change content depending upon the kind of customer that visits the centre. Different customer profiles could be created depending on the industry the customer was visiting from. Our designed approach enabled them to make every interaction count with simplified and secure experiences further allowing them to create immersive customer journey's through the power of videos and virtual collaborations",
    },
    data3: {
      imageurl: TATAimg4,
      h1: "How did it help Tata Communication",
      p1: "Creating this centre enabled Tata Communications to;",
      l1: "Strengthens existing relationships with their clients",
      l2: "Facilitate new business relationships",
      l3: "Create opportunities to increase share of wallet",
      l4: "Creates opportunities to shorten sales cycles",
      // h2: "The outcome",
      p2: "All-in-all, our solution combined the latest innovative technology, rich content design, a robust content management systen and a carefully designed space that curated a story enabling Tata communications to give their visitors an unforgettable brand experience.",
      p3: "Total deployment time was 6 months right from concept building till end delivery",
    },
  };

  return (
    <Layout location={location?.pathname}>
      <div className="pt-24 lg:pt-0 bg-black">
        <div className={`${TCLData?.bg} bg-cover bg-no-repeat bg-center`}>
          <div className="container">
            <div className="pt-0 md:pt-48 xl:pt-96">
              <div className="text-2xl md:text-5xl font-bold text-white pt-28 pb-4 md:pb-8 text-left ml-8 md:ml-16 uppercase">
                {TCLData?.title}
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

export default TLC;
