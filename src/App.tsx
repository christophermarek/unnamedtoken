import './App.scss';
// @ts-ignore
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

function App() {

    // need next.js to, that should be my default template for projects like this I am wasting a lot of time doing it mid project

    // Animate when scrolling? like animate the divs when they become in view, no point doing all on page load

    const tokenName = 'TOKEN NAME';
    const tokenTicker = 'TOKEN TICKER';

    // FIVER MARKETING CAN pay 5$ for a marketing campaign from india or something lol
    //i wonder how important a roadmap page is, but could add probably really quickly.

    // NEXT step is to read infinity dot whitepaper to copy/write down their tokenomics to add to my page
    // And copy their how to buy page aswell 
    // -need site finished so i can go through smart contract properly'
    //unvaxxed sperm has a nice page i can copy too
    // copy their faq too.
    // https://www.reddit.com/r/CryptoMoonShots/comments/rbfn9f/be_the_goat_get_rewarded_in_doge_shib_by_holding/
    //this one has a contract we can look at aswell.
    // mobile view is needed aswell.

    // REMOVE 12 month lock on liquidity pool. They say they have one in the whitepaper


    const infoBox = [
        ['Download & setup MetaMask or TrustWallet',
            'Download MetaMask (a crypto wallet in the form of a browser extension) or TrustWallet (an app for your phone). After that, you will have to add the Binance Smart Chain to your network-list. (Click here for a step-by-step tutorial). they include 3 hyperlinks on their page in this textbox'],
        ['Buy and send BNB to Metamask or TrustWallet',
            'Buy BNB on an exchange (i.e. Binance, Kraken, Coinbase etc.). Transfer the tokens to your MetaMask wallet address. BEP-20 addresses start with a "0x".'],
        ['Head over to our Swap to buy InfinityDOT',
            'Click here to go to PancakeSwap. Use our contract address to import token: 0x73b96Ac0814EAfF828779De589840d1172aaAa70. Set the slippage tolerance to 18% (sometimes it may be 20%, depending on how much demand there is).'],
        ['View InfinityDOT and HODL',
            'Swap BNB for InfinityDOT. Now you need to add InfinityDOT contract address to your MetaMask or Trust Wallet to view your InfinityDOT. Lastly, HODL!'],
        ['Add the Polkadot Token address to see your Rewards as they are delivered',
            'The reward will be generated automatically, it is not necessary to add the Polkadot address to receive the reflection. Just add to see the amount of generated Polkadot. Token Address: 0x7083609fce4d1d8dc0c979aab8c869ea2c873402']
    ]

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
                    <div className='btnContainer'>

                        <a className='linkBtn' href="#tokenomics">Tokenomics</a>
                        <a className='linkBtn' href="#buy">Buy</a>
                        <a className='linkBtn' href="#projectinfo">Info</a>
                        <a className='linkBtn' href="#">Rewards</a>
                        <a className='linkBtn' href="#">Chart</a>


                    </div>

                    <div className='iconContainer'>
                        <img className='icon' src={twitter} alt='twitter'></img>
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
                        <motion.button className='purplebutton font24 font' onClick={undefined} whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}>
                            Tokenomics
                        </motion.button>
                        <motion.button className='purplebutton font24 font' onClick={undefined} whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}>
                            Swap
                        </motion.button>
                        <motion.button className='purplebutton font24 font' onClick={undefined} whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}>
                            Roadmap
                        </motion.button>
                        <motion.button className='purplebutton font24 font' onClick={undefined} whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}>
                            Community
                        </motion.button>
                        <motion.button className='purplebutton font24 font' onClick={undefined} whileHover={{ scale: 1.1 }}
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
                        <div className='howtobuyContainerContainer'>
                            {infoBox.map((entry, index) =>
                                <div className='howtobuycontainer'>
                                    {index % 2 === 0 ?
                                        (
                                            <>
                                                <div className='buyBox' key={index}>
                                                    <p className='font22'>{entry[0]}</p>
                                                    <p className='font18'>{entry[1]}</p>
                                                </div>
                                                <div className='buyBox'></div>
                                            </>
                                        )
                                        :
                                        (
                                            <>
                                                <div className='buyBox'></div>
                                                <div className='buyBox' key={index}>
                                                    <p className='font22'>{entry[0]}</p>
                                                    <p className='font18'>{entry[1]}</p>
                                                </div>
                                            </>
                                        )
                                    }
                                </div>
                            )}
                        </div>
                        <motion.button className='purplebutton font24 font' onClick={undefined} whileHover={{ scale: 1.1 }}
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
                            <motion.button className='purplebutton font24 font' onClick={undefined} whileHover={{ scale: 1.1 }}
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
