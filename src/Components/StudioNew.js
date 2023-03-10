// import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
// import ReactPlayer from "react-player";
import { Fade } from "react-reveal";
import img from "../images/04_STUDIO/studio-thumbnail.jpg";
// import Video from "./Video";
import compressedvideo from "../images/04_STUDIO/compressed4mb.mp4";
const StudioNew = () => {
  return (
    <div className="bg-fixed bg-our-studio bg-no-repeat bg-cover " id="studio">
      <div className="container">
        <div className=" flex flex-col justify-between lg:flex-row py-8 lg:py-40">
          <div className="flex flex-col justify-center text-white pb-8 pt-5">
            <div>
              <Fade bottom>
                <div className="uppercase font-bold text-2xl md:text-5xl xl:text-7xl text-left text-white pb-4 lg:pb-8 xl:pb-12 px-3">
                  Studio
                </div>
              </Fade>
            </div>
            <div className="flex lg:justify-center lg:items-center">
              <Fade right cascade>
                <div className="text-white text-left max-w-md lg:max-w-sm text-sm md:text-lg px-3">
                  <div>
                    The laboratory where we invent, innovate, create and
                    destroy. It's a showcase of our triumphs and glimpse into
                    what the future can be. A paradise for every creator,
                    artists and innovator who would love to write a new chapter
                    in the symphony of art and technology.
                  </div>
                </div>
              </Fade>
            </div>
          </div>
          <div className="flex flex-col ">
            <div className="">
              <Fade bottom>
                <div className="flex h-500 desktop:h-700 w-full lg:w-800 desktop:w-1000">
                <video width="750" height="500" controls poster={img}>
                {/* <source src={compressedvideo} type="video/mp4" /> */}
                  <source src={compressedvideo} type="video/mp4" />
                </video>
                  {/* <ReactPlayer
                    url={"https://www.youtube.com/watch?v=f_0_IljV_wU"}
                    width= "100%"
                    height="100%"
                  /> */}
                  {/* <Video
                    videoSrcURL="https://www.youtube.com/watch?v=f_0_IljV_wU"
                    videoTitle="Official Music Video on YouTube"
                  /> */}
                </div>
              </Fade>
            </div>

            {/* <div className="pt-10 pb-6 lg:pb-0">
              <div className="flex justify-center text-white font-bold text-base">
                Explore
                <span className="ml-2">
                  <FontAwesomeIcon icon={faArrowAltCircleRight} />
                </span>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudioNew;
