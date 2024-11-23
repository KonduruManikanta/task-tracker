import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Optional, for your custom styles
import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap if you're using it

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
