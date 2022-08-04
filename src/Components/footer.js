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
    <div className="bg-white">
      <div className="container">
        <div className="flex">
          <div className="p-8 flex-1 flex justify-center text-black text-base">
            Copyright © 2022 ImmersionX
          </div>
          <div className="flex items-center justify-center">
            {imagedata.map((aa) => (
              <img src={aa.image} className="mr-2" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
