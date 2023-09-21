import React from 'react';
import { Waveform } from "@uiball/loaders";
import swal from 'sweetalert';
import Cookies from 'js-cookie';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { savePaymentDetail } from '../../utils/helper';
import './style.css';
import { useBookingContext } from '../../contexts/Booking';

const SavePayment: React.FC = () => {
  const [loading, setLoading] = React.useState(true);
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const {bookingData, setBookingData} = useBookingContext();
  const paymentId = searchParams.get('payment_id');
  React.useEffect(() => {
    if(!paymentId){
    //     //TODO: handle it
    }else{
        processPaymentData();
    }
  }, []);

  const processPaymentData = async () => {
    // await new Promise((resolve) => {
    //     setTimeout(resolve, 2000);
    // });
    // swal({
    //     title: "Payment information saved successfully",
    //     // text: "Click Ok to view the published blog",
    //     icon: "success",
    //     dangerMode: false,
    //     timer: 5000, // Automatically close the modal after 5 seconds (5000 milliseconds)
    //   })
    await savePaymentDetail(paymentId, bookingData);
    localStorage.removeItem('booking-details');
  }

  React.useEffect(() => {
    if(!loading){
        navigate('/dashboard');
    }
  }, [loading]);
  return (
    <div className='save-payment-data'>
        {  loading &&  
            <div className='payment-loader loader flex justify-center items-center flex-col gap-2'>
                <p className='font-bold'>Saving your payment information</p>
                <Waveform />
            </div>
        }
    </div>
  )
}

export default SavePayment;
