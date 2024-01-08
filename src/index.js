import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ServiceProvider from './service/serviceprovider';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ServiceProvider>
    <App />
    </ServiceProvider>
  </React.StrictMode>
);

