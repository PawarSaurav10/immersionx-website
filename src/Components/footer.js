import { Link } from "gatsby";
import React from "react";
import fb from "../images/Copyright/Layer614.png";
import insta from "../images/Copyright/Layer615.png";
import linked_in from "../images/Copyright/Layer616.png";
import vimeo from "../images/Copyright/Layer617.png";
import yt from "../images/Copyright/Layer618.png";

const Footer = () => {
  const imagedata = [
    { image: fb, link: "https://www.facebook.com/ImmersionxTechnologies" },
    { image: insta, link: "https://www.instagram.com/immersionxtechnologies/?igshid=YmMyMTA2M2Y%3D" },
    { image: linked_in, link: "#" },
    { image: vimeo, link: "#" },
    { image: yt, link: "#" },
  ];
  return (
    <div className="bg-footer bg-no-repeat bg-cover">
      <div className="container">
        <div className="flex flex-col lg:flex-row py-8">
          <div className=" flex-1 flex justify-center lg:justify-start text-black text-base p-3">
            Copyright © 2022 ImmersionX
          </div>
          <div className="flex items-center justify-center">
            {imagedata.map((aa) => (
              <Link to={aa.link}>
                <img src={aa.image} id={aa.idx} className="mr-2" alt="img" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
