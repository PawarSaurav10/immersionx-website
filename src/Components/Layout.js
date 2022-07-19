import { Link } from "gatsby";
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import logo from "../images/01_screensaver/immersionlogo@2x.png"
// import polofnct from "../js/functions"
// import polojquery from '../js/jquery'
// import poloplugins from '../js/plugins'

const Layout = ({ children }) => {
  const [navBar, setNavBar] = useState(false);
  return (
    <>
      <Helmet>
        {/* <script src={polojquery} />
        <script src={poloplugins} />


        <script src={polofnct} /> */}
        {/* <title>{data.page.meta_title || data.page.title}</title>
        <meta
          property="og:title"
          // content={data.page.meta_title || data.page.title}
        />
        <meta
          name="theme-color"
          content="#144a95"
          media="(prefers-color-scheme: light)"
        />
        <meta
          name="theme-color"
          content="#144a95"
          media="(prefers-color-scheme: dark)"
        />
        <meta name="theme-color" content="#144a95" />
        <meta
          property="twitter:title"
          content={data.page.meta_title || data.page.title}
        />{" "}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
        <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"></meta>
        <meta name="description" content={data.page.meta_desc} />
        <meta property="og:description" content={data.page.meta_desc} />
        <meta property="twitter:description" content={data.page.meta_desc} /> */}
        <script></script>
      </Helmet>
      <div className="body-inner">
        <header
          id="header"
          data-transparent="true"
          data-responsive-fixed="true"
          className="dark"
        >
          <div className="header-inner">
            <div className="container">
              {/* <div id="logo" className="flex items-center justify-center lg:justify-start">
                <Link to="/">
                  <span className="m-2 "><img src={logo} className="h-14 " alt="img" /></span>
                </Link>
              </div>
              <div id="mainMenu-trigger">
                <a className="lines-button x" href="">
                  <span className="lines"></span>
                </a>
              </div>
              <div id="mainMenu">
                <div className="container">
                  <nav>
                    <ul>
                      <li>
                        <Link to="/">Home</Link>
                      </li>
                      <li className="dropdown">
                        <Link to="/our-work">Work</Link>
                      </li>
                      <li className="dropdown">
                        <Link to="/our-industries">Solutions</Link>
                      </li>
                      <li className="dropdown">
                        <Link to="/our-industries">Studio</Link>
                      </li>
                      <li className="dropdown mega-menu-item">
                        <Link to="/contact-us">Contact Us</Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div> */}
              <div className="container shadow-lg">
                <div className="max-w-6xl mx-auto">
                  <div className="flex text-white justify-between font-bold px-4 py-4">
                    <div className="px-6">
                      {/* <Link to="/" className="flex space-x-2"> */}
                      {/* <img src={logo} className="h-14 " alt="img" /> */}
                      <div id="logo" className="flex items-center justify-center lg:justify-start">
                        <Link to="/">
                          <span className="m-2 "><img src={logo} className="h-14 " alt="img" /></span>
                        </Link>
                      </div>
                      {/* <img
                        src={logo}
                        alt="img-1"
                        className="h-12 w-auto md:block hidden"
                      /> */}
                      {/* </Link> */}
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
                            <a className="lines-button x" href="">
                              <span className="lines"></span>
                            </a>
                          </span>
                          {/* <span className="font-medium"> Menu</span> */}
                        </div>
                      </div>
                    </div>
                    <div
                      className={`transition-width transition-height duration-300 ease-in-out ${navBar ? `w-full opacity-100 nav-open` : `w-0 h-0 opacity-0`
                        } lg:w-auto lg:h-auto opacity-100 nav-bar-container bg-secondary-darkblue-500`}
                    >
                      {/* <nav> */}
                      <ul className="flex lg:flex-row flex-col lg:items-center items-start space-x-0 lg:space-x-3 xl:space-x-5 w-full">
                        <li>
                          <Link to="/">Home</Link>
                        </li>
                        <li>
                          <Link to="/our-work">Work</Link>
                        </li>
                        <li>
                          <Link to="/our-industries">Solutions</Link>
                        </li>
                        <li>
                          <Link to="/our-industries">Studio</Link>
                        </li>
                        <li >
                          <Link to="/contact-us">Contact Us</Link>
                        </li>
                      </ul>
                      {/* </nav> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        {children}
        {/* //  Footer  */}
        {/* <footer id="footer">
            <div className="footer-content">
              <div className="container">
                <div className="row">
                  <div className="col-lg-5">
                    <div className="widget">
                      <div className="widget-title">Polo HTML5 Template</div>
                      <p className="mb-5">
                        Built with love in Fort Worth, Texas, USA All rights
                        reserved. Copyright © 2021. INSPIRO.
                      </p>
                      <a
                        href="https://themeforest.net/item/polo-responsive-multipurpose-html5-template/13708923"
                        className="btn btn-inverted"
                        target="_blank"
                      >
                        Purchase Now
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-7">
                    <div className="row">
                      <div className="col-lg-3">
                        <div className="widget">
                          <div className="widget-title">Discover</div>
                          <ul className="list">
                            <li>
                              <a href="#">Features</a>
                            </li>
                            <li>
                              <a href="#">Layouts</a>
                            </li>
                            <li>
                              <a href="#">Corporate</a>
                            </li>
                            <li>
                              <a href="#">Updates</a>
                            </li>
                            <li>
                              <a href="#">Pricing</a>
                            </li>
                            <li>
                              <a href="#">Customers</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-3">
                        <div className="widget">
                          <div className="widget-title">Features</div>
                          <ul className="list">
                            <li>
                              <a href="#">Layouts</a>
                            </li>
                            <li>
                              <a href="#">Headers</a>
                            </li>
                            <li>
                              <a href="#">Widgets</a>
                            </li>
                            <li>
                              <a href="#">Footers</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-3">
                        <div className="widget">
                          <div className="widget-title">Pages</div>
                          <ul className="list">
                            <li>
                              <a href="#">Portfolio</a>
                            </li>
                            <li>
                              <a href="#">Blog</a>
                            </li>
                            <li>
                              <a href="#">Shop</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-3">
                        <div className="widget">
                          <div className="widget-title">Support</div>
                          <ul className="list">
                            <li>
                              <a href="#">Help Desk</a>
                            </li>
                            <li>
                              <a href="#">Documentation</a>
                            </li>
                            <li>
                              <a href="#">Contact Us</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="copyright-content">
              <div className="container">
                <div className="copyright-text text-center">
                  &copy; 2021 POLO - Responsive Multi-Purpose HTML5 Template.
                  All Rights Reserved.
                  <a
                    href="https://www.inspiro-media.com"
                    target="_blank"
                    rel="noopener"
                  >
                    {" "}
                    INSPIRO
                  </a>{" "}
                </div>
              </div>
            </div>
          </footer> */}
        {/* //  end: Footer  */}

      </div>
      {/* //  end: Body Inner  */}
      {/* //  Scroll top  */}

    </>
  );
};

export default Layout;
