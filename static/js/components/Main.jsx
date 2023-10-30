import Phone from './Phone'
import Volume from './Volume'
import Box from './Box'
import BetwHeadingAndGarbage from './BetwHeadingAndGarbage'
// 
// import title from '../assets/images/Emoji Trash Gang.png'
import subtitle from '../assets/images/No roadmap.png'
import garbage from '../assets/images/garbage2.png'
import Twitter from '../assets/images/Twitter-v3.png'
// import OpenSea from '../assets/images/Opensea.png'
// import Etherscan from '../assets/images/Etherscan.png'
import OutOfOrder from '../assets/images/Out-of-order.png'
import telegram from '../assets/images/Telegram.png'
import garbageMobile from '../assets/images/Trash Pile.png'
import FliesAnimation from './FliesAnimation'
import cloud2 from '../assets/images/Cloud2.png'
import cloud1 from '../assets/images/Cloud1.png'
import cloud3 from '../assets/images/Cloud3.png'
import { useEffect } from 'react'


import emojiImage from "./../assets/images/emojis (1).png"

// ======================= Main ====================
const Main = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="main" style={{ maxWidth: '2060px' }}>
      <div className="top-bar">
        <Phone />
        <Volume />
      </div>
      {/* Round Icon Divs For Mobile View */}
      <div className="mobileRoundIconDivs">
        <div className="twitterMob">
          <a href="https://twitter.com/Emojiscoin" target='blank'>
            <img src={Twitter} alt="" />
          </a>
        </div>
        <div className="openSeaMob">
          <img src={OutOfOrder} alt="" style={{ maxWidth: '115px', }} />
        </div>
        <div className="etherscanMob">
          <a href="https://t.me/Emojiscoin" target='blank'>
            <img src={telegram} style={{ maxWidth: '101px' }} alt="" />
          </a>
        </div>
      </div>
      <div className="title-bar">
        <div>
          {/* <img src={title} alt="title" className="title-img" /> */}
          <div className="emojiImg ">
            <img src={emojiImage} className='title-img' alt="" />
          </div>
        </div>
        <div>
          {/* <img src={subtitle} alt="title" className="subtitle-img" /> */}

          {/* Desktop Slogan */}
          <div className="slogan sloganMob">
            <h4 > No Roadmap - No Utility</h4>
            <h4 > Just Memetic Feels</h4>
          </div>
          {/* Mobile Slogan */}
          <div className="slogan">
            <h4 > No Roadmap - No Utility - Just Memetic Feels</h4>
          </div>
          {/* /////////////// */}

        </div>
      </div>
      {/* mint button  */}
      <BetwHeadingAndGarbage />

      {/* mobile view phone and sound btn  */}
      <div className="top-bar-mob">
        <Phone />
        <Volume />
      </div>
      <div className="bottom-garbage" style={{ maxWidth: '2060px', zIndex: '100' }}>
        <FliesAnimation />
        <Box />
        <a href="https://twitter.com/Emojiscoin" target="blank" rel="noopener noreferrer">
          <div className="twitter">
            <img src={Twitter} alt="" />
          </div>
        </a>
        <a href="/" target="blank" rel="noopener noreferrer">
          <div className="openSea outOfOrder">
            <img src={OutOfOrder} alt="" style={{ maxWidth: '190px', }} />
          </div>
        </a>
        <a href="https://t.me/Emojiscoin" target="blank" rel="noopener noreferrer">
          <div className="etherscan">
            <img src={telegram} style={{ maxWidth: '150px' }} alt="" />
          </div>
        </a>
        <img src={garbage} alt="garbage" className="garbage" />
        <img src={garbageMobile} alt="garbage" className="garbageMob" />
      </div>
      {/* Cloud For Desktop View */}
      <img src={cloud1} alt="" className="cloud1Desktop" />
      <img src={cloud2} alt="" className="cloud2Desktop" />
      <img src={cloud3} alt="" className="cloud3Desktop" />

      {/* CLOUDS FOR MOB VIEW */}
      <img src={cloud1} alt="" className="cloud1" />
      <img src={cloud2} alt="" className="cloud2" />
    </div>
  )
}

export default Main
