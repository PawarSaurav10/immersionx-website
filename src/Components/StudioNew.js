// import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Fade } from "react-reveal";
// import img from "../images/04_STUDIO/videos@2x.png";
import Video from "./Video";
const StudioNew = () => {
  return (
    <div className="bg-fixed bg-our-studio bg-no-repeat bg-cover " id="studio">
      <div className="container">
        <div className=" flex flex-col justify-between lg:flex-row py-8 lg:py-40">
          <div className="flex flex-col text-white pb-8 pt-5">
            <div>
              <Fade bottom>
                <div className="uppercase font-bold text-2xl md:text-7xl text-left text-white pb-4 lg:pb-8 px-3">
                  Studio
                </div>
              </Fade>
            </div>
            <div className="flex-1 flex justify-center items-center">
              <Fade right cascade>
                <div className="text-white text-left max-w-2xl text-base md:text-lg px-3">
                  <div>
                    An exhibition of our technologies, an album of our
                    solutions, an experience center is a theatricals act of
                    characters in the form of installations that play their part
                    in narrating a story. A brand story. Space Design + Content
                    + Technology
                  </div>
                </div>
              </Fade>
            </div>
          </div>
          <div>
            <Fade bottom>
              <div className="flex justify-center">
                <Video
                  videoSrcURL="https://www.youtube.com/embed/lMhr86ZaiR0"
                  videoTitle="Official Music Video on YouTube"
                  className="w-full"
                />
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudioNew;
