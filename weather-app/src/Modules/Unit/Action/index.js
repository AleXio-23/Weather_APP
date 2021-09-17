import { UNIT_PENDING, UNIT_SUCCESS } from "../../../Tools/Constants/ModulesConstants"




export const getUnit = {
    get: () => {
        return {
            type: UNIT_PENDING
        }
    },
    set: (param) => {
        return {
            type: UNIT_SUCCESS,
            payload: param
        }
    }
}