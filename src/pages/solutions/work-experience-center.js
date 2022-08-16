import React from "react";
// import LeftImageRightText from "../../Components/imageandtextcomponent/LeftImageRightText";
// import LeftTextRightImage from "../../Components/imageandtextcomponent/LeftTextRightImage";
import Layout from "../../Components/Layout";
import SIEMENS from "../../images/09_pages/EXPERIENCE CENTRES/im_5.png";
import WNS from "../../images/09_pages/EXPERIENCE CENTRES/im_2.png";
import TCL from "../../images/09_pages/EXPERIENCE CENTRES/im_3.png";
import HCL from "../../images/09_pages/EXPERIENCE CENTRES/im_4.png";
import img from "../../images/09_pages/EXPERIENCE CENTRES/im_1.png";
import { Link } from "gatsby";
import { Fade } from "react-reveal";
// import COLLABORATIVEVRim1 from "../../images/02_OURSERVICES/pages/COLLABORATIVEVR/MULTITACTIONim_1.jpg";
// import COLLABORATIVEVRim2 from "../../images/02_OURSERVICES/pages/COLLABORATIVEVR/MULTITACTIONim_2.jpg";

const Multitaction = ({ location }) => {
  const MultitactionData = {
    bg: "bg-MULTITACTION",
    title: "Experience Centres",
    // data1: {
    //   numberofcolspan: 3,
    //   imageurl: COLLABORATIVEVRim1,
    //   // h1: "Volumetric Capture",
    //   p1: `We create end-to-end customer experience centres for brands– Conceptualisation to Execution. This includes creating a walkthrough and user journey using interactive technology and immersive content to communicate a brand story. `,
    //   // p2: "The iWall is an extension of the Multitaction technology that provides an unparalleled user experience with a unique hardware design with unmatched capabilities. The MultiTaction iWall can be designed to any size format depending on the user’s requirement and purpose – large format walls, touch tables, curved walls etc.",
    //   // p3: "Think of it as like taking one photograph of each side of a cube and then gluing the photos together into a cube shape. You now have a spatial model created from two-dimensional representations of the real thing.",
    // },
    // data2: {
    //   numberofcolspan: 3,
    //   imageurl: COLLABORATIVEVRim2,
    //   // h1: "CANVUS COLLABORATIVE SOFTWARE",
    //   p1: "An experience centre carefully brings a selected few installations that work alongside each other. It communicates to the visitors how the brand can provide the most effective solutions. These installations are tailor-made to provide a unique brand experience every single time. The nature of these installations differ from one another and yet manage to deliver an equally impactful effect.",
    //   // p3: "Now, with Canvus, there is a collaboration platform that can deliver on the promise of anywhere, anytime, any device collaboration.",
    // },
  };
  return (
    <Layout location={location?.pathname}>
      <div className="pt-24 lg:pt-0 bg-black">
        <div
          className={`${MultitactionData?.bg} bg-cover bg-no-repeat bg-center`}
        >
          <div className="container">
            <div className="pt-0 md:pt-48 xl:pt-96">
              <div className="text-2xl md:text-5xl text-white pt-28 pb-4 md:pb-8 text-left ml-8 md:ml-16 uppercase">
                {MultitactionData?.title}
              </div>
            </div>
          </div>
        </div>
        <div className="container pt-12 lg:pt-0">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="text-white max-w-2xl mx-auto text-left text-sm xl:text-base font-medium ">
              <div>
                We create end-to-end customer experience centres for brands-
                Conceptualisation to Execution. This includes creating a
                walkthrough and user journey using interactive technology and
                immersive content to communicate a brand story.
              </div>
              <div className="mt-8">
                An experience centre carefully brings a selected few
                installations that work alongside each other. It communicates to
                the visitors how the brand can provide the most effective
                solutions. These installations are tailor-made to provide a
                unique brand experience every single time. The nature of these
                installations differ from one another and yet manage to deliver
                an equally impactful effect.
              </div>
            </div>
            <div>
              <img src={img} alt="img" />
            </div>
          </div>
        </div>
        <div className="bg-white">
          <div className="flex flex-col md:flex-row p-2" id="work-clients">
            <div>
              <Fade bottom big cascade>
                <div className="px-2 py-2 md:py-0 flex-1 flex flex-col">
                  <div className="portfolio-item img-zoom ct-marketing ct-media ct-branding ct-marketing ct-webdesign py-2 ">
                    <Link to="/work/wns">
                      <div className="portfolio-item-wrap">
                        <div className="portfolio-image">
                          <img src={WNS} alt="" />
                        </div>
                        <div
                          className="portfolio-description"
                          style={{
                            bottom: "-40px",
                            display: "flex",
                            justifyContent: "flex-start",
                          }}
                        >
                          {/* <Link to="/work/wns"> */}
                          <div className="text-base md:text-3xl font-bold text-white">
                            WNS
                          </div>
                          {/* <span>Graphics</span> */}
                          {/* </Link> */}
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="portfolio-item img-zoom ct-marketing ct-media ct-branding ct-marketing ct-webdesign py-2">
                    <Link to="/work/hcl">
                      <div className="portfolio-item-wrap">
                        <div className="portfolio-image">
                          <img src={HCL} alt="" />
                        </div>
                        <div
                          className="portfolio-description"
                          style={{
                            bottom: "-40px",
                            display: "flex",
                            justifyContent: "flex-start",
                          }}
                        >
                          {/* <Link to="/work/legrand"> */}
                          <div className="text-base md:text-3xl font-bold text-white">
                            HCL
                          </div>
                          {/* <span>Graphics</span> */}
                          {/* </Link> */}
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </Fade>
            </div>
            <div>
              <Fade bottom big cascade>
                <div className="flex-1 px-2 pb-2 md:pb-0 flex flex-col">
                  <div className="portfolio-item img-zoom ct-marketing ct-media ct-branding ct-marketing ct-webdesign py-2">
                    <Link to="/work/tcl">
                      <div className="portfolio-item-wrap">
                        <div className="portfolio-image">
                          <img src={TCL} alt="" />
                        </div>
                        <div
                          className="portfolio-description"
                          style={{
                            bottom: "-40px",
                            display: "flex",
                            justifyContent: "flex-start",
                          }}
                        >
                          {/* <Link to="/work/tlc"> */}
                          <div className="text-base md:text-3xl font-bold text-white">
                            TCL
                          </div>
                          {/* <span>Graphics</span> */}
                          {/* </Link> */}
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="portfolio-item img-zoom ct-marketing ct-media ct-branding ct-marketing ct-webdesign py-2">
                    <Link to="/work/siemens">
                      <div className="portfolio-item-wrap">
                        <div className="portfolio-image">
                          <img src={SIEMENS} alt="" />
                        </div>
                        <div
                          className="portfolio-description"
                          style={{
                            bottom: "-40px",
                            display: "flex",
                            justifyContent: "flex-start",
                          }}
                        >
                          {/* <Link to="/work/grohe"> */}
                          <div className="text-base md:text-3xl font-bold text-white">
                            SEIMENS
                          </div>
                          {/* <span>Graphics</span> */}
                          {/* </Link> */}
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </Fade>
            </div>
          </div>
        </div>

        {/* {MultitactionData?.data1 && (
          <LeftImageRightText data={MultitactionData?.data1} />
        )}
        {MultitactionData?.data2 && (
          <LeftTextRightImage data={MultitactionData?.data2} />
        )}
        {MultitactionData?.data3 && (
          <LeftImageRightText data={MultitactionData?.data3} />
        )} */}
      </div>
    </Layout>
  );
};

export default Multitaction;
