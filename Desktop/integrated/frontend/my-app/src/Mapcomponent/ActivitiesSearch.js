import React, { useState } from 'react';

const ActivitiesSearch = () => {
  const [location, setLocation] = useState('');
  const [preferences, setPreferences] = useState('');

  const handleActivitiesSearch = () => {
    // Implement activities search logic using API calls to the backend
  };

  return (
    <div>
      <h2>Activities Search</h2>
      <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Location" />
      <input type="text" value={preferences} onChange={(e) => setPreferences(e.target.value)} placeholder="Preferences" />
      <button onClick={handleActivitiesSearch}>Search</button>
    </div>
  );
};

export default ActivitiesSearch;
