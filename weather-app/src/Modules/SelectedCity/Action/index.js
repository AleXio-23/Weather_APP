import { GET_SELECTED_CITY_FAILED, GET_SELECTED_CITY_PENDING, GET_SELECTED_CITY_SUCCESS } from "../../../Tools/Constants/ModulesConstants"





export const getSelectedCity = {
    get: () => {
        return{
            type: GET_SELECTED_CITY_PENDING
        }
    },
    set: (param) => {
        return{
            type: GET_SELECTED_CITY_SUCCESS,
            payload: param
        }
    },
    failed: (error) => {
        return {
            type: GET_SELECTED_CITY_FAILED,
            errorMessage: error
        }
    }
}