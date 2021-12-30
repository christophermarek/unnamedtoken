import { motion, AnimatePresence } from "framer-motion"
import { useMediaQuery } from 'react-responsive';

interface MainProps {
    tokenName: string,
    tokenTicker: string,
    src_logo: string
}

export const MainBox: React.FC<MainProps> = ({ tokenName, tokenTicker, src_logo }) => {

    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' });

    const aboutText = [
        'InfinityDOT is the first Polkadot reflection token running on Binance Smart Chain. Simply hold tokens and get rewarded automatically in Polkadot on every transaction. With the auto-claim feature, you will receive DOT automatically in your wallet.',
        'Tax distribution: 11% Holders, 2% BuyBack, 2% Liquidity'
    ];

    return (
        <div className='mainPage'>

            {/* for some reason i have to render it empty, if i dont the divs get placed incorrectly in the dom */}
            {isPortrait ?
                <div id={'miniInfoBox'}>
                    <p className='nomargin font24 accentshadow'>{tokenName}</p>
                    <p className='nomargin font24 accentshadow'> ${tokenTicker}</p>
                </div>
                :
                <div id={'miniInfoBox'}></div>
            }

            <div className='leftMainPage'>
                {!isPortrait ?
                    <div id='miniInfoBox'>
                        <ul className='tokenNameandTicker'>
                            <li className='name fontxlarge accentshadow'>{tokenName}</li>
                            <li className='ticker font24 accentshadow'>${tokenTicker}</li>
                        </ul>
                    </div>
                    :
                    <div id={'miniInfoBox'}></div>
                }

                <div id='miniTextBlurb'>
                    <p className='name fontmedium'>{aboutText[0]}</p>
                    <p className='name fontmedium'>{aboutText[1]}</p>
                </div>

                <div id='buttonDiv'>
                    <motion.button className='purplebutton font24 font' onClick={undefined} whileHover={{ scale: 1.1, color: 'black' }}
                        whileTap={{ scale: 0.9 }}>
                        Buy
                    </motion.button>
                    <motion.button className='purplebutton font24 font' onClick={undefined} whileHover={{ scale: 1.1, color: 'black' }}
                        whileTap={{ scale: 0.9 }}>
                        Chart
                    </motion.button>
                </div>
            </div>

            <div className='rightMainPage'>
                <div className='imageBox'>
                    <img src={src_logo} alt='na' />
                </div>
            </div>
        </div >
    )

}