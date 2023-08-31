import React from 'react';
import TickIcon from '../../assets/tick.png';
import { Packageinterface } from '../../utils/type';
import './style.css';

const Package: React.FC<Packageinterface> = (props) => {
    const {
        type,
        features = []
    } = props;

  return (
    <div className='package-container p-4 flex flex-col gap-3 pr-8'>
        <p className='text-styled-2'>{type}</p>
        {
            features?.map((feature: string) => {
                return (
                    <div className='flex items-center gap-1'>
                        <img src={TickIcon} />
                        <p>{feature}</p>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Package;
