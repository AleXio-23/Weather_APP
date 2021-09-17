import { GET_CURRENT_WEATHER_FAILED, GET_CURRENT_WEATHER_PENDING, GET_CURRENT_WEATHER_SUCCESS } from "../../../Tools/Constants/ModulesConstants"





export const currentWeatherAction = {
    get: (city, unit, apiKey) => {
        return {
            type: GET_CURRENT_WEATHER_PENDING,
            city,apiKey, unit
        }
    },
    set: (data) => {
        return {
            type: GET_CURRENT_WEATHER_SUCCESS,
            payload: data
        }
    },
    failed: (error) => {
        return {
            type: GET_CURRENT_WEATHER_FAILED,
            errorMessage: error
        }
    }
}