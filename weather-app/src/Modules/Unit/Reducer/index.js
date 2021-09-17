import { UNIT_CELSIUS, UNIT_PENDING, UNIT_SUCCESS } from "../../../Tools/Constants/ModulesConstants"


const initialState = {
    statuses: {
        isPending: false,
        isSuccessed: false
    },
    unit: UNIT_CELSIUS
}



const metricReducer = (state = initialState, action) => {
    switch (action.type) {
        case UNIT_PENDING:
            return {
                ...state,
                statuses: {
                    ...state.statuses,
                    isPending: true,
                    isSuccessed: false
                }
            }
        case UNIT_SUCCESS:
            return {
                ...state,
                statuses: {
                    ...state.statuses,
                    isPending: false,
                    isSuccessed: true
                },
                unit: action.payload
            }
        default:
            return { ...state }
    }
}


export default metricReducer;