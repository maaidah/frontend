import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BookingManagement = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    // Fetch bookings from the backend upon component mount
    axios.get('/api/bookings')
      .then((response) => {
        setBookings(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleBookingUpdate = (bookingId, status) => {
    // Implement booking update logic using API calls to the backend
  };

  return (
    <div>
      <h2>Booking Management</h2>
      {bookings.map((booking) => (
        <div key={booking.id}>
          <p>{booking.name}</p>
          <p>{booking.status}</p>
          <button onClick={() => handleBookingUpdate(booking.id, 'confirmed')}>Confirm</button>
          <button onClick={() => handleBookingUpdate(booking.id, 'cancelled')}>Cancel</button>
        </div>
      ))}
    </div>
  );
};

export default BookingManagement;
