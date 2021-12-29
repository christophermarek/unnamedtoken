import { motion, AnimatePresence } from "framer-motion"

interface ProjectInfo {
    pinkpepe: string,
    features: Array<any>
}

export const ProjectInfoBox: React.FC<ProjectInfo> = ({ pinkpepe, features }) => {

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
                            <p className='font22'>{entry[0]}</p>
                            <p className='font18'>{entry[1]}</p>
                        </div>
                    )}
                    <motion.button className='purplebutton font24 font' onClick={undefined} whileHover={{ scale: 1.1, color: 'black'}}
                        whileTap={{ scale: 0.9 }}>
                        View Contract
                    </motion.button>
                </div>
            </div>
        </div>
    )

}