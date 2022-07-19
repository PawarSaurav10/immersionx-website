import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import img from "../images/08_CONTACTUS/map@2x.png";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const ContactUs = () => {
  return (
    <>
      <div
        id="slider"
        className=" bg-contact-us bg-no-repeat bg-cover -z-10"
      >
        <div className="container">
          <div className="uppercase text-2xl md:text-5xl text-black text-center font-normal pb-32 pt-32 lg:pt-44">
            Contact Us
          </div>
        </div>
      </div>
      <div className="lg:-mt-20 pb-20 z-50">
        <div className="container">
          <div className="px-0 lg:px-28">
            <div className="flex flex-col lg:flex-row justify-between">
              <div className="pr-0 lg:pr-4 pb-4 lg:pb-0 flex-1 h-auto">
                <div className="bg-white text-left shadow-2xl rounded-md">
                  <div className="p-5 lg:py-10 lg:px-14 h-96 ">
                    <div className="pb-6">You have a project?</div>
                    <div className="pb-6">
                      <div className="text-black font-bold text-base">
                        <span className="mr-2">
                          <FontAwesomeIcon icon={faPhone} />
                        </span>
                        (+91) 022 67418601
                      </div>
                      <div className="text-black font-bold text-base">
                        <span className="mr-2">
                          <FontAwesomeIcon icon={faEnvelope} />
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
              <div className="flex justify-center items-center shadow-2xl">
                <iframe
                  title="maps"
                  className="w-full h-96 rounded"
                  frameBorder="0"
                  scrolling="no"
                  src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=401,%20Hubtown%20Viva,%20Western%20Express%20Hwy,%20Saraswati%20Baug,%20Shankarwadi,%20Jogeshwari%20East,%20Mumbai,%20Maharashtra%20400060+(Your%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                ></iframe>
              </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
