import React from "react";
import { Fade } from "react-reveal";
import img from "../images/03_OURPROCESS/icon@2x.png";
import img1 from "../images/03_OURPROCESS/001.png";
import img2 from "../images/03_OURPROCESS/002.png";
import img3 from "../images/03_OURPROCESS/003.png";
import img4 from "../images/03_OURPROCESS/004.png";
import img5 from "../images/03_OURPROCESS/layer.png";

const OurProcess = () => {
  return (
    <div className="bg-fixed bg-our-process bg-no-repeat bg-cover lg:h-screen">
      <div className="container">
        <div>
          <Fade bottom>
            <div className="uppercase font-bold text-2xl md:text-5xl xl:text-7xl pt-5 lg:pt-40 text-left text-white pb-4">
              Process
            </div>
          </Fade>
        </div>
      </div>
      <div className="flex flex-row justify-center">
      <div className="flex flex-col items-center">
        <div className="   pb-8">
          <img src={img1} alt="" className=" h-36 w-60" />
        </div>
        <div className=" ml-6">
        <img src={img5} alt="" />
        </div>
        <div className="text-white text-center px-2 mt-3">
            <div className="text-2xl pb-6 uppercase text-bold">discover</div>
            <div className="text-base w-48 max-w-full mx-auto">
              Lorem ipsum dolor sit amet, consectetur adpiscing elit.
            </div>
          </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="   pb-8">
          <img src={img2} alt="" className=" h-36 w-60"/>
        </div>
        <div className="">
        <img src={img5} alt="" />
        </div>
        <div className="text-white text-center px-2  mt-3">
            <div className="text-2xl pb-6 uppercase text-bold">design</div>
            <div className="text-base w-48 max-w-full mx-auto">
              Lorem ipsum dolor sit amet, consectetur adpiscing elit.
            </div>
          </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="   pb-8">
          <img src={img3} alt="" className=" h-36 w-60"/>
        </div>
        <div className="">
        <img src={img5} alt="" />
        </div>
        <div className="text-white text-center px-2 mt-3">
            <div className="text-2xl pb-6 uppercase text-bold">develop</div>
            <div className="text-base w-48 max-w-full mx-auto">
              Lorem ipsum dolor sit amet, consectetur adpiscing elit.
            </div>
          </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="   pb-8">
          <img src={img4} alt="" className=" h-36 w-60"/>
        </div>
        <div className="">
        <img src={img5} alt="" />
        </div>
        <div className="text-white text-center px-2 mt-3">
            <div className="text-2xl pb-6 uppercase text-bold">deploy</div>
            <div className="text-base w-48 max-w-full mx-auto">
              Lorem ipsum dolor sit amet, consectetur adpiscing elit.
            </div>
          </div>
      </div>
      </div>

      {/* <div className="px-40" style={{ marginTop: 126 }}>
          <img src={img} alt="" />
        </div> */}
      {/* <div className="pt-10 px-28">
        <div className="grid grid-cols-6 gap-4">
          <div className="text-white text-center px-2">
            <div className="text-2xl pb-6 uppercase text-bold">discover</div>
            <div className="text-base w-48 max-w-full mx-auto">
              Lorem ipsum dolor sit amet, consectetur adpiscing elit.
            </div>
          </div>
          <div className="text-white text-center px-2">
            <div className="text-2xl pb-6 uppercase text-bold">Inspiration</div>
            <div className="text-base w-48 max-w-full mx-auto">
              Lorem ipsum dolor sit amet, consectetur adpiscing elit.
            </div>
          </div>
          <div className="text-white text-center px-2">
            <div className="text-2xl pb-6 uppercase text-bold">Idea</div>
            <div className="text-base w-48 max-w-full mx-auto">
              Lorem ipsum dolor sit amet, consectetur adpiscing elit.
            </div>
          </div>
          <div className="text-white text-center px-2">
            <div className="text-2xl pb-6 uppercase text-bold">design</div>
            <div className="text-base w-48 max-w-full mx-auto">
              Lorem ipsum dolor sit amet, consectetur adpiscing elit.
            </div>
          </div>
          <div className="text-white text-center px-2">
            <div className="text-2xl pb-6 uppercase text-bold">development</div>
            <div className="text-base w-48 max-w-full mx-auto">
              Lorem ipsum dolor sit amet, consectetur adpiscing elit.
            </div>
          </div>
          <div className="text-white text-center px-2">
            <div className="text-2xl pb-6 uppercase text-bold">Testing</div>
            <div className="text-base w-48 max-w-full mx-auto">
              Lorem ipsum dolor sit amet, consectetur adpiscing elit.
            </div>
          </div>
        </div>
      </div> */}
    </div>
    // </div>
  );
};

export default OurProcess;
