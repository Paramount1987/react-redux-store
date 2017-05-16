import {
    CHANGE_LOCALE
} from "../actions/locale";

import { localeDetect } from "../utils/apiUtils";
// add info on the current locale
const lang = localeDetect();

const initialState = {
    lang,
    messages: {
        en: require(`../../lib/i18n/lang/en.json`),
        ru: require(`../../lib/i18n/lang/ru.json`)
    }
}

export function locale(state = initialState, action) {
    switch (action.type) {
        case CHANGE_LOCALE:
            return {
                ...state,
                lang: action.lang
            }
        default:
            return state;
    }
}
