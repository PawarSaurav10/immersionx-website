import React from "react";
import { BsDot } from "@react-icons/all-files/bs/BsDot";
// import { FaBeer } from "@react-icons/all-files/fa/FaBeer";

const LeftTextRightImage = (props) => {
  return (
    <div>
      <div className="grid md:grid-cols-5">
        <div className="md:col-span-2 bg-black text-white">
          <div className="pl-12 pr-12 pb-12 pt-20 text-left">
            {props.data.h1 && (
              <div className="pt-7 text-xl text-orange-300 ">{props.data.h1}</div>
            )}
            {props.data.p1 && <p className="pt-5 ">{props.data.p1}</p>}

            <div className="list-disc">
              {props.data.l1 && (
                <div className="flex">
                  <BsDot />
                  {props.data.l1}
                </div>
              )}
              {props.data.l2 && (
                <div className="flex">
                  <BsDot /> {props.data.l2}
                </div>
              )}
              {props.data.l3 && (
                <div className="flex">
                  <BsDot /> {props.data.l3}
                </div>
              )}
              {props.data.l4 && (
                <div className="flex">
                  <BsDot /> {props.data.l4}
                </div>
              )}
            </div>

            {props.data.h2 && (
              <div className="pt-7 text-xl text-orange-300 ">{props.data.h2}</div>
            )}
            {props.data.p2 && <p className="pt-5 ">{props.data.p2}</p>}
            {props.data.p3 && <p className="pt-5 ">{props.data.p3}</p>}
            {props.data.p4 && <p className="pt-5 ">{props.data.p4}</p>}
          </div>
        </div>
        <div className="md:col-span-3">
          <img src={props?.data?.imageurl} className="h-full w-full" alt="" />
        </div>
      </div>
    </div>

  );
};

export default LeftTextRightImage;
