import React, { useEffect } from 'react'
import './style.css'
import emojiImage from "./../assets/images/emojis (1).png"
import coinImage from "./../assets/images/coin.png"
import Bar1 from "./../assets/images/Bar1.png"
import Bar2 from "./../assets/images/Bar2.png"
import Bar3 from "./../assets/images/Bar3.png"
import Bar4 from "./../assets/images/Bar4.png"
import Bar5 from "./../assets/images/Bar5.png"
import backIcon from "./../assets/images/Back-icon.png"
import { useNavigate } from 'react-router-dom'

const Mint = () => {
    const navigate = useNavigate()
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className='mainMintPage'>
            <div className="mintPageContent">
                <h1 className="tokenomics">Tokenomics</h1>
                <div className="emojiImg">
                    <img src={emojiImage} alt="" />
                </div>
                <div className="backIcon">
                    <img src={backIcon} className='backIcon' onClick={() => navigate('/')} alt="" />
                </div>
                <div className="bottomContent">
                    <div className="coinDiv">
                        <div className="coinImgDiv">
                            <img src={coinImage} alt="" />
                        </div>
                        <div className="coinTextDiv">
                            <h4>Official $Emojis</h4>
                            <h4 className='coinCOde'>0x660c217Eedd9866a420Adc8eA2eb9D5eAaa8ed21</h4>
                        </div>
                    </div>
                    <div className="barsAndHeadingsBoxes">

                        <div className="allHeadingWithTextBoxes-left">
                            <div className="suplyBox">
                                <h2>SUPPLY</h2>
                                <p>The total unlocked supply is 99B (99,000,000,000 $EMOJIS) </p>
                            </div>
                            <div className="community">
                                <h2>COMMUNITY</h2>
                                <p>The community will purchase 55% of the total supply during the presale. To help avoid unfair token distribution we have capped the contribution amount at 0.25 Ξ per address
                                </p>
                            </div>
                            <div className="presaleBox">
                                <h2>PRESALE</h2>
                                <p>The softcap will be 25 Ξ, the hardcap will be 50 Ξ </p>
                            </div>
                            <div className="presalePrice">
                                <h2>PRESALE PRICE</h2>
                                <p>1 ETH -] 1,110,000,000,000 <br />
                                    Min buy 0.025 Ξ <br />
                                    Max buy 0.25 Ξ </p>
                            </div>
                        </div>
                        {/* All Bars Div right side */}
                        <div className="allBars-right">
                            <div className="barDiv presale">
                                <div className="percentDiv">
                                    <h4>PRESALE</h4>
                                    <h4 className='percentText' >55%</h4>
                                </div>
                                <img src={Bar1} alt="" />
                            </div>
                            <div className="barDiv liquidity">
                                <div className="percentDiv">
                                    <h4>LIQUIDITY POOL</h4 >
                                    <h4 className='percentText' >33%</h4>
                                </div>
                                <img src={Bar2} alt="" />
                            </div>
                            <div className="barDiv airdrop">
                                <div className="percentDiv">
                                    <h4>AIRDROP</h4>
                                    <h4 className='percentText' >2%</h4>
                                </div>
                                <img src={Bar3} alt="" />
                            </div>
                            <div className="barDiv team">
                                <div className="percentDiv">
                                    <h4>TEAM</h4>
                                    <h4 className='percentText' >5%</h4>
                                </div>
                                <img src={Bar4} alt="" />
                            </div>
                            <div className="barDiv adv">
                                <div className="percentDiv">
                                    <h4>Marketing</h4>
                                    <h4 className='percentText' >5%</h4>
                                </div>
                                <img src={Bar5} alt="" />
                            </div>
                        </div>
                        {/* All Bars Div right side */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mint

