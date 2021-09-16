
import { put, takeLatest } from "@redux-saga/core/effects";
import { GET_CITIES_PENDING } from "../../../Tools/Constants/ModulesConstants";
import Cities from '../../../Tools/Cities';
import { GetCities } from "../Action";


function* getCitiesAsync(params){
    try {
        const data = Cities.filter(x =>
            x.name_en.toString().toLowerCase().includes(params.filterWord.toString().toLowerCase())
            || x.name.toString().toLowerCase().includes(params.filterWord.toString().toLowerCase())
            || x.name_ka.includes(params.filterWord));


        yield put(GetCities.set(data));
    } catch (error) {
        console.log(error)
    }
}

export function* watchCities() {
    yield takeLatest(GET_CITIES_PENDING, getCitiesAsync);
}