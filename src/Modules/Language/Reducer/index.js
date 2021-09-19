import { LANG_ENG, LANG_GEO, SET_GLOBAL_LANGUAGE, GET_GLOBAL_LANGUAGE } from '../../../Tools/Constants/LanguageConstants';




const initialState = {
    statuses: {
        isPending: false,
        isSuccessed: false
    },
    language: LANG_ENG
}


const languageReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_GLOBAL_LANGUAGE:
            return {
                ...state,
                statuses: {
                    ...state.statuses,
                    isPending: true,
                    isSuccessed: false
                }
            }
        case SET_GLOBAL_LANGUAGE:
            return {
                ...state,
                statuses: {
                    ...state.statuses,
                    isPending: false,
                    isSuccessed: true
                },
                language: action.payload
            }

        default:
            return { ...state }
    }
}

export default languageReducer;