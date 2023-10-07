import React from 'react'
import './style.css';
import Modal from '../Modal';
import Calendar from '../Calender';
import { useSiteData } from '../../contexts/DataContext';
import useScreenSize from '../../hooks/useMediaQuery';

const CallConsultancy: React.FC = () => {
  const [bookingVisiblity, setBookingVisibility] = React.useState(false);
  const screenSize = useScreenSize();
  const {data} = useSiteData();
  const handleBookingVisibility = () => {
    setBookingVisibility(!bookingVisiblity);
  }
  return (
    <>
    <div className='call-consultancy flex flex-col justify-center items-center gap-1'>
      <section id='call-consultancy-container' className='flex flex-col justify-center items-center'>
        <p className='text-styled'>Call Consultancy</p>
        <p className='justify'>
          {data?.callConsultancyTagLine}
        </p>
        <div className={`flex items-center justify-between gap-2 pl-8 pr-8 ml-8 mr-8 mb-8 mt-4 ${screenSize === 'sm' ? 'book-now-button': 'wrap'}`}>
          <p className={` pl-4 text-bolder ${screenSize === 'sm' ? 'rs-text ml-4' : 'font-large ml-8'}`}>Rs 699/- Onwards</p>
          <button className='button button-secondary mr-8' onClick={handleBookingVisibility}>Book Now</button>
        </div>
      </section>
    </div>
    <Modal isOpen={bookingVisiblity} onClose={handleBookingVisibility}>
        <Calendar />
    </Modal>
    </>
  )
}

export default CallConsultancy;
