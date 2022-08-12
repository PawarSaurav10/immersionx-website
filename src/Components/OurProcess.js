import React from "react";
import { Fade, Slide } from "react-reveal";
// import img from "../images/03_OURPROCESS/icon@2x.png";
import img1 from "../images/03_OURPROCESS/001.png";
import img2 from "../images/03_OURPROCESS/002.png";
// import img2 from "../images/03_OURPROCESS/002-copy.png";
import img3 from "../images/03_OURPROCESS/003.png";
import img4 from "../images/03_OURPROCESS/004.png";
import img5 from "../images/03_OURPROCESS/layer.png";
import img6 from "../images/03_OURPROCESS/0001.png";
import img7 from "../images/03_OURPROCESS/0002.png";
import img8 from "../images/03_OURPROCESS/0003.png";
import img9 from "../images/03_OURPROCESS/0004.png";
import line from "../images/03_OURPROCESS/line.png";

const OurProcess = () => {
  return (
    <>
      <div className="hidden lg:block">
        <div className=" bg-fixed bg-our-process bg-no-repeat bg-cover">
          <div className="container">
            <div className="flex justify-center flex-col pb-8 pt-5 px-3">
              <div className="">
                <Fade bottom>
                  <div className="uppercase font-bold text-2xl md:text-5xl xl:text-7xl pt-5 lg:pt-40 text-left text-white pb-4">
                    Process
                  </div>
                </Fade>
              </div>
              <div className="pb-5 lg:pb-20">
                <Slide left cascade>
                  <div className=" pt-40 flex flex-1 flex-col lg:flex-row justify-center">
                    <div className="flex flex-col items-center">
                      <div className="pb-8">
                        <img src={img1} alt="" className="" />
                      </div>
                      <div className="pl-7 ml-6">
                        <img src={img5} alt="" />
                      </div>
                      <div className="text-white text-center pl-7 ml-6 mt-3">
                        <div className="text-2xl pb-6 uppercase text-bold">
                          discover
                        </div>
                        <div className="text-base w-48 max-w-full mx-auto">
                          Lorem ipsum dolor sit amet, consectetur adpiscing
                          elit.
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="   pb-8">
                        <img src={img2} alt="" className="-ml-1 mt-0.5 " />
                      </div>
                      <div className="">
                        <img src={img5} alt="" />
                      </div>
                      <div className="text-white text-center px-2  mt-3">
                        <div className="text-2xl pb-6 uppercase text-bold">
                          design
                        </div>
                        <div className="text-base w-48 max-w-full mx-auto">
                          Lorem ipsum dolor sit amet, consectetur adpiscing
                          elit.
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="   pb-8">
                        <img src={img3} alt="" className="-ml-2 mt-1" />
                      </div>
                      <div className="">
                        <img src={img5} alt="" />
                      </div>
                      <div className="text-white text-center px-2 mt-3">
                        <div className="text-2xl pb-6 uppercase text-bold">
                          develop
                        </div>
                        <div className="text-base w-48 max-w-full mx-auto">
                          Lorem ipsum dolor sit amet, consectetur adpiscing
                          elit.
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="   pb-8">
                        <img src={img4} alt="" className="-ml-3 mt-1" />
                      </div>
                      <div className="pr-7 mr-6">
                        <img src={img5} alt="" />
                      </div>
                      <div className="text-white text-center pr-7 mr-6 mt-3">
                        <div className="text-2xl pb-6 uppercase text-bold">
                          deploy
                        </div>
                        <div className="text-base w-48 max-w-full mx-auto">
                          Lorem ipsum dolor sit amet, consectetur adpiscing
                          elit.
                        </div>
                      </div>
                    </div>
                  </div>
                </Slide>
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
          </div>
        </div>
      </div>
      <div className="lg:hidden bg-fixed bg-OURPROCESSMOBILE bg-no-repeat bg-cover">
        <div className="container">
          <div className="flex items-center flex-col pb-8 pt-5 px-3">
            <div className="">
              <Fade bottom>
                <div className="uppercase font-bold text-2xl md:text-5xl xl:text-7xl pt-5 lg:pt-40 text-left text-white pb-4">
                  Process
                </div>
              </Fade>
            </div>
            <div className="pb-5 lg:pb-20">
              <Slide left cascade>
                <div className=" pt-40 flex flex-1 flex-col justify-center">
                  <div className="flex flex-row">
                    <div className="">
                      <img src={img6} alt="" className="" />
                    </div>
                    <div className=" place-self-center pl-2">
                      <img src={line} alt="" />
                    </div>
                    <div className="text-white text-center self-center pl-4">
                      <div className="text-2xl pb-6 uppercase text-bold">
                        discover
                      </div>
                      <div className="text-base w-48 max-w-full mx-auto">
                        Lorem ipsum dolor sit amet, consectetur adpiscing elit.
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-row">
                    <div className="">
                      <img src={img7} alt="" className="-mt-6" />
                    </div>
                    <div className=" place-self-center pl-2">
                      <img src={line} alt="" />
                    </div>
                    <div className="text-white text-center self-center pl-4">
                      <div className="text-2xl pb-6 uppercase text-bold">
                        discover
                      </div>
                      <div className="text-base w-48 max-w-full mx-auto">
                        Lorem ipsum dolor sit amet, consectetur adpiscing elit.
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-row">
                    <div className="">
                      <img src={img8} alt="" className="-mt-11" />
                    </div>
                    <div className=" place-self-center pl-2">
                      <img src={line} alt="" />
                    </div>
                    <div className="text-white text-center self-center pl-4">
                      <div className="text-2xl pb-6 uppercase text-bold">
                        discover
                      </div>
                      <div className="text-base w-48 max-w-full mx-auto">
                        Lorem ipsum dolor sit amet, consectetur adpiscing elit.
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row">
                    <div className="">
                      <img src={img9} alt="" className=" -mt-6" />
                    </div>
                    <div className=" place-self-center pl-2">
                      <img src={line} alt="" />
                    </div>
                    <div className="text-white text-center self-center pl-4">
                      <div className="text-2xl pb-6 uppercase text-bold">
                        discover
                      </div>
                      <div className="text-base w-48 max-w-full mx-auto">
                        Lorem ipsum dolor sit amet, consectetur adpiscing elit.
                      </div>
                    </div>
                  </div>
                </div>
              </Slide>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurProcess;
