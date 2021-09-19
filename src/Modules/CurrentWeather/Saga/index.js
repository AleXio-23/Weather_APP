import { GET_CURRENT_WEATHER_PENDING } from "../../../Tools/Constants/ModulesConstants";
import { put, takeEvery, takeLatest, call } from "@redux-saga/core/effects";
import axios from 'axios';
import { currentWeatherAction } from "../Action";



function* currentAsync(params) {
    try{
        const data = yield call(axios.get, `https://api.openweathermap.org/data/2.5/weather?q=${params.city}&units=${params.unit}&appid=${params.apiKey}`);
        yield put(currentWeatherAction.set(data.data));
    } catch(error) {
        console.log(error);
    }
}

export function* watchCurrentWeather() {
    yield takeLatest(GET_CURRENT_WEATHER_PENDING, currentAsync);
}