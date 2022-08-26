import React from "react";
import { Fade, Slide } from "react-reveal";
import img4 from "../images/03_OURPROCESS/laptopprocess/DEPLOY.png";
import img2 from "../images/03_OURPROCESS/laptopprocess/DESIGN.png";
import img3 from "../images/03_OURPROCESS/laptopprocess/DEVELOP_.png";
import img1 from "../images/03_OURPROCESS/laptopprocess/DISCOVER.png";
import img8 from "../images/03_OURPROCESS/mobileprocess/DEPLOY.png";
import img6 from "../images/03_OURPROCESS/mobileprocess/DESIGN.png";
import img7 from "../images/03_OURPROCESS/mobileprocess/DEVELOP.png";
import img5 from "../images/03_OURPROCESS/mobileprocess/DISCOVER.png";

const ProcessNew = () => {
  return (
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
          <div className="hidden lg:block">
            <div className="flex justify-between py-52">
              <div className="relative mr-5">
                <Slide left cascade delay={1500}>
                  <img src={img1} className="" alt="img" />
                  <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 text-white text-center ">
                    <div className="flex flex-col justify-center pt-20">
                      <div className="text-3xl pb-5 uppercase text-bold">
                        DISCOVER
                      </div>
                      <div className="text-sm w-60 max-w-full mx-auto">
                        We brainstorm, ideate, research and develop concepts
                        that excite, innovate and promise to provide an
                        effective solution to the requirement at hand.
                      </div>
                    </div>
                  </div>
                </Slide>
              </div>
              <div className="relative mr-5">
                <Slide left cascade delay={1000}>
                  <img src={img2} className="" alt="img" />
                  <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 text-white text-center ">
                    <div className="flex flex-col justify-center pt-20">
                      <div className="text-3xl pb-5 uppercase text-bold">
                        DESIGN
                      </div>
                      <div className="text-sm w-64 max-w-full mx-auto">
                        Our team of designers, developers, engineers, marketers
                        and tech experts successfully execute projects that are
                        not just solution based but also a visual masterpiece.
                        {/* Our team of designers, developers, engineers, marketers
                        and tech experts successfully execute projects that are
                        a visual masterpiece. */}
                      </div>
                    </div>
                  </div>
                </Slide>
              </div>
              <div className="relative mr-5">
                <Slide left cascade delay={500}>
                  <img src={img3} className="" alt="img" />
                  <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 text-white text-center ">
                    <div className="flex flex-col justify-center pt-20">
                      <div className="text-3xl pb-5 uppercase text-bold">
                        DEVELOP
                      </div>
                      <div className="text-sm w-60 max-w-full mx-auto">
                        We strategize a plan of action, develop prototypes and
                        put together the end-product by envisioning, designing
                        and implementing.
                      </div>
                    </div>
                  </div>
                </Slide>
              </div>
              <div className="relative mr-5">
                <Slide left cascade>
                  <img src={img4} className="" alt="img" />
                  <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 text-white text-center ">
                    <div className="flex flex-col justify-center pt-20">
                      <div className="text-3xl pb-5 uppercase text-bold">
                        DEPLOY
                      </div>
                      <div className="text-sm w-64 max-w-full mx-auto">
                        After multiple levels of testing, iterations, we create
                        a purpose-built environment with the integration of
                        final content + software + interaction + hardware.
                      </div>
                    </div>
                  </div>
                </Slide>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:hidden block">
          <div className="flex flex-col items-center py-10">
            <div className="relative mb-12">
              <Slide right cascade>
                <img src={img5} className="" alt="img" />
                <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 text-white text-center ">
                  <div className="flex flex-col justify-center pt-20">
                    <div className="text-3xl pb-5 uppercase text-bold">
                      DISCOVER
                    </div>
                    <div className="text-sm w-60 max-w-full mx-auto">
                      We brainstorm, ideate, research and develop concepts that
                      excite, innovate and promise to provide an effective
                      solution to the requirement at hand.
                    </div>
                  </div>
                </div>
              </Slide>
            </div>
            <div className="relative mb-12">
              <Slide left cascade delay={500}>
                <img src={img6} className="" alt="img" />
                <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 text-white text-center ">
                  <div className="flex flex-col justify-center pt-20">
                    <div className="text-3xl pb-5 uppercase text-bold">
                      DESIGN
                    </div>
                    <div className="text-sm w-64 max-w-full mx-auto">
                      Our team of designers, developers, engineers, marketers
                      and tech experts successfully execute projects that are a
                      visual masterpiece.
                    </div>
                  </div>
                </div>
              </Slide>
            </div>
            <div className="relative mb-12">
              <Slide left cascade delay={1000}>
                <img src={img7} className="" alt="img" />
                <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 text-white text-center ">
                  <div className="flex flex-col justify-center pt-20">
                    <div className="text-3xl pb-5 uppercase text-bold">
                      DEVELOP
                    </div>
                    <div className="text-sm w-60 max-w-full mx-auto">
                      We strategize a plan of action, develop prototypes and put
                      together the end-product by envisioning, designing and
                      implementing.
                    </div>
                  </div>
                </div>
              </Slide>
            </div>
            <div className="relative mb-12">
              <Slide left cascade delay={1500}>
                <img src={img8} className="" alt="img" />

                <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 text-white text-center ">
                  <div className="flex flex-col justify-center pt-20">
                    <div className="text-3xl pb-5 uppercase text-bold">
                      DEPLOY
                    </div>
                    <div className="text-sm w-56 max-w-full mx-auto">
                      After multiple levels of testing, iterations, we create a
                      purpose-built environment with the integration of final
                      content + software + interaction + hardware.
                    </div>
                  </div>
                </div>
              </Slide>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessNew;
