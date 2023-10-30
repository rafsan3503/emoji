import { useState } from "react";
import box1 from "../assets/images/Box-v3.gif";
import box3 from "../assets/images/Emoji-pop-up-v4.gif";


// ------------------- Box open animation ----------------
const Box = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [done, setDone] = useState(false);
  // const [url, setUrl] = useState("");
  // 
  let tlm = null;
  // 
  const handleMouseEnter = () => {
    clearTimeout(tlm);
    if (isHovering || done) {
      return
    };
    setIsHovering(true);
    setDone(true);
    // setUrl("?"+ new Date().getTime());
    handleCLoseGif();
  };

  // 
  const handleCLoseGif = () => {
    // let time = 1800
    let time = window.innerWidth <= 768 ? 1800 : 1800
    tlm = setTimeout(() => {
      setIsHovering(false);
      clearTimeout(tlm);
      if (window.innerWidth <= 768) {
        setDone(false);
      }
    }, time);
  };

  const handleMouseOver = () => {
    if (window.innerWidth <= 768) return;
    handleMouseEnter();
  };
  return (
    <div className="box-div" id="outer-box">
      {isHovering ? <img
        src={box3}
        // src={box3+url}
        alt="GIFhover"
        loading="eager"
        height=""
        width=""
        hidden={!isHovering}
      />
        :
        <img
          src={box1}
          alt="GIF"
          hidden={isHovering}
        />}
      <div
        onMouseLeave={() => { setDone(false); }}
        onMouseOver={handleMouseOver}
        onClick={handleMouseEnter}
        className="box-overlay"></div>
    </div>
  );
};

export default Box;

