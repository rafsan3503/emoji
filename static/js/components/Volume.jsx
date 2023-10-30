import { useState, useEffect } from "react";
import volumeOpen from "../assets/images/volume-open.png";
import volumeClose from "../assets/images/Volume-off.png";
import mysound2 from "../assets/audio/drum.wav";


// ----------- volume controller ----------- 
const Volume = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [audio] = useState(new Audio(mysound2));

  // 
  useEffect(() => {
    if (audio) {
      audio.volume = 0.06;
      audio.loop = true;
      audio.muted = isChecked;
    };
  }, [audio]); // eslint-disable-next-line

  // 
  const handlePlayPause = () => {
    setIsChecked(!isChecked);
    if (isChecked) {
      audio.pause();
    } else {
      audio.play();
    }
  };

  return (
    <div className="volume-div">
      <img
        onClick={handlePlayPause}
        src={volumeOpen}
        alt=""
        className="loud"
        hidden={!isChecked}
        style={{ display: !isChecked ? "none" : "block" }}
        loading="eager"
      />
      <img
        onClick={handlePlayPause}
        src={volumeClose}
        alt="GIF"
        hidden={isChecked}
        style={{ display: isChecked ? "none" : "block" }}
        loading="eager"
      />
    </div>
  );
};

export default Volume;