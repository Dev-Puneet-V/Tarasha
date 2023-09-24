import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { debounce } from 'lodash';
import './style.css';
import { API_ENDPOINT } from '../../utils/constant';

interface Booking {
  bookingId: string;
  paymentId: string;
  scheduledDate: string;
  status: string;
  bookingTime: string;
}

const BookingHistory: React.FC = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filteredBookings, setFilteredBookings] = useState<Booking[]>([]);
  const [page, setPage] = useState<number>(1); // Current page
  const [limit, setLimit] = useState<number>(5); // Number of items per page

  useEffect(() => {
    // Fetch data from your backend API with pagination and search
    fetch(`${API_ENDPOINT.TRANSACTION_HISTORY}?search=${searchTerm}&limit=${limit}&page=${page}`, {
      method: "GET",
        headers: {
            'Authorization': `Bearer ${Cookies.get('token')}`
        },
    })
      .then((response) => response.json())
      .then((data) => {
        // Assuming your API returns an array of booking objects
        setBookings(data);
        setFilteredBookings(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [searchTerm, limit, page]);

  const debouncedSearch = debounce((searchTerm: string) => {
    // Fetch data from your backend API with pagination and search
    fetch(`${API_ENDPOINT.TRANSACTION_HISTORY}?search=${searchTerm}&limit=${limit}&page=${page}`)
      .then((response) => response.json())
      .then((data) => {
        setBookings(data);
        setFilteredBookings(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, 500); // Adjust the delay time as needed

  useEffect(() => {
    // Trigger the debounced search when searchTerm changes
    debouncedSearch(searchTerm);
  }, [searchTerm, page, limit]);

  useEffect(() => {
    // Filter bookings based on search term
    const filtered = bookings.filter((booking) =>
      booking.bookingId.includes(searchTerm) ||
      booking.paymentId.includes(searchTerm) ||
      booking.scheduledDate.includes(searchTerm) ||
      booking.status.includes(searchTerm) ||
      booking.bookingTime.includes(searchTerm)
    );
    setFilteredBookings(filtered);
  }, [searchTerm, bookings]);

  // Handle pagination
  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  return (
    <div className="booking-history">
      <h2>Booking History</h2>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <table>
        <thead>
          <tr>
            <th>Booking ID</th>
            <th>Payment ID</th>
            <th>Scheduled Date</th>
            <th>Status</th>
            <th>Booking Time</th>
          </tr>
        </thead>
        <tbody>
          {filteredBookings.map((booking) => (
            <tr key={booking.bookingId}>
              <td>{booking.bookingId}</td>
              <td>{booking.paymentId}</td>
              <td>{booking.scheduledDate}</td>
              <td className='flex gap-1 items-center justify-center status'>
                <div className={`${booking.status === 'active' ? 'status-booking-pending' : 'status-booking-over'}`}></div>
                <p>{booking.status}</p>
              </td>
              <td>{booking.bookingTime}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <button onClick={handlePrevPage} disabled={page === 1}>Previous</button>
        <span>Page {page}</span>
        <button onClick={handleNextPage}>Next</button>
      </div>
    </div>
  );
};

export default BookingHistory;
