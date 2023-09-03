import React from 'react';
import {BsArrowRight} from 'react-icons/bs';
import './style.css';

const ChoosePackagePlan: React.FC = () => {
  return (
    <div className='flex flex-col gap-5'>
      <p className='text-styled'>Choose Package Option</p>
      <div className='flex flex-row wrap gap-3 pl-2'>
        {
            [1, 2, 3].map(() => {
                return (
                    <div className=' mt-2 mb-2 box-shadow plan-price-range-container flex flex-col justify-center pl-8 gap-2'>
                        <p className='plan-total-area'>Upto 500 Sq. Ft.</p>
                        <p className='plan-total-price'>₹ 21,000 /-</p>        
                    </div>
                )
            })
        }
      </div>
      <button className='button button-dark flex gap-1 ml-2 mb-4'>
        <p>Continue</p>
        <BsArrowRight />
      </button>
    </div>
  )
}

export default ChoosePackagePlan;
