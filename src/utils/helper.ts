export const isLeapYear = (year: number) => {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
};

export const generateCalendarDates = (year: number, month: number) => {
    const startDate = new Date(year, month, 1);
    const endDate = new Date(year, month + 1, 0);
    const dates: Date[] = [];

    for (let date = startDate; date <= endDate; date.setDate(date.getDate() + 1)) {
        dates.push(new Date(date));
    }

    return dates;
};


export const getFirstDayOfWeek = (year: number, month: number) => {
    const firstDay = new Date(year, month, 1);
  
    const dayOfWeek = firstDay.getDay();
  
    return dayOfWeek;
  };

const loadScript =  (src: string, paymentButtonId: string) => {
    return new Promise((resolve) => {
        const form = document.createElement('form');
        const script = document.createElement('script');
        form.appendChild(script);
        script.src = src;
        script.setAttribute('data-payment_button_id', paymentButtonId);
        script.onload = () => {
            resolve(true);
        }
        script.onerror = () => {
            resolve(false);
        }
        document.body.appendChild(script);
    })
}

export const displayRazorpay = async () => {
    const res = await loadScript('https://checkout.razorpay.com/v1/payment-button.js', 'pl_MawY7xfRYudvoj');
    if(!res) {
        alert('Payment failed');   
    }
}