import React from "react";
import img1 from "../images/06_OURWORK/WNS@2x.png";
import img2 from "../images/06_OURWORK/HCL@2x.png";
import img3 from "../images/06_OURWORK/MYNTRA@2x.png";
import img4 from "../images/06_OURWORK/TCL@2x.png";
import img5 from "../images/06_OURWORK/ACCENTURE@2x.png";
import img6 from "../images/06_OURWORK/MIND@2x.png";
import img7 from "../images/06_OURWORK/muso@2x.png";
import TATAimg1 from "../images/06_OURWORK/pages/TataCommunicationsExperienceCentre/im_1@2x.png";
import TATAimg2 from "../images/06_OURWORK/pages/TataCommunicationsExperienceCentre/im_2@2x.png";
import TATAimg3 from "../images/06_OURWORK/pages/TataCommunicationsExperienceCentre/im_3@2x.png";
import TATAimg4 from "../images/06_OURWORK/pages/TataCommunicationsExperienceCentre/im_4@2x.png";
import Audiimg1 from "../images/09_pages/AUDI/im_1@2x.png";
import Audiimg2 from "../images/09_pages/AUDI/im_2@2x.png";
import Audiimg3 from "../images/09_pages/AUDI/im_3@2x.png";
import Audiimg4 from "../images/09_pages/AUDI/im_4@2x.png";
import Groheimg1 from "../images/09_pages/GROHE/im_1@2x.png";
import Groheimg2 from "../images/09_pages/GROHE/im_2@2x.png";
import KANAKIAimg1 from "../images/09_pages/KANAKIA/im_1@2x.png";
import KANAKIAimg2 from "../images/09_pages/KANAKIA/im_2@2x.png";
import KANAKIAimg3 from "../images/09_pages/KANAKIA/im_3@2x.png";
import KANAKIAimg4 from "../images/09_pages/KANAKIA/im_4@2x.png";
import LEGRANDimg1 from "../images/09_pages/LEGRAND/im_1@2x.png";
import LEGRANDimg2 from "../images/09_pages/LEGRAND/im_2@2x.png";
import LEGRANDimg3 from "../images/09_pages/LEGRAND/im_3@2x.png";
import LEGRANDimg4 from "../images/09_pages/LEGRAND/im_4@2x.png";
import SIEMENSimg1 from "../images/09_pages/SIEMENS/im_1@2x.png";
import SIEMENSimg2 from "../images/09_pages/SIEMENS/im_2@2x.png";
import SIEMENSimg3 from "../images/09_pages/SIEMENS/im_3@2x.png";
import SIEMENSimg4 from "../images/09_pages/SIEMENS/im_4@2x.png";
import WNSimg1 from "../images/09_pages/WNS/im_1@2x.png";
import WNSimg2 from "../images/09_pages/WNS/im_2@2x.png";
import WNSimg3 from "../images/09_pages/WNS/im_3@2x.png";
import WNSimg4 from "../images/09_pages/WNS/im_4@2x.png";
import { Link } from "gatsby";
import { Fade } from "react-reveal";

const OurWork = () => {
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
      h2: "The outcome",
      p2: "All-in-all, our solution combined the latest innovative technology, rich content design, a robust content management systen and a carefully designed space that curated a story enabling Tata communications to give their visitors an unforgettable brand experience.",
      p3: "Total deployment time was 6 months right from concept building till end delivery",
    },
  };

  const GroheData = {
    bg: "bg-GROHEBG",
    title: "Grohe",
    data1: {
      imageurl: Groheimg1,
      h1: "The Brief",
      p1: "Grohe understood that shower systems could not be experienced first-hand by their customers. A problem they had identified quite some time back but could not come up with a solution for it.",
      p2: "We created a VR CAVE SIMULATION coupled with 3d glasses and a 4-sided projection simulation replicating an actual bathroom. The concept was simple, choose the shower system you wish to experience with the handheld joysticks and the projection will showcase the pattern in which the shower system would dispense the water. The user could control the pattern in the way that the water would be dispensed with the help of a remote control. This eliminates all the drawbacks associated with taking an actual shower.",
    },
    data2: {
      numberofcolspan: 2,
      imageurl: Groheimg2,
      // imageurl2: img10,
      // h1: "Our Approach",
      // p1: "Tata Communications is a digital ecosystem enabler that powers today's fast-growing digital economy. They are one of the biggest operating giant's in the telecom domain. With their vast pool of operations across the globe, they host a humangeous set of data on their central server.With all that data that the brand wanted to showcase, we had to work around a more refined approach. We don't take a traditional approach to solving complex problems, or delivering client outcomes. We know that our clients want premium, bespoke and innovative technologies that drives their brand experiences. This is why we create solutions, with immersive experiences that re-frame the possible.",
      // p2: "Our modern solution orientated approach, proven managed capabilities in designing such centres and proposed cutting-edge technologies and in-frastructure enabled us to stitch their entire journey and mend a story around it.",
      // p3: "We used the latest cutting edge technologies like sliding displays, marker recognition panels, multi-touch interfaces, projection mapping and collaborative tools for conducting meetings and virtual conferences. Further, our carefully curated and designed content enabled them to change the way they use to converse with their end customers. We gave them a CMS, the heart to their content management within the centre.",
      // p4: "All the content  was hosted on the cloud with a strong CMS that would allow them to change content depending upon the kind of customer that visits the centre. Different customer profiles could be created depending on the industry the customer was visiting from. Our designed approach enabled them to make every interaction count with simplified and secure experiences further allowing them to create immersive customer journey's through the power of videos and virtual collaborations",
    },
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

  const WNSData = {
    bg: "bg-WNSBG",
    title: "WNS",
    data1: {
      imageurl: WNSimg1,
      h1: "The Brief",
      p1: "The WNS experience center is the perfect instrument to resonate an idea, create a melodious track of business-driven solutions.",
      p2: "Truly, a masterpiece. A symphony of experiences",
      p3: "A symphony of experiences.",
      h2: "The Welcome Zone",
      p4: "The welcome zone controlled by the Digital Toolkit, welcomes the visitor. The DTK app, gives the user the option to upload the client’s credentials, relevant content, in the form of visuals and videos and give a personalized welcome message.",
      h3: "The Co-creation Zone",
      p5: "A place where the content is displayed, it encourages the visitor to browse through it, interact with it first-hand. It lets other stakeholders and participants interact with the content remotely, make changes with the help of the Digital Whiteboard and add their thoughts to it.",
      h4: "The Lounge Area",
      p6: " Reflecting on the presented content, interacting with gamified installations, taking opinions over a self-balancing robot-based video conference and most importantly making business decisions based on the showcased content. ",
    },
    data2: {
      numberofcolspan: 2,
      imageurl: WNSimg2,
      imageurl2: WNSimg3,
      // h1: "The Co-creation Zone",
      // p1: "A place where the content is displayed, it encourages the visitor to browse through it, interact with it first-hand. It lets other stakeholders and participants interact with the content remotely, make changes with the help of the Digital Whiteboard and add their thoughts to it.",
      // h2: "The Lounge Area",
      // p3: " Reflecting on the presented content, interacting with gamified installations, taking opinions over a self-balancing robot-based video conference and most importantly making business decisions based on the showcased content. ",
      // p2: "Our modern solution orientated approach, proven managed capabilities in designing such centres and proposed cutting-edge technologies and in-frastructure enabled us to stitch their entire journey and mend a story around it.",
      // p3: "We used the latest cutting edge technologies like sliding displays, marker recognition panels, multi-touch interfaces, projection mapping and collaborative tools for conducting meetings and virtual conferences. Further, our carefully curated and designed content enabled them to change the way they use to converse with their end customers. We gave them a CMS, the heart to their content management within the centre.",
      // p4: "All the content  was hosted on the cloud with a strong CMS that would allow them to change content depending upon the kind of customer that visits the centre. Different customer profiles could be created depending on the industry the customer was visiting from. Our designed approach enabled them to make every interaction count with simplified and secure experiences further allowing them to create immersive customer journey's through the power of videos and virtual collaborations",
    },
    data3: {
      imageurl: WNSimg4,
      // h1: "How did it help Tata Communication",
      // p1: "Creating this centre enabled Tata Communications to;",
      // l1: "Strengthens existing relationships with their clients",
      // l2: "Facilitate new business relationships",
      // l3: "Create opportunities to increase share of wallet",
      // l4: "Creates opportunities to shorten sales cycles",
      // h2: "The outcome",
      // p2: "All-in-all, our solution combined the latest innovative technology, rich content design, a robust content management systen and a carefully designed space that curated a story enabling Tata communications to give their visitors an unforgettable brand experience.",
      // p3: "Total deployment time was 6 months right from concept building till end delivery",
    },
  };

  const AudiData = {
    bg: "bg-AUDIBG",
    title: "AUDI",
    data1: {
      imageurl: Audiimg1,
      h1: "The Brief",
      p1: "It was the Unconference event, at Jaigarh Fort which is located at Jaipur, Rajasthan, where Audi team wanted to create something innovative that could enable the car lovers to witness the true potential of the newly launched Audi R8 V10 Plus.",
      p2: "MultiTaction is a Multi-Touch and Multi-User platform based on Computer Vision technology. It has unique features like QR Marker Code recognition and enabled with IR Pen. Leveraging on the same Xenium’s creative team defined interactions for the users to explore the features of Audi R8 V10 ",
      p3: "At the stall the user had to just place the specific code on the table to learn about the feature or specification of the car. All of the features of the car were showcased with nicely designed visuals and 3D graphics. It was an almost overwhelming experience for each one among the users, since it was a never seen before.",
    },

    data2: {
      numberofcolspan: 2,
      imageurl: Audiimg2,
      imageurl2: Audiimg3,
      // h1: "Our Approach",
      // p1: " plus car. Initially Xenium’s team delved into the list of specifications and features of the car and later mapped each of these against a QR Code.",
      // p2: "At the stall the user had to just place the specific code on the table to learn about the feature or specification of the car. All of the features of the car were showcased with nicely designed visuals and 3D graphics. It was an almost overwhelming experience for each one among the users, since it was a never seen before stuff. The ultimate goal for Audi was thus met.",
      // p3: "We used the latest cutting edge technologies like sliding displays, marker recognition panels, multi-touch interfaces, projection mapping and collaborative tools for conducting meetings and virtual conferences. Further, our carefully curated and designed content enabled them to change the way they use to converse with their end customers. We gave them a CMS, the heart to their content management within the centre.",
      // p4: "All the content  was hosted on the cloud with a strong CMS that would allow them to change content depending upon the kind of customer that visits the centre. Different customer profiles could be created depending on the industry the customer was visiting from. Our designed approach enabled them to make every interaction count with simplified and secure experiences further allowing them to create immersive customer journey's through the power of videos and virtual collaborations",
    },
    data3: {
      imageurl: Audiimg4,
      // h1: "How did it help Tata Communication",
      // p1: "Creating this centre enabled Tata Communications to;",
      // l1: "Strengthens existing relationships with their clients",
      // l2: "Facilitate new business relationships",
      // l3: "Create opportunities to increase share of wallet",
      // l4: "Creates opportunities to shorten sales cycles",
      // h2: "The outcome",
      // p2: "All-in-all, our solution combined the latest innovative technology, rich content design, a robust content management systen and a carefully designed space that curated a story enabling Tata communications to give their visitors an unforgettable brand experience.",
      // p3: "Total deployment time was 6 months right from concept building till end delivery",
    },
  };

  const SiemensData = {
    bg: "bg-SIEMENSBG",
    title: "AUDI",
    data1: {
      imageurl: SIEMENSimg1,
      h1: "The Brief",
      p1: "With digital transformation at the fore-front, Siemens chose two major domains Smart Infrastructure and Power & Gas to showcase their developments in Smart Infrastructure, we put together an impactful 3-sided display controlled by a touch screen. The sharp and engaging content created in-house depicted the products in surreal detail. The interaction was controlled by a 32-inch touch screen, allowing for seamless interaction with the content.",
      p2: "At the power and gas booth, Xenium Digital showcased the efficiency of transformers and switch gears. A scale-to-ratio 3D model of a substation, that worked in unison with screens placed in an L-shape, all of which was controlled by a tablet with an engaging UI. The journey of the content commenced with the content highlighting traditional methods of power distribution, its evolution over some time and upgraded solutions with their benefits.",
      // p2: "",
    },
    data2: {
      numberofcolspan: 2,
      imageurl: SIEMENSimg2,
      imageurl2: SIEMENSimg3,
      // h1: "Our Approach",
      // p1: "At the power and gas booth, Xenium Digital showcased the efficiency of transformers and switch gears. A scale-to-ratio 3D model of a substation, that worked in unison with screens placed in an L-shape, all of which was controlled by a tablet with an engaging UI.",
      // p2: "The journey of the content commenced with the content highlighting traditional methods of power distribution, its evolution over some time and upgraded solutions with their benefits.",
      // p3: "We used the latest cutting edge technologies like sliding displays, marker recognition panels, multi-touch interfaces, projection mapping and collaborative tools for conducting meetings and virtual conferences. Further, our carefully curated and designed content enabled them to change the way they use to converse with their end customers. We gave them a CMS, the heart to their content management within the centre.",
      // p4: "All the content  was hosted on the cloud with a strong CMS that would allow them to change content depending upon the kind of customer that visits the centre. Different customer profiles could be created depending on the industry the customer was visiting from. Our designed approach enabled them to make every interaction count with simplified and secure experiences further allowing them to create immersive customer journey's through the power of videos and virtual collaborations",
    },
    data3: {
      imageurl: SIEMENSimg4,
      // h1: "How did it help Tata Communication",
      // p1: "Creating this centre enabled Tata Communications to;",
      // l1: "Strengthens existing relationships with their clients",
      // l2: "Facilitate new business relationships",
      // l3: "Create opportunities to increase share of wallet",
      // l4: "Creates opportunities to shorten sales cycles",
      // h2: "The outcome",
      // p2: "All-in-all, our solution combined the latest innovative technology, rich content design, a robust content management systen and a carefully designed space that curated a story enabling Tata communications to give their visitors an unforgettable brand experience.",
      // p3: "Total deployment time was 6 months right from concept building till end delivery",
    },
  };

  const LegerandData = {
    bg: "bg-LEGRANDBG",
    title: "LEGERAND",
    data1: {
      imageurl: LEGRANDimg1,
      h1: "Virtual Event for Legrand's solution and products",
      p1: "India's first AR TracTech solution for their virtual product launch event. Our special 3d tracking cameras would capture and track a 3d printed house in realtime and layer augmented information on top of it with 3d animations and graphics.",
      p2: "A beautifully designed story was curated around their new products which would at first showcase the product's functionality within the 3d house and then elaborate its features in detail with pop up 3d animations, all of this which was then broadcasted live on YouTube.",
    },
    data2: {
      numberofcolspan: 2,
      imageurl: LEGRANDimg2,
      imageurl2: LEGRANDimg3,
      // h1: "Our Approach",
      // p1: "At the power and gas booth, Xenium Digital showcased the efficiency of transformers and switch gears. A scale-to-ratio 3D model of a substation, that worked in unison with screens placed in an L-shape, all of which was controlled by a tablet with an engaging UI.",
      // p2: "The journey of the content commenced with the content highlighting traditional methods of power distribution, its evolution over some time and upgraded solutions with their benefits.",
      // p3: "We used the latest cutting edge technologies like sliding displays, marker recognition panels, multi-touch interfaces, projection mapping and collaborative tools for conducting meetings and virtual conferences. Further, our carefully curated and designed content enabled them to change the way they use to converse with their end customers. We gave them a CMS, the heart to their content management within the centre.",
      // p4: "All the content  was hosted on the cloud with a strong CMS that would allow them to change content depending upon the kind of customer that visits the centre. Different customer profiles could be created depending on the industry the customer was visiting from. Our designed approach enabled them to make every interaction count with simplified and secure experiences further allowing them to create immersive customer journey's through the power of videos and virtual collaborations",
    },
    data3: {
      imageurl: LEGRANDimg4,
      // h1: "How did it help Tata Communication",
      // p1: "Creating this centre enabled Tata Communications to;",
      // l1: "Strengthens existing relationships with their clients",
      // l2: "Facilitate new business relationships",
      // l3: "Create opportunities to increase share of wallet",
      // l4: "Creates opportunities to shorten sales cycles",
      // h2: "The outcome",
      // p2: "All-in-all, our solution combined the latest innovative technology, rich content design, a robust content management systen and a carefully designed space that curated a story enabling Tata communications to give their visitors an unforgettable brand experience.",
      // p3: "Total deployment time was 6 months right from concept building till end delivery",
    },
  };

  const KanakiaData = {
    bg: "bg-KANAKIABG",
    title: "Kanakia",
    data1: {
      imageurl: KANAKIAimg1,
      h1: "The Brief",
      p1: "A zone of immersion, interaction and fun-play for kids and adults. Our main idea was to create a virtual world for the kids, one where they can observe, play and learn. The entire experience was a culmination of art, technology and content. The Aquarium would bring a sketch to life and showcase it within the wall projection that would replicate the ocean.",
      p2: "The user would be given an outline to sketch, once the user has personalized the outline of the sea creature as per their liking, they would have to scan it and within seconds would witness the sea creature come to life. The users could then interact with their creation, touch it and other elements on the projection to stay immersed, be mesmerized.",
      p3: "With meticulous attention to detail, the team transferred the entire setup with decimal level accuracy from workshop to site in 4 days. With all the pointers on the checklist tick-marked, it is safe to safe that WE delivered as promised.",
    },
    data2: {
      numberofcolspan: 2,
      imageurl: KANAKIAimg2,
      imageurl2: KANAKIAimg3,
      // h1: "Our Approach",
      // p1: "The user would be given an outline to sketch, once the user has personalized the outline of the sea creature as per their liking, they would have to scan it and within seconds would witness the sea creature come to life. The users could then interact with their creation, touch it and other elements on the projection to stay immersed, be mesmerized.",
      // p2: "With meticulous attention to detail, the team transferred the entire setup with decimal level accuracy from workshop to site in 4 days. With all the pointers on the checklist tick-marked, it is safe to safe that WE delivered as promised.",
      // p3: "We used the latest cutting edge technologies like sliding displays, marker recognition panels, multi-touch interfaces, projection mapping and collaborative tools for conducting meetings and virtual conferences. Further, our carefully curated and designed content enabled them to change the way they use to converse with their end customers. We gave them a CMS, the heart to their content management within the centre.",
      // p4: "All the content  was hosted on the cloud with a strong CMS that would allow them to change content depending upon the kind of customer that visits the centre. Different customer profiles could be created depending on the industry the customer was visiting from. Our designed approach enabled them to make every interaction count with simplified and secure experiences further allowing them to create immersive customer journey's through the power of videos and virtual collaborations",
    },
    data3: {
      imageurl: KANAKIAimg4,
      // h1: "How did it help Tata Communication",
      // p1: "Creating this centre enabled Tata Communications to;",
      // l1: "Strengthens existing relationships with their clients",
      // l2: "Facilitate new business relationships",
      // l3: "Create opportunities to increase share of wallet",
      // l4: "Creates opportunities to shorten sales cycles",
      // h2: "The outcome",
      // p2: "All-in-all, our solution combined the latest innovative technology, rich content design, a robust content management systen and a carefully designed space that curated a story enabling Tata communications to give their visitors an unforgettable brand experience.",
      // p3: "Total deployment time was 6 months right from concept building till end delivery",
    },
  };
  return (
    <>
      <div
        id="slider"
        className="inspiro-slider slider-fullscreen dots-creative bg-our-work bg-no-repeat bg-cover"
      >
        <div className="slide kenburns">
          <div className="container text-left ">
            <div className="py-5">
              <div className="uppercase text-3xl md:text-5xl lg:text-8xl text-white text-left font-bold pb-0 md:pb-8 lg:pb-20 pt-4">
                Our Work
              </div>
              <div className="pb-4 lg:pb-8 uppercase text-lg lg:text-3xl text-white text-left font-semibold">
                Experience Centers & Museums
              </div>
              <div className="text-white max-w-2xl text-justify text-xs md:text-base">
                <div className="pb-2 lg:pb-4">
                  Our fully interactive and immersive customer experience
                  centers are designed keeping in mind the SPACE + DESIGN +
                  TECHNOLOGY + INTERACTION
                </div>
                <div className="">
                  Our bespoke customer centeric solutions creates an
                  unforgettable business and brand experience.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row p-2">
        <div>
          <Fade bottom big cascade> 
            <div className="px-2 py-2 md:py-0 flex-1 flex flex-col">
              <div className="portfolio-item img-zoom ct-marketing ct-media ct-branding ct-marketing ct-webdesign py-2 ">
                <div className="portfolio-item-wrap">
                  <div className="portfolio-image">
                    <Link to="/work-detail" state={{ data: WNSData }}>
                      <img src={img1} alt="" />
                    </Link>
                  </div>
                  <div
                    className="portfolio-description"
                    style={{
                      bottom: "-40px",
                      display: "flex",
                      justifyContent: "flex-start",
                    }}
                  >
                    <Link to="/work-detail" state={{ data: WNSData }}>
                      <div className="text-base md:text-3xl font-bold text-white">
                        WNS
                      </div>
                      {/* <span>Graphics</span> */}
                    </Link>
                  </div>
                </div>
              </div>

              <div className="portfolio-item img-zoom ct-marketing ct-media ct-branding ct-marketing ct-webdesign py-2">
                <div className="portfolio-item-wrap">
                  <div className="portfolio-image">
                    <Link to="/work-detail" state={{ data: KanakiaData }}>
                      <img src={img2} alt="" />
                    </Link>
                  </div>
                  <div
                    className="portfolio-description"
                    style={{
                      bottom: "-40px",
                      display: "flex",
                      justifyContent: "flex-start",
                    }}
                  >
                    <Link to="/work-detail" state={{ data: KanakiaData }}>
                      <div className="text-base md:text-3xl font-bold text-white">
                        KANAKIA
                      </div>
                      {/* <span>Graphics</span> */}
                    </Link>
                  </div>
                </div>
              </div>
              <div className="portfolio-item img-zoom ct-marketing ct-media ct-branding ct-marketing ct-webdesign py-2">
                <div className="portfolio-item-wrap">
                  <div className="portfolio-image">
                    <Link to="/work-detail" state={{ data: GroheData }}>
                      <img src={img3} alt="" />
                    </Link>
                  </div>
                  <div
                    className="portfolio-description"
                    style={{
                      bottom: "-40px",
                      display: "flex",
                      justifyContent: "flex-start",
                    }}
                  >
                    <Link to="/work-detail" state={{ data: GroheData }}>
                      <div className="text-base md:text-3xl font-bold text-white">
                        GROHE
                      </div>
                      {/* <span>Graphics</span> */}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
        </div>
        <div>
          <Fade bottom big cascade>
            <div className="flex-1 px-2 pb-2 md:pb-0 flex flex-col">
              <div className="portfolio-item img-zoom ct-marketing ct-media ct-branding ct-marketing ct-webdesign py-2">
                <div className="portfolio-item-wrap">
                  <div className="portfolio-image">
                    <Link to="/work-detail" state={{ data: TCLData }}>
                      <img src={img4} alt="" />
                    </Link>
                  </div>
                  <div
                    className="portfolio-description"
                    style={{
                      bottom: "-40px",
                      display: "flex",
                      justifyContent: "flex-start",
                    }}
                  >
                    <Link to="/work-detail" state={{ data: TCLData }}>
                      <div className="text-base md:text-3xl font-bold text-white">
                        TCL
                      </div>
                      {/* <span>Graphics</span> */}
                    </Link>
                  </div>
                </div>
              </div>
              <div className="portfolio-item img-zoom ct-marketing ct-media ct-branding ct-marketing ct-webdesign py-2">
                <div className="portfolio-item-wrap">
                  <div className="portfolio-image">
                    <Link to="/work-detail" state={{ data: AudiData }}>
                      <img src={img5} alt="" />
                    </Link>
                  </div>
                  <div
                    className="portfolio-description"
                    style={{
                      bottom: "-40px",
                      display: "flex",
                      justifyContent: "flex-start",
                    }}
                  >
                    <Link to="/work-detail" state={{ data: AudiData }}>
                      <div className="text-base md:text-3xl font-bold text-white">
                        AUDI
                      </div>
                      {/* <span>Graphics</span> */}
                    </Link>
                  </div>
                </div>
              </div>
              <div className="portfolio-item img-zoom ct-marketing ct-media ct-branding ct-marketing ct-webdesign py-2">
                <div className="portfolio-item-wrap">
                  <div className="portfolio-image">
                    <Link to="/work-detail" state={{ data: SiemensData }}>
                      <img src={img6} alt="" />
                    </Link>
                  </div>
                  <div
                    className="portfolio-description"
                    style={{
                      bottom: "-40px",
                      display: "flex",
                      justifyContent: "flex-start",
                    }}
                  >
                    <Link to="/work-detail" state={{ data: SiemensData }}>
                      <div className="text-base md:text-3xl font-bold text-white">
                        SIEMENS
                      </div>
                      {/* <span>Graphics</span> */}
                    </Link>
                  </div>
                </div>
              </div>
              <div className="portfolio-item img-zoom ct-marketing ct-media ct-branding ct-marketing ct-webdesign py-2">
                <div className="portfolio-item-wrap">
                  <div className="portfolio-image">
                    <Link to="/work-detail" state={{ data: LegerandData }}>
                      <img src={img7} alt="" />
                    </Link>
                  </div>
                  <div
                    className="portfolio-description"
                    style={{
                      bottom: "-40px",
                      display: "flex",
                      justifyContent: "flex-start",
                    }}
                  >
                    <Link to="/work-detail" state={{ data: LegerandData }}>
                      <div className="text-base md:text-3xl font-bold text-white">
                        LEGERAND
                      </div>
                      {/* <span>Graphics</span> */}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
};

export default OurWork;
