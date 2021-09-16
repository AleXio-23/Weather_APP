import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import App from './Components/Root/App';
import { applyMiddleware, createStore } from 'redux';
import allReducers from './Modules/allReducers';
import { watchCities } from './Modules/City/Saga/Index';



const sagaMiddleWare = createSagaMiddleware();
const composeEnhancers = composeWithDevTools({
  // options like actionSanitizer, stateSanitizer
});
const store = createStore(allReducers, /* preloadedState, */ composeEnhancers(
  applyMiddleware(sagaMiddleWare),
  // other store enhancers if any
));

sagaMiddleWare.run(watchCities);


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
