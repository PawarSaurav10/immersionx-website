import React from "react";
import Layout from "../../Components/Layout";
import LeftImageRightText from "../../Components/imageandtextcomponent/LeftImageRightText";
import LeftTextRightImage from "../../Components/imageandtextcomponent/LeftTextRightImage";
// import SIEMENSimg1 from "../../images/09_pages/SIEMENS/im_1@2x.png";
// import SIEMENSimg2 from "../../images/09_pages/SIEMENS/im_2@2x.png";
import SIEMENSimg3 from "../../images/09_pages/SIEMENS/im_1.jpg";
import SIEMENSimg4 from "../../images/09_pages/SIEMENS/im_2.jpg";

const Siemens = ({ location }) => {
  const SiemensData = {
    bg: "bg-SIEMENSBG",
    title: "SIEMENS",
    data1: {
      numberofcolspan: 2,
      // imageurl: SIEMENSimg2,
      imageurl: SIEMENSimg3,
      h1: "Two unique interactive experiences for Siemens was created a) 3-sided presentation b) SensTable",
      p1: "3-sided presentation",
      p2: "With digital transformation at the fore-front, Siemens chose two major domains Smart Infrastructure and Power & Gas to showcase their developments in Smart Infrastructure, we put together an impactful 3-sided display controlled by a touch screen. The sharp and engaging content created in-house depicted the products in surreal detail. The interaction was controlled by a 32-inch touch screen, allowing for seamless interaction with the content.",
      // p2: "At the power and gas booth, Xenium Digital showcased the efficiency of transformers and switch gears. A scale-to-ratio 3D model of a substation, that worked in unison with screens placed in an L-shape, all of which was controlled by a tablet with an engaging UI. The journey of the content commenced with the content highlighting traditional methods of power distribution, its evolution over some time and upgraded solutions with their benefits.",
      // p2: "",
    },
    data2: {
      imageurl: SIEMENSimg4,
      // imageurl2: SIEMENSimg3,
      // h1: "Our Approach",
      p1: "SensTable",
      p2: "At the power and gas booth, Xenium Digital showcased the efficiency of transformers and switch gears. A scale-to-ratio 3D model of a substation, that worked in unison with screens placed in an L-shape, all of which was controlled by a tablet with an engaging UI. The journey of the content commenced with the content highlighting traditional methods of power distribution, its evolution over some time and upgraded solutions with their benefits.",
      // p2: "The journey of the content commenced with the content highlighting traditional methods of power distribution, its evolution over some time and upgraded solutions with their benefits.",
      // p3: "We used the latest cutting edge technologies like sliding displays, marker recognition panels, multi-touch interfaces, projection mapping and collaborative tools for conducting meetings and virtual conferences. Further, our carefully curated and designed content enabled them to change the way they use to converse with their end customers. We gave them a CMS, the heart to their content management within the centre.",
      // p4: "All the content  was hosted on the cloud with a strong CMS that would allow them to change content depending upon the kind of customer that visits the centre. Different customer profiles could be created depending on the industry the customer was visiting from. Our designed approach enabled them to make every interaction count with simplified and secure experiences further allowing them to create immersive customer journey's through the power of videos and virtual collaborations",
    },
    // data3: {
    //   imageurl: SIEMENSimg4,
    //   // h1: "How did it help Tata Communication",
    //   p1: "At the power and gas booth, Xenium Digital showcased the efficiency of transformers and switch gears. A scale-to-ratio 3D model of a substation, that worked in unison with screens placed in an L-shape, all of which was controlled by a tablet with an engaging UI. The journey of the content commenced with the content highlighting traditional methods of power distribution, its evolution over some time and upgraded solutions with their benefits.",
    //   // l1: "Strengthens existing relationships with their clients",
    //   // l2: "Facilitate new business relationships",
    //   // l3: "Create opportunities to increase share of wallet",
    //   // l4: "Creates opportunities to shorten sales cycles",
    //   // h2: "The outcome",
    //   // p2: "All-in-all, our solution combined the latest innovative technology, rich content design, a robust content management systen and a carefully designed space that curated a story enabling Tata communications to give their visitors an unforgettable brand experience.",
    //   // p3: "Total deployment time was 6 months right from concept building till end delivery",
    // },
  };

  return (
    <Layout location={location?.pathname}>
      <div className="pt-24 lg:pt-0 bg-black">
        <div className={`${SiemensData?.bg} bg-cover bg-no-repeat bg-center`}>
          <div className="container">
            <div className="pt-0 md:pt-48 xl:pt-96">
              <div className="text-2xl md:text-5xl font-bold text-white pt-28 pb-4 md:pb-8 text-left ml-8 md:ml-16 uppercase">
                {SiemensData?.title}
              </div>
            </div>
          </div>
        </div>
        {SiemensData?.data1 && <LeftTextRightImage data={SiemensData?.data1} />}
        {SiemensData?.data2 && <LeftImageRightText data={SiemensData?.data2} />}
        {/* {SiemensData?.data3 && <LeftTextRightImage data={SiemensData?.data3} />} */}
      </div>
    </Layout>
  );
};

export default Siemens;
