import React from "react";
import Layout from "../../Components/Layout";
import LeftImageRightText from "../../Components/imageandtextcomponent/LeftImageRightText";
import LeftTextRightImage from "../../Components/imageandtextcomponent/LeftTextRightImage";
import img1 from "../../images/09_pages/MIND/im_1.jpg";
import img2 from "../../images/09_pages/MIND/im_2.jpg";
// import WNSimg3 from "../../images/09_pages/WNS/im_3@2x.png";
// import WNSimg4 from "../../images/09_pages/WNS/im_4@2x.png";

const mind = ({ location }) => {
  const HCLDATA = {
    bg: "bg-MIND",
    title: "MIND CEC",
    data1: {
      numberofcolspan: 2,
      imageurl: img1,
      h1: "Design and creative partners for the MIND EC",
      p1: "Conceptualized and designed the walkthrough for the MIND Experience Centre.",
      p2: "The process involved understanding the client brief and showcasing MINDs communication and vision through interactive touchpoints.",
      // p3: "A symphony of experiences.",
    },
    data2: {
      numberofcolspan: 2,
      imageurl: img2,
      p1: "We came up with unique storytelling concepts using technology and digital art installations to give the space a futuristic appeal.",
      p2: "Our concept included designing the space and proposing unique tech installations for the outer facade, entrance, experience center. Executive briefing center and the NOC/SOC divisions and WAR room.",
      // h2: "The Welcome Zone",
      // p5: "The welcome zone controlled by the Digital Toolkit, welcomes the visitor. The DTK app, gives the user the option to upload the client’s credentials, relevant content, in the form of visuals and videos and give a personalized welcome message.",
      // // imageurl2: WNSimg3,
      // h3: "The Co-creation Zone",
      // p6: "A place where the content is displayed, it encourages the visitor to browse through it, interact with it first-hand. It lets other stakeholders and participants interact with the content remotely, make changes with the help of the Digital Whiteboard and add their thoughts to it.",
      // h4: "The Lounge Area",
      // p7: " Reflecting on the presented content, interacting with gamified installations, taking opinions over a self-balancing robot-based video conference and most importantly making business decisions based on the showcased content. ",
      // h1: "The Co-creation Zone",
      // p1: "A place where the content is displayed, it encourages the visitor to browse through it, interact with it first-hand. It lets other stakeholders and participants interact with the content remotely, make changes with the help of the Digital Whiteboard and add their thoughts to it.",
      // h2: "The Lounge Area",
      // p3: " Reflecting on the presented content, interacting with gamified installations, taking opinions over a self-balancing robot-based video conference and most importantly making business decisions based on the showcased content. ",
      // p2: "Our modern solution orientated approach, proven managed capabilities in designing such centres and proposed cutting-edge technologies and in-frastructure enabled us to stitch their entire journey and mend a story around it.",
      // p3: "We used the latest cutting edge technologies like sliding displays, marker recognition panels, multi-touch interfaces, projection mapping and collaborative tools for conducting meetings and virtual conferences. Further, our carefully curated and designed content enabled them to change the way they use to converse with their end customers. We gave them a CMS, the heart to their content management within the centre.",
      // p4: "All the content  was hosted on the cloud with a strong CMS that would allow them to change content depending upon the kind of customer that visits the centre. Different customer profiles could be created depending on the industry the customer was visiting from. Our designed approach enabled them to make every interaction count with simplified and secure experiences further allowing them to create immersive customer journey's through the power of videos and virtual collaborations",
    },
    // data3: {
    //   imageurl: WNSimg4,
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
        <div className={`${HCLDATA?.bg} bg-cover bg-no-repeat bg-center`}>
          <div className="container">
            <div className="pt-0 md:pt-48 xl:pt-96">
              <div
                className={`text-2xl md:text-5xl font-bold text-white pt-28 pb-4 md:pb-8 text-left ml-8 md:ml-16 uppercase`}
              >
                {HCLDATA?.title}
              </div>
              <div
                className={`text-2xl md:text-5xl font-bold text-white pb-4 md:pb-8 text-left ml-8 md:ml-16 uppercase`}
              >
                {HCLDATA?.desc}
              </div>
            </div>
          </div>
        </div>
        {HCLDATA?.data1 && <LeftTextRightImage data={HCLDATA?.data1} />}
        {HCLDATA?.data2 && <LeftImageRightText data={HCLDATA?.data2} />}
        {HCLDATA?.data3 && <LeftTextRightImage data={HCLDATA?.data3} />}
      </div>
    </Layout>
  );
};

export default mind;
