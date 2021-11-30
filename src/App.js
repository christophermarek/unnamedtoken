import './App.css';
import StarfieldAnimation from 'react-starfield-animation'
import pic1 from './assets/spaceAndRocket.svg';
import astronautAndRocket from './assets/astronautAndRocket.svg';
import alienAndUfo from './assets/alienAndUfo.svg';
import satellite from './assets/satellite.svg';
import contract from './assets/contract.svg';
import { motion } from "framer-motion";

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

    const tokenName = 'TOKEN NAME';
    const tokenTicker = 'TOKEN TICKER';

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
                <div>
                    <p className='name font32' >{tokenName}</p>
                    <p className='ticker font24'>${tokenTicker}</p>
                </div>


            </div>
            <div className='mainPage'>
                <div className='leftMainPage'>
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
                </div>

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

            <div className='TokenomicsPage'>
                <div className={'headerBar marginTop1 marginBottom1'}>
                    <p className='font32 font padding1'>Tokenomics</p>
                </div>
                <div className='tokenomicsData'>
                    <div className='left'>
                        <div className='imageBox'>
                            <img src={astronautAndRocket} alt='na' />
                        </div>
                    </div>
                    <div className='right'>
                        <p>{tokenName}</p>
                        <p>{tokenTicker}</p>
                        <p>editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their i</p>
                        <p>Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p>
                        <p>electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages</p>

                        <input type='button' value='Buy Now' className='purplebutton font24 font' />
                    </div>
                </div>

            </div>

            <div className='HowToBuy'>
                <div className={'headerBar marginTop1 marginBottom1'}>
                    <p className='font32 font padding1'>How To Buy</p>
                </div>
                <div className='howToBuyData'>
                    <div className='left padding2'>
                        <p className='font24'>{tokenTicker}</p>
                        <p className='font18'>editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their i</p>
                        <p className='font18'>Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p>
                        <p className='font18'>electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages</p>
                        <input type='button' value='Buy Now' className='purplebutton font24 font' />
                    </div>

                    <div className='right'>
                        <div className='imageBox'>
                            <img src={alienAndUfo} alt='na' />
                        </div>
                    </div>
                </div>
            </div>

            <div className='projectInfo'>
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
                            <input type='button' className='purplebutton font24 font' value='View Contract' />
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
