import React, {useEffect, useState} from 'react';
import Image from '../Image';
import PrevIcon from '../../assets/prev.png';
import NextIcon from '../../assets/next.png';
import { useSiteData } from '../../contexts/DataContext';
import './style.css';

const Work: React.FC = () => {
    const {data} = useSiteData();
    const works = data?.works || [];
    const [currWorkIndex, setCurrWorkIndex] = useState<number>(-1);
    const [currState, setCurrState] = useState<number>(0);

    useEffect(() => {
        if(data && !data?.works){
            data.works = [];
        }
        else if (data?.works?.length > 0) {
            setCurrWorkIndex(0);
        }
    }, [data]);
    const handleNext = () => {
        setCurrWorkIndex(setCurrWorkIndex => setCurrWorkIndex + 1);
        setCurrState(0);
    }
    const handlePrev = () => {
        setCurrWorkIndex(setCurrWorkIndex => setCurrWorkIndex - 1);
        setCurrState(0);
    }

  return (
    <>
        {   
            currWorkIndex >= 0 &&
            <div id='work-container' className=''>
                <p className='text-styled ml-8 work-name w-90'>{works[currWorkIndex]?.name}</p>
                <div className='flex gap-2 ml-8 work-name'>
                    <p className={`${currState === 0 ? 'active-nav' : ''}`} onClick={() => setCurrState(0)}>Before</p>
                    <p className={`${currState === 1 ? 'active-nav' : ''}`} onClick={() => setCurrState(1)}>After</p>
                </div>
                <div className="background-image relative" style={{ backgroundImage: `url(${currState === 0 ? works[currWorkIndex]?.prev : works[currWorkIndex]?.next})` }}>
                <div className={`absolute ${currWorkIndex === 0 ? 'disabled' : ''} prev-button`} onClick={handlePrev}>
                    <img src={PrevIcon} alt="Previous Icon" />
                </div>

                <div className={`absolute ${currWorkIndex === works.length - 1 ? 'disabled' : ''} next-button`} onClick={handleNext}>
                    <img src={NextIcon} alt="Next Icon" />
                </div>
                </div>
                <div className='text-work flex justify-between p-2 ml-8 mr-8 pr-8 pl-8 wrap mb-4'>
                    <div className='challenge'>
                        <p className='text-bold text-styled'>Challenges</p>
                        <p>{works[currWorkIndex]?.challange}</p>
                    </div>
                    <div className='solution'>
                        <p className='text-bold text-styled'>Solution</p>
                        <p>{works[currWorkIndex]?.solution}</p>
                    </div>
                </div>
            </div> 
        }
    </>
  )
}

export default Work;
