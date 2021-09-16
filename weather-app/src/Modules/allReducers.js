import { combineReducers } from "redux";
import citiesReducer from "./City/Reducer/Index";
import languageReducer from "./Language/Reducer/Index";



const allReducers = combineReducers({
    cities: citiesReducer,
    languages: languageReducer
});


export default allReducers;