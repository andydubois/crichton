import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '../src/components/App/App';
import {createStore, combineReducers, applyMiddleware} from "redux";
import {Provider} from "react-redux"

//Import Saga Middleware
import createSagaMiddleware from "redux-saga";
import {takeEvery, put} from "redux-saga/effects";
import axios from "axios"
import logger from "redux-logger";

import rootReducer from './redux/reducers'; // imports ./redux/reducers/index.js
import rootSaga from './redux/sagas'; // imports ./redux/sagas/index.js

//Create Saga Middleware
const sagaMiddleware = createSagaMiddleware();

// this line creates an array of all of redux middleware you want to use
// we don't want a whole ton of console logs in our production code
// logger will only be added to your project if your in development mode
const middlewareList = process.env.NODE_ENV === 'development' ?
  [sagaMiddleware, logger] :
  [sagaMiddleware];

const store = createStore(
  // tells the saga middleware to use the rootReducer
  // rootSaga contains all of our other reducers
  rootReducer,
  // adds all middleware to our project including saga and logger
  applyMiddleware(...middlewareList)
);

// tells the saga middleware to use the rootSaga
// rootSaga contains all of our other sagas
sagaMiddleware.run(rootSaga);



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
