import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import { configureStore } from '@reduxjs/toolkit'
import { compose, applyMiddleware, createStore } from "redux";
import thunk from 'redux-thunk'
import  appReducer from '../src/redux/reducers'



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const store = configureStore({reducer: appReducer, 
  devTools: process.env.NODE_ENV !== 'production'})
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <>
  <Provider store = {store}>
    <App />
  </Provider>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();