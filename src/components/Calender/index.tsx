import React, { useState } from 'react';
import {generateCalendarDates, getFirstDayOfWeek } from '../../utils/helper';
import PrevImage from '../../assets/prev-1.png';
import NextImage from '../../assets/black-next.jpg';
import './style.css';

const Calendar: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [currentMonth, setCurrentMonth] = useState<number>(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState<number>(new Date().getFullYear());
  const [isTimeSelectionEnabled, setTimeSelection] = useState<boolean>(false);

  React.useEffect(() => {
    if (isTimeSelectionEnabled) {
      const paymentButton = document.getElementById('payment-button');
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/payment-button.js';
      script.dataset.payment_button_id = 'pl_MawY7xfRYudvoj';
      script.async = true;

      script.onload = () => {
      };

      paymentButton?.appendChild(script);

      return () => {
        paymentButton?.removeChild(script);
      };
    }
  }, [isTimeSelectionEnabled]);
  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
  };
  const handleTimeSelectionEnable = () => {
    setTimeSelection(!isTimeSelectionEnabled);
  }

  const renderDateCell = (date: Date | null) => {
    if (!date) {
      return <td key="empty"></td>;
    }
    return (
      <td
        className={`date-cell ${new Date(date).getTime() == new Date(selectedDate || Date.now()).getTime() ? 'selected' : ''}`}
        onClick={() => handleDateClick(date)}
        key={date.toString()}
      >
        <p className='flex justify-center items-center'>
        {date.getDate()}</p>
      </td>
    );
  };

  const goToPreviousMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const goToNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const renderCalendar = () => {
    const dates = generateCalendarDates(currentYear, currentMonth);
    const firstDayOfWeek = getFirstDayOfWeek(currentYear, currentMonth);

    const calendarGrid: (Date | null)[][] = [];

    let currentRow: (Date | null)[] = [];

    for (let i = 0; i < firstDayOfWeek; i++) {
      currentRow.push(null);
    }

    for (const date of dates) {
      currentRow.push(date);

      if (currentRow.length === 7) {
        calendarGrid.push(currentRow);
        currentRow = [];
      }
    }

    while (currentRow.length < 7) {
      currentRow.push(null);
    }

    calendarGrid.push(currentRow);

    return (
      <div className="calendar">
        <div className="calendar-header flex items-center mt-2 p-4 justify-between">
          <img  src={PrevImage} onClick={goToPreviousMonth} />
          <p className='text-bold'>{`${new Date(currentYear, currentMonth).toLocaleDateString('default', { month: 'long' })} ${currentYear}`}</p>
           <img  src={PrevImage} onClick={goToNextMonth} />
        </div>
      {!isTimeSelectionEnabled &&  <table className="calendar-table mt-8">
          <thead>
            <tr>
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                <th className="day-label" key={day}>
                  {day}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className=''>
            {calendarGrid.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((date, columnIndex) => (
                  <React.Fragment key={columnIndex}>
                    {renderDateCell(date)}
                  </React.Fragment>
                ))}
              </tr>
            ))}
          </tbody>
        </table>}
        {
            isTimeSelectionEnabled && <div className='m-8 flex wrap gap-3 justify-center items-center time-selector'>
                {
                    [1, 2, 3, 4, 5, 6,
                    7, 8, 9, 10, 11, 12,
                    13, 14, 15, 16, 17, 18,
                    19, 20, 21, 22, 23].map((curr: number) =>{
                        return (
                            <button className='button button-dark' key={curr}>{`${curr % 24}:00 ${curr < 12 ? 'AM' : 'PM'}`}</button>
                        )
                    })
                }
            </div>
        }
      </div>
    );
  };

  return (
    <div className='flex flex-col justify-center items-center gap-1 time-picker'>
        <p className='text-styled heading-calender'>{!isTimeSelectionEnabled ? "Select A Consultation Date" : "Select Time Slot"}</p>
        <div className="calendar-container">
        {renderCalendar()}
        </div>
       {!isTimeSelectionEnabled && <button onClick={handleTimeSelectionEnable} className='mt-4 flex button button-dark gap-1 items-center justify-center'>
            <p className='button-calender text-bold'>Continue</p>
            <img src={NextImage} className='black-next' />
        </button>}
        {isTimeSelectionEnabled && 
         <form className='payment-button' id='payment-button'>
            </form>
        
        }
    </div>
    
  );
};

export default Calendar;
