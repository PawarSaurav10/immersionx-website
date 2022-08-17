import React from "react";
import Layout from "../../Components/Layout";
import LeftImageRightText from "../../Components/imageandtextcomponent/LeftImageRightText";
import LeftTextRightImage from "../../Components/imageandtextcomponent/LeftTextRightImage";
// import KANAKIAimg1 from "../../images/09_pages/KANAKIA/im_1@2x.png";
// import KANAKIAimg2 from "../../images/09_pages/KANAKIA/im_2@2x.png";
import KANAKIAimg3 from "../../images/09_pages/KANAKIA/im_2.jpg";
import KANAKIAimg4 from "../../images/09_pages/KANAKIA/im_1.jpg";

const Kanakia = ({ location }) => {
  const KanakiaData = {
    bg: "bg-KANAKIABG",
    title: "Kanakia",
    data1: {
      numberofcolspan: 2,
      imageurl: KANAKIAimg4,
      h1: "Immersive touch projection and a visual delight for kids at the Kanakia sales office",
      p1: "Kanaka commissioned Immersion to undertake 'the Aquarium' for their upcoming project, 'Codename Future'.",
      p2: "An inspired undertaking by Immerisionx that had interaction and immersiveness at its core. Time was a constraint and the installation had to be portable, as it was intended to be shifted to a separate location in the long run.",
    },
    data2: {
      numberofcolspan: 2,
      imageurl: KANAKIAimg3,
      // imageurl2: KANAKIAimg3,
      // h1: "Our Approach",
      // p1: "Since the brief isn't product-specific the business problem is always identified after a thorough brainstorming session with Accenture. Since the client undertakes extensive market research it helps us shape our innovations and articulate our thoughts a lot better. This process has helped incept a few path-breaking experiential solutions namely.",
      p1: "The user would be given an outline to sketch, once the user has personalized the outline of the sea creature as per their liking, they would have to scan it and within seconds would witness the sea creature come to life. The users could then interact with their creation. touch it and other elements on the projection to stav immersed, be mesmerized.",
      p2: "With meticulous attention to detail, the team transferred the entire setup with decimal level accuracy from workshop to site. With all the pointers on the checklist tick-marked. It is safe to safe that WE delivered as promised.",
      // p4: "All the content  was hosted on the cloud with a strong CMS that would allow them to change content depending upon the kind of customer that visits the centre. Different customer profiles could be created depending on the industry the customer was visiting from. Our designed approach enabled them to make every interaction count with simplified and secure experiences further allowing them to create immersive customer journey's through the power of videos and virtual collaborations",
    },
    // data3: {
    //   imageurl: KANAKIAimg4,
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
        <div className={`${KanakiaData?.bg} bg-cover bg-no-repeat bg-center`}>
          <div className="container">
            <div className="pt-0 md:pt-48 xl:pt-96">
              <div className="text-2xl md:text-5xl font-bold text-white pt-28 pb-4 md:pb-8 text-left ml-8 md:ml-16 uppercase">
                {KanakiaData?.title}
              </div>
            </div>
          </div>
        </div>
        {KanakiaData?.data1 && <LeftTextRightImage data={KanakiaData?.data1} />}
        {KanakiaData?.data2 && <LeftImageRightText data={KanakiaData?.data2} />}
        {KanakiaData?.data3 && <LeftTextRightImage data={KanakiaData?.data3} />}
      </div>
    </Layout>
  );
};

export default Kanakia;
