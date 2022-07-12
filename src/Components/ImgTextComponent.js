import React from "react";

import LeftTextRightImage from "./imageandtextcomponent/LeftTextRightImage";
import LeftImageRightText from "./imageandtextcomponent/LeftImageRightText";

const ImgTextComponent = (props) => {
  // console.log(props, "props")

  return (
    <>
      <div id="slider" className="bg-COLLABORATIVEVRBG bg-cover bg-no-repeat">
        {/* <img src={backGroundImage} style={{height:"100%",width:"100%"}}/> */}
        <div className=" md:text-5xl text-white pt-80 text-lg pb-8 text-left ml-16 uppercase">
          {props?.data?.title}
        </div>
      </div>
      {props?.data?.data1 &&
        <LeftImageRightText data={props?.data?.data1} />}

      {props?.data?.data2 &&
        <LeftTextRightImage data={props?.data?.data2} />}

    </>
  );
};

export default ImgTextComponent;
