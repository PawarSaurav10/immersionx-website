import React from "react";
import Layout from "../../Components/Layout";
import LeftImageRightText from "../../Components/imageandtextcomponent/LeftImageRightText";
import LeftTextRightImage from "../../Components/imageandtextcomponent/LeftTextRightImage";
import LEGRANDimg1 from "../../images/09_pages/LEGRAND/im_1.jpg";
import LEGRANDimg2 from "../../images/09_pages/LEGRAND/im_2.jpg";
import LEGRANDimg3 from "../../images/09_pages/LEGRAND/im_3@2x.png";
import LEGRANDimg4 from "../../images/09_pages/LEGRAND/im_4@2x.png";

const Legrand = ({ location }) => {
  const LegerandData = {
    bg: "bg-LEGRANDBG",
    title: "LEGRAND",
    data1: {
      imageurl: LEGRANDimg1,
      h1: "Virtual Event for Legrand's solution and products",
      p1: "India's first AR TracTech solution for their virtual product launch event. Our special 3d tracking cameras would capture and track a 3d printed house in realtime and layer augmented information on top of it with 3d animations and graphics.",
      p2: "A beautifully designed story was curated around their new products which would at first showcase the product's functionality within the 3d house and then elaborate its features in detail with pop up 3d animations, all of this which was then broadcasted live on YouTube.",
    },
    data2: {
      numberofcolspan: 2,
      imageurl: LEGRANDimg2,
      // imageurl2: LEGRANDimg3,
      // h1: "Our Approach",
      // p1: "At the power and gas booth, Xenium Digital showcased the efficiency of transformers and switch gears. A scale-to-ratio 3D model of a substation, that worked in unison with screens placed in an L-shape, all of which was controlled by a tablet with an engaging UI.",
      // p2: "The journey of the content commenced with the content highlighting traditional methods of power distribution, its evolution over some time and upgraded solutions with their benefits.",
      // p3: "We used the latest cutting edge technologies like sliding displays, marker recognition panels, multi-touch interfaces, projection mapping and collaborative tools for conducting meetings and virtual conferences. Further, our carefully curated and designed content enabled them to change the way they use to converse with their end customers. We gave them a CMS, the heart to their content management within the centre.",
      // p4: "All the content  was hosted on the cloud with a strong CMS that would allow them to change content depending upon the kind of customer that visits the centre. Different customer profiles could be created depending on the industry the customer was visiting from. Our designed approach enabled them to make every interaction count with simplified and secure experiences further allowing them to create immersive customer journey's through the power of videos and virtual collaborations",
    },
    // data3: {
    //   imageurl: LEGRANDimg4,
      // h1: "How did it help Tata Communication",
      // p1: "Creating this centre enabled Tata Communications to;",
      // l1: "Strengthens existing relationships with their clients",
      // l2: "Facilitate new business relationships",
      // l3: "Create opportunities to increase share of wallet",
      // l4: "Creates opportunities to shorten sales cycles",
      // h2: "The outcome",
      // p2: "All-in-all, our solution combined the latest innovative technology, rich content design, a robust content management systen and a carefully designed space that curated a story enabling Tata communications to give their visitors an unforgettable brand experience.",
      // p3: "Total deployment time was 6 months right from concept building till end delivery",
    // },
  };

  return (
    <Layout location={location?.pathname}>
      <div className="pt-24 lg:pt-0 bg-black">
        <div className={`${LegerandData?.bg} bg-cover bg-no-repeat bg-center`}>
          <div className="container">
            <div className="pt-0 md:pt-48 xl:pt-96">
              <div className="text-2xl md:text-5xl text-white font-bold pt-28 pb-4 md:pb-8 text-left ml-8 md:ml-16 uppercase">
                {LegerandData?.title}
              </div>
            </div>
          </div>
        </div>
        {LegerandData?.data1 && (
          <LeftTextRightImage data={LegerandData?.data1} />
        )}
        {LegerandData?.data2 && (
          <LeftImageRightText data={LegerandData?.data2} />
        )}
        {LegerandData?.data3 && (
          <LeftTextRightImage data={LegerandData?.data3} />
        )}
      </div>
    </Layout>
  );
};

export default Legrand;
