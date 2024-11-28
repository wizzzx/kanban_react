import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

// can use params and :id to navigate dynamically

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
