import React from "react";
import img1 from "../images/07_OURINDUSTRIES/AUTOMOBILE@2x.png";
import img3 from "../images/07_OURINDUSTRIES/TELECOM@2x.png";
import img2 from "../images/07_OURINDUSTRIES/ENGINEERING@2x@2x.png";
import img4 from "../images/07_OURINDUSTRIES/SOFTWARE_@2x.png";
import img5 from "../images/07_OURINDUSTRIES/RETAIL@2x@2x.png";
import img6 from "../images/07_OURINDUSTRIES/REALESTATE@2x.png";
import img7 from "../images/07_OURINDUSTRIES/MEDICAL@2x.png";
import img8 from "../images/07_OURINDUSTRIES/DEFENSE@2x@2x.png";
// import { useHistory } from "react-router-dom";

const Industries = () => {
  // const imageData = [
  //   {
  //     title: "WNS",
  //     desc: "fashdasbasjk",
  //   },
  //   {
  //     title: "TCL",
  //     desc: "fashdasbasjk",
  //   },
  // ];

  // let history = useHistory();

  // const handleClick = (data) => {
  //   console.log(data, "dsa");
  //   history.push({
  //     pathname: "/detail",
  //     state: { detail: data === "coll" ? imageData : "" },
  //   });
  // };

  return (
    <>
      <div id="slider" className="inspiro-slider slider-fullscreen dots-creative bg-our-industry bg-no-repeat bg-cover">
        <div className="container py-20">
          <div className="uppercase text-2xl md:text-5xl lg:text-8xl text-white text-left font-bold lg:mx-0 pb-10 pt-5 md:pt-10 lg:pt-80">
            Our Industries
          </div>
          <div className="text-white max-w-2xl text-justify text-xs md:text-base pb-14">
            <div>
              We push the boundaries of brand experirence through creative and
              innovations. Through a defined customer journey, brand
              experiences, space and design integration. All our work is curated
              to deliver your brand's promise
            </div>
          </div>
        </div>
      </div>
      <div className="bg-our-industry-1 bg-no-repeat bg-cover">
        <div className="container">
          <div className="flex flex-col lg:flex-row justify-between pt-5 lg:pt-40 pb-14">
            <div className="px-3 py-3">
              <div className=" grid grid-cols-5 gap-3 ">
                <div className="col-span-2">
                  <div className="pb-3">
                    <img src={img1} alt=""/>
                  </div>
                  <div>
                    <img src={img2} alt=""/>
                  </div>
                </div>
                <div className="col-span-3">
                  <div className="pb-3">
                    <img src={img3} alt=""/>
                  </div>
                  <div>
                    <img src={img4} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="py-3 px-3">
              <div className="grid grid-cols-5 gap-3 ">
                <div className="col-span-2">
                  <div className="pb-3">
                    <img src={img5} alt=""/>
                  </div>
                  <div>
                    <img src={img6} alt=""/>
                  </div>
                </div>
                <div className="col-span-3">
                  <div className="pb-3">
                    <img src={img7} alt=""/>
                  </div>
                  <div>
                    <img src={img8} alt=""/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Industries;
