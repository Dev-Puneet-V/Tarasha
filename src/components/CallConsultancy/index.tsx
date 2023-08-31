import React from 'react'
import './style.css';

const CallConsultancy: React.FC = () => {
  return (
    <div className='call-consultancy flex flex-col justify-center items-center pt-8 pb-8 gap-3'>
      <section id='call-consultancy-container' className='flex flex-col justify-center items-center gap-3 mt-8'>
        <p className='text-styled'>Call Consultancy</p>
        <p className='center'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        </p>
        <div className='flex items-center justify-between gap-2 pl-8 pr-8 ml-8 mr-8 mb-8 mt-8'>
          <p className='ml-8 pl-4 font-large text-bolder'>Rs 3000/ Per Hour</p>
          <button className='button button-secondary mr-8'>Book Now</button>
        </div>
      </section>
    </div>
  )
}

export default CallConsultancy;
