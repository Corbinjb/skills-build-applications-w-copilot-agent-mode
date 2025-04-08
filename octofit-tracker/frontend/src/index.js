import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import './App.css';
import favicon from './favicon.ico';

const link = document.createElement('link');
link.rel = 'icon';
link.href = favicon;
document.head.appendChild(link);

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);