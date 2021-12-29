import { motion, AnimatePresence } from "framer-motion"

interface TokenomicsProps {
    tokenName: string,
    tokenTicker: string,
    astronautAndRocket: string
}

export const TokenomicsBox: React.FC<TokenomicsProps> = ({ tokenName, tokenTicker, astronautAndRocket }) => {

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

                    <motion.button className='purplebutton font24 font' whileHover={{ scale: 1.1, color: 'black' }}
                        whileTap={{ scale: 0.9 }}>
                        Buy Now
                    </motion.button>
                </motion.div>
            </div>

        </div>
    )

}