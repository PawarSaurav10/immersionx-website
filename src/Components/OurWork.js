import React from "react";
import img1 from "../images/06_OURWORK/WNS@2x.png";
import img2 from "../images/06_OURWORK/HCL@2x.png";
import img3 from "../images/06_OURWORK/im_22x.png";
import img4 from "../images/06_OURWORK/TCL@2x.png";
import img5 from "../images/06_OURWORK/ACCENTURE@2x.png";
import img6 from "../images/06_OURWORK/MIND@2x.png";
import img7 from "../images/06_OURWORK/muso@2x.png";
// import Groheimg2 from "../images/09_pages/GROHE/im_2@2x.png";
import { Link } from "gatsby";
import { Fade } from "react-reveal";

const OurWork = ({ location }) => {
  console.log(location);
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
                    <Link to="/work/wns">
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
                    <Link to="/work/wns">
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
                    <Link to="/work/kanakia">
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
                    <Link to="/work/kanakia">
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
                    <Link to="/work/grohe">
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
                    <Link to="/work/grohe">
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
                    <Link to="/work/tlc">
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
                    <Link to="/work/tlc">
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
                    <Link to="/work/audi">
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
                    <Link to="/work/audi">
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
                    <Link to="/work/siemens">
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
                    <Link to="/work/siemens">
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
                    <Link to="/work/legrand">
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
                    <Link to="/work/legrand">
                      <div className="text-base md:text-3xl font-bold text-white">
                        LEGRAND
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
