import React from "react";
import img1 from "../images/02_OURSERVICES/COLLABORATIVEVR@2x.png";
import img2 from "../images/02_OURSERVICES/VOLUMETRICSTUIO@2x.png";
import img3 from "../images/02_OURSERVICES/METAVERSE@2x.png";
import img4 from "../images/02_OURSERVICES/INTERACTIVEDIGITALINSTALLATION@2x.png";
import img5 from "../images/02_OURSERVICES/AUGMENTEDREALITY@2x@2x.png";
import img6 from "../images/02_OURSERVICES/MULTITACTION@2x.png";
import img7 from "../images/02_OURSERVICES/VRCAVE@2x.png";
import COLLABORATIVEVRim1 from "../images/02_OURSERVICES/pages/COLLABORATIVEVR/COLLABORATIVEVRim_1@2x.png";
import COLLABORATIVEVRim2 from "../images/02_OURSERVICES/pages/COLLABORATIVEVR/COLLABORATIVEVRim_2@2x.png";
import { Link } from "gatsby";
import { Fade } from "react-reveal";
// import { useHistory } from "react-router-dom";

const OurServices = () => {
  const CollabrateVRData = {
    title: "COLLABORATIVE AR/VR",
    data1: {
      numberofcolspan: 3,
      imageurl: COLLABORATIVEVRim1,
      h1: "Join us in a new dimension.",
      p1: "Augmented and virtual reality have come a long way, from being just a gimmick to being an integral part of the ‘digital revolution’. Brands look at these technologies as weapons of MASS ENGAGEMENT. Be it, augmenting key information over objects &amp; surroundings or transcending the user to a make-believe virtual world, where the content can be delivered more effectively than any other medium.",
      p2: "AR &amp; VR are the first steps towards a brand’s Digital transformation and a gateway into the future of collaboration.",
      p3: " Can be used for Virtual meeting rooms, training spaces, virtual shopping experiences, remote collaborations, etc.",
    },
    data2: {
      imageurl: COLLABORATIVEVRim2,
      p1: "With tools such as VR or AR glasses and devices enabled with AR and VR collaboration is seamless and empowering. The ease of use is another added advantage since many applications are built to support these technologies. The applications of AR and VR are endless, liberate your imagination, think BIG.",
      // p3: "Can be used for Virtual meeting rooms, training spaces, virtual shopping experiences, remote collaborations, etc.",
    },
  };

  const VolumetricStudioData = {
    title: "Volumetric Studio",
    data1: {
      numberofcolspan: 3,
      imageurl: COLLABORATIVEVRim1,
      h1: "Volumetric Capture",
      p1: `“Volumetric capture" (also known as "volumetric intelligence") technology converts a person, object, or place into 3D digital data and reproduces
      it as a high-quality image. Basically, volumetric capture can create spatial models of moving objects and people in real-time.`,
      p2: "This video technique captures you from different viewpoints. It captures moving images of people and creates them in 3D in NO TIME! ",
      p3: "Think of it as like taking one photograph of each side of a cube and then gluing the photos together into a cube shape. You now have a spatial model created from two-dimensional representations of the real thing.",
    },
    // data2: {
    //   imageurl: COLLABORATIVEVRim2,
    //   h1: "Creating the Metaverse with Volumetric Video and Virtual Production",
    //   p1: "The metaverse is one of those big concepts that tends to spur all kinds of ideas. Sometimes practical, often theoretical.Immersiox creates that platform to collaborate in the metaverse and bring your business into ‘THAT VIRTUAL WORLD’.",
    //   p3: "We provide you the state-of-the-art, 3D volumetric video capture studio and 3D solutions—using our volumetric capture is perfect for traversing into the metaverse as representations of real people, real objects or environments.",
    // },
  };

  const MetaverseData = {
    title: "Metaverse",
    data1: {
      numberofcolspan: 3,
      imageurl: COLLABORATIVEVRim1,
      h1: "Creating the Metaverse with Volumetric Video and Virtual Production",
      p1: "The metaverse is one of those big concepts that tends to spur all kinds of ideas. Sometimes practical, often theoretical.Immersiox creates that platform to collaborate in the metaverse and bring your business into ‘THAT VIRTUAL WORLD’.",
      p2: "We provide you the state-of-the-art, 3D volumetric video capture studio and 3D solutions—using our volumetric capture is perfect for traversing into the metaverse as representations of real people, real objects or environments.",
    },
    data2: {
      imageurl: COLLABORATIVEVRim2,
      h1: "How Does It Work",
      l1: "STEP 1: The human is captured in the studio using the green screen set-up and multiple cameras.",
      l2: "STEP 2: The software converts the human figure into a digital 3d human using our backend software",
      l3: "STEP 3: The 3d content extracted of the human figure can now be used in any digital environment",
      // l4: "Creates opportunities to shorten sales cycles",
    },
  };

  const VRCaveData = {
    title: "VR Cave",
    data1: {
      numberofcolspan: 3,
      imageurl: COLLABORATIVEVRim1,
      h1: "Our collaborative VR platform will allow for people and businesses to collaborate and meet up in the virtual world",
      p1: "Teamwork is crucial and has become a challenge for global firms whose departments or subsidiaries are spread all over the world. Using virtual reality collaborative tools, you can gather all thestakeholders of your project in the same VR workspace and display your virtual prototype at scale to create and collaborate.",
      p2: "Our VIRTUAL REALITY CAVE SOLUTION will help you visualize your product better. It is an immersive, interactive 3D experience theatre that requires practically no footprint. With ultra short-throw projection and VR COLLABORATIVE TOOLS, nearly any existing room can be converted into a mind-blowing visualization center.",
      p3: "Can be used for Virtual meeting rooms, training spaces, virtual shopping experiences, remote collaborations, etc.",
    },
    data2: {
      imageurl: COLLABORATIVEVRim2,
      p1: "Teamwork is crucial and has become a challenge for global firms whose departments or subsidiaries are spread all over the world. Using virtual reality collaborative tools, you can gather all thestakeholders of your project in the same VR workspace and display your virtual prototype at scale to create and collaborate.",
      p3: "Can be used for Virtual meeting rooms, training spaces, virtual shopping experiences, remote collaborations, etc.",
    },
  };

  const CapsuleData = {
    title: "Capsule",
    data1: {
      numberofcolspan: 3,
      imageurl: COLLABORATIVEVRim1,
      h1: "CAPSULE is a hologram display that creates incredible interactive experiences.",
      p1: "CAPSULE is a consumer-facing holographic display that is plug-and-play for events in all lighting conditions and can be permanently installed for retail and other consumer or user-facing applications. CAPSULE can beam-in live hologram presenters by leveraging HoloPresence capabilities, as well as playback pre-recorded programmatic content that viewers can interact with using touch.",
      // p2: "Our VIRTUAL REALITY CAVE SOLUTION will help you visualize your product better. It is an immersive, interactive 3D experience theatre that requires practically no footprint. With ultra short-throw projection and VR COLLABORATIVE TOOLS, nearly any existing room can be converted into a mind-blowing visualization center.",
      // p3: " Can be used for Virtual meeting rooms, training spaces, virtual shopping experiences, remote collaborations, etc.",
    },
    data2: {
      imageurl: COLLABORATIVEVRim2,
      p1: "Teamwork is crucial and has become a challenge for global firms whose departments or subsidiaries are spread all over the world. Using virtual reality collaborative tools, you can gather all thestakeholders of your project in the same VR workspace and display your virtual prototype at scale to create and collaborate.",
      p3: "Can be used for Virtual meeting rooms, training spaces, virtual shopping experiences, remote collaborations, etc.",
    },
  };

  const MultitactionData = {
    title: "Multitaction",
    data1: {
      numberofcolspan: 3,
      imageurl: COLLABORATIVEVRim1,
      // h1: "Volumetric Capture",
      p1: `The epitome of collaboration, MultiTaction is the benchmark in touchbased interactive installations. Compatible with a number of add-ons and accessories such as markers, pens and other. The iWall is an extension of the Multitaction technology that provides an unparalleled user experience with a unique hardware design with unmatched capabilities.`,
      p2: "The MultiTaction iWall can be designed to any size format depending on the user’s requirement and purpose – large format walls, touch tables, curved walls etc.",
      // p3: "Think of it as like taking one photograph of each side of a cube and then gluing the photos together into a cube shape. You now have a spatial model created from two-dimensional representations of the real thing.",
    },
    data2: {
      imageurl: COLLABORATIVEVRim2,
      h1: "CANVUS COLLABORATIVE SOFTWARE",
      p1: "Over the years, there have been many attempts at achieving team collaboration, from video conferencing to shared document services. But, these platforms have always fallen short of realizing a truly unified collaboration experience.",
      p3: "Now, with Canvus, there is a collaboration platform that can deliver on the promise of anywhere, anytime, any device collaboration.",
    },
  };


  // let history = useHistory();

  // const handleClick = (data) => {
  //   console.log(data, "dsa");
  //   history.push({
  //     pathname: "/detail",
  //     state: { detail: data === "coll" ? imageData : "" },
  //   });
  // };

  return (
    <div className="bg-our-service bg-no-repeat bg-cover">
      <div className="container">
        <div className="flex flex-col lg:flex-row justify-between text-white pb-8 pt-5">
          <Fade bottom big cascade>
            <div className="uppercase font-bold text-base md:text-2xl lg:text-5xl pt-8 lg:pt-40 text-left text-white pb-4 lg:pb-8 px-3">
              Solutions
            </div>
          </Fade>
          <Fade right cascade>
            <div className="text-white text-left lg:text-right max-w-2xl text-xs md:text-base pt-8 lg:pt-40 pb-4 lg:pb-8 px-3">
              <div>
                Our technology and design prowess enables us to come up with cutting edge solutions which go through
                a series of prototyping and user-testing entailing constant refinements which are finally executed for a
                seamless, unified story telling and brand connect.
              </div>
            </div>
          </Fade>
        </div>
        {/* <Fade bottom big cascade>
          <div className="uppercase font-bold text-base md:text-2xl lg:text-5xl pt-8 lg:pt-40 text-left text-white pb-4 lg:pb-8 px-3">
            Our Services
          </div>
        </Fade> */}
        <div className="flex flex-col lg:flex-row justify-between pb-6">
          <div className="pr-0 lg:pr-3 py-3">
            <Fade bottom>
              <div className=" grid grid-cols-5 gap-3 ">
                <div className="col-span-2">
                  {/* <Link to="/service-detail">
                  <img src={img1} className="h-full" alt="" />
                </Link> */}
                  <div className="portfolio-item img-zoom ct-marketing ct-media ct-branding ct-marketing ct-webdesign">
                    <div className="portfolio-item-wrap">
                      <div className="portfolio-image">
                        <Link
                          to="/service-detail"
                          state={{ data: CollabrateVRData }}
                        >
                          <img src={img1} alt="" className="" />
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
                        <Link
                          to="/service-detail"
                          state={{ data: CollabrateVRData }}
                        >
                          <div className="text-base md:text-2xl font-bold text-white">
                            COLLABRATIVE VR
                          </div>
                          {/* <span>Graphics</span> */}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-3">
                  <div className="portfolio-item img-zoom ct-marketing ct-media ct-branding ct-marketing ct-webdesign pb-3">
                    <div className="portfolio-item-wrap">
                      <div className="portfolio-image">
                        <Link to="/service-detail" state={{ data: VolumetricStudioData }}>
                          <img src={img2} alt="" />
                        </Link>
                      </div>
                      <div
                        className="portfolio-description"
                        style={{
                          bottom: "-42px",
                          display: "flex",
                          justifyContent: "flex-start",
                        }}
                      >
                        <Link to="/service-detail" state={{ data: VolumetricStudioData }}>
                          <div className="text-base md:text-2xl font-bold text-white uppercase">
                            Volumetric Studio
                          </div>
                          {/* <span>Graphics</span> */}
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="portfolio-item img-zoom ct-marketing ct-media ct-branding ct-marketing ct-webdesign pb-0 md:pb-3">
                    <div className="portfolio-item-wrap">
                      <div className="portfolio-image">
                        <Link to="/service-detail" state={{ data: MetaverseData }}>
                          <img src={img3} alt="" />
                        </Link>
                      </div>
                      <div
                        className="portfolio-description"
                        style={{
                          bottom: "-42px",
                          display: "flex",
                          justifyContent: "flex-start",
                        }}
                      >
                        <Link to="/service-detail" state={{ data: MetaverseData }}>
                          <div className="text-base md:text-2xl font-bold text-white">
                            METAVERSE
                          </div>
                          {/* <span>Graphics</span> */}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
          <div className="py-3">
            <Fade top>
              <div className="grid grid-cols-5 gap-3 ">
                <div className="col-span-2">
                  {/* <div className="pb-0 lg:pb-3">
                  <img src={img4} alt=""/>
                </div> */}
                  <div className="portfolio-item img-zoom ct-marketing ct-media ct-branding ct-marketing ct-webdesign pb-3">
                    <div className="portfolio-item-wrap">
                      <div className="portfolio-image">
                        <Link to="/service-detail">
                          <img src={img4} alt="" />
                        </Link>
                      </div>
                      <div
                        className="portfolio-description"
                        style={{
                          bottom: "-70px",
                          display: "flex",
                          justifyContent: "flex-start",
                        }}
                      >
                        <Link to="/service-detail">
                          <div className="text-base md:text-2xl font-bold text-white">
                            INTERACTIVE DIGITAL INSTALLATION
                          </div>
                          {/* <span>Graphics</span> */}
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="portfolio-item img-zoom ct-marketing ct-media ct-branding ct-marketing ct-webdesign pb-0 md:pb-3">
                    <div className="portfolio-item-wrap">
                      <div className="portfolio-image">
                        <Link to="/service-detail">
                          <img src={img5} alt="" />
                        </Link>
                      </div>
                      <div
                        className="portfolio-description"
                        style={{
                          bottom: "-50px",
                          display: "flex",
                          justifyContent: "flex-start",
                        }}
                      >
                        <Link to="/service-detail">
                          <div className="text-base md:text-2xl font-bold text-white">
                            AUGMENTED REALITY
                          </div>
                          {/* <span>Graphics</span> */}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-3">
                  <div className="portfolio-item img-zoom ct-marketing ct-media ct-branding ct-marketing ct-webdesign pb-3">
                    <div className="portfolio-item-wrap">
                      <div className="portfolio-image">
                        <Link to="/service-detail" state={{ data: MultitactionData }}>
                          <img src={img6} alt="" />
                        </Link>
                      </div>
                      <div
                        className="portfolio-description"
                        style={{
                          bottom: "-42px",
                          display: "flex",
                          justifyContent: "flex-start",
                        }}
                      >
                        <Link to="/service-detail" state={{ data: MultitactionData }}>
                          <div className="text-base md:text-2xl font-bold text-white">
                            MULTITACTION
                          </div>
                          {/* <span>Graphics</span> */}
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="portfolio-item img-zoom ct-marketing ct-media ct-branding ct-marketing ct-webdesign pb-0 md:pb-3">
                    <div className="portfolio-item-wrap">
                      <div className="portfolio-image">
                        <Link to="/service-detail" state={{ data: VRCaveData }}>
                          <img src={img7} alt="" />
                        </Link>
                      </div>
                      <div
                        className="portfolio-description"
                        style={{
                          bottom: "-42px",
                          display: "flex",
                          justifyContent: "flex-start",
                        }}
                      >
                        <Link to="/service-detail" state={{ data: VRCaveData }}>
                          <div className="text-base md:text-2xl font-bold text-white">
                            VR CAVE
                          </div>
                          {/* <span>Graphics</span> */}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
