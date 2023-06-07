import React from 'react';
import ActivitiesSearch from './ActivitiesSearch';
import MapsIntegration from './MapsIntegration';

const SearchAndMapsPanel = () => {
  return (
    <div>
      <h2>Activities Search and Maps Integration Panel</h2>
      <ActivitiesSearch />
      <MapsIntegration />
    </div>
  );
};

export default SearchAndMapsPanel;
