import React from "react";
import { Fade } from "react-reveal";

const AboutUs = () => {
  return (
    <div id="about-us" className=" bg-ABOUTUS bg-fixed bg-no-repeat bg-cover lg:h-screen">
      <div className="container flex flex-col justify-between text-white pb-8 pt-5 pl-0 md:pl-16">
        <div className="">
          <Fade bottom>
            <div className="uppercase font-bold text-2xl md:text-5xl xl:text-7xl pt-8 lg:pt-48 text-left text-white pb-2 px-3">
              ABOUT US
            </div>
          </Fade>
        </div>
        <div>
          <Fade right cascade>
            <div className="text-white text-left max-w-3xl text-base xl:text-lg pt-14 lg:pt-20 pb-4 lg:pb-8 px-3">
              <div>
                The pursuit of excellence in experiential solutions is a
                never-ending journev that progresses with every new experience
                that we acquire. Collocating the chapters of knowledge, wisdom
                and failures, to bind the book titled The Art of Immersion' we
                created a self-sustained world of technologists, artists,
                economists and leaders.
              </div>
              <div className=" pt-7">
                At ImmersionX, Art meets Technology to drive Innovation.
                <div>
                  Whether its VR Collabrations, Digital assets like the
                  metaverse, motion captures, photogrammetry, Holographic Live
                  Streams, experince centers, innovation hubs, museums, retail,
                  and office environments - We are receptive to every brief and
                  are drawn to any challenge. We are eager to collaborate with
                  you to create our next immersive masterpiece, which helps us
                  pursue our goal to be the best experiential marketing agency
                  in India
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
