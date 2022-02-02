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

    // Need to force an any type because it has no definition
    // @ts-ignore
    const StarfieldAnimation: any = dynamic(() => import('react-starfield-animation'), { ssr: false });

    const tokenName = 'GALAXY PEPE';
    const tokenTicker = 'GALAXY';

    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' });

    //i wonder how important a roadmap page is, but could add probably really quickly.

    //unvaxxed sperm has a nice page i can copy too
    // copy their faq too.

    // when name picked need a site title

    // dust attack to get listed on cmc and can get recognition 

    // header onhover shouldnt turn black but grey

    // I think anti whale is good because I cant buy a lot myself. So i force it to be a community coin with lots of small holders,
    // "by design" because i dont have a large balance to begin buying. anti whale mechanic, but whales could just create more wallets.
    // Can have a max wallet size calculation, showing current stats

    // add glowing effect for text and images

    // Wny you want a token burn
    // It also inflates market cap and makes it appear more valuable. 90% burn inflates market cap 10x.

    // add Google analytics aswell, important to track website and airdrop

    // pepe cursor

    const infoBox = [
        ['Download & setup MetaMask',
            'Download MetaMask and add the Binance Smart Chain to your network-list.',
            metamaskdownload],
        ['Buy and send BNB to Metamask',
            'Buy BNB on an exchange (i.e. Binance, Kraken, Coinbase etc.). Transfer the tokens to your MetaMask wallet address.',
            bnbmetamask],
        ['Head over to our Swap to buy Galaxy Pepe',
            'Click here to go to PancakeSwap. Use our contract address to import token.',
            bnbswap],
        ['Add Galaxy Pepe contract to metamask to view balance',
            'Swap BNB for Galaxy Pepe. Now you need to add Galaxy Pepe contract address to your MetaMask to view your Galaxy Pepe.',
            buyandhold]]

    const features = [
        ['Token Burn',
            '1 Quadrillion total supply with a 50% token burn on launch.'],
        ['Anti-Whale',
            'Max Wallet size of 5% of total supply to prevent whales from manipulating the price.'],
        ['Auto-Pay',
            'You don’t need to claim your earned Galaxy Pepe. It’s automatically sent to your wallet.'],
        ['Team and Project',
            'The token team is working hard to get the coin listed on major exchanges, and is focusing on an agressive marketing campaign to grow the community']

    ]

    // Roadmap
    // - coinmarketcap listing 25% token burn
    // coingecko listing
    // - contract audit
    // - marketing campaign
    // whitepaper
    // - meme contests
    // exchange listings
    // Whale remove
    // Renounce ownership
    // airdrop campaign
    // nft marketplace (hpsoi has one) in site, well site will offer nfts, and once those are bought the users can put their own nft's up on the site. roadmap entry

    // Check roadmap in notes, make good copy of that with all steps, put into text doc and roadmap for site.
    // add bsc scan link, maybe make it floating?
    // poocoin live chart aswell on the chart link
    // bogged.finance listing
    // https://www.rugscreen.com and https://www.coinminicap.com.

    // Flooz widget setup with our actual token.

    // coinsniper and tokensniffer listing

    // holder counter on site

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
                <meta name="viewport" content="width=device-width,initial-scale=1" />
            </Head>

            <div>
                {floatingIcons()}
                {isPortrait ?
                    (
                        <>
                            <StarfieldAnimation numParticles={600} style={{ position: 'fixed', width: '100vw', height: '100vh' }} />
                            {topHeader(true)}
                            <MainBox tokenName={tokenName} tokenTicker={tokenTicker} src_logo={logo} />
                            <TokenomicsBox tokenName={tokenName} tokenTicker={tokenTicker} astronautAndRocket={astronautAndRocket} />
                            <HowToBuyBox infoBox={infoBox} />
                            <ProjectInfoBox pinkpepe={pinkpepe} features={features} />
                        </>
                    )
                    :
                    (
                        <>
                            <StarfieldAnimation numParticles={600} style={{ position: 'fixed', width: '100vw', height: '100vh' }} />
                            {topHeader(false)}
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
