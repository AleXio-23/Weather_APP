import { GET_GLOBAL_LANGUAGE, SET_GLOBAL_LANGUAGE } from "../../../Tools/Constants/LanguageConstants"




export const GetLanguage = {
    get: () => {
        return {
            type: GET_GLOBAL_LANGUAGE
        }
    },
    set: (param) => {
        return {
            type: SET_GLOBAL_LANGUAGE,
            payload: param
        }
    }
}