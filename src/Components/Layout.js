import { Link } from "gatsby";
import React from "react";
import { Helmet } from "react-helmet";
import logo from "../images/01_screensaver/immersionlogo@2x.png"
// import "../../js/"

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <script src="../../js/jquery.js"></script>
        <script src="../../js/plugins.js"></script>


        <script src="../../js/functions.js"></script>
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
        {/* //  Header  */}
        <header
          id="header"
          data-transparent="true"
          data-responsive-fixed="true"
          className="dark"
        >
          <div className="header-inner">
            <div className="container">
              {/* // Logo */}
              <div id="logo" className="flex items-center justify-center lg:justify-start">
                {/* <a href="/"> */}
                <Link to="/">
                  <span className="m-2 "><img src={logo} className="h-14 " alt="img" /></span>
                  {/* <span className="logo-dark">IMMERTIONX</span> */}
                </Link>
                {/* </a> */}
              </div>
              {/* // End: Logo */}
              {/* // Navigation Resposnive Trigger */}
              <div id="mainMenu-trigger">
                <a className="lines-button x" href="">
                  <span className="lines"></span>
                </a>
              </div>
              {/* // end: Navigation Resposnive Trigger */}
              {/* // Navigation */}
              <div id="mainMenu">
                <div className="container">
                  <nav>
                    <ul>
                      <li>
                        {/* <a> */} <Link to="/">Home</Link>
                        {/* </a> */}
                      </li>
                      <li className="dropdown">
                        <Link to="/our-work">Work</Link>
                        {/* <a href=""></a> */}
                      </li>
                      <li className="dropdown">
                        <Link to="/our-industries">Solutions</Link>
                        {/* <a href="/our-industries">Our Industries</a> */}
                      </li>
                      <li className="dropdown">
                        <Link to="/our-industries">Studio</Link>
                        {/* <a href="/our-industries">Our Industries</a> */}
                      </li>
                      <li className="dropdown mega-menu-item">
                        <Link to="/contact-us">Contact Us</Link>
                        {/* <a href="/">Contact Us</a> */}
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              {/* // end: Navigation */}
            </div>
          </div>
        </header>
        {/* //  end: Header  */}
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
