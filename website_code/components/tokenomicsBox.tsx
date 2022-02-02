import { motion, AnimatePresence } from "framer-motion"
import { useMediaQuery } from 'react-responsive';

interface TokenomicsProps {
    tokenName: string,
    tokenTicker: string,
    astronautAndRocket: string
}

export const TokenomicsBox: React.FC<TokenomicsProps> = ({ tokenName, tokenTicker, astronautAndRocket }) => {

    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' });

    const tokenomicsInfo = [
        'Total supply: 1.000.000.000.000.000 with 50% burned at launch',
        'There is a 8% flat tax on all transaction to encourage holding, discourage swing trading and to lessen whale manipulation. At times, our tokenomics may change in response to market conditions.',
        'The token contract employs a static rewards system.The 8% tax is split as follows: 4% is redistributed to holders and 4% is used to fuel the liquidity pool',
        'Token distribution: 90% of the tokens go to Liquidity Pool, 2.5% to the dev team, 2.5% for marketing (including airdrops), and 5% for presale.'
    ]

    return (
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
                        {!isPortrait &&
                            <>
                                <p className="large accentshadow">{tokenName} Tokenomics</p>
                                <p className="large accentshadow">{tokenTicker}</p>
                            </>
                        }
                        <div>
                            <p className={'tokenomicsText'}>{tokenomicsInfo[0]}</p>
                            <p className={'tokenomicsText'}>{tokenomicsInfo[1]}</p>
                            <p className={'tokenomicsText'}>{tokenomicsInfo[2]}</p>
                            <p className={'tokenomicsText'}>{tokenomicsInfo[3]}</p>
                        </div>

                    <motion.button className='purplebutton font24 font' whileHover={{ scale: 1.1, color: 'black' }}
                        whileTap={{ scale: 0.9 }}>
                        Buy Now
                    </motion.button>
                </motion.div>
            </div >

        </div >
    )

}