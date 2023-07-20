import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './store';
import dotenv from "dotenv";
import axios from 'axios';

dotenv.config();
axios.defaults.baseURL = 'https://food-app.up.railway.app';
// axios.defaults.baseURL =  "http://54.175.191.76:3001" //|| "http://localhost:3001";
// process.env.REACT_APP_API
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);


reportWebVitals();
