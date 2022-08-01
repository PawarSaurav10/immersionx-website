import React from "react";
import img1 from "../images/02_OURSERVICES/COLLABORATIVEVR@2x.png";
import img2 from "../images/02_OURSERVICES/VOLUMETRICSTUIO@2x.png";
// import img2 from "../images/09_pages/VOLUSTUDIO/coverimagevolumetric.png";
import img3 from "../images/02_OURSERVICES/METAVERSE@2x.png";
import img4 from "../images/02_OURSERVICES/INTERACTIVEDIGITALINSTALLATION@2x.png";
import img5 from "../images/02_OURSERVICES/AUGMENTEDREALITY@2x@2x.png";
import img6 from "../images/02_OURSERVICES/MULTITACTION@2x.png";
import img7 from "../images/02_OURSERVICES/VRCAVE@2x.png";
import { Link } from "gatsby";
import { Fade } from "react-reveal";
// import { useHistory } from "react-router-dom";

const OurServices = () => {
  // let history = useHistory();

  // const handleClick = (data) => {
  //   console.log(data, "dsa");
  //   history.push({
  //     pathname: "/detail",
  //     state: { detail: data === "coll" ? imageData : "" },
  //   });
  // };

  return (
    <div
      className="bg-fixed bg-our-service bg-no-repeat bg-cover "
      id="solutions"
    >
      <div className="container">
        <div className="flex flex-col lg:flex-row justify-between text-white pb-8 pt-5">
          <div>
            <Fade bottom >
              <div className="uppercase font-bold text-2xl md:text-5xl xl:text-7xl pt-8 lg:pt-40 text-left text-white pb-4 lg:pb-8 px-3">
                Solutions
              </div>
            </Fade>
          </div>
          <div>
            <Fade right cascade>
              <div className="text-white text-left lg:text-right max-w-2xl text-base xl:text-lg pt-8 lg:pt-40 pb-4 lg:pb-8 px-3">
                <div>
                  Our technology and design prowess enables us to come up with
                  cutting edge solutions which go through a series of
                  prototyping and user-testing entailing constant refinements
                  which are finally executed for a seamless, unified story
                  telling and brand connect.
                </div>
              </div>
            </Fade>
          </div>
        </div>
        {/* <Fade bottom big cascade>
          <div className="uppercase font-bold text-base md:text-2xl lg:text-5xl pt-8 lg:pt-40 text-left text-white pb-4 lg:pb-8 px-3">
            Our Services
          </div>
        </Fade> */}
        <div className="flex flex-col lg:flex-row justify-between pb-6">
          <div className="pr-0 lg:pr-3 py-3">
            <Fade bottom>
              <div className=" grid grid-cols-1 md:grid-cols-8 gap-3 ">
                <div className="col-span-1 md:col-span-2 ">
                  {/* <Link to="/service-detail">
                  <img src={img1} className="h-full" alt="" />
                </Link> */}
                  <div className="portfolio-item img-zoom ct-marketing ct-media ct-branding ct-marketing ct-webdesign">
                    <div className="portfolio-item-wrap">
                      <div className="portfolio-image">
                        <Link to="/solutions/collaborative_ar-vr">
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
                        <Link to="/solutions/collaborative_ar-vr">
                          <div className="text-base md:text-2xl font-bold text-white">
                            COLLABRATIVE XR
                          </div>
                          {/* <span>Graphics</span> */}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-1 md:col-span-3">
                  <div className="portfolio-item img-zoom ct-marketing ct-media ct-branding ct-marketing ct-webdesign pb-3">
                    <div className="portfolio-item-wrap">
                      <div className="portfolio-image">
                        <Link to="/solutions/volumetric-studio">
                          <img src={img2} alt=""/>
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
                        <Link to="/solutions/volumetric-studio">
                          <div className="text-base md:text-2xl font-bold text-white uppercase">
                            Volumetric Studio
                          </div>
                          {/* <span>Graphics</span> */}
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="portfolio-item img-zoom ct-marketing ct-media ct-branding ct-marketing ct-webdesign pb-3">
                    <div className="portfolio-item-wrap">
                      <div className="portfolio-image">
                        <Link to="/solutions/capsule">
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
                        <Link to="/solutions/capsule">
                          <div className="text-base md:text-2xl font-bold text-white">
                            CAPSULE
                          </div>
                          {/* <span>Graphics</span>  */}
                        </Link>
                      </div>
                    </div>
                  </div>
                  {/* <div className="portfolio-item img-zoom ct-marketing ct-media ct-branding ct-marketing ct-webdesign pb-0 md:pb-3">
                    <div className="portfolio-item-wrap">
                      <div className="portfolio-image">
                        <Link to="/solutions/metaverse">
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
                        <Link to="/solutions/metaverse">
                          <div className="text-base md:text-2xl font-bold text-white">
                            METAVERSE
                          </div>
                          <span>Graphics</span>
                        </Link>
                      </div>
                    </div>
                  </div> */}
                </div>
                <div className="col-span-1 md:col-span-3 ">
                  <div className="portfolio-item img-zoom ct-marketing ct-media ct-branding ct-marketing ct-webdesign pb-3">
                    <div className="portfolio-item-wrap">
                      <div className="portfolio-image">
                        <Link to="/solutions/multitaction">
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
                        <Link to="/solutions/multitaction">
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
                        <Link to="/solutions/vr-cave">
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
                        <Link to="/solutions/vr-cave">
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
          {/* <div className="py-3">
            <Fade top>
              <div className="grid grid-cols-5 gap-3 ">
                <div className="col-span-2">
                 
                  <div className="portfolio-item img-zoom ct-marketing ct-media ct-branding ct-marketing ct-webdesign pb-3">
                    <div className="portfolio-item-wrap">
                      <div className="portfolio-image">
                        <Link to="/solutions/capsule">
                          <img src={img4} alt="" />
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
                        <Link to="/solutions/capsule">
                          <div className="text-base md:text-2xl font-bold text-white">
                            CAPSULE
                          </div>
                          <span>Graphics</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="portfolio-item img-zoom ct-marketing ct-media ct-branding ct-marketing ct-webdesign pb-0 md:pb-3">
                    <div className="portfolio-item-wrap">
                      <div className="portfolio-image">
                        <Link to="/solutions/volumetric-studio">
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
                        <Link to="/solutions/volumetric-studio">
                          <div className="text-base md:text-2xl font-bold text-white">
                            AUGMENTED REALITY
                          </div>
                          <span>Graphics</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                
              </div>
            </Fade>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default OurServices;
