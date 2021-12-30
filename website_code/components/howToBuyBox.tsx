/* eslint-disable @next/next/no-img-element */
import { motion, AnimatePresence } from "framer-motion"


interface HowToBuyProps {
    infoBox: Array<any>,
}

export const HowToBuyBox: React.FC<HowToBuyProps> = ({ infoBox }) => {

    return (
        <div className='HowToBuy' id='buy'>
            <div className={'headerBar marginTop1 marginBottom1'}>
                <p className='font32 font padding1'>How To Buy</p>
            </div>
            <div className='howToBuyData padding2'>
                <div className='howtobuyContainerContainer'>
                    {infoBox.map((entry, index) =>
                        <>
                            {index % 2 === 0 ?
                                (
                                    <>
                                        <div className='buyBox' key={index}>
                                            <p className='buyBoxTitle'>{entry[0]}</p>
                                            <p className='buyBoxText' >{entry[1]}</p>
                                        </div>
                                        <div className='buyBox' key={index*-1}>
                                            <div className='imageBox2'>
                                                <img src={entry[2]} alt='na' />
                                            </div>
                                        </div>
                                    </>
                                )
                                :
                                (
                                    <>
                                        <div className='buyBox' key={index*-1}>
                                            <div className='imageBox2'>
                                                <img src={entry[2]} alt='na' />
                                            </div>
                                        </div>
                                        <div className='buyBox' key={index}>
                                            <p className='buyBoxTitle' >{entry[0]}</p>
                                            <p className='buyBoxText' >{entry[1]}</p>
                                        </div>
                                    </>
                                )
                            }
                        </>
                    )}
                </div>
                <motion.button className='purplebutton font24 font' onClick={undefined} whileHover={{ scale: 1.1, color: 'black' }}
                    whileTap={{ scale: 0.9 }}>
                    Buy Now
                </motion.button>
            </div>
        </div>
    )

}