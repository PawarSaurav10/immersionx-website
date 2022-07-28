import React from "react";
import { Fade } from "react-reveal";
import img from "../images/03_OURPROCESS/icon@2x.png";

const OurProcess = () => {
  return (
    <div className="bg-fixed bg-our-process bg-no-repeat bg-cover lg:h-screen">
      <div className="container">
        <div>
          <Fade bottom>
            <div className="uppercase font-bold text-2xl md:text-7xl pt-5 lg:pt-40 text-left text-white pb-4">
              Process
            </div>
          </Fade>
        </div>
        </div>

        <div className="px-40" style={{ marginTop: 126 }}>
          <img src={img} alt="" />
        </div>
        <div className="pt-10 px-28" >
          <div className="grid grid-cols-6 gap-4">
            <div className="text-white text-center px-2">
              <div className="text-2xl pb-6 uppercase text-bold">Brainstrom</div>
              <div className="text-base w-48 max-w-full mx-auto">Lorem ipsum dolor sit amet, consectetur adpiscing elit.</div>
            </div>
            <div className="text-white text-center px-2">
              <div className="text-2xl pb-6 uppercase text-bold">Inspiration</div>
              <div className="text-base w-48 max-w-full mx-auto">Lorem ipsum dolor sit amet, consectetur adpiscing elit.</div>
            </div>
            <div className="text-white text-center px-2">
              <div className="text-2xl pb-6 uppercase text-bold">Idea</div>
              <div className="text-base w-48 max-w-full mx-auto">Lorem ipsum dolor sit amet, consectetur adpiscing elit.</div>
            </div>
            <div className="text-white text-center px-2">
              <div className="text-2xl pb-6 uppercase text-bold">design</div>
              <div className="text-base w-48 max-w-full mx-auto">Lorem ipsum dolor sit amet, consectetur adpiscing elit.</div>
            </div>
            <div className="text-white text-center px-2">
              <div className="text-2xl pb-6 uppercase text-bold">development</div>
              <div className="text-base w-48 max-w-full mx-auto">Lorem ipsum dolor sit amet, consectetur adpiscing elit.</div>
            </div>
            <div className="text-white text-center px-2">
              <div className="text-2xl pb-6 uppercase text-bold">Testing</div>
              <div className="text-base w-48 max-w-full mx-auto">Lorem ipsum dolor sit amet, consectetur adpiscing elit.</div>
            </div>
          </div>
        </div>
      </div>
    // </div>
  );
};

export default OurProcess;
