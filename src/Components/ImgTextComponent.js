import React from "react";
import LeftTextRightImage from "./imageandtextcomponent/LeftTextRightImage";
import LeftImageRightText from "./imageandtextcomponent/LeftImageRightText";

const ImgTextComponent = (props) => {

  return (
    <>
      <div id="slider" className="bg-COLLABORATIVEVRBG bg-cover bg-no-repeat">
        <div className="container">
          <div className="text-2xl md:text-5xl text-white pt-40 md:pt-80 pb-4 md:pb-8 text-left ml-8 md:ml-16 uppercase">
            {props?.data?.title}
          </div>
        </div>
      </div>
      {props?.data?.data1 &&
        <LeftImageRightText data={props?.data?.data1} />}

      {props?.data?.data2 &&
        <LeftTextRightImage data={props?.data?.data2} />}
        {props?.data?.data3 &&
        <LeftTextRightImage data={props?.data?.data3} />}

    </>
  );
};

export default ImgTextComponent;
