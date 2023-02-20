import React from 'react';
import ReactDOM from 'react-dom/client';
import "./ol.css";

import App from './context/App';
// import App from './global/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
