import React, { useEffect, useState } from "react";
// import Logo from "../images/01_screensaver/immersionlogo@2x.png";
// import Logo from "../images/01_screensaver/immersionlogo.png";
// import Logo from "../images/01_screensaver/newlogo.png";
import Logo from "../images/01_screensaver/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  // faBars,
  faBarsStaggered,
  faClose,
  faAngleUp,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "gatsby";

const Header = (props) => {
  const [hideTopBar, setHideTopBar] = useState("bg-transparent");
  const [navBar, setNavBar] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      // console.log("third")
      if (window.pageYOffset > 299) {
        // console.log("first")
        setHideTopBar("bg-black");
        setVisible(true);
      } else {
        // console.log("second")
        setHideTopBar("bg-transparent");
        setVisible(false);
      }
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };

  return (
    <>
      <div className={`${hideTopBar} fixed z-50 w-full`}>
        <div className="container">
          <div className="flex text-white justify-between font-bold py-4">
            <div className=" self-center px-3">
              <Link to="/" className="flex space-x-2">
                <img src={Logo} className="h-12 " alt="img" />
              </Link>
            </div>

            <div className="py-2 flex">
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
                  <span className="text-white font-semibold text-xl pr-3 uppercase">
                    Menu
                  </span>
                  {!navBar && (
                    <span
                      className="pr-2 flex items-center"
                      style={{ paddingBottom: 3 }}
                    >
                      <FontAwesomeIcon
                        icon={faBarsStaggered}
                        className="h-9 w-8"
                        style={{ color: "#F8625C" }}
                      />
                    </span>
                  )}
                  {navBar && (
                    <span
                      className="pr-2 flex items-center close_btn"
                      style={{ paddingBottom: 3 }}
                    >
                      <FontAwesomeIcon icon={faClose} className="h-9 w-8" style={{ color: "#F8625C" }}/>
                    </span>
                  )}
                </div>
              </div>
              <div className="height-full-viewport">
                <div
                  className={`w-full ${
                    navBar
                      ? `opacity-100 dropdown_header overflow-hidden`
                      : `close_dropdown_header overflow-hidden`
                  } flex-col nav-bar-container bg-black `}
                >
                  <div className="container">
                    <div className="flex text-white justify-between font-bold py-4">
                      <div className="self-center px-6">
                        <Link to="/" className="flex space-x-2">
                          <img src={Logo} className="h-12 " alt="img" />
                        </Link>
                      </div>
                      <div className="py-2 flex">
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
                            <span className="text-white font-semibold text-xl pr-3 uppercase">
                              Menu
                            </span>
                            {!navBar && (
                              <span
                                className="pr-2 flex items-center"
                                style={{ paddingBottom: 3 }}
                              >
                                <FontAwesomeIcon
                                  icon={faBarsStaggered}
                                  className="h-9 w-8"
                                  style={{ color: "#F8625C" }}
                                  // size={"2xl"}
                                />
                              </span>
                            )}
                            {navBar && (
                              <span
                                className="pr-2 flex items-center close_btn"
                                style={{ paddingBottom: 3 }}
                              >
                                <FontAwesomeIcon
                                  icon={faClose}
                                  className="h-9 w-8"
                                  style={{ color: "#F8625C" }}
                                />
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 flex justify-center items-center">
                    <ul className="">
                      <li className="navbar nav-bar-menu text-center hover:scale-110 transition-all ">
                        <Link
                          className="cursor-pointer "
                          to="/"
                          onClick={() => {
                            setNavBar(!navBar);
                          }}
                        >
                          <span className="nav-bar-menu-span link ">Home</span>
                        </Link>
                      </li>
                      <li className="navbar nav-bar-menu text-center hover:scale-110 transition-all ">
                        <Link
                          className="cursor-pointer "
                          to={props.data === "/" ? "#about-us" : "/#about-us"}
                          onClick={() => {
                            setNavBar(!navBar);
                          }}
                        >
                          <span className="nav-bar-menu-span link ">
                            About Us
                          </span>
                        </Link>
                      </li>

                      <li className="navbar nav-bar-menu text-center hover:scale-110 transition-all">
                        <Link
                          className="cursor-pointer"
                          to="/our-work/"
                          onClick={() => {
                            setNavBar(!navBar);
                          }}
                        >
                          <span className="nav-bar-menu-span link">Work</span>
                        </Link>
                      </li>
                      <li className="navbar nav-bar-menu text-center hover:scale-110 transition-all ">
                        <Link
                          className="cursor-pointer "
                          to={props.data === "/" ? "#solutions" : "/#solutions"}
                          onClick={() => {
                            setNavBar(!navBar);
                          }}
                        >
                          <span className="nav-bar-menu-span link">
                            Solutions
                          </span>
                        </Link>
                      </li>
                      <li className="navbar nav-bar-menu text-center hover:scale-110 transition-all ">
                        <Link
                          className="cursor-pointer "
                          to="/application"
                          onClick={() => {
                            setNavBar(!navBar);
                          }}
                        >
                          <span className="nav-bar-menu-span link">
                            Applications
                          </span>
                        </Link>
                      </li>
                      <li className="navbar nav-bar-menu text-center hover:scale-110 transition-all ">
                        <Link
                          className="cursor-pointer "
                          to={props.data === "/" ? "#studio" : "/#studio"}
                          onClick={() => {
                            setNavBar(!navBar);
                          }}
                        >
                          <span className="nav-bar-menu-span link">Studio</span>
                        </Link>
                      </li>
                      <li className="navbar nav-bar-menu text-center hover:scale-110 transition-all ">
                        <Link
                          className="cursor-pointer "
                          to="/careers"
                          onClick={() => {
                            setNavBar(!navBar);
                          }}
                        >
                          <span className="nav-bar-menu-span link">
                            Careers
                          </span>
                        </Link>
                      </li>
                      <li className="navbar nav-bar-menu text-center hover:scale-110 transition-all ">
                        <Link
                          className="cursor-pointer "
                          to="/contact-us"
                          onClick={() => {
                            setNavBar(!navBar);
                          }}
                        >
                          <span className="nav-bar-menu-span link">
                            Contact
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        {visible && (
          <button
            onClick={scrollToTop}
            className="animate-bounce transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200 rounded-full h-10 w-10 md:h-14 md:w-14 text-right right-6 md:right-16 bottom-6 md:bottom-12 bg-regal-red hover:bg-red-500"
            style={{
              position: "fixed",
              zIndex: 1,
              cursor: "pointer",

              //   color: "green",
            }}
          >
            <FontAwesomeIcon
              icon={faAngleUp}
              className="h-6 w-6 mr-2 md:h-8 md:w-8 md:mr-3 text-white"
            />
          </button>
        )}
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
