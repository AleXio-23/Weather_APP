import { GET_SELECTED_CITY_FAILED, GET_SELECTED_CITY_PENDING, GET_SELECTED_CITY_SUCCESS } from "../../../Tools/Constants/ModulesConstants"



const initialState = {
    statuses: {
        isPending: false,
        isSuccessed: false,
        isFailed: false
    },
    data:  {
        id: 611717,
        name: 'Tbilisi',
        name_en: 'Tbilisi',
        name_ka: 'თბილისი',
        country: 'GE',
        coord: {
            lon: 44.833679,
            lat: 41.694111,
        },
    },
    errorMessage: ''
}


const selectedCItyReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_SELECTED_CITY_PENDING:
            return {
                ...state,
                statuses: {
                    ...state.statuses,
                    isPending: true,
                    isSuccessed: false,
                    isFailed: false
                }
            }
        case GET_SELECTED_CITY_SUCCESS:
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
        case GET_SELECTED_CITY_FAILED:
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


export default selectedCItyReducer;