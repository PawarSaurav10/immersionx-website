import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
// import img1 from "../images/08_CONTACTUS/Layer.png";
// import img2 from "../images/08_CONTACTUS/Layer1.png";

const ContactUs = () => {
  return (
    <>
      <div id="slider" className=" bg-contact-us bg-no-repeat bg-cover">
        <div className="container uppercase text-2xl md:text-5xl px-8 text-white pb-32 lg:pb-60 pt-40 lg:pt-56">
          <div className=" font-bold"> Contact Us</div>
          <div className="text-white text-base mt-10">
            <span className="mr-2">
              <FontAwesomeIcon icon={faPhone} />
            </span>
            (+91) 022 62398608
            
            {/* <div className="mt-2 ml-6"> (+91) 022 67418601</div> */}
          </div>
          {/* <div> (+91) 022 67418601</div> */}
          <div className="text-white text-base lowercase mt-2">
            <span className="mr-2">
              <FontAwesomeIcon icon={faEnvelope} />
            </span>
            www.immersionx.io
          </div>
        </div>
        {/* <div className="container">
          <div className="uppercase text-2xl md:text-5xl font-bold text-white text-center pb-32 pt-32 lg:pt-64">
            Contact Us
          </div>
        </div> */}
      </div>
      <div className="bg-black">
        <div className="container">
          <div className=" flex flex-col lg:flex-row ">
            <div className="flex-1 m-24">
              <div className="text-2xl text-white font-semibold mb-8">OFFICE</div>
              <div className=" text-left mb-8 text-white ">
                401, Hubtown Viva, Western Express Hwy, Saraswati Baug,
                Shankarwadi, Jogeshwari East, Mumbai, Maharashtra 400060
              </div>
              {/* <div className="flex-1"> */}
              <div className="flex justify-center items-center shadow-2xl">
                <iframe
                  title="maps"
                  className="w-full h-473 rounded-sm"
                  frameBorder="0"
                  scrolling="no"
                  src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=401,%20Hubtown%20Viva,%20Western%20Express%20Hwy,%20Saraswati%20Baug,%20Shankarwadi,%20Jogeshwari%20East,%20Mumbai,%20Maharashtra%20400060+(Your%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                ></iframe>
                {/* </div> */}
              </div>
              {/* <img src={img1} alt="" /> */}
            </div>
            <div className="flex-1 mr-24 my-24">
            <div className="text-2xl text-white font-semibold mb-8">STUDIO</div>
              <div className=" text-left mb-8 text-white ">
                303-305, Ecoster, Near Udipi Vihar Restaurant Off Aarey
                Road, Vishveshwar Nagar Rd, Churi Wadi, Goregaon, Mumbai,
                Maharashtra 400063
              </div>
              <div className="flex justify-center items-center shadow-2xl">
                <iframe
                  title="maps"
                  className="w-full h-473 rounded-sm"
                  frameBorder="0"
                  scrolling="no"
                  src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=303-305,%20Ecoster,%20Near%20Udipi%20Vihar%20Restaurant%20Off%20Aarey%20Road,%20%20%20%20%20%20%20%20%20%20%20%20%20Vishveshwar%20Nagar%20Rd,%20Churi%20Wadi,%20Goregaon,%20Mumbai,%20Maharashtra%20%20%20%20%20%20%20%20%20%20%20%20%20400063+(immersionx%20studio)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                ></iframe>
              </div>
              {/* <img src={img2} alt="" /> */}
            </div>
            {/* <img src={img1} alt=""/> */}
          </div>
        </div>
      </div>

      {/* <div className="flex flex-row">
        <img src={img1} alt=""/>
        <img src={img2} alt=""/>
      </div> */}
      {/* <div className="pb-20 z-50">
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
      </div> */}
    </>
  );
};

export default ContactUs;
