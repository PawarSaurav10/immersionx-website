import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Fade } from "react-reveal";
// import img from "../images/04_STUDIO/videos@2x.png";
import Video from "./Video";

const Studio = () => {
  return (
    <div className="bg-studio bg-no-repeat bg-cover">
      <div className="container pt-8 lg:pt-40 pb-10">
        <div className="flex flex-col lg:flex-row justify-between text-white pb-8 pt-5">
          <div>
            <Fade bottom big cascade>
              <div className="uppercase font-bold text-2xl md:text-5xl text-left pb-5 lg:pb-0">
                Studio
              </div>
            </Fade>
          </div>
          <div>
            <Fade right>
              <div className="text-white text-left lg:text-right max-w-2xl text-xs md:text-base">
                <div>
                  An exhibition of our technologies, an album of our solutions,
                  an experience center is a theatricals act of characters in the
                  form of installations that play their part in narrating a
                  story. A brand story. Space Design + Content + Technology
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
              />
            </div>
          </Fade>
        </div>

        <div className="pt-6 pb-6 lg:pb-0">
          <div className="flex justify-center text-white font-bold text-base">
            Explore
            <span className="ml-2">
              <FontAwesomeIcon icon={faArrowAltCircleRight} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Studio;
