import './App.css';
import StarfieldAnimation from 'react-starfield-animation'
import pic1 from './assets/spaceAndRocket.svg';
import astronautAndRocket from './assets/astronautAndRocket.svg';
import alienAndUfo from './assets/alienAndUfo.svg';
import satellite from './assets/satellite.svg';
import contract from './assets/contract.svg';
import twitter from './assets/twitter.webp';
import telegram from './assets/telegram.webp';
import reddit from './assets/reddit.webp';

import { motion } from "framer-motion";
import { Simulate } from 'react-dom/test-utils';

function App() {

    //BUTTON ANIMATIONS AND THINGS LIKE THAT ARE A MUST
    //LOOK AT THE ANIMATION LIBRARY I USED BEFORE

    /*
    */

    //forgot to setup typescript lol
    //probably when project is done i should,
    //and also setup SCC to make reusing colors easier cause
    //it is going to get annoying. 
    //but i need a good setup for future projects like a blank template

    // Animate when scrolling? like animate the divs when they become in view, no point doing all on page load

    const tokenName = 'TOKEN NAME';
    const tokenTicker = 'TOKEN TICKER';

    //i wonder how important a roadmap page is, but could add probably really quickly.

    NEXT step is to read infinity dot whitepaper to copy/write down their tokenomics to add to my page
    And copy their how to buy page aswell 
    -need site finished so i can go through smart contract properly
    return (
        <div>
            <StarfieldAnimation
                style={{
                    position: 'absolute',
                    width: '325%',
                    height: '325%'
                }}
            />

            <div className={'headerBar marginBottom1'}>
                <div className='leftDiv'>
                    <p className='name font32' >{tokenName}</p>
                    <p className='ticker font24'>${tokenTicker}</p>

                </div>
                <div className='rightDiv'>
                    <div class='btnContainer'>

                        <a class='linkBtn' href="#tokenomics">Tokenomics</a>
                        <a class='linkBtn' href="#buy">Buy</a>
                        <a class='linkBtn' href="#projectinfo">Info</a>
                        <a class='linkBtn' href="#">Rewards</a>

                    </div>

                    <div class='iconContainer'>
                        <img className='icon' src={twitter} type="image/webp" alt='twitter'></img>
                        <img className='icon' src={telegram} alt='telegram'></img>
                        <img className='icon' src={reddit} alt='reddit'></img>

                    </div>
                </div>

            </div>
            <div className='mainPage'>
                <motion.div className='leftMainPage' initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                    }}>
                    <div id='miniInfoBox'>
                        <ul className='tokenNameandTicker'>
                            <li className='name font24'>{tokenName}</li>
                            <li className='ticker font 18'>${tokenTicker}</li>
                        </ul>
                    </div>

                    <div id='miniTextBlurb'>
                        <p>Sample Text</p>
                        <p>token to go to the moon</p>
                    </div>

                    <div id='buttonDiv'>
                        <motion.button className='purplebutton font24 font' onClick={true} whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}>
                            Tokenomics
                        </motion.button>
                        <motion.button className='purplebutton font24 font' onClick={true} whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}>
                            Swap
                        </motion.button>
                        <motion.button className='purplebutton font24 font' onClick={true} whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}>
                            Roadmap
                        </motion.button>
                        <motion.button className='purplebutton font24 font' onClick={true} whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}>
                            Community
                        </motion.button>
                        <motion.button className='purplebutton font24 font' onClick={true} whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}>
                            Chart
                        </motion.button>
                    </div>
                </motion.div>

                <div className='rightMainPage'>
                    <div className='imageBox'>
                        <img src={pic1} alt='na' />
                    </div>

                    {/* <div id='rightTextBlurb'>
                        <p>Hello this is just filler</p>
                        <p>filler text filler text</p>
                    </div> */}
                </div>
            </div>

            <div className='TokenomicsPage' id='tokenomics'>
                <div className={'headerBar marginTop1 marginBottom1'}>
                    <p className='font32 font padding1'>Tokenomics</p>
                </div>
                <div className='tokenomicsData'>
                    <div className='left'>
                        <div className='imageBox'>
                            <img src={astronautAndRocket} alt='na' />
                        </div>
                    </div>
                    <motion.div className='right' initial={{ opacity: 0 }}
                        animate={{
                            opacity: 1,
                        }}>
                        <div>
                            <p>{tokenName}</p>
                            <p>{tokenTicker}</p>
                            <p>editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their i</p>
                            <p>Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p>
                            <p>electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages</p>
                        </div>

                        <motion.button className='purplebutton font24 font' whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}>
                            Buy Now
                        </motion.button>
                    </motion.div>
                </div>

            </div>

            <div className='HowToBuy' id='buy'>
                <div className={'headerBar marginTop1 marginBottom1'}>
                    <p className='font32 font padding1'>How To Buy</p>
                </div>
                <div className='howToBuyData'>
                    <div className='left padding2'>
                        <p className='font24'>{tokenTicker}</p>
                        <p className='font18'>editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their i</p>
                        <p className='font18'>Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p>
                        <p className='font18'>electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages</p>
                        <motion.button className='purplebutton font24 font' onClick={true} whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}>
                            Buy Now
                        </motion.button>
                    </div>

                    <div className='right'>
                        <div className='imageBox'>
                            <img src={alienAndUfo} alt='na' />
                        </div>
                    </div>
                </div>
            </div>

            <div className='projectInfo' id='projectinfo'>
                <div className={'headerBar marginTop1 marginBottom1'}>
                    <p className='font32 font padding1'>Contract and Project Info</p>
                </div>
                <div className='projectInfoData'>
                    <div className='top'>
                        <div className='left'>
                            <div className='imageBox marginLeft2'>
                                <img src={contract} alt='na' />
                            </div>
                        </div>

                        <div className='right'>
                            <p className='font24'>Contract</p>
                            <p className='font18'>very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32</p>
                            <motion.button className='purplebutton font24 font' onClick={true} whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}>
                                View Contract
                            </motion.button>
                        </div>
                    </div>

                </div>

            </div>
            <div className={'footer marginTop1'}>
                <div className='bottom'>
                    <div>
                        <p className='font24'>Twitter</p>
                        <p className='font24'>Reddit</p>
                        <p className='font24'>Telegram</p>
                    </div>
                    <div className='marginRight2'>
                        <img src={satellite} alt='na' />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default App;
