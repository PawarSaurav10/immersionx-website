import React from "react";
import img1 from "../images/06_OURWORK/WNS@2x.png";
import img2 from "../images/06_OURWORK/HCL@2x.png";
import img3 from "../images/06_OURWORK/MYNTRA@2x.png";
import img4 from "../images/06_OURWORK/TCL@2x.png";
import img5 from "../images/06_OURWORK/ACCENTURE@2x.png";
import img6 from "../images/06_OURWORK/MIND@2x.png";
import img7 from "../images/06_OURWORK/muso@2x.png";
import { Link } from "gatsby";

const OurWork = () => {
  return (
    <>
      <div
        id="slider"
        className="inspiro-slider slider-fullscreen dots-creative bg-our-work bg-no-repeat bg-cover"
      >
        <div className="slide kenburns">
          <div className="container text-left ">
            <div className="py-5">
              <div className="uppercase text-2xl md:text-5xl lg:text-8xl text-white text-left font-bold pb-0 md:pb-8 lg:pb-20 pt-4">
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
      <div className="flex p-4">
        <div className="px-2 flex-1 flex flex-col">
          <Link to="/work-detail">
            <img src={img1} className="py-2" alt=""/>
          </Link>

          <img src={img2} className="py-2" alt=""/>
          <img src={img3} className="py-2" alt=""/>
        </div>
        <div className="flex-1 px-2 flex flex-col">
          <img src={img4} className="py-2" alt=""/>
          <img src={img5} className="py-2" alt=""/>
          <img src={img6} className="py-2" alt=""/>
          <img src={img7} className="py-2" alt=""/>
        </div>
      </div>
    </>
  );
};

export default OurWork;
