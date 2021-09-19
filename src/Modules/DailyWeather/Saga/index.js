

import { put, takeEvery, takeLatest, call } from "@redux-saga/core/effects";
import axios from 'axios';
import { GET_DAILY_WEATHER_PENDING } from "../../../Tools/Constants/ModulesConstants";
import { getDailyWeather } from "../Action";




function* dailyAsync(params) {
    try {
        const data = yield call(axios.get, `https://api.openweathermap.org/data/2.5/forecast?q=${params.city}&units=${params.unit}&appid=${params.apiKey}`);
        yield put(getDailyWeather.set(data.data));
    } catch (error) {
        console.log(error);
    }
}

export function* watchDailyWeather() {
    yield takeLatest(GET_DAILY_WEATHER_PENDING, dailyAsync);
}