import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Header from './Comps/Header';
import App from './Comps/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <App />
  </React.StrictMode>
);

