import React from "react";
import { Fade } from "react-reveal";
import img from "../images/03_OURPROCESS/icon@2x.png";

const OurProcess = () => {
  return (
    <div className="bg-our-process bg-no-repeat bg-cover h-screen">
      <div className="container">
        <Fade bottom big cascade>
          <div className="uppercase font-bold text-2xl md:text-5xl pt-5 lg:pt-40 text-left text-white pb-4">
            Our Process
          </div>
        </Fade>
        <div className="" style={{ marginTop: 40 }}>
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default OurProcess;
