import React from "react";

const BannerImage = () => {
  return (
    <div
      id="slider"
      className="inspiro-slider slider-fullscreen dots-creative bg-hero-pattern bg-no-repeat bg-cover"
    //   data-height-xs="360"
    >
      {/* <div className="slide kenburns">
        <div className="container flex flex-col lg:flex-row justify-between lg:items-center">
          <div className="uppercase text-2xl md:text-5xl lg:text-8xl text-white text-center lg:text-left font-light max-w-xs md:max-w-xl mx-auto lg:mx-0 pb-0 md:pb-8 lg:pb-0">
            We are a <span className="font-bold">Creative + Technology</span>{" "}
            Company
          </div>
          <div>
            <div className="text-white max-w-sm md:max-w-xl lg:max-w-sm md:mx-auto text-justify text-xs md:text-base">
              <div className="">
                Collabration is the very essence of the great creative outputs.
                At ImmersionX, Art meets Technology to drive Innovation.
              </div>
              <div className="">
                Whether its VR Collabrations, Digital assets like the metaverse, motion captures,
                photogrammetry, Holographic Live Streams, experince centers, innovation hubs, museums, retail, and office environments - WE'VE GOT YOU COVERED!
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* <div id="slider" className="inspiro-slider slider-fullscreen dots-creative bg-hero-pattern bg-no-repeat bg-cover" data-height-xs="360" data-animate-in="fadeIn" data-animate-out="fadeOut" data-items="1" data-loop="true" data-autoplay="true"> */}
      {/* 
        <div className="slide " >
          <div className="container">
            <div className="slide-captions text-right">
              <div className="hero-heading-2 m-b-20 m-t-20 col-lg-6 float-right">
                <h1 className="text-colored text-xl">LIFE IS<span className="text-rotator" data-animation="fadeIn" data-speed="3000">FITNESS, TO BE STRONG, TO BE FIT </span></h1>
                <p className="lead text-light">Lorem ipsum dolor sit amet, consectetur adi pisi cing elit.Lorem ipsum dolor sit amet, consectetur adi pisi cing elit.</p>
                <a className="btn btn-light" href="http://themeforest.net/item/polo-responsive-multipurpose-html5-template/13708923">Purchase POLO</a>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* <body> */}

      <div className="slide kenburns">
        <div className="container flex flex-col lg:flex-row justify-between lg:items-center">
          <div className="self-start md:h-52 h-0">
            <div className="absolute">
            <div class="slidingHorizontal">
              <span className="uppercase text-2xl md:text-5xl lg:text-8xl text-white text-center lg:text-left font-light  mx-auto lg:mx-0 pb-0 md:pb-8 lg:pb-0">
                {/* max-w-xs md:max-w-xl */}
                We are a
                <div className="font-bold">Creative + Technology</div>
                Company
              </span>
              <span className="uppercase text-2xl md:text-5xl lg:text-8xl text-white text-center lg:text-left font-light  mx-auto lg:mx-0 pb-0 md:pb-8 lg:pb-0">
                {/* max-w-xs md:max-w-xl */}
                We
                <div className="font-bold">Innovate+ Research</div>
              </span>
              <span className="uppercase text-2xl md:text-5xl lg:text-8xl text-white text-center lg:text-left font-light  mx-auto lg:mx-0 pb-0 md:pb-8 lg:pb-0">
                {/* max-w-xs md:max-w-xl */}
                We
                <div className="font-bold">Design + Collaborate</div>
              </span>
              <span className="uppercase text-2xl md:text-5xl lg:text-8xl text-white text-center lg:text-left font-light  mx-auto lg:mx-0 pb-0 md:pb-8 lg:pb-0">
                {/* max-w-xs md:max-w-xl */}
                We
                <div className="font-bold">Execute+ Deliver</div>
              </span>
            </div>
            </div>
            {/* We are a */}
            {/* <div className="relative h-14 md:h-24 lg:h-48"> */}
            {/* <div class="fadeIn"> */}
            
            {/* </div> */}
            {/* Company */}
          </div>
          <div>
            <div className="text-white max-w-sm md:max-w-xl lg:max-w-sm md:mx-auto text-justify text-xs md:text-base">
              <div className="">
                Collabration is the very essence of the great creative outputs.
                At ImmersionX, Art meets Technology to drive Innovation.
              </div>
              <div className="">
                Whether its VR Collabrations, Digital assets like the metaverse, motion captures,
                photogrammetry, Holographic Live Streams, experince centers, innovation hubs, museums, retail, and office environments - WE'VE GOT YOU COVERED!
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default BannerImage;
