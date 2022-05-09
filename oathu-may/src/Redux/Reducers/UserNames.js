import {
    USER_NAME_GET_LOCALSTORAGE_ERROR,
    USER_NAME_GET_LOCALSTORAGE_GET,
    USER_NAME_GET_LOCALSTORAGE_LOADING,
} from "../types";

const initialState = {
    username: [],
    loading: false,
    error: "",
};

const User_REducer_name = (state = initialState, action) => {
    switch (action.type) {
        case USER_NAME_GET_LOCALSTORAGE_GET:
            return {
                ...state,
                loading: true,
                error: "",
            };
        case USER_NAME_GET_LOCALSTORAGE_LOADING:
            return {
                ...state,
                loading: false,
                username: action.payload,
            };
        case USER_NAME_GET_LOCALSTORAGE_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error,
            };
        default:
            return state;
    }
};

export default User_REducer_name;
