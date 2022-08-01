import React from "react";
// import COLLABORATIVEVRim1 from "../..images/06_OURWORK/pages//COLLABORATIVEVRim1.png";

const LeftImageRightText = (props) => {
  return (
    <div className="bg-slate-900">
      <div className="container ">
        <div className="hidden md:grid md:grid-cols-5">
          <div
            className={`${
              props?.data?.numberofcolspan === 2
                ? "md:col-span-2"
                : "md:col-span-3"
            } `}
          >
            {props?.data?.imageurl && (
              <img
                src={props?.data?.imageurl}
                className={`${
                  props?.data?.imageurl2 ? "h-1/2" : "h-full"
                } w-full`}
                alt=""
              />
            )}
            {props?.data?.videourl && (
              <video
                loop
                autoPlay
                width="750"
                height="500"
                controls
                // className={`${
                //   props?.data?.imageurl2 ? "h-1/2" : "h-full"
                // } w-full`}
                alt=""
              >
                <source src={props?.data?.videourl} type="video/mp4" />
              </video>
            )}
            {props?.data?.imageurl2 && (
              <img
                src={props?.data?.imageurl2}
                className="h-1/2 w-full"
                alt=""
              />
            )}
          </div>
          <div
            className={`flex ${
              props?.data?.numberofcolspan === 2
                ? "md:col-span-3"
                : "md:col-span-2"
            } bg-black text-white`}
          >
            <div className="flex flex-1 flex-col justify-center p-12">
              <div className="  text-left">
                {props?.data?.h1 && (
                  <div className="pt-7 text-xl text-orange-300 ">
                    {props?.data?.h1}
                  </div>
                )}
                {props?.data?.p1 && (
                  <div className="pt-5">{props?.data?.p1}</div>
                )}
                {props?.data?.p2 && (
                  <div className="pt-5">{props?.data?.p2}</div>
                )}
                {props?.data?.p3 && (
                  <div className="pt-5">{props?.data?.p3}</div>
                )}
                {props?.data?.p4 && (
                  <div className="pt-5">{props?.data?.p4}</div>
                )}
              </div>
              {props?.data?.h2 && (
                <div className="pt-7 text-xl text-orange-300 ">
                  {props?.data?.h2}
                </div>
              )}

              {props?.data?.p4 && <p className="pt-5 ">{props?.data?.p4}</p>}
              {props?.data?.h3 && (
                <div className="pt-7 text-xl text-orange-300 ">
                  {props?.data?.h3}
                </div>
              )}
              {props?.data?.p5 && <p className="pt-5 ">{props?.data?.p5}</p>}
              {props?.data?.h4 && (
                <div className="pt-7 text-xl text-orange-300 ">
                  {props?.data?.h4}
                </div>
              )}
              {props?.data?.p6 && <p className="pt-5 ">{props?.data?.p6}</p>}
            </div>
          </div>
        </div>
        <div className="grid md:hidden md:grid-cols-5">
          <div
            className={` ${
              props?.data?.numberofcolspan === 2
                ? "md:col-span-3"
                : "md:col-span-2"
            } bg-black text-white `}
          >
            <div className="p-12 text-left">
              {props?.data?.h1 && (
                <div className="pt-7 text-xl text-orange-300 ">
                  {props?.data?.h1}
                </div>
              )}
              {props?.data?.p1 && <div className="pt-5">{props?.data?.p1}</div>}
              {props?.data?.p2 && <div className="pt-5">{props?.data?.p2}</div>}
              {props?.data?.p3 && <div className="pt-5">{props?.data?.p3}</div>}
              {props?.data?.p4 && <div className="pt-5">{props?.data?.p4}</div>}
            </div>
            {props?.data?.h2 && (
              <div className="pt-7 text-xl text-orange-300 ">
                {props?.data?.h2}
              </div>
            )}

            {props?.data?.p4 && <p className="pt-5 ">{props?.data?.p4}</p>}
            {props?.data?.h3 && (
              <div className="pt-7 text-xl text-orange-300 ">
                {props?.data?.h3}
              </div>
            )}
            {props?.data?.p5 && <p className="pt-5 ">{props?.data?.p5}</p>}
            {props?.data?.h4 && (
              <div className="pt-7 text-xl text-orange-300 ">
                {props?.data?.h4}
              </div>
            )}
            {props?.data?.p6 && <p className="pt-5 ">{props?.data?.p6}</p>}
          </div>
          <div
            className={`${
              props?.data?.numberofcolspan === 2
                ? "md:col-span-2"
                : "md:col-span-3"
            } `}
          >
            <img
              src={props?.data?.imageurl}
              className={`${
                props?.data?.imageurl2 ? "h-1/2" : "h-full"
              } w-full`}
              alt=""
            />
            {props?.data?.imageurl2 && (
              <img
                src={props?.data?.imageurl2}
                className="h-1/2 w-full"
                alt=""
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftImageRightText;
