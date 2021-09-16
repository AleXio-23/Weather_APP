import { GET_CITIES_FAILED, GET_CITIES_PENDING, GET_CITIES_SUCCESS } from "../../../Tools/Constants/ModulesConstants"




const initialState = {
    statuses: {
        isPending: false,
        isSuccessed: false,
        isFailed: false
    },
    data: [],
    errorMessage: ''
}


const citiesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CITIES_PENDING:
            return {
                ...state,
                statuses: {
                    ...state.statuses,
                    isPending: true,
                    isSuccessed: false,
                    isFailed: false
                }
            }
        case GET_CITIES_SUCCESS:
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
        case GET_CITIES_FAILED:
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

export default citiesReducer;