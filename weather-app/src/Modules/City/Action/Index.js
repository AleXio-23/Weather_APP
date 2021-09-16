import { GET_CITIES_PENDING, GET_CITIES_SUCCESS } from "../../../Tools/Constants/ModulesConstants"




export const GetCities = {
    get: (filterWord) => {
        return {
            type: GET_CITIES_PENDING,
            filterWord
        }
    },
    set: (data) => {
        return {
            type: GET_CITIES_SUCCESS,
            payload: data
        }
    }
}