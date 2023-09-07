import React, { useEffect, useState } from "react";
import clasess from "./GoTopButton.module.css";
import { FaArrowUp } from "react-icons/fa";

const GoTopButton = () => {
  const [visibel, setVisibel] = useState(false);

  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const listenToScroll = () => {
    let heightToHidden = 350;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHidden) {
      setVisibel(true);
    } else {
      setVisibel(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  return (
    <div id={clasess.main_btn}>
      {visibel && (
        <div className={clasess.top_btn} onClick={goToBtn}>
          <FaArrowUp className={clasess.icon} />
        </div>
      )}
    </div>
  );
};
export default GoTopButton;
