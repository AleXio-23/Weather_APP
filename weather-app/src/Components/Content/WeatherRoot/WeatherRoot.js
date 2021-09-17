import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Content from '../WeatherContent/Content';
import './WeatherRoot.css';
import { action as currentWeatherAction } from '../../../Modules/CurrentWeather'
import { action as selectedCityAction } from '../../../Modules/SelectedCity';

const WeatherRoot = () => {

  const dispatch = useDispatch();

  const selectedUnitDt = useSelector(state => state.units);
  const selectedUnit = selectedUnitDt.unit;


  // const selectedCity = "Tbilisi";

  const selectedCityDt = useSelector(state => state.selectedCity);
  const selectedCity = selectedCityDt.data;

  useEffect(() => {
    dispatch(selectedCityAction.getSelectedCity.get());
  }, []);



  useEffect(() => {
    if (selectedCity) {
      dispatch(currentWeatherAction.currentWeatherAction.get(selectedCity.name, selectedUnit, 'ee2dd3abfe97c737e66bb317e03892b0'));
    }

  }, [selectedCity, selectedUnit]);


  return (
    <div className="weather-root">
      <Content />
    </div>
  );
}

export default WeatherRoot;
