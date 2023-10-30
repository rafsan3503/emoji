import { useState } from 'react'
import phoneGif from '../assets/images/Phone-v2.gif'
import phoneHover from '../assets/images/phone-v2-pickedup.jpg'
// import phoneHover from '../assets/images/Phone.png'
import crossIcon from '../assets/images/crossIcon.png'

// ------------------ Phone with notification model -------------------------
const Phone = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [firstRender, setFirstRender] = useState(true);

  // 
  const handleMouseEnter = () => {
    setIsHovering(true);
    setFirstRender(false);
    let ele = document.getElementById("message-wrapper");
    if (ele) {
      ele.scrollTop = 0
    }
  };

  return (
    <div className="phone-div" onMouseLeave={() => setIsHovering(false)}>
      <img
        src={phoneGif}
        alt="GIF"
        autoPlay
        onMouseEnter={handleMouseEnter}
        className="phoneGif"
        // style={{display: isHovering ? "none" : "1"}}
        hidden={isHovering}
      />
      <img
        src={phoneHover}
        alt="GIF"
        autoPlay
        className="phoneGif"
        hidden={!isHovering}
      // style={{opacity: !isHovering ? "0" : "1"}}
      />
      {window.innerWidth > 768 ? <div className={`hoverText ${isHovering ? 'show headerANimation' : !firstRender ? 'hideMessage' : ""}`}>
        <div id="message-wrapper" className="message-wrapper ">

          <p>Greetings, Anon! What's this you've stumbled upon? Some niche corner of internet culture or just another memecoin? We can't answer that, $EMOJIS has no roadmap and makes no promises... so strap yourself in and get ready for the ride. Or don't, we don't care 🙂
            <br />
            <br />
            Oh, and if you missed out on meme season, don't worry. Just hold onto your $Emojis for the next phase. #MakeNFTsGreatAgain.
          </p>
        </div>
      </div> : null}
      {/* Modal on Phone Hover For Mobile View*/}
      {isHovering && window.innerWidth <= 768 && (
        <div onBlur={() => setIsHovering(false)} className="mobileHover">
          <div className="cross">
            <img src={crossIcon} alt="" onClick={() => setIsHovering(false)} />
          </div>
          <div id="message-wrapper" className="message-wrapper">
            {/* <p>
              Unfortunately this gang of Emojis were too trash to make it onto the famous keyboard. They missed out on generational wealth…
              <br /> Just like you.
              <br />
              <br />
              Somehow they found a new home on the Ethereum Blockchain with other low lifers and degens.
           <br />
           <br />
           #trashgang
            </p> */}
            <p>
              Greetings, Anon! What's this you've stumbled upon? Some niche corner of internet culture or just another memecoin? We can't answer that, $EMOJIS has no roadmap and makes no promises... so strap yourself in and get ready for the ride. Or don't, we don't care 🙂

            </p>
            <br />
            <p>
            Oh, and if you missed out on meme season, don't worry. Just hold onto your $Emojis for the next phase. #MakeNFTsGreatAgain</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Phone
