import React from "react";
import fb from "../images/Copyright/Layer614.png";
import insta from "../images/Copyright/Layer615.png";
import linked_in from "../images/Copyright/Layer616.png";
import vimeo from "../images/Copyright/Layer617.png";
import yt from "../images/Copyright/Layer618.png";

const Footer = () => {
  const imagedata = [
    { image: fb },
    { image: insta },
    { image: linked_in },
    { image: vimeo },
    { image: yt },
  ];
  return (
    <div className="bg-footer bg-no-repeat bg-cover">
      <div className="container">
        <div className="flex flex-col lg:flex-row p-8">
          <div className=" flex-1 flex justify-center text-black text-base p-4">
            Copyright © 2022 ImmersionX
          </div>
          <div className="flex items-center justify-center">
            {imagedata.map((aa) => (
              <img src={aa.image} id={aa.idx} className="mr-2" alt="img"/>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
