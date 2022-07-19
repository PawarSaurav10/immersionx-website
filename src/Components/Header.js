import React, { useState, useEffect } from "react";
import Logo from "../images/01_screensaver/immersionlogo@2x.png";
// import Logo from "../../assets/images/header_logo.png";
// import GatsbyImageCustom from "../Images/GatsbyImageCustom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  // faEnvelope,
  // faLocationArrow,
  faMapMarkerAlt,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "gatsby";

const Header = () => {
  // const isBrowser = typeof window !== "undefined";
  //   const [hideTopBar, setHideTopBar] = useState();
  const [navBar, setNavBar] = useState(false);
  // useEffect(() => {
  //   let body = document.getElementsByTagName("body");
  //   if (navBar && isBrowser && window.innerWidth < 768) {
  //     if (body.length > 0) body[0].classList.add("overflow-hidden");
  //   } else {
  //     body[0].classList.remove("overflow-hidden");
  //   }
  // }, [navBar]);

  return (
    <>
      {/* <div className="header-inner">
            <div className="container">
                
            </div>
            </div> */}
      <div className="fixed z-50 w-full">
        <div className="bg-black shadow-lg">
          <div className="max-w-8xl mx-auto">
            <div className="flex text-white justify-between font-bold px-4 py-4">
              <div className="px-6">
                <Link to="/" className="flex space-x-2">
                  <img src={Logo} className="h-14 " alt="img" />
                </Link>
              </div>

              <div className="lg:hidden py-2 flex">
                <div className="block m-auto">
                  <div
                    className="nav-bar-btn"
                    onClick={() => {
                      setNavBar(!navBar);
                    }}
                    onKeyDown={() => {
                      setNavBar(!navBar);
                    }}
                  >
                    <span
                      className="pr-2 flex items-center"
                      style={{ paddingBottom: 3 }}
                    >
                      <FontAwesomeIcon icon={faBars} size={"lg"} />
                    </span>
                    {/* <span className="font-medium"> Menu</span> */}
                  </div>
                </div>
              </div>
              <div
                className={`transition-width transition-height duration-300 ease-in-out ${
                  navBar ? `w-full opacity-100 nav-open` : `w-0 h-0 opacity-0`
                } lg:w-auto lg:h-auto opacity-100 nav-bar-container bg-black lg:contents`}
              >
                <div className="lg:flex">
                  <ul className="flex lg:flex-row flex-col text-white lg:items-center items-start space-x-0 lg:space-x-3 xl:space-x-5 w-full">
                    <li className="nav-bar-menu">
                      <Link
                        className="cursor-pointer "
                        to="/"
                        activeClassName="text-white md:actve-nav "
                      >
                        Home
                      </Link>
                    </li>
                    <li className="nav-bar-menu">
                      <Link
                        className="cursor-pointer "
                        to="/our-work"
                        activeClassName="text-white md:actve-nav "
                      >
                        Work
                      </Link>
                    </li>
                    <li className="nav-bar-menu">
                      <Link
                        className="cursor-pointer "
                        to="/our-work"
                        activeClassName="text-white md:actve-nav "
                      >
                        Solutions
                      </Link>
                    </li>
                    <li className="nav-bar-menu">
                      <Link
                        className="cursor-pointer "
                        to="/our-industries"
                        activeClassName="text-white md:actve-nav "
                      >
                        Studio
                      </Link>
                    </li>
                    <li className="nav-bar-menu">
                      <Link
                        className="cursor-pointer "
                        to="/contact-us"
                        activeClassName="text-white md:actve-nav "
                      >
                        Contact Us
                      </Link>
                    </li>

                    {/* <Link to="/" className="lg:p-0 p-4">
                    <li>Home</li>
                  </Link> */}
                    {/* <Link to="/our-work" className="lg:p-0 p-4">
                    <li>Work</li>
                  </Link>
                  <Link to="/our-work" className="lg:p-0 p-4">
                    <li>Solutions</li>
                  </Link>
                  <Link to="/our-industries" className="lg:p-0 p-4">
                    <li>Studio</li>
                  </Link>
                  <Link to="/contact-us" className="lg:p-0 p-4">
                    <li>Contact Us</li>
                  </Link> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

    // <div className="fixed z-50 top-0 w-full ">
    //   <div className="bg-secondary-blue-400 shadow-1xl">
    //     <div className="max-w-6xl m-auto">
    //       <div className=" font-body h-24 flex items-center  ">
    //         <div className="lg:mx-16 mx-6 container  ">
    //           <div className="flex justify-between static">
    //             {/* <div className="hidden lg:flex">
    //               <Link to="/">
    //                 <div className="py-3 lg:py-0">
    //                   <GatsbyImageCustom
    //                     className="w-48 lg:w-40"
    //                     alt="logo Money"
    //                     id={data._rawHdrlogo.asset._ref}
    //                   />
    //                 </div>
    //               </Link>
    //             </div> */}
    //             <div className="flex lg:hidden">
    //               <Link to="/">
    //                 <div className="py-3 lg:py-0 flex lg:hidden justify-start">
    //                   <img className="w-40" alt="logo Money" src={Logo} />
    //                 </div>
    //               </Link>
    //             </div>
    //             <div className="lg:hidden py-2 flex">
    //               <div className="block m-auto ">
    //                 <div
    //                   className="nav-bar-btn"
    //                   onClick={() => {
    //                     setNavBar(!navBar);
    //                   }}
    //                 >
    //                   <span
    //                     className="pr-2 flex items-center"
    //                     style={{ paddingBottom: 3 }}
    //                   >
    //                     <FontAwesomeIcon icon={faBars} />
    //                   </span>
    //                   {/* <span className=" font-medium"> Menu</span> */}
    //                 </div>
    //               </div>
    //             </div>
    //             <div
    //               className={`transition-width transition-height duration-300 ease-in-out ${
    //                 navBar
    //                   ? `w-full h-4/5 opacity-100 bg-secondary-blue-400 nav-open`
    //                   : `w-0 h-0 opacity-0`
    //               } lg:w-auto lg:h-auto opacity-100 nav-bar-container`}
    //             >
    //               <ul className="nav-bar-menu-ul text-sm font-bold">
    //                 {data.mainnavigation.menu_block.map((link) => {
    //                   return link.menu_item_link === null ? (
    //                     <li
    //                       key={link.menu_item_title}
    //                       className="relative group block lg:inline-block  lg:pl-5 text-secondary-orange-400 hover:text-white"
    //                     >
    //                       <div className="nav-bar-has-sublink">
    //                         <div className="cursor-pointer">
    //                           {link.menu_item_title}
    //                         </div>
    //                         <div className="lg:hidden">
    //                           <FontAwesomeIcon icon={faChevronCircleDown} />
    //                         </div>
    //                       </div>
    //                       <div className="nav-bar-sublink-conatiner lg:min-w-200 lg:text-center">
    //                         <ul className=" lg:rounded-b-xl lg:pb-2 px-4">
    //                           {link._rawSubMenuSection.hassubmenu.add_menu_group[0].add_sub_menu_items.map(
    //                             (subLink) => {
    //                               return (
    //                                 <li
    //                                   key={subLink.sub_menu_item_title}
    //                                   className="py-2 z-50  hover:text-secondary-orange-400"
    //                                 >
    //                                   <Link
    //                                     to={subLink.sub_menu_item_link}
    //                                     className="cursor-pointer"
    //                                   >
    //                                     {subLink.sub_menu_item_title}
    //                                   </Link>
    //                                 </li>
    //                               );
    //                             }
    //                           )}
    //                         </ul>
    //                       </div>
    //                     </li>
    //                   ) : (
    //                     <li
    //                       key={link.menu_item_title}
    //                       className="nav-bar-menu "
    //                     >
    //                       <Link
    //                         className="cursor-pointer "
    //                         to={link.menu_item_link}
    //                         activeClassName="text-white md:actve-nav "
    //                       >
    //                         {link.menu_item_title}
    //                       </Link>
    //                     </li>
    //                   );
    //                 })}
    //               </ul>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Header;
