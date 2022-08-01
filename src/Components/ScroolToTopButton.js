import {
  faAngleUp,
  faChevronCircleUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";

const ScroolToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      if (window.pageYOffset > 299) {
        console.log(window.pageYOffset, "true");
        setVisible(true);
      } else {
        console.log(window.pageYOffset, "false");
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
    <div>
      {visible && (
        <button
          onClick={scrollToTop}
          className="animate-bounce transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200 rounded-full h-10 w-10 md:h-14 md:w-14 text-right right-6 md:right-16 bottom-6 md:bottom-12 bg-blue-500 hover:bg-blue-900"
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
  );
};

export default ScroolToTopButton;
