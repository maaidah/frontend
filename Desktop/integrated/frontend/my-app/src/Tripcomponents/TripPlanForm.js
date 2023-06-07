import React, { useState } from 'react';

const TripPlanForm = () => {
  const [tripName, setTripName] = useState('');
  const [accommodation, setAccommodation] = useState('');
  const [transportation, setTransportation] = useState('');
  const [activities, setActivities] = useState('');

  const handleTripPlanSubmit = (e) => {
    e.preventDefault();
    // Implement trip plan submission logic using API calls to the backend
  };

  return (
    <form onSubmit={handleTripPlanSubmit}>
      <input type="text" value={tripName} onChange={(e) => setTripName(e.target.value)} placeholder="Trip Name" />
      <input type="text" value={accommodation} onChange={(e) => setAccommodation(e.target.value)} placeholder="Accommodation" />
      <input type="text" value={transportation} onChange={(e) => setTransportation(e.target.value)} placeholder="Transportation" />
      <input type="text" value={activities} onChange={(e) => setActivities(e.target.value)} placeholder="Activities" />
      <button type="submit">Create Trip Plan</button>
    </form>
  );
};

export default TripPlanForm;
