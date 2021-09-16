import { combineReducers } from "redux";
import {reducer as citiesReducer} from "./City";
import {reducer as languageReducer} from "./Language";



const allReducers = combineReducers({
    cities: citiesReducer,
    languages: languageReducer
});


export default allReducers;