import React from "react";
import Layout from "../Components/Layout";
import Slider from "react-slick";
import Accenture1 from "../images/10_APPLICATIONS/ACCENTURE/01.png";
import Accenture2 from "../images/10_APPLICATIONS/ACCENTURE/02.png";
import groheimg1 from "../images/10_APPLICATIONS/grohe_application/01.png";
import groheimg2 from "../images/10_APPLICATIONS/grohe_application/02.png";
import groheimg3 from "../images/10_APPLICATIONS/grohe_application/03.png";
import groheimg4 from "../images/10_APPLICATIONS/grohe_application/04.png";
import groheimg5 from "../images/10_APPLICATIONS/grohe_application/05.png";
import interactionimg1 from "../images/10_APPLICATIONS/INTERACTIVEMULTITACTIONDISPLAY/01.png";
import interactionimg2 from "../images/10_APPLICATIONS/INTERACTIVEMULTITACTIONDISPLAY/02.png";
import interactionimg3 from "../images/10_APPLICATIONS/INTERACTIVEMULTITACTIONDISPLAY/03.png";
import mahindraimg1 from "../images/10_APPLICATIONS/MAHINDRA_SUV/01.png";
import mahindraimg2 from "../images/10_APPLICATIONS/MAHINDRA_SUV/02.png";
import mahindraimg3 from "../images/10_APPLICATIONS/MAHINDRA_SUV/03.png";
import digiracerimg1 from "../images/10_APPLICATIONS/DIGI_RACER_GAME/01.jpg";
import digiracerimg2 from "../images/10_APPLICATIONS/DIGI_RACER_GAME/02.jpg";
import digiracerimg3 from "../images/10_APPLICATIONS/DIGI_RACER_GAME/03.jpg";
import rothomsimg1 from "../images/10_APPLICATIONS/ROTHAMS_OF_LONDON/01.jpg";
import rothomsimg2 from "../images/10_APPLICATIONS/ROTHAMS_OF_LONDON/02.png";
import rothomsimg3 from "../images/10_APPLICATIONS/ROTHAMS_OF_LONDON/03.png";
import rothomsimg4 from "../images/10_APPLICATIONS/ROTHAMS_OF_LONDON/04.png";
import rothomsimg5 from "../images/10_APPLICATIONS/ROTHAMS_OF_LONDON/05.png";
import tatamanzaimg1 from "../images/10_APPLICATIONS/TATA_MANZA/01.png";
import tatamanzaimg2 from "../images/10_APPLICATIONS/TATA_MANZA/02.png";
import tatamanzaimg3 from "../images/10_APPLICATIONS/TATA_MANZA/03.png";
import tatamanzaimg4 from "../images/10_APPLICATIONS/TATA_MANZA/04.png";
import tatamanzaimg5 from "../images/10_APPLICATIONS/TATA_MANZA/05.png";
import electroluximg1 from "../images/10_APPLICATIONS/ELECTROLUX/01.png";
import electroluximg2 from "../images/10_APPLICATIONS/ELECTROLUX/02.png";
import panteneimg1 from "../images/10_APPLICATIONS/PANTENE/01.png";
import panteneimg2 from "../images/10_APPLICATIONS/PANTENE/02.png";
import allaroimg1 from "../images/10_APPLICATIONS/ALLARO_HOMES/01.png";
import allaroimg2 from "../images/10_APPLICATIONS/ALLARO_HOMES/02.png";
import castrolimg1 from "../images/10_APPLICATIONS/CASTROL/01.png";
import castrolimg2 from "../images/10_APPLICATIONS/CASTROL/02.png";
import chotabheemimg1 from "../images/10_APPLICATIONS/CHHOTA_BHEEM/01.png";
import chotabheemimg2 from "../images/10_APPLICATIONS/CHHOTA_BHEEM/02.png";
import chotabheemimg3 from "../images/10_APPLICATIONS/CHHOTA_BHEEM/03.png";
import closeupimg1 from "../images/10_APPLICATIONS/CLOSE_UP/01.png";
import dorothyimg1 from "../images/10_APPLICATIONS/DOROTHY_OF_OZ_THE/Picture1.jpg";
import dorothyimg2 from "../images/10_APPLICATIONS/DOROTHY_OF_OZ_THE/Picture2.png";
import emcureimg1 from "../images/10_APPLICATIONS/EMCURE/01.jpg";
import emcureimg2 from "../images/10_APPLICATIONS/EMCURE/02.png";
import godrejimg1 from "../images/10_APPLICATIONS/GODREJ_EON/01.png";
import godrejimg2 from "../images/10_APPLICATIONS/GODREJ_EON/02.png";
import larsenimg1 from "../images/10_APPLICATIONS/LARSEN_TOUBRO/01.png";
import larsenimg2 from "../images/10_APPLICATIONS/LARSEN_TOUBRO/02.png";
import raymondimg1 from "../images/10_APPLICATIONS/RAYMOND/01.jpg";
import raymondimg2 from "../images/10_APPLICATIONS/RAYMOND/02.png";

const application = ({ location }) => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const groheImageData = [
    { image: groheimg1 },
    { image: groheimg2 },
    { image: groheimg3 },
    { image: groheimg4 },
    { image: groheimg5 },
  ];
  const accentureImageData = [{ image: Accenture1 }, { image: Accenture2 }];
  const interactionImageData = [
    { image: interactionimg1 },
    { image: interactionimg2 },
    { image: interactionimg3 },
  ];
  const mahindraImageData = [
    { image: mahindraimg1 },
    { image: mahindraimg2 },
    { image: mahindraimg3 },
  ];
  const digiracerImageData = [
    { image: digiracerimg1 },
    { image: digiracerimg2 },
    { image: digiracerimg3 },
  ];
  const rothamImageData = [
    { image: rothomsimg1 },
    { image: rothomsimg2 },
    { image: rothomsimg3 },
    { image: rothomsimg4 },
    { image: rothomsimg5 },
  ];
  const tataImageData = [
    { image: tatamanzaimg1 },
    { image: tatamanzaimg2 },
    { image: tatamanzaimg3 },
    { image: tatamanzaimg4 },
    { image: tatamanzaimg5 },
  ];
  const electroluxImageData = [
    { image: electroluximg1 },
    { image: electroluximg2 },
  ];
  const panteneImageData = [{ image: panteneimg1 }, { image: panteneimg2 }];
  const allaroImageData = [{ image: allaroimg1 }, { image: allaroimg2 }];
  const castrolImageData = [{ image: castrolimg1 }, { image: castrolimg2 }];
  const chotabheemImageData = [
    { image: chotabheemimg1 },
    { image: chotabheemimg2 },
    { image: chotabheemimg3 },
  ];
  const closeupImageData = [{ image: closeupimg1 }];
  const dorothyImageData = [{ image: dorothyimg1 }, { image: dorothyimg2 }];
  const emcureImageData = [{ image: emcureimg1 }, { image: emcureimg2 }];
  const godrejImageData = [{ image: godrejimg1 }, { image: godrejimg2 }];
  const larsenImageData = [{ image: larsenimg1 }, { image: larsenimg2 }];
  const raymondImageData = [{ image: raymondimg1 }, { image: raymondimg2 }];

  return (
    <Layout location={location?.pathname}>
      <div className=" bg-APPLICATION bg-cover bg-no-repeat bg-center">
        <div className="flex text-white text-5xl pt-60">
          <div className=" p-36 pb-12">AR, VR & MR APPS</div>
        </div>
      </div>
      <div className=" grid grid-cols-3 mt-20">
        <div className="border-r-2 border-b-2">
          <div className="pl-12 pr-12">
            <div>
              <Slider {...settings}>
                {groheImageData.map((aa) => (
                  <div>
                    <img src={aa.image} alt="" className="h-64 mx-auto" />
                  </div>
                ))}
              </Slider>
            </div>

            <div className="pt-6 font-bold text-2xl text-center">
              GROHE APPLICATION
            </div>
            <div className=" text-center">
              Since the brief isn't product-specific the business problem is
              always identified after a thorough brainstorming session
            </div>
          </div>
        </div>
        <div className=" grid-cols-1 border-r-2 border-b-2">
          <div className="pl-12 pr-12">
            <div>
              <Slider {...settings}>
                {accentureImageData.map((aa) => (
                  <div>
                    <img src={aa.image} alt="" className="h-64 mx-auto" />
                  </div>
                ))}
              </Slider>
            </div>
            <div className="pt-6 font-bold text-2xl text-center">ACCENTURE</div>
            <div className=" text-center">
              Since the brief isn't product-specific the business problem is
              always identified after a thorough brainstorming session
            </div>
          </div>
        </div>
        <div className=" grid-cols-1 border-b-2">
          <div className="pl-12 pr-12">
            <div>
              <Slider {...settings}>
                {interactionImageData.map((aa) => (
                  <div>
                    <img src={aa.image} alt="" className="h-64 mx-auto" />
                  </div>
                ))}
              </Slider>
            </div>
            <div className="pt-6 font-bold text-2xl text-center">
              INTERTACTIVE MULTITACTION DISPLAY
            </div>
            <div className=" text-center">
              Since the brief isn't product-specific the business problem is
              always identified after a thorough brainstorming session
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3">
        <div className="grid-cols-1 border-r-2 border-b-2">
          <div className="pl-12 pr-12 pt-6 pb-2">
            <div>
              <Slider {...settings}>
                {mahindraImageData.map((aa) => (
                  <div>
                    <img src={aa.image} alt="" className="h-64 mx-auto" />
                  </div>
                ))}
              </Slider>
            </div>
            <div className="pt-6 font-bold text-2xl text-center">
              MAHINDRA SUV
            </div>
            <div className=" text-center">
              Since the brief isn't product-specific the business problem is
              always identified after a thorough brainstorming session
            </div>
          </div>
        </div>
        <div className=" grid-cols-1 border-r-2 border-b-2">
          <div className="pl-12 pr-12 pt-6 pb-2">
            <div>
              <Slider {...settings}>
                {digiracerImageData.map((aa) => (
                  <div>
                    <img src={aa.image} alt="" className="h-64 mx-auto" />
                  </div>
                ))}
              </Slider>
            </div>
            <div className="pt-6 font-bold text-2xl text-center">
              DIGI RACER GAME
            </div>
            <div className=" text-center">
              Since the brief isn't product-specific the business problem is
              always identified after a thorough brainstorming session
            </div>
          </div>
        </div>
        <div className=" grid-cols-1 border-b-2">
          <div className="pl-12 pr-12 pt-6 pb-2">
            <div>
              <Slider {...settings}>
                {rothamImageData.map((aa) => (
                  <div>
                    <img src={aa.image} alt="" className="h-64 mx-auto" />
                  </div>
                ))}
              </Slider>
            </div>
            <div className="pt-6 font-bold text-2xl text-center">
              ROTHAMS OF LONDON
            </div>
            <div className=" text-center">
              Since the brief isn't product-specific the business problem is
              always identified after a thorough brainstorming session
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3">
        <div className="grid-cols-1 border-r-2 border-b-2">
          <div className="pl-12 pr-12 pt-6 pb-2">
            <div>
              <Slider {...settings}>
                {tataImageData.map((aa) => (
                  <div>
                    <img src={aa.image} alt="" className="h-64 mx-auto" />
                  </div>
                ))}
              </Slider>
            </div>
            <div className="pt-6 font-bold text-2xl text-center">
              TATA MANZA
            </div>
            <div className=" text-center">
              Since the brief isn't product-specific the business problem is
              always identified after a thorough brainstorming session
            </div>
          </div>
        </div>
        <div className=" grid-cols-1 border-r-2 border-b-2">
          <div className="pl-12 pr-12 pt-6 pb-2">
            <div>
              <Slider {...settings}>
                {electroluxImageData.map((aa) => (
                  <div>
                    <img src={aa.image} alt="" className="h-64 mx-auto" />
                  </div>
                ))}
              </Slider>
            </div>
            <div className="pt-6 font-bold text-2xl text-center">
              ELECTROLUX
            </div>
            <div className=" text-center">
              Since the brief isn't product-specific the business problem is
              always identified after a thorough brainstorming session
            </div>
          </div>
        </div>
        <div className=" grid-cols-1 border-b-2">
          <div className="pl-12 pr-12 pt-6 pb-2">
            <div>
              <Slider {...settings}>
                {panteneImageData.map((aa) => (
                  <div>
                    <img src={aa.image} alt="" className="h-64 mx-auto" />
                  </div>
                ))}
              </Slider>
            </div>
            <div className="pt-6 font-bold text-2xl text-center">PANTENE</div>
            <div className=" text-center">
              Since the brief isn't product-specific the business problem is
              always identified after a thorough brainstorming session
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3">
        <div className="grid-cols-1 border-r-2 border-b-2">
          <div className="pl-12 pr-12 pt-6 pb-2">
            <div>
              <Slider {...settings}>
                {allaroImageData.map((aa) => (
                  <div>
                    <img src={aa.image} alt="" className="h-64 mx-auto" />
                  </div>
                ))}
              </Slider>
            </div>
            <div className="pt-6 font-bold text-2xl text-center">
              ALLARO HOMES
            </div>
            <div className=" text-center">
              Since the brief isn't product-specific the business problem is
              always identified after a thorough brainstorming session
            </div>
          </div>
        </div>
        <div className=" grid-cols-1 border-r-2 border-b-2">
          <div className="pl-12 pr-12 pt-6 pb-2">
            <div>
              <Slider {...settings}>
                {castrolImageData.map((aa) => (
                  <div>
                    <img src={aa.image} alt="" className="h-64 mx-auto" />
                  </div>
                ))}
              </Slider>
            </div>
            <div className="pt-6 font-bold text-2xl text-center">CASTROL</div>
            <div className=" text-center">
              Since the brief isn't product-specific the business problem is
              always identified after a thorough brainstorming session
            </div>
          </div>
        </div>
        <div className=" grid-cols-1 border-b-2">
          <div className="pl-12 pr-12 pt-6 pb-2">
            <div>
              <Slider {...settings}>
                {chotabheemImageData.map((aa) => (
                  <div>
                    <img src={aa.image} alt="" className="h-64 mx-auto" />
                  </div>
                ))}
              </Slider>
            </div>
            <div className="pt-6 font-bold text-2xl text-center">
              CHHOTA BHEEM
            </div>
            <div className=" text-center">
              Since the brief isn't product-specific the business problem is
              always identified after a thorough brainstorming session
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3">
        <div className="grid-cols-1 border-r-2 border-b-2">
          <div className="pl-12 pr-12 pt-6 pb-2">
            <div>
              <Slider {...settings}>
                {closeupImageData.map((aa) => (
                  <div>
                    <img src={aa.image} alt="" className="h-64 mx-auto" />
                  </div>
                ))}
              </Slider>
            </div>
            <div className="pt-6 font-bold text-2xl text-center">CLOSE UP</div>
            <div className=" text-center">
              Since the brief isn't product-specific the business problem is
              always identified after a thorough brainstorming session
            </div>
          </div>
        </div>
        <div className=" grid-cols-1 border-r-2 border-b-2">
          <div className="pl-12 pr-12 pt-6 pb-2">
            <div>
              <Slider {...settings}>
                {dorothyImageData.map((aa) => (
                  <div>
                    <img src={aa.image} alt="" className="h-64 mx-auto" />
                  </div>
                ))}
              </Slider>
            </div>
            <div className="pt-6 font-bold text-2xl text-center">
              DOROTHY OF OZ-THE
            </div>
            <div className=" text-center">
              Since the brief isn't product-specific the business problem is
              always identified after a thorough brainstorming session
            </div>
          </div>
        </div>
        <div className=" grid-cols-1 border-b-2">
          <div className="pl-12 pr-12 pt-6 pb-2">
            <div>
              <Slider {...settings}>
                {emcureImageData.map((aa) => (
                  <div>
                    <img src={aa.image} alt="" className="h-64 mx-auto" />
                  </div>
                ))}
              </Slider>
            </div>
            <div className="pt-6 font-bold text-2xl text-center">EMCURE</div>
            <div className=" text-center">
              Since the brief isn't product-specific the business problem is
              always identified after a thorough brainstorming session
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3">
        <div className="grid-cols-1 border-r-2 border-b-2">
          <div className="pl-12 pr-12 pt-6 pb-2">
            <div>
              <Slider {...settings}>
                {godrejImageData.map((aa) => (
                  <div>
                    <img src={aa.image} alt="" className="h-64 mx-auto" />
                  </div>
                ))}
              </Slider>
            </div>
            <div className="pt-6 font-bold text-2xl text-center">
              GODREJ EON
            </div>
            <div className=" text-center">
              Since the brief isn't product-specific the business problem is
              always identified after a thorough brainstorming session
            </div>
          </div>
        </div>
        <div className=" grid-cols-1 border-r-2 border-b-2">
          <div className="pl-12 pr-12 pt-6 pb-2">
            <div>
              <Slider {...settings}>
                {larsenImageData.map((aa) => (
                  <div>
                    <img src={aa.image} alt="" className="h-64 mx-auto" />
                  </div>
                ))}
              </Slider>
            </div>
            <div className="pt-6 font-bold text-2xl text-center">
              LARSEN & TOUBRO
            </div>
            <div className=" text-center">
              Since the brief isn't product-specific the business problem is
              always identified after a thorough brainstorming session
            </div>
          </div>
        </div>
        <div className=" grid-cols-1 border-b-2">
          <div className="pl-12 pr-12 pt-6 pb-2">
            <div>
              <Slider {...settings}>
                {raymondImageData.map((aa) => (
                  <div>
                    <img src={aa.image} alt="" className="h-64 mx-auto" />
                  </div>
                ))}
              </Slider>
            </div>
            <div className="pt-6 font-bold text-2xl text-center">RAYMOND</div>
            <div className=" text-center">
              Since the brief isn't product-specific the business problem is
              always identified after a thorough brainstorming session
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default application;
