import {
    ERROR_USER_DATA_FAILED,
    GET_USER_DATA,
    USER_LOADING_FIRST_DATA,
} from "../types";

const initialState = {
    item: [],
    loading: false,
    error: "",
};

const USER_SPAN_DATA = (state = initialState, action) => {
    switch (action.type) {
        case USER_LOADING_FIRST_DATA:
            return {
                ...state,
                loading: true,
                error: "",
            };
        case GET_USER_DATA:
            return {
                ...state,
                loading: false,
                item: action.payload,
            };
        case ERROR_USER_DATA_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default USER_SPAN_DATA;
