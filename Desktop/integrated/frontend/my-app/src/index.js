import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ATSPanel from './ATScomponent/ATSPanel'
import MapPanel from './Mapcomponent/MapPanel'
import TripPanel from './Tripcomponents/TripPanel';
import UserPanel from './Uercomponents/UserPanel';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ATSPanel />
    <MapPanel />
    <TripPanel />
    <UserPanel />

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
