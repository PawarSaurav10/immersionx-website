// import { graphql, useStaticQuery } from "gatsby";
// import BackgroundImage from "gatsby-background-image";
// import video1 from "../images/Untitled.mp4";
import video1 from "../images/30secondsvideo.mp4";
// import video1 from "../images/ImmersionxShowreel_v02.mp4";
// import video1 from "../images/Originalvideocompressed.mp4";
import React from "react";
import { Fade } from "react-reveal";

const BannerImage = () => {
  // const data = useStaticQuery(
  //   graphql`
  //     query {
  //       desktop: file(relativePath: { eq: "01_screensaver/bg@2x.png" }) {
  //         childImageSharp {
  //           fluid(quality: 100) {
  //             ...GatsbyImageSharpFluid_withWebp
  //           }
  //         }
  //       }
  //     }
  //   `
  // );

  // const imageData = data.desktop.childImageSharp.fluid;
  return (
    // <BackgroundImage
    //   Tag="section"
    //   className={"inspiro-slider slider-fullscreen dots-creative bg-no-repeat bg-cover"}
    //   fluid={imageData}
    //   backgroundColor={`#040e18`}
    // >
    //   <h2>gatsby-background-image</h2>
    // </BackgroundImage>
    <>
      <div className="relative">
        <div class="bg-fixed relative flex items-center justify-center h-screen overflow-hidden">
          {/* <div class=" p-5 text-2xl text-white bg-purple-300 bg-opacity-50 rounded-xl"> */}
          <div className="container flex flex-col lg:flex-row justify-between lg:items-center relative z-30">
            <Fade bottom cascade>
              <div className="self-start md:h-52 h-0">
                <div className="absolute">
                  <div class="verticalFlip">
                    <span className="uppercase text-3xl md:text-5xl lg:text-8xl text-blue-900 text-center lg:text-left font-light  mx-auto lg:mx-0 pb-0 md:pb-8 lg:pb-0">
                      We are a
                      <div className="font-bold">Creative + Technology</div>
                      Company
                    </span>
                    <span className="uppercase text-3xl md:text-5xl lg:text-8xl text-blue-900 text-center lg:text-left font-light  mx-auto lg:mx-0 pb-0 md:pb-8 lg:pb-0">
                      We
                      <div className="font-bold">Innovate+ Research</div>
                    </span>
                    <span className="uppercase text-3xl md:text-5xl lg:text-8xl text-blue-900 text-center lg:text-left font-light  mx-auto lg:mx-0 pb-0 md:pb-8 lg:pb-0">
                      {/* max-w-xs md:max-w-xl */}
                      We
                      <div className="font-bold">Design + Collaborate</div>
                    </span>
                    <span className="uppercase text-3xl md:text-5xl lg:text-8xl text-blue-900 text-center lg:text-left font-light  mx-auto lg:mx-0 pb-0 md:pb-8 lg:pb-0">
                      {/* max-w-xs md:max-w-xl */}
                      We
                      <div className="font-bold">Execute+ Deliver</div>
                    </span>
                  </div>
                </div>
              </div>
            </Fade>

            <Fade right cascade>
              <div>
                <div className="text-white max-w-sm md:max-w-xl lg:max-w-lg mx-auto text-justify text-base md:text-lg font-medium">
                  <div className="">
                    Collabration is the very essence of the great creative
                    outputs.
                  </div>
                  <div>At ImmersionX,</div>
                  <div className="font-extrabold text-white">
                     Art meets Technology to drive Innovation.
                  </div>
                  <div className="mt-4">
                    Whether its VR Collabrations, Digital assets like the
                    metaverse, motion captures, photogrammetry, Holographic Live
                    Streams, experince centers, innovation hubs, museums,
                    retail, and office environments - WE'VE GOT YOU COVERED!
                  </div>
                </div>
              </div>
            </Fade>
            {/* </div> */}
          </div>
          <video
            src={video1}
            autoPlay
            loop
            muted
            className="absolute z-10 w-auto min-w-full min-h-full max-w-none brightness-50 "
          ></video>
        </div>
      </div>
    </>
    // <div
    //   id="slider"
    //   className="inspiro-slider slider-fullscreen dots-creative bg-hero-pattern bg-no-repeat bg-cover"
    // //   data-height-xs="360"
    // >

    //   {/* <div className="slide kenburns">
    //     <div className="container flex flex-col lg:flex-row justify-between lg:items-center">
    //       <div className="uppercase text-2xl md:text-5xl lg:text-8xl text-white text-center lg:text-left font-light max-w-xs md:max-w-xl mx-auto lg:mx-0 pb-0 md:pb-8 lg:pb-0">
    //         We are a <span className="font-bold">Creative + Technology</span>{" "}
    //         Company
    //       </div>
    //       <div>
    //         <div className="text-white max-w-sm md:max-w-xl lg:max-w-sm md:mx-auto text-justify text-xs md:text-base">
    //           <div className="">
    //             Collabration is the very essence of the great creative outputs.
    //             At ImmersionX, Art meets Technology to drive Innovation.
    //           </div>
    //           <div className="">
    //             Whether its VR Collabrations, Digital assets like the metaverse, motion captures,
    //             photogrammetry, Holographic Live Streams, experince centers, innovation hubs, museums, retail, and office environments - WE'VE GOT YOU COVERED!
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div> */}

    //   <div className="slide kenburns">
    //     <div className="container flex flex-col lg:flex-row justify-between lg:items-center">
    //       <Fade bottom cascade>
    //         <div className="self-start md:h-52 h-0">
    //           <div className="absolute">
    //             <div class="slidingHorizontal">
    //               <span className="uppercase text-2xl md:text-5xl lg:text-8xl text-white text-center lg:text-left font-light  mx-auto lg:mx-0 pb-0 md:pb-8 lg:pb-0">
    //                 We are a
    //                 <div className="font-bold">Creative + Technology</div>
    //                 Company
    //               </span>
    //               <span className="uppercase text-2xl md:text-5xl lg:text-8xl text-white text-center lg:text-left font-light  mx-auto lg:mx-0 pb-0 md:pb-8 lg:pb-0">
    //                 We
    //                 <div className="font-bold">Innovate+ Research</div>
    //               </span>
    //               <span className="uppercase text-2xl md:text-5xl lg:text-8xl text-white text-center lg:text-left font-light  mx-auto lg:mx-0 pb-0 md:pb-8 lg:pb-0">
    //                 {/* max-w-xs md:max-w-xl */}
    //                 We
    //                 <div className="font-bold">Design + Collaborate</div>
    //               </span>
    //               <span className="uppercase text-2xl md:text-5xl lg:text-8xl text-white text-center lg:text-left font-light  mx-auto lg:mx-0 pb-0 md:pb-8 lg:pb-0">
    //                 {/* max-w-xs md:max-w-xl */}
    //                 We
    //                 <div className="font-bold">Execute+ Deliver</div>
    //               </span>
    //             </div>
    //           </div>
    //         </div>
    //       </Fade>

    //       <Fade right cascade>
    //         <div>
    //           <div className="text-white max-w-sm md:max-w-xl lg:max-w-sm md:mx-auto text-justify text-xs md:text-base">
    //             <div className="">
    //               Collabration is the very essence of the great creative outputs.
    //               At ImmersionX, Art meets Technology to drive Innovation.
    //             </div>
    //             <div className="">
    //               Whether its VR Collabrations, Digital assets like the metaverse, motion captures,
    //               photogrammetry, Holographic Live Streams, experince centers, innovation hubs, museums, retail, and office environments - WE'VE GOT YOU COVERED!
    //             </div>
    //           </div>
    //         </div>
    //       </Fade>
    //     </div>
    //   </div>

    // </div >
  );
};

export default BannerImage;
