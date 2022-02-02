import { motion, AnimatePresence } from "framer-motion"
import { useMediaQuery } from 'react-responsive';

interface ProjectInfo {
    pinkpepe: string,
    features: Array<any>
}

export const ProjectInfoBox: React.FC<ProjectInfo> = ({ pinkpepe, features }) => {

    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' });

    return (
        <div className='projectInfo' id='projectinfo'>
            <div className={'headerBar marginTop1 marginBottom1'}>
                <p className='font32 font padding1'>Token Info</p>
            </div>
            <div className='top'>
                <div className='left'>
                    <div className='imageBox3'>
                        <img src={pinkpepe} alt='na' />
                    </div>
                </div>

                <div className='right'>
                    {features.map((entry, index) =>
                        <div key={index} className='featureBox'>
                            <p className='buyBoxTitle'>{entry[0]}</p>
                            <p className='buyBoxText'>{entry[1]}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )

}