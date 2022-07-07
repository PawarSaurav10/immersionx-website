import React from "react";
import img1 from "../images/02_OURSERVICES/COLLABORATIVEVR@2x.png";
import img2 from "../images/02_OURSERVICES/VOLUMETRICSTUIO@2x.png";
import img3 from "../images/02_OURSERVICES/METAVERSE@2x.png";
import img4 from "../images/02_OURSERVICES/INTERACTIVEDIGITALINSTALLATION@2x.png";
import img5 from "../images/02_OURSERVICES/AUGMENTEDREALITY@2x@2x.png";
import img6 from "../images/02_OURSERVICES/MULTITACTION@2x.png";
import img7 from "../images/02_OURSERVICES/VRCAVE@2x.png";
import { Link } from "gatsby";
// import { useHistory } from "react-router-dom";

const OurServices = () => {
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
    <div className="bg-our-service bg-no-repeat bg-cover">
      <div className="container">
        <div className="uppercase font-bold text-base md:text-2xl md:text-5xl pt-8 lg:pt-40 text-left text-white pb-4 lg:pb-8 px-3">
          Our Services
        </div>
        <div className="flex flex-col lg:flex-row justify-between pb-6">
          <div className="pr-0 lg:pr-3 py-3">
            <div className=" grid grid-cols-5 gap-3 ">
              <div className="col-span-2">
                {/* <Link to="/service-detail">
                  <img src={img1} className="h-full" alt="" />
                </Link> */}
                <div className="portfolio-item img-zoom ct-marketing ct-media ct-branding ct-marketing ct-webdesign">
                  <div className="portfolio-item-wrap">
                    <div className="portfolio-image">
                      <Link to="/service-detail"><img src={img1} alt="" className="" /></Link>
                    </div>
                    <div className="portfolio-description" style={{ bottom: "-40px", display: "flex", justifyContent: "flex-start" }}>
                      <Link to="/service-detail">
                        <div className="text-base md:text-2xl font-bold text-white">COLLABRATIVE VR</div>
                        {/* <span>Graphics</span> */}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-3">
                <div className="portfolio-item img-zoom ct-marketing ct-media ct-branding ct-marketing ct-webdesign pb-3">
                  <div className="portfolio-item-wrap">
                    <div className="portfolio-image">
                      <Link to="/service-detail"><img src={img2} alt="" /></Link>
                    </div>
                    <div className="portfolio-description" style={{ bottom: "-42px", display: "flex", justifyContent: "flex-start" }}>
                      <Link to="/service-detail">
                        <div className="text-base md:text-2xl font-bold text-white uppercase">Volumetric Studio</div>
                        {/* <span>Graphics</span> */}
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="portfolio-item img-zoom ct-marketing ct-media ct-branding ct-marketing ct-webdesign pb-0 md:pb-3">
                  <div className="portfolio-item-wrap">
                    <div className="portfolio-image">
                      <Link to="/service-detail"><img src={img3} alt="" /></Link>
                    </div>
                    <div className="portfolio-description" style={{ bottom: "-42px", display: "flex", justifyContent: "flex-start" }}>
                      <Link to="/service-detail">
                        <div className="text-base md:text-2xl font-bold text-white">METAVERSE</div>
                        {/* <span>Graphics</span> */}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="py-3">
            <div className="grid grid-cols-5 gap-3 ">
              <div className="col-span-2">
                {/* <div className="pb-0 lg:pb-3">
                  <img src={img4} alt=""/>
                </div> */}
                <div className="portfolio-item img-zoom ct-marketing ct-media ct-branding ct-marketing ct-webdesign pb-3">
                  <div className="portfolio-item-wrap">
                    <div className="portfolio-image">
                      <Link to="/service-detail"><img src={img4} alt="" /></Link>
                    </div>
                    <div className="portfolio-description" style={{ bottom: "-70px", display: "flex", justifyContent: "flex-start" }}>
                      <Link to="/service-detail">
                        <div className="text-base md:text-2xl font-bold text-white">INTERACTIVE DIGITAL INSTALLATION</div>
                        {/* <span>Graphics</span> */}
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="portfolio-item img-zoom ct-marketing ct-media ct-branding ct-marketing ct-webdesign pb-0 md:pb-3">
                  <div className="portfolio-item-wrap">
                    <div className="portfolio-image">
                      <Link to="/service-detail"><img src={img5} alt="" /></Link>
                    </div>
                    <div className="portfolio-description" style={{ bottom: "-50px", display: "flex", justifyContent: "flex-start" }}>
                      <Link to="/service-detail">
                        <div className="text-base md:text-2xl font-bold text-white">AUGMENTED REALITY</div>
                        {/* <span>Graphics</span> */}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-3">
                <div className="portfolio-item img-zoom ct-marketing ct-media ct-branding ct-marketing ct-webdesign pb-3">
                  <div className="portfolio-item-wrap">
                    <div className="portfolio-image">
                      <Link to="/service-detail"><img src={img6} alt="" /></Link>
                    </div>
                    <div className="portfolio-description" style={{ bottom: "-42px", display: "flex", justifyContent: "flex-start" }}>
                      <Link to="/service-detail">
                        <div className="text-base md:text-2xl font-bold text-white">MULTITACTION</div>
                        {/* <span>Graphics</span> */}
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="portfolio-item img-zoom ct-marketing ct-media ct-branding ct-marketing ct-webdesign pb-0 md:pb-3">
                  <div className="portfolio-item-wrap">
                    <div className="portfolio-image">
                      <Link to="/service-detail"><img src={img7} alt="" /></Link>
                    </div>
                    <div className="portfolio-description" style={{ bottom: "-42px", display: "flex", justifyContent: "flex-start" }}>
                      <Link to="/service-detail">
                        <div className="text-base md:text-2xl font-bold text-white">VR CARE</div>
                        {/* <span>Graphics</span> */}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
