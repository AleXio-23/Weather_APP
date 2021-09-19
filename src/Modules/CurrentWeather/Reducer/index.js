import { GET_CURRENT_WEATHER_FAILED, GET_CURRENT_WEATHER_PENDING, GET_CURRENT_WEATHER_SUCCESS } from "../../../Tools/Constants/ModulesConstants"


const initialState = {
    statuses: {
        isPending: false,
        isSuccessed: false,
        isFailed: false
    },
    data: {},
    errorMessage: ''
}



const currentWeatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CURRENT_WEATHER_PENDING:
            return {
                ...state,
                statuses: {
                    ...state.statuses,
                    isPending: true,
                    isSuccessed: false,
                    isFailed: false
                }
            }
        case GET_CURRENT_WEATHER_SUCCESS:
            return {
                ...state,
                statuses: {
                    ...state.statuses,
                    isPending: false,
                    isSuccessed: true,
                    isFailed: false
                },
                data: action.payload
            }

        case GET_CURRENT_WEATHER_FAILED:
            return {
                ...state,
                statuses: {
                    ...state.statuses,
                    isPending: false,
                    isSuccessed: false,
                    isFailed: true
                },
                errorMessage: action.errorMessage
            }
        default:
            return { ...state }
    }
}

export default currentWeatherReducer;