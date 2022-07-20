import React from "react";
import Fade from "react-reveal";

const LoaderPage = () => {
  return (
    <div
      style={{
        position: "fixed",
        display: "flex",
        width: "100vw",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 600,
        backgroundColor: "#1E6CA6",
      }}
    >
      <div className="container">
        <div className="text-white text-4xl md:text-7xl lg:text-8xl font-extrabold">
          <Fade big cascade>
            <div className="flex justify-center items-center">
              <Fade top>
                <div className="px-2">I</div>
              </Fade>
              <Fade bottom>
                <div className="px-2">M</div>
              </Fade>
              <Fade top>
                <div className="px-2">M</div>
              </Fade>
              <Fade bottom>
                <div className="px-2">E</div>
              </Fade>
              <Fade top>
                <div className="px-2">R</div>
              </Fade>
              <Fade bottom>
                <div className="px-2">S</div>
              </Fade>
              <Fade top>
                <div className="px-2">I</div>
              </Fade>
              <Fade bottom>
                <div className="px-2">O</div>
              </Fade>
              <Fade top>
                <div className="px-2">N</div>
              </Fade>
              <Fade bottom>
                <div className="px-2">X</div>
              </Fade>
              <Fade top>
                <div className="px-2">...</div>
              </Fade>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default LoaderPage;
