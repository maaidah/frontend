import React from 'react';
import AccommodationsSearch from './AccommodationsSearch';
import TransportationSearch from './TransportationSearch';

const SearchPanel = () => {
  return (
    <div>
      <h2>Accommodations and Transportation Search Panel</h2>
      <AccommodationsSearch />
      <TransportationSearch />
    </div>
  );
};

export default SearchPanel;
