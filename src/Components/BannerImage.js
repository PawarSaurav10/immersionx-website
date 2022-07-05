import React from "react";

const BannerImage = () => {
  return (
    <div
      id="slider"
      className="inspiro-slider slider-fullscreen dots-creative bg-hero-pattern bg-no-repeat bg-cover"
      //   data-height-xs="360"
    >
      <div className="slide kenburns">
        <div className="container flex flex-col lg:flex-row justify-between lg:items-center">
          <div className="uppercase text-2xl md:text-5xl lg:text-8xl text-white text-center lg:text-left font-light max-w-xs md:max-w-xl mx-auto lg:mx-0 pb-0 md:pb-8 lg:pb-0">
            We are a <span className="font-bold">Creative + Technology</span>{" "}
            Company
          </div>
          <div>
            <div className="text-white max-w-sm md:max-w-xl lg:max-w-sm md:mx-auto text-justify text-xs md:text-base">
              <div className="">
                Nulla varius consequat magna, id molestie ipsum volutpat quis. A
                true story, that never been told!.Nulla varius consequat magna,
                id molestie ipsum volutpat quis. A true story, that never been
                told!.Nulla varius consequat magna, id molestie ipsum volutpat
                quis.
              </div>
              <div className="">
                A true story, that never been told!.Nulla varius consequat
                magna, id molestie ipsum volutpat quis. A true story, that never
                been told!.Nulla varius consequat magna, id molestie ipsum
                volutpat quis.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerImage;
