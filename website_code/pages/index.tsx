/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import { motion } from "framer-motion";
import dynamic from 'next/dynamic';
import { useMediaQuery } from 'react-responsive';

import { MainBox } from '../components/mainBox';
import { TokenomicsBox } from '../components/tokenomicsBox';
import { HowToBuyBox } from '../components/howToBuyBox';
import { ProjectInfoBox } from '../components/projectInfoBox';

const Home: React.FC = ({ }) => {

    const twitter = 'twitter.png';
    const telegram = 'telegram.png';
    const logo = 'logo.png';
    const astronautAndRocket = 'astronaut.png';
    const bnbmetamask = 'bnbmetamask.png';
    const metamaskdownload = 'metamaskdownload.png';
    const bnbswap = 'bnbswap.png';
    const buyandhold = 'buyandhold.png';
    const pinkpepe = 'pinkalien.png';

    // @ts-ignore
    const StarfieldAnimation = dynamic(import('react-starfield-animation'), { ssr: false });

    const tokenName = 'Placeholder Name';
    const tokenTicker = 'Placeholder Ticker';

    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' });

    // Animate when scrolling? like animate the divs when they become in view, no point doing all on page load

    //i wonder how important a roadmap page is, but could add probably really quickly.

    //unvaxxed sperm has a nice page i can copy too
    // copy their faq too.

    // mobile view is needed aswell.

    // when name picked need a site title

    // Add seo head for next

    // header onhover shouldnt turn black but grey

    // Add text affect

    // I think anti whale is good because I cant buy a lot myself. So i force it to be a community coin with lots of small holders,
    // "by design" because i dont have a large balance to begin buying. anti whale mechanic, but whales could just create more wallets.
    // Can have a max wallet size calculation, showing current stats

    // add glowing effect for text and images


    const infoBox = [
        ['Download & setup MetaMask or TrustWallet',
            'Download MetaMask (a cryptfo wallet in the form of a browser extension) or TrustWallet (an app for your phone). After that, you will have to add the Binance Smart Chain to your network-list. (Click here for a step-by-step tutorial). they include 3 hyperlinks on their page in this textbox',
            metamaskdownload],
        ['Buy and send BNB to Metamask or TrustWallet',
            'Buy BNB on an exchange (i.e. Binance, Kraken, Coinbase etc.). Transfer the tokens to your MetaMask wallet address. BEP-20 addresses start with a "0x".',
            bnbmetamask],
        ['Head over to our Swap to buy InfinityDOT',
            'Click here to go to PancakeSwap. Use our contract address to import token: 0x73b96Ac0814EAfF828779De589840d1172aaAa70. Set the slippage tolerance to 18% (sometimes it may be 20%, depending on how much demand there is).',
            bnbswap],
        ['View InfinityDOT and HODL',
            'Swap BNB for InfinityDOT. Now you need to add InfinityDOT contract address to your MetaMask or Trust Wallet to view your InfinityDOT. Lastly, HODL!',
            buyandhold]]

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
    // nft marketplace (hpsoi has one)

    const floatingIcons = () => {
        return (
            <div className='iconContainer'>
                <img className='icon' src={twitter} alt='twitter'></img>
                <img className='icon' src={telegram} alt='telegram'></img>
            </div>
        )
    }

    const topHeader = (isPortrait: boolean) => {
        return (
            <div className={'headerBar marginBottom1'}>
                <div className={'leftDiv'}>
                    <p className='name font32' >{tokenName}</p>
                </div>
                <div className={'rightDiv'}>
                    <a className='linkBtn' href="#tokenomics">Tokenomics</a>
                    <a className='linkBtn' href="#buy">Buy</a>
                    <a className='linkBtn' href="#projectinfo">Info</a>
                    <a className='linkBtn' href="#">Roadmap</a>
                    <a className='linkBtn' href="#">Chart</a>
                </div>
            </div>
        )
    }

    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="width=device-width,initial-scale=1"/>
            </Head>

            <div>
                {floatingIcons()}
                {isPortrait ?

                    (
                        <>
                            {topHeader(true)}
                            <StarfieldAnimation numParticles={600} style={{ position: 'absolute', width: '100vw', height: '425vh' }} />
                            <MainBox tokenName={tokenName} tokenTicker={tokenTicker} src_logo={logo} />
                            <TokenomicsBox tokenName={tokenName} tokenTicker={tokenTicker} astronautAndRocket={astronautAndRocket} />
                            <HowToBuyBox infoBox={infoBox} />
                            <ProjectInfoBox pinkpepe={pinkpepe} features={features} />
                        </>
                    )
                    :
                    (
                        <>
                            {topHeader(false)}
                            <StarfieldAnimation numParticles={600} style={{ position: 'absolute', width: '100vw', height: '425vh' }} />
                            <MainBox tokenName={tokenName} tokenTicker={tokenTicker} src_logo={logo} />
                            <TokenomicsBox tokenName={tokenName} tokenTicker={tokenTicker} astronautAndRocket={astronautAndRocket} />
                            <HowToBuyBox infoBox={infoBox} />
                            <ProjectInfoBox pinkpepe={pinkpepe} features={features} />
                        </>
                    )

                }
            </div>

        </div >
    )
}

export default Home
