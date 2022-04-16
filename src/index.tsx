import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { firebase, auth, database } from './services/firebase';

import './styles/global.scss';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);