import React from 'react';
import {BsArrowRight} from 'react-icons/bs';
import './style.css';
import { Link } from 'react-router-dom';

const ChoosePackagePlan: React.FC = () => {
 const [selected, setSelected] = React.useState(-1);
 const planSelectHandler = (index: number) => {
    if(index === selected){
        setSelected(-1);
        return;
    }
    setSelected(index);
 }

  return (
    <div className='flex flex-col gap-5'>
      <p className='text-styled'>Choose Package Option</p>
      <div className='flex flex-row wrap gap-3 pl-2'>
        {
            [1, 2, 3].map((curr: number, index: number) => {
                return (
                    <div key={curr} className={`plan mt-2 mb-2 box-shadow plan-price-range-container flex flex-col justify-center pl-8 gap-2 ${selected === index && 'selected-plan'}`} onClick={() => planSelectHandler(index)}>
                        <p className='plan-total-area'>Upto 500 Sq. Ft.</p>
                        <p className='plan-total-price'>₹ 21,000 /-</p>        
                    </div>
                )
            })
        }
      </div>
      <Link className='link' to={'/questionare'}>
        <button className='button button-dark flex gap-1 ml-2 mb-4'>
            <p>Continue</p>
            <BsArrowRight />
        </button>
      </Link>
    </div>
  )
}

export default ChoosePackagePlan;
