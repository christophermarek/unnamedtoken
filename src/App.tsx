import './App.scss';
// @ts-ignore
import StarfieldAnimation from 'react-starfield-animation'
import pic1 from './assets/spaceAndRocket.svg';
import logo from './assets/logo.png';
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

    const tokenName = 'Astral Pepe';
    const tokenTicker = '$ELONMOON';

    //i wonder how important a roadmap page is, but could add probably really quickly.

    // -need site finished so i can go through smart contract properly'
    //unvaxxed sperm has a nice page i can copy too
    // copy their faq too.

    // mobile view is needed aswell.

    // REMOVE 12 month lock on liquidity pool. They say they have one in the whitepaper, i think i have to make the lp myself
    // and attach the wallet

    // when name picked need a site title


    // USE CSS GRID WHERE I CAN SO I KNOW HOW TO DO IT
    
    const infoBox = [
        ['Download & setup MetaMask or TrustWallet',
            'Download MetaMask (a crypto wallet in the form of a browser extension) or TrustWallet (an app for your phone). After that, you will have to add the Binance Smart Chain to your network-list. (Click here for a step-by-step tutorial). they include 3 hyperlinks on their page in this textbox'],
        ['Buy and send BNB to Metamask or TrustWallet',
            'Buy BNB on an exchange (i.e. Binance, Kraken, Coinbase etc.). Transfer the tokens to your MetaMask wallet address. BEP-20 addresses start with a "0x".'],
        ['Head over to our Swap to buy InfinityDOT',
            'Click here to go to PancakeSwap. Use our contract address to import token: 0x73b96Ac0814EAfF828779De589840d1172aaAa70. Set the slippage tolerance to 18% (sometimes it may be 20%, depending on how much demand there is).'],
        ['View InfinityDOT and HODL',
            'Swap BNB for InfinityDOT. Now you need to add InfinityDOT contract address to your MetaMask or Trust Wallet to view your InfinityDOT. Lastly, HODL!']]

    const features = [
        ['Dividends',
            '11% of every buy/sell is taken and redistributed to all holders. Hold InfinityDOT tokens and earn Polkadot. A Minimum of 200,000 tokens is required in order to receive rewards.'],
        ['Buy Back',
            'Every time the price drops, our team will use the buyback wallet to raise and maintain the currency on an upward trend. When there is no need for buyback, the funds are being used for marketing.'],
        ['Auto Pay',
            'You don’t need to claim your earned Polkadot. It’s automatically sent to your wallet. Note: in periods of lower volume, this may take longer, but you always receive your Polkadot.']
    ]

    // ROadmap
    // - coinmarketcap listing 25% token burn
    // coingecko listing
    // - contract audit
    // - marketing campaign
    // whitepaper
    // - meme contests
    // exchange listings
    // airdrop campaign
    // nft marketplace

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
                        <p>About InfinityDOT
                            InfinityDOT is the first Polkadot reflection token running on Binance Smart Chain. Simply hold tokens and get rewarded automatically in Polkadot on every transaction.

                            With the auto-claim feature, you will receive DOT automatically in your wallet.

                            Tax distribution: 11% Holders, 2% BuyBack, 2% Liquidity
                        </p>
                    </div>

                    <div id='buttonDiv'>
                        <motion.button className='purplebutton font24 font' onClick={undefined} whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}>
                            Buy
                        </motion.button>
                        <motion.button className='purplebutton font24 font' onClick={undefined} whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}>
                            Chart
                        </motion.button>
                        <motion.button className='purplebutton font24 font' onClick={undefined} whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}>
                            Community
                        </motion.button>
                    </div>
                </motion.div>

                <div className='rightMainPage'>
                    <div className='imageBox'>
                        <img src={logo} alt='na' />
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
                            <p>{tokenName} Tokenomics</p>
                            <p>{tokenTicker}</p>


                            <p>Total supply: 1.000.000.000.000.000</p>
                            <p>There is a 15% buy tax.An extra 1% fee is applied to all sales to
                                encourage holding, discourage swing trading and to lessen whale
                                manipulation.At times, our tokenomics may change in response to
                                market conditions.</p>

                            <p>The token contract employs a static rewards system.The 15% buy
                                tax is split as follows:
                                11% is redistributed to holders
                                2% is used to fuel the liquidity pool
                                2% is allocated to the Marketing wallet
                            </p>
                            <p>
                                Token supply:
                                50% burned, what if we keep a burn wallet and schedule a burn every week until depleted?
                                2% team
                                20% liquidity pool
                                25% presale
                                3% marketing
                            </p>
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
                    <div className='padding2'>
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
                                                <div className='buyBox'>
                                                    <div className='imageBox'>
                                                        <img src={alienAndUfo} alt='na' />
                                                    </div>
                                                </div>
                                            </>
                                        )
                                        :
                                        (
                                            <>
                                                <div className='buyBox'>
                                                    <div className='imageBox'>
                                                        <img src={alienAndUfo} alt='na' />
                                                    </div>
                                                </div>
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

                </div>
            </div>

            <div className='projectInfo' id='projectinfo'>
                <div className={'headerBar marginTop1 marginBottom1'}>
                    <p className='font32 font padding1'>Token Info</p>
                </div>
                <div className='projectInfoData'>
                    <div className='top'>
                        <div className='left'>
                            <div className='imageBox marginLeft2'>
                                <img src={contract} alt='na' />
                            </div>
                        </div>

                        <div className='right'>
                            {features.map((entry, index) =>
                                <div className='featureBox'>
                                    <p className='font22'>{entry[0]}</p>
                                    <p className='font18'>{entry[1]}</p>
                                </div>
                            )}
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
