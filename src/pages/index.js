import * as React from "react";
import Layout from "../Components/Layout";
import BannerImage from "../Components/BannerImage";
import OurServices from "../Components/OurServices";
// import OurPartners from "../Components/OurPartners";
import OurProcess from "../Components/OurProcess";
// import Studio from "../Components/Studio";
import StudioNew from "../Components/StudioNew";
import Partners from "../Components/Partners";
import AboutUs from "../Components/AboutUs";
import dassaualtSystem from "../images/05_OURPARTNERS/DassaultSystèmeslogo@2x.png";
import multitaction from "../images/05_OURPARTNERS/multitactionlogo@2x.png";
import arhtMedia from "../images/05_OURPARTNERS/Arhtmedia@2x.png";
import crishtie from "../images/05_OURPARTNERS/christielogo@2x.png";
import varjo from "../images/05_OURPARTNERS/varjologo@2x.png";
import displax from "../images/05_OURPARTNERS/Displaxlogo@2x.png";
import worldviz from "../images/05_OURPARTNERS/Worldvizlogo@2x.png";
import art from "../images/05_OURPARTNERS/Artlogo@2x.png";
import { Fade } from "react-reveal";

const IndexPage = ({location}) => {
  const imageData = [
    { img: dassaualtSystem },
    { img: multitaction },
    { img: arhtMedia },
    { img: crishtie },
    { img: varjo },
    { img: displax },
    { img: worldviz },
    { img: art },
  ];

  return (
    <>
      <Layout location={location?.pathname}>
        <BannerImage />
        <AboutUs />
        <OurServices />
        <OurProcess />
        {/* <Studio /> */}
        <StudioNew/>
        {/* <OurPartners /> */}
        <Partners/> 
        <div className="self-end mt-auto">
          <div className="py-4 px-4 bg-black">
            <Fade left>
              <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 xl:grid-cols-8 place-items-center ">
                {imageData &&
                  imageData.map((aa, idx) => {
                    return (
                      <img
                        src={aa.img}
                        key={idx}
                        className="px-4 py-4"
                        alt=""
                      />
                    );
                  })}
              </div>
            </Fade>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default IndexPage;
