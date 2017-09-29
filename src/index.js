import React from 'react';
import { render } from 'react-dom'
import './style/index.css';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// You can choose your kind of history here (e.g. browserHistory)
import { Router, BrowserRouter } from 'react-router-dom';
// Your routes.js file
import Main from './Main';


render((
  <BrowserRouter>
    <App />
  </ BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();
