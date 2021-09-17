import { combineReducers } from "redux";
import {reducer as citiesReducer} from "./City";
import {reducer as languageReducer} from "./Language";
import {reducer as unitsReducer} from "./Unit"
import  {reducer as currentWeatherReducer} from "./CurrentWeather";
import { reducer as SelectedCityReducer } from "./SelectedCity";
import selectedCItyReducer from "./SelectedCity/Reducer";



const allReducers = combineReducers({
    cities: citiesReducer,
    languages: languageReducer,
    units: unitsReducer,
    currentWeather: currentWeatherReducer,
    selectedCity: selectedCItyReducer
});


export default allReducers;