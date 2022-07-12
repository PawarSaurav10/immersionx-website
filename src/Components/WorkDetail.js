import React from "react";

import LeftImageRightText from "./imageandtextcomponent/LeftImageRightText";
import LeftTextRightImage from "./imageandtextcomponent/LeftTextRightImage";

const OurWork = (props) => {
  console.log(props, "props")

  return (
    <>
      <div
        id="slider"
        className="bg-TataCommunicationsBG bg-cover bg-no-repeat"
      >
        {/* <img src={backGroundImage} style={{height:"100%",width:"100%"}}/> */}
        <div className=" text-white pt-80 md:text-5xl text-lg pb-8 text-left ml-16 w-2/4 uppercase">
          {props?.data?.title}
        </div>
      </div>
      {props?.data?.data1 && <LeftTextRightImage data={props?.data?.data1} />}
      {props?.data?.data2 && <LeftImageRightText data={props?.data?.data2} />}
      {props?.data?.data3 && <LeftTextRightImage data={props?.data?.data3} />}

    </>
  );
};

export default OurWork;
