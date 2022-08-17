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
                {/* <Slide left cascade > */}
                <div className=" pt-40 flex flex-1 flex-col lg:flex-row justify-center">
                  <div className="flex flex-col items-center text-white text-center">
                    <Slide left cascade delay={1500}>
                      <div className="pb-8">
                        <img src={img1} alt="" className="" />
                      </div>
                      <div className="pl-7 ml-6">
                        <img src={img5} alt="" />
                      </div>
                      {/* <div className=""> */}
                      <div>
                        <div className="text-2xl pb-6 uppercase text-bold pl-7 ml-6 mt-3">
                          discover
                        </div>
                      </div>

                      <div className="pl-7 ml-6">
                        <div className="text-sm w-56 max-w-full mx-auto">
                          We brainstorm, ideate, research and develop concepts
                          that excite, innovate and promise to provide an
                          effective solution to the requirement at hand.
                        </div>
                      </div>

                      {/* </div> */}
                    </Slide>
                  </div>

                  <div className="flex flex-col items-center text-white text-center">
                    <Slide left cascade delay={1000}>
                      <div className="pb-8">
                        <img src={img2} alt="" className="-ml-1 mt-0.5 " />
                      </div>
                      <div className="">
                        <img src={img5} alt="" />
                      </div>
                      {/* <div className=""> */}
                      <div>
                        <div className="text-2xl pb-6 uppercase text-bold px-2 mt-3">
                          design
                        </div>
                      </div>
                      <div>
                        <div className="text-sm w-56 max-w-full mx-auto px-2">
                          Our team of designers, developers, engineers,
                          marketers and tech experts successfully execute
                          projects that are not just solution based but also a
                          visual masterpiece.
                        </div>
                      </div>

                      {/* </div> */}
                    </Slide>
                  </div>
                  <div className="flex flex-col items-center text-white text-center">
                    <Slide left cascade delay={500}>
                      <div className="pb-8">
                        <img src={img3} alt="" className="-ml-2 mt-1" />
                      </div>
                      <div className="">
                        <img src={img5} alt="" />
                      </div>
                      {/* <div className=" "> */}
                      <div>
                        <div className="text-2xl pb-6 uppercase text-bold px-2 mt-3">
                          develop
                        </div>
                      </div>
                      <div>
                        <div className="text-sm w-56 max-w-full mx-auto px-2">
                          We strategize a plan of action, develop prototypes and
                          put together the end-product by envisioning, designing
                          and implementing.
                        </div>
                      </div>

                      {/* </div> */}
                    </Slide>
                  </div>
                  <div className="flex flex-col items-center text-white text-center">
                    <Slide left cascade>
                      <div className="pb-8">
                        <img src={img4} alt="" className="-ml-3 mt-1" />
                      </div>
                      <div className="pr-7 mr-6">
                        <img src={img5} alt="" />
                      </div>
                      {/* <div className=" "> */}
                      <div>
                        <div className="text-2xl pb-6 uppercase text-bold pr-7 mr-6 mt-3">
                          deploy
                        </div>
                      </div>
                      <div className="pr-7 mr-6">
                        <div className="text-sm w-56 max-w-full mx-auto">
                          After multiple levels of testing, iterations, we
                          create a purpose-built environment with the
                          integration of final content + software + interaction
                          + hardware.
                        </div>
                      </div>

                      {/* </div> */}
                    </Slide>
                  </div>
                </div>
                {/* </Slide> */}
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
          <div className="flex flex-col pb-8 pt-5 px-3">
            <div className="">
              <Fade bottom>
                <div className="uppercase font-bold text-2xl md:text-5xl xl:text-7xl pt-5 lg:pt-40 text-left text-white pb-4">
                  Process
                </div>
              </Fade>
            </div>
            <div className="flex flex-col items-center pb-5 lg:pb-20">
              {/* <Slide left cascade> */}
              <div className=" pt-10 flex flex-1 flex-col justify-center">
                <div className="flex flex-row text-white text-center">
                  <Slide left cascade>
                    <div className="">
                      <img src={img6} alt="" className="" />
                    </div>
                    <div className=" place-self-center mt-7 pl-2">
                      <img src={line} alt="" />
                    </div>
                    <div className="flex flex-col justify-center pl-4">
                      <div className="text-2xl pb-3 uppercase text-bold">
                        DISCOVER
                      </div>
                      <div className="text-sm w-48 max-w-full mx-auto">
                        We brainstorm, ideate, research and develop
                        concepts that excite, innovate and promise to provide an
                        effective solution to the requirement at hand.
                      </div>
                    </div>
                  </Slide>
                </div>

                <div className="flex flex-row text-white text-center">
                  <Slide left cascade delay={500}>
                    <div className="">
                      <img src={img7} alt="" className="-mt-5" />
                    </div>
                    <div className=" place-self-center mb-7 pl-2">
                      <img src={line} alt="" />
                    </div>

                    <div className=" flex flex-col justify-center pl-4">
                      <div className="text-2xl pb-3 uppercase text-bold">
                        DESIGN
                      </div>
                      <div className="text-sm w-48 max-w-full mx-auto ">
                        Our team of designers, developers, engineers, marketers
                        and tech experts successfully execute projects that are
                        not just solution based but also a visual masterpiece.
                      </div>
                    </div>
                  </Slide>
                </div>

                <div className="flex flex-row text-white text-center">
                  <Slide left cascade delay={1000}>
                    <div className="">
                      <img src={img8} alt="" className="-mt-9" />
                    </div>
                    <div className=" place-self-center mb-10   pl-2">
                      <img src={line} alt="" />
                    </div>
                    <div className="flex flex-col justify-center pl-4">
                      <div className="text-2xl pb-3 uppercase text-bold">
                        DEVELOP
                      </div>
                      <div className="text-sm w-48 max-w-full mx-auto">
                        We strategize a plan of action, develop prototypes and 
                        put together the end-product by envisioning, designing
                        and implementing.
                      </div>
                    </div>
                  </Slide>
                </div>
                <div className="flex flex-row text-white text-center">
                  <Slide left cascade delay={1500}>
                    <div className="">
                      <img src={img9} alt="" className="-mt-6" />
                    </div>
                    <div className=" place-self-center mb-14 pl-2">
                      <img src={line} alt="" />
                    </div>
                    <div className="flex flex-col justify-center pl-4">
                      <div className="text-2xl pb-3 uppercase text-bold">
                        DEPLOY
                      </div>
                      <div className="text-sm w-48 max-w-full mx-auto">
                        After multiple levels of testing, iterations, we create
                        a purpose-built environment with the integration of
                        final content + software + interaction + hardware.
                      </div>
                    </div>
                  </Slide>
                </div>
              </div>
              {/* </Slide> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurProcess;
