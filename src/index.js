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
import { saga as citiesSaga } from './Modules/City';
import { saga as currentweatherSaga } from './Modules/CurrentWeather';
import { saga as dailyWeatherSaga } from './Modules/DailyWeather';


const sagaMiddleWare = createSagaMiddleware();
const composeEnhancers = composeWithDevTools({
  // options like actionSanitizer, stateSanitizer
});
const store = createStore(allReducers, /* preloadedState, */ composeEnhancers(
  applyMiddleware(sagaMiddleWare),
  // other store enhancers if any
));

sagaMiddleWare.run(citiesSaga.watchCities);
sagaMiddleWare.run(currentweatherSaga.watchCurrentWeather);
sagaMiddleWare.run(dailyWeatherSaga.watchDailyWeather);


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
