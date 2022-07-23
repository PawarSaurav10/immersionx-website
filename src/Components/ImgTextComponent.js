import React from "react";
import LeftTextRightImage from "./imageandtextcomponent/LeftTextRightImage";
import LeftImageRightText from "./imageandtextcomponent/LeftImageRightText";

const ImgTextComponent = (props) => {
  return (
    <div className="pt-24 lg:pt-0 bg-black">
      <div className={`${props?.data?.bg} bg-cover bg-no-repeat bg-center`}>
        <div className="container">
          <div className="pt-0 md:pt-48 xl:pt-96">
            <div className="text-2xl md:text-5xl text-white pt-28 pb-4 md:pb-8 text-left ml-8 md:ml-16 uppercase">
              {props?.data?.title}
            </div>
          </div>
        </div>
      </div>
      {props?.data?.data1 && <LeftImageRightText data={props?.data?.data1} />}
      {props?.data?.data2 && <LeftTextRightImage data={props?.data?.data2} />}
      {props?.data?.data3 && <LeftImageRightText data={props?.data?.data3} />}
    </div>
  );
};

export default ImgTextComponent;
