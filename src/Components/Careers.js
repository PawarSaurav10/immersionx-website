import React from "react";
import { Fade } from "react-reveal";

const Careers = () => {
  return (
    <div
      id="about-us"
      className=" bg-Careers bg-fixed bg-no-repeat bg-cover"
    >
      <div className="container flex flex-col justify-between text-white pb-10 lg:pb-40 pt-5">
        <div className="">
          <Fade bottom>
            <div className="uppercase font-bold text-2xl md:text-5xl xl:text-7xl pt-8 lg:pt-48 text-left text-white pb-2 px-3">
              Careers
            </div>
          </Fade>
        </div>
        <div>
          <Fade right cascade>
            <div className="text-white text-left max-w-3xl text-base xl:text-lg pt-14 lg:pt-20 pb-4 lg:pb-8 px-3">
              <div className="pb-8 max-w-xl">
                Every day, we strive to empower our people by entrusting them with responsibilites to work as a team.
              </div>
              <div className="max-w-sm pb-8">
                We are always in search of same spirit people who have a passion for creativity and doing things the different way! 
              </div>
              <div className="max-w-lg pb-8">
                Please, send us an email with your resume, we will contact you shortly. 
              </div>
              <div>
                hr@immersionx.io 
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Careers;
