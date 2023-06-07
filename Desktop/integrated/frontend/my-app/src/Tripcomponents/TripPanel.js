import React from 'react';
import TripPlanForm from './TripPlanForm';
import BookingManagement from './BookingManagement';
import PaymentProcessing from './PaymentProcessing';

const TripPanel = () => {
  return (
    <div>
      <h2>Trip Planning and Booking Management Panel</h2>
      <TripPlanForm />
      <BookingManagement />
      <PaymentProcessing />
    </div>
  );
};

export default TripPanel;
