// import { graphql, useStaticQuery } from "gatsby";
// import BackgroundImage from "gatsby-background-image";
// import video1 from "../images/Untitled.mp4";
// import video1 from "../images/30secondsvideo.mp4";
import video1 from "../images/ImmersionxShowreel_v02.mp4";
// import video1 from "../images/Originalvideocompressed.mp4";
// import mouse from "../images/01_screensaver/scrollicon@2x.png";
// import mouse from "../images/01_screensaver/scrolldownmousedark.png";
import mouse from "../images/01_screensaver/scrolldown-mouse.png";
import React from "react";
import { Fade } from "react-reveal";
import { Link } from "gatsby";

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
    // <>
    //   <div
    //     id="slider"
    //     className="inspiro-slider slider-fullscreen dots-creative bg-hero-pattern bg-no-repeat bg-cover"
    //     //   data-height-xs="360"
    //   >
    //     <div className="slide kenburns flex flex-col">
    //       <div className="container ">
    //         <div className="flex flex-col justify-between  items-center lg:items-start relative z-30">
    //           <Fade bottom>
    //             <div className="pb-10">
    //               <div className="uppercase max-w-2xl text-3xl md:text-6xl  xl:text-8xl text-white text-center lg:text-left font-light  mx-auto lg:m-auto pb-0 md:pb-8 lg:pb-0">
    //                 <div className="flex flex-col lg:flex-row">
    //                   <div>We</div>
    //                   <div className="fadeIn">
    //                     <span className="pl-3">are a</span>
    //                     <span></span>
    //                     <span></span>
    //                     <span></span>
    //                   </div>
    //                 </div>
    //                 <div className="pb-16 md:pb-24 lg:pb-32 xl:pb-44">
    //                   <div className="verticalFlip">
    //                     <span className="font-bold">Creative + Technology</span>
    //                     <span className="font-bold">Innovate + Research</span>
    //                     <span className="font-bold">Design + Collaborate</span>
    //                     <span className="font-bold">Execute + Deliver</span>
    //                     {/* <span>Adorable.</span> */}
    //                   </div>
    //                 </div>
    //                 {/* <div> */}
    //                 <div className="fadeIn">
    //                   <span>Company</span>
    //                   <span></span>
    //                   <span></span>
    //                   <span></span>
    //                 </div>
    //                 {/* </div> */}
    //               </div>
    //             </div>
    //           </Fade>
    //           <div>
    //             <Fade right cascade>
    //               <div>
    //                 <div className="text-white max-w-sm md:max-w-xl lg:max-w-md mx-auto text-left text-sm xl:text-base font-medium ">
    //                   <div className=" ">
    //                     Collaboration is the very essence of the greatest
    //                     creative outputs.
    //                   </div>
    //                   <div>
    //                     At ImmersionX, {""}
    //                     <span className="font-extrabold text-white">
    //                       Art meets Technology to drive Innovation.
    //                     </span>
    //                   </div>
    //                   <div className="mt-4">
    //                     Whether its VR Collabrations, Digital assets like the
    //                     metaverse, motion captures, photogrammetry, Holographic
    //                     Live Streams, experince centers, innovation hubs,
    //                     museums, retail, and office environments - WE'VE GOT YOU
    //                     COVERED!
    //                   </div>
    //                 </div>
    //               </div>
    //             </Fade>
    //           </div>
    //         </div>
    //         <div className="flex justify-center z-30 pb-3">
    //           <Link to="#solutions">
    //             <div className="icon-scroll"></div>
    //             {/* <img src={mouse} className="w-auto h-auto" /> */}
    //           </Link>
    //         </div>
    //       </div>
    //       <video
    //         // style={{width: 900, height:800}}
    //         src={video1}
    //         autoPlay
    //         loop
    //         muted
    //         className="relative lg:absolute lg:right-[70px] xl:right-[170px] top-0 z-10 lg:w-700 h-500 xl:w-1250 xl:h-600 brightness-40 bottom-0 m-auto"
    //       ></video>
    //     </div>
    //   </div>
    // </>

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
        <div class="relative flex flex-col justify-end lg:h-screen overflow-hidden ">
          {/* <div class=" p-5 text-2xl text-white bg-purple-300 bg-opacity-50 rounded-xl"> */}
          <div className="container flex flex-col lg:flex-row justify-between items-start relative z-30 pb-4 pt-44">
            <div className="px-4 ">
              <Fade bottom>
                <div className="">
                  <div className="uppercase max-w-2xl text-3xl md:text-6xl lg:text-7xl desktop:text-8xl text-white text-left font-light mx-auto lg:m-auto pb-4">
                    <div className="flex flex-row">
                      <div>We</div>
                      <div className="fadeIn">
                        <span className="pl-2 lg:pl-3">are a</span>
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                    </div>
                    <div className="pb-16 md:pb-32 lg:pb-36 desktop:pb-44">
                      <div className="verticalFlip">
                        <span className="font-bold">Creative + Technology</span>
                        <span className="font-bold">Innovate + Research</span>
                        <span className="font-bold">Design + Collaborate</span>
                        <span className="font-bold">Execute + Deliver</span>
                        {/* <span>Adorable.</span> */}
                      </div>
                    </div>
                    {/* <div> */}
                    <div className="fadeIn">
                      <span>Company</span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                    {/* </div> */}
                  </div>
                  {/* <div className="absolute">
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
                      We
                      <div className="font-bold">Design + Collaborate</div>
                    </span>
                    <span className="uppercase text-3xl md:text-5xl lg:text-8xl text-blue-900 text-center lg:text-left font-light  mx-auto lg:mx-0 pb-0 md:pb-8 lg:pb-0">
                      We
                      <div className="font-bold">Execute+ Deliver</div>
                    </span>
                  </div>
                </div> */}
                </div>
              </Fade>
            </div>

            {/* <div>
              <Fade right cascade>
                <div>
                  <div className="text-white max-w-sm md:max-w-lg lg:max-w-sm mx-auto text-left text-sm xl:text-base font-medium ">
                    <div>
                      ImmersionX is an experimental marketing agency that
                      creates bespoke solutions for brands and our mantra is to
                      'stay relevant'. We do that by breaking the glass ceiling
                      with our collaborative solutions and experince driven
                      technologies - virtual, live or compound.
                    </div>
                    <div className=" ">
                      Collaboration is the very essence of the greatest creative
                      outputs.
                    </div>
                    <div>
                      At ImmersionX, {""}
                      <span className="font-extrabold text-white">
                        Art meets Technology to drive Innovation.
                      </span>
                    </div>
                    <div className="mt-4">
                      Whether its VR Collabrations, Digital assets like the
                      metaverse, motion captures, photogrammetry, Holographic
                      Live Streams, experince centers, innovation hubs, museums,
                      retail, and office environments - WE'VE GOT YOU COVERED!
                    </div>
                  </div>
                </div>
              </Fade>
            </div> */}

            {/* </div> */}
          </div>
          <div className="flex justify-center z-30 pb-8">
            <Link to="#about-us">
              {/* <div className="icon-scroll"></div> */}
              <img src={mouse} alt="mouse" className=" w-6 h-10 md:w-auto md:h-auto" />
            </Link>
          </div>
          <div className="html5vid">
            <video
              src={video1}
              autoPlay
              loop
              muted
              playsInline
              poster
              preload="true"
              className="brightness-40 "
            ></video>
          </div>
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
