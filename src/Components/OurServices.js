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
        <div className="uppercase font-bold text-2xl md:text-5xl pt-8 lg:pt-40 text-left text-white pb-4 lg:pb-8 px-3">
          Our Services
        </div>
        <div className="flex flex-col lg:flex-row justify-between pb-6">
          <div className="px-3 py-3">
            <div className=" grid grid-cols-5 gap-3 ">
              <div className="col-span-2">
                {/* <Link to="/service-detail">
                  <img src={img1} className="h-full" alt="" />
                </Link> */}
                <div className="portfolio-item img-zoom ct-marketing ct-media ct-branding ct-marketing ct-webdesign">
                  <div className="portfolio-item-wrap">
                    <div className="portfolio-image">
                      <Link to="/service-detail"><img src={img1} alt="" /></Link>
                    </div>
                    <div className="portfolio-description">
                      <Link to="/service-detail">
                        <h3>Last Iceland Sunshine</h3>
                        <span>Graphics</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-3">
                <div className="portfolio-item img-zoom ct-marketing ct-media ct-branding ct-marketing ct-webdesign">
                  <div className="portfolio-item-wrap">
                    <div className="portfolio-image">
                      <Link to="/service-detail"><img src={img2} alt="" /></Link>
                    </div>
                    <div className="portfolio-description">
                      <Link to="/service-detail">
                        <h3>Last Iceland Sunshine</h3>
                        <span>Graphics</span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="portfolio-item img-zoom ct-marketing ct-media ct-branding ct-marketing ct-webdesign">
                  <div className="portfolio-item-wrap">
                    <div className="portfolio-image">
                      <Link to="/service-detail"><img src={img3} alt="" /></Link>
                    </div>
                    <div className="portfolio-description">
                      <Link to="/service-detail">
                        <h3>Last Iceland Sunshine</h3>
                        <span>Graphics</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="py-3 px-3">
            <div className="grid grid-cols-5 gap-3 ">
              <div className="col-span-2">
                {/* <div className="pb-3">
                  <img src={img4} alt=""/>
                </div> */}
                <div className="portfolio-item img-zoom ct-marketing ct-media ct-branding ct-marketing ct-webdesign">
                  <div className="portfolio-item-wrap">
                    <div className="portfolio-image">
                      <Link to="/service-detail"><img src={img4} alt="" /></Link>
                    </div>
                    <div className="portfolio-description">
                      <Link to="/service-detail">
                        <h3>Last Iceland Sunshine</h3>
                        <span>Graphics</span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="portfolio-item img-zoom ct-marketing ct-media ct-branding ct-marketing ct-webdesign">
                  <div className="portfolio-item-wrap">
                    <div className="portfolio-image">
                      <Link to="/service-detail"><img src={img5} alt="" /></Link>
                    </div>
                    <div className="portfolio-description">
                      <Link to="/service-detail">
                        <h3>Last Iceland Sunshine</h3>
                        <span>Graphics</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-3">
                <div className="portfolio-item img-zoom ct-marketing ct-media ct-branding ct-marketing ct-webdesign">
                  <div className="portfolio-item-wrap">
                    <div className="portfolio-image">
                      <Link to="/service-detail"><img src={img6} alt="" /></Link>
                    </div>
                    <div className="portfolio-description">
                      <Link to="/service-detail">
                        <h3>Last Iceland Sunshine</h3>
                        <span>Graphics</span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="portfolio-item img-zoom ct-marketing ct-media ct-branding ct-marketing ct-webdesign">
                  <div className="portfolio-item-wrap">
                    <div className="portfolio-image">
                      <Link to="/service-detail"><img src={img7} alt="" /></Link>
                    </div>
                    <div className="portfolio-description">
                      <Link to="/service-detail">
                        <h3>Last Iceland Sunshine</h3>
                        <span>Graphics</span>
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
