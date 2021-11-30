import './App.css';
import StarfieldAnimation from 'react-starfield-animation'
import pic1 from './assets/spaceAndRocket.svg';
import astronautAndRocket from './assets/astronautAndRocket.svg';
import alienAndUfo from './assets/alienAndUfo.svg';
import satellite from './assets/satellite.svg';
import contract from './assets/contract.svg';

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
                    width: '400%',
                    height: '400%'
                }}
            />

            <div className={'headerBar'}>
                <ul className='tokenNameandTicker'>
                    <li class='name font32' >{tokenName}</li>
                    <li class='ticker font22'>${tokenTicker}</li>
                </ul>
            </div>
            <div className='mainPage'>
                <div className='leftMainPage'>
                    <div id='miniInfoBox'>
                        <ul className='tokenNameandTicker'>
                            <li class='name font24'>{tokenName}</li>
                            <li class='ticker font 18'>${tokenTicker}</li>
                        </ul>
                    </div>

                    <div id='miniTextBlurb'>
                        <p>Sample Text</p>
                        <p>token to go to the moon</p>
                    </div>

                    <div id='buttonDiv'>
                        <input type='button' class='purplebutton font24 font' value='Swap' />
                        <input type='button' class='purplebutton font24 font' value='Tokenomics' />
                        <input type='button' class='purplebutton font24 font' value='Roadmap' />
                        <input type='button' class='purplebutton font24 font' value='Community' />
                        <input type='button' class='purplebutton font24 font' value='Chart' />
                    </div>
                </div>

                <div className='rightMainPage'>
                    <div className='imageBox'>
                        <img src={pic1} alt='na' />
                    </div>

                    <div id='rightTextBlurb'>
                        <p>Hello this is just filler</p>
                        <p>filler text filler text</p>
                    </div>
                </div>
            </div>

            <div className='TokenomicsPage'>
                <div className={'headerBar'}>
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

                        <input type='button' value='Buy Now' class='purplebutton font24 font' />
                    </div>
                </div>

            </div>

            <div className='HowToBuy'>
                <div className={'headerBar'}>
                    <p className='font32 font padding1'>How To Buy</p>
                </div>
                <div className='howToBuyData'>
                    <div className='left'>
                        <p>{tokenTicker}</p>
                        <p>editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their i</p>
                        <p>Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p>
                        <p>electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages</p>
                        <input type='button' value='Buy Now' class='purplebutton font24 font' />
                    </div>

                    <div className='right'>
                        <div className='imageBox'>
                            <img src={alienAndUfo} alt='na' />
                        </div>
                    </div>
                </div>
            </div>

            <div className='projectInfo'>
                <div className={'headerBar'}>
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
                    <div className='bottom'>
                        <div>
                            <p className='font24'>Twitter</p>
                            <p className='font24'>Reddit</p>
                            <p className='font24'>Telegram</p>
                        </div>
                        <div className='imageBox marginLeft2'>
                            <img src={satellite} alt='na'/>
                        </div>
                    </div>
                </div>

            </div>



        </div>
    )
}

export default App;
