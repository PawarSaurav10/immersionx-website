import React from "react";
import img from "../images/05_OURPARTNERS/OURPARTNERSim@2x.png";
import dassaualtSystem from "../images/05_OURPARTNERS/DassaultSystèmeslogo@2x.png";
import multitaction from "../images/05_OURPARTNERS/multitactionlogo@2x.png";
import arhtMedia from "../images/05_OURPARTNERS/Arhtmedia@2x.png";
import crishtie from "../images/05_OURPARTNERS/christielogo@2x.png";
import varjo from "../images/05_OURPARTNERS/varjologo@2x.png";
import displax from "../images/05_OURPARTNERS/Displaxlogo@2x.png";
import worldviz from "../images/05_OURPARTNERS/Worldvizlogo@2x.png";
import art from "../images/05_OURPARTNERS/Artlogo@2x.png";
import { Fade } from "react-reveal";

const OurPartners = () => {
  const imageData = [
    { img: dassaualtSystem },
    { img: multitaction },
    { img: arhtMedia },
    { img: crishtie },
    { img: varjo },
    { img: displax },
    { img: worldviz },
    { img: art },
  ];
  return (
    <div className=" bg-our-partners bg-no-repeat bg-cover h-screen">
      <div className="container pt-5 lg:pt-44">
        <div className="">
          <div className="flex justify-between text-white pt-8 lg:pt-0 pb-12 lg:pb-0">
            <Fade bottom>
              <div className="uppercase font-bold text-2xl md:text-7xl text-left">
                Our Partners
              </div>
            </Fade>

          </div>
          <div className="flex flex-col lg:flex-row justify-between pt-0 lg:pt-52 2xl:pt-64">
            <Fade left>
              <div className="text-white text-left max-w-2xl flex items-center text-base lg:text-lg pb-6 lg:pb-0">
                <div>
                  An exhibition of our technologies, an album of our solutions, an
                  experience center is a theatricals act of characters in the form
                  of installations that play their part in narrating a story. A
                  brand story. Space Design + Content + Technology
                </div>
              </div>
            </Fade>

            <div className="w-full pb-6 lg:pb-0">
              <img src={img} className="h-60 md:h-96 mx-auto lg:mx-0 lg:ml-auto" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="py-4 px-4 bg-black">
        <Fade left>
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 xl:grid-cols-8 place-items-center ">
            {imageData &&
              imageData.map((aa,idx) => {
                return <img src={aa.img} key={idx} className="px-4 py-4" alt="" />;
              })}
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default OurPartners;
