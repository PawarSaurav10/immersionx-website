import React from "react";
import { Fade } from "react-reveal";
// import dassaualtSystem from "../images/05_OURPARTNERS/DassaultSystèmeslogo@2x.png";
// import multitaction from "../images/05_OURPARTNERS/multitactionlogo@2x.png";
// import arhtMedia from "../images/05_OURPARTNERS/Arhtmedia@2x.png";
// import crishtie from "../images/05_OURPARTNERS/christielogo@2x.png";
// import varjo from "../images/05_OURPARTNERS/varjologo@2x.png";
// import displax from "../images/05_OURPARTNERS/Displaxlogo@2x.png";
// import worldviz from "../images/05_OURPARTNERS/Worldvizlogo@2x.png";
// import art from "../images/05_OURPARTNERS/Artlogo@2x.png";
import img from "../images/05_OURPARTNERS/PARTNERSBGmin.png";

const Partners = () => {
  // const imageData = [
  //   { img: dassaualtSystem },
  //   { img: multitaction },
  //   { img: arhtMedia },
  //   { img: crishtie },
  //   { img: varjo },
  //   { img: displax },
  //   { img: worldviz },
  //   { img: art },
  // ];
  return (
    <>
      <div className="hidden lg:block bg-black">
        <div className="grid grid-cols-3">
          <div className="container col-span-1">
            <div className="flex flex-col justify-start">
              <div className="flex justify-between text-white pt-8 lg:pt-40 pb-12 lg:pb-0">
                <Fade bottom>
                  <div className="uppercase font-bold text-2xl md:text-5xl xl:text-7xl text-left">
                    Partners
                  </div>
                </Fade>
              </div>
              <div className="pt-0 lg:pt-32">
                <Fade left>
                  <div className="text-white text-left max-w-sm text-base xl:text-lg pb-6 lg:pb-0">
                    <div className="pb-10">
                      An exhibition of our technologies, an album of our
                      solutions, an experience center is a theatricals act of
                      characters in the form of installations that play their
                      part in narrating a story. A brand story. Space Design +
                      Content + Technology
                    </div>
                    <div>
                      We are elated to have partners across the globe that
                      provide expertise to help us deliver our end goal.
                    </div>
                  </div>
                </Fade>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <img src={img} className="ml-auto"/>
          </div>
        </div>
      </div>
      <div className="bg-black bg-fixed block lg:hidden">
        <div className="flex flex-col justify-between">
          <div className="container">
            <div className="flex flex-col justify-start px-3">
              <div className="flex justify-between text-white pt-8 lg:pt-52 pb-12 lg:pb-0">
                <Fade bottom>
                  <div className="uppercase font-bold text-2xl md:text-5xl xl:text-7xl text-left">
                    Partners
                  </div>
                </Fade>
              </div>
              <div className="pt-0 lg:pt-32">
                <Fade left>
                  <div className="text-white text-left max-w-xl text-base xl:text-lg pb-6 lg:pb-0">
                    <div className="pb-10">
                      An exhibition of our technologies, an album of our
                      solutions, an experience center is a theatricals act of
                      characters in the form of installations that play their
                      part in narrating a story. A brand story. Space Design +
                      Content + Technology
                    </div>
                    <div>
                      We are elated to have partners across the globe that
                      provide expertise to help us deliver our end goal.
                    </div>
                  </div>
                </Fade>
              </div>
            </div>
            <div className="px-3">
              <img src={img} alt="img"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Partners;
