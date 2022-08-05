import React from "react";
import LeftImageRightText from "../../Components/imageandtextcomponent/LeftImageRightText";
import LeftTextRightImage from "../../Components/imageandtextcomponent/LeftTextRightImage";
import Layout from "../../Components/Layout";
// import Audiimg1 from "../../images/09_pages/AUDI/im_1@2x.png";
import Audiimg1 from "../../images/09_pages/AUDI/im_1.jpg";
import Audiimg2 from "../../images/09_pages/AUDI/im_2@2x.jpg";
// import Audiimg3 from "../../images/09_pages/AUDI/im_3@2x.png";
// import Audiimg4 from "../../images/09_pages/AUDI/im_4@2x.png";

const Audi = ({ location }) => {
  const AudiData = {
    bg: "bg-AUDIBG",
    title: "AUDI",
    data1: {
      imageurl: Audiimg1,
      h1: "A multitouch display with marker recognition (MultiTaction) capabilities designed for Audi",
      p1: "It was the Unconference event, at Jaigarh Fort which is located at Jaipur, Rajasthan, where Audi team wanted to create something innovative that could enable the car lovers to witness the true potential of the newly launched Audi R8 V10 Plus. The event being organized by YPO (Young Presidents Organization) and sponsored by AUDI, it was obvious the audience would be young and vibrant. Keeping in view of the same Xenium Digital conceptualized an experience involving state-of-the-art MultiTaction Technology.",
      // p2: "MultiTaction is a Multi-Touch and Multi-User platform based on Computer Vision technology. It has unique features like QR Marker Code recognition and enabled with IR Pen. Leveraging on the same Xenium’s creative team defined interactions for the users to explore the features of Audi R8 V10 ",
    },

    data2: {
      numberofcolspan: 2,
      imageurl: Audiimg2,
      // imageurl2: Audiimg3,
      // h1: "Our Approach",
      p1: "MultiTaction is a Multi-Touch and Multi-User platform based on Computer Vision technology. It has unique features like QR Marker Code recognition and enabled with IR Pen. Leveraging on the same Xenium’s creative team defined interactions for the users to explore the features of Audi R8 V10 plus car. Initially Xenium’s team delved into the list of specifications and features of the car and later mapped each of these against a QR Code. At the stal the user had to just place the specific code on the table to learn about the feature or specification of the car. All of the features of the car were showcased with nicely designed visuals and 3D graphics. It was an almost overwhelming experience for each one among the users, since it was a never seen before stuff.",
      // p1: " plus car. Initially Xenium’s team delved into the list of specifications and features of the car and later mapped each of these against a QR Code.",
      // p2: "At the stall the user had to just place the specific code on the table to learn about the feature or specification of the car. All of the features of the car were showcased with nicely designed visuals and 3D graphics. It was an almost overwhelming experience for each one among the users, since it was a never seen before stuff. The ultimate goal for Audi was thus met.",
      // p3: "We used the latest cutting edge technologies like sliding displays, marker recognition panels, multi-touch interfaces, projection mapping and collaborative tools for conducting meetings and virtual conferences. Further, our carefully curated and designed content enabled them to change the way they use to converse with their end customers. We gave them a CMS, the heart to their content management within the centre.",
      // p4: "All the content  was hosted on the cloud with a strong CMS that would allow them to change content depending upon the kind of customer that visits the centre. Different customer profiles could be created depending on the industry the customer was visiting from. Our designed approach enabled them to make every interaction count with simplified and secure experiences further allowing them to create immersive customer journey's through the power of videos and virtual collaborations",
    },
    // data3: {
    //   imageurl: Audiimg4,
    //   // h1: "How did it help Tata Communication",
    //   // p1: "Creating this centre enabled Tata Communications to;",
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
        <div className={`${AudiData?.bg} bg-cover bg-no-repeat bg-center`}>
          <div className="container">
            <div className="pt-0 md:pt-48 xl:pt-96">
              <div className="text-2xl md:text-5xl text-white font-bold pt-28 pb-4 md:pb-8 text-left ml-8 md:ml-16 uppercase">
                {AudiData?.title}
              </div>
            </div>
          </div>
        </div>
        {AudiData?.data1 && <LeftTextRightImage data={AudiData?.data1} />}
        {AudiData?.data2 && <LeftImageRightText data={AudiData?.data2} />}
        {AudiData?.data3 && <LeftTextRightImage data={AudiData?.data3} />}
      </div>
    </Layout>
  );
};

export default Audi;
