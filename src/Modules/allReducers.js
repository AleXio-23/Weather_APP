import { combineReducers } from "redux";
import {reducer as citiesReducer} from "./City";
import {reducer as languageReducer} from "./Language";
import {reducer as unitsReducer} from "./Unit"
import  {reducer as currentWeatherReducer} from "./CurrentWeather";
import { reducer as selectedCItyReducer } from "./SelectedCity";
import {reducer as dailyWeatherReducer} from "./DailyWeather";



const allReducers = combineReducers({
    cities: citiesReducer,
    languages: languageReducer,
    units: unitsReducer,
    currentWeather: currentWeatherReducer,
    selectedCity: selectedCItyReducer,
    dailyWeather: dailyWeatherReducer
});


export default allReducers;