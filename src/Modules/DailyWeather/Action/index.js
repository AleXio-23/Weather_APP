import { GET_DAILY_WEATHER_FAILED, GET_DAILY_WEATHER_PENDING, GET_DAILY_WEATHER_SUCCESS } from "../../../Tools/Constants/ModulesConstants"




export const getDailyWeather = {
    get: (city, unit, apiKey) => {
        return {
            type: GET_DAILY_WEATHER_PENDING,
            city, unit, apiKey
        }
    },
    set: (data) => {
        return {
            type: GET_DAILY_WEATHER_SUCCESS,
            payload: data
        }
    },
    failed: (error) => {
        return {
            type: GET_DAILY_WEATHER_FAILED,
            errorMessage: error
        }
    }
}