import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import img from "../images/08_CONTACTUS/map@2x.png";
// import { faPhone } from "@fortawesome/free-solid-svg-icons";

const ContactUs = () => {
  return (
    <>
      <div id="slider" className="bg-contact-us bg-no-repeat bg-auto lg:bg-cover -z-10">
        <div className="container">
          <div className="uppercase text-2xl md:text-5xl text-black text-center font-normal pb-32 pt-32 lg:pt-32">
            Contact Us
          </div>
        </div>
      </div>
      <div className="-mt-40 pb-20 z-50">
        <div className="container">
          <div className="px-0 lg:px-24">
            <div className="flex flex-col lg:flex-row justify-between">
              <div className="pr-0 lg:pr-4 pb-4 lg:pb-0 flex-1">
                <div className="bg-white text-left shadow-2xl">
                  <div className="p-5 lg:p-10">
                    <div className="pb-6">You have a project?</div>
                    <div className="pb-6">
                      <div className="text-black font-bold text-base">
                        <span className="mr-2">
                          {/* <FontAwesomeIcon icon={faPhone} /> */}
                        </span>
                        (+91) 022 67418601
                      </div>
                      <div className="text-black font-bold text-base">
                        <span className="mr-2">
                          {/* <FontAwesomeIcon icon={faEnvelope} /> */}
                        </span>
                        immersionx.io
                      </div>
                    </div>
                    <div className="pb-6">
                      Office - 401, Hubtown Viva, Western Express Hwy, Saraswati
                      Baug, Shankarwadi, Jogeshwari East, Mumbai, Maharashtra
                      400060
                    </div>
                    <div className="pb-6">
                      Studio - 303-305, Ecostar, Near Udipi Vihar Restaurant Off
                      Aarey Road, Vishveshwar Nagar Rd, Churi Wadi, Goregaon,
                      Mumbai, Maharashtra 400063
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-1">
                <img src={img} alt=""/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
