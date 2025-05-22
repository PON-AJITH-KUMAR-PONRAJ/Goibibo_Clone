import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // This is where Tailwind styles are applied
import App from './App';
import reportWebVitals from './reportWebVitals';

// Create root element for React rendering
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Performance measurement setup
reportWebVitals();